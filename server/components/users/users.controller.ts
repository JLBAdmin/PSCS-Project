/* eslint-disable class-methods-use-this */

import * as argon2 from 'argon2';
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import * as jwt from 'jsonwebtoken';

import ApiError from '../../abstractions/ApiError';
import { PostgresDataSource } from '../../data-source';
import { Users } from '../../entity/pgsql/pg.users';
import * as responsehandler from '../../lib/response-handler';
import { clearToken, sendToken } from '../../middleware/tokenHandler';
import verifyJWT from '../../middleware/verifyJWT';
import BaseApi from '../BaseApi';

// eslint-disable-next-line import/no-unresolved
/**
 * Users ontroller
 */
export default class UserController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
    // establish database connection
    PostgresDataSource.initialize()
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Data Source PGSQL has been initialized!');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Error during Data Source initialization:', err);
      });
  }

  public register(express: Application): void {
    express.use('/api/users', this.router);
    // this.router.get('/get', this.getUser);
    this.router.get('/get', verifyJWT, this.getUser);
    this.router.post('/newuser', this.handleNewUser);
    this.router.post('/login', this.handleLogin);
    this.router.get('/refresh', this.handleRefreshToken);
    this.router.get('/logout', this.handleLogout);
    this.router.get('/error', this.getError);
  }

  public async getUser(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryUser = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryUser.connect;
    try {
      const result = await queryUser.manager.query('SELECT * FROM users');
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      responsehandler.send(res);
      next(err);
    }
  }

  public async handleNewUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    // Get parameters from the body
    const { user, pwd, email, roles } = req.body;
    if (!user || !pwd) {
      res.locals = res
        .status(400)
        .json({ message: 'Username and password are required.' });
      responsehandler.send(res);
      return;
    }

    // Hash the password, to securely store on DB
    const hashedPwd = await argon2.hash(pwd);
    // store the new user
    const newUser = {
      username: user,
      password: hashedPwd,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      roles
    };

    try {
      const foundUser = await PostgresDataSource.getRepository(Users).findOne({
        where: [{ username: user }, { email }]
      });
      if (foundUser) {
        res.locals = res
          .status(409)
          .json({ message: 'Duplicated username or email' });
        responsehandler.send(res);
      } else {
        PostgresDataSource.getRepository(Users).create(newUser);
        await PostgresDataSource.getRepository(Users).save(newUser);
        // If all ok, send 201 response
        res.locals = res
          .status(201)
          .json({ success: `New user ${user} created!` });
        responsehandler.send(res);
        return;
      }
    } catch (err: any) {
      res.status(500).json({ message: err.message });
      responsehandler.send(res);
      next();
    }
  }

  public async handleLogin(req: Request, res: Response): Promise<void> {
    const { user, pwd } = req.body;
    if (!(user || pwd)) {
      res.status(400).json({ message: 'Username and password are required.' });
      responsehandler.send(res);
      return;
    }

    // Get user from database
    try {
      const foundUser = await PostgresDataSource.getRepository(
        Users
      ).findOneOrFail({
        where: { username: user }
      });

      // Check if encrypted password match
      const match = await argon2.verify(foundUser.password, pwd);
      if (!match) {
        res.locals = res
          .status(401)
          .json({ message: 'Passwords do not match' });
        responsehandler.send(res);
        return;
      }

      // Create token
      const { roles } = foundUser;
      const payload = {
        username: foundUser.username,
        roles,
        tokenVersion: foundUser.tokenVersion
      };

      const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN!, {
        expiresIn: '30s'
      });

      const refreshToken = jwt.sign(
        payload,
        process.env.SECRET_REFRESH_TOKEN!,
        {
          expiresIn: '1d'
        }
      );

      //  // Saving refreshToken with current user
      await PostgresDataSource.getRepository(Users).update(
        {
          username: foundUser.username
        },
        {
          resetPasswordToken: refreshToken,
          tokenVersion: foundUser.tokenVersion + 1
        }
      );

      sendToken(res, refreshToken);

      res.locals = res.status(200).json({ status: 'ok', roles, accessToken });
      responsehandler.send(res);
      // return;
    } catch (error) {
      res.locals = res.status(400).json({ message: 'The user was not found.' });
      responsehandler.send(res);
    }
  }

  // eslint-disable-next-line consistent-return
  public async handleRefreshToken(req: Request, res: Response): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // eslint-disable-next-line prefer-destructuring
    const cookies = req.cookies;
    if (!cookies.jwt) {
      res.locals = res.sendStatus(401);
      responsehandler.send(res);
      return;
    }
    const refreshToken = cookies.jwt;

    const foundUser = await PostgresDataSource.getRepository(Users).findOneBy({
      resetPasswordToken: refreshToken
    });
    if (!foundUser) {
      res.locals = res.sendStatus(403);
      responsehandler.send(res);
      return;
    }
    // evaluate jwt
    jwt.verify(
      refreshToken,
      process.env.SECRET_REFRESH_TOKEN!,
      // eslint-disable-next-line consistent-return
      (err: any, decoded: any): any => {
        if (err) {
          return res.sendStatus(403);
        }

        const { roles } = foundUser;
        const payload = {
          username: decoded.username,
          roles
        };

        const accessToken = jwt.sign(
          payload,
          process.env.SECRET_ACCESS_TOKEN!,
          {
            expiresIn: '10s'
          }
        );
        res.locals = res.json({ roles, accessToken });
        responsehandler.send(res);
      }
    );
  }

  public async handleLogout(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    // eslint-disable-next-line prefer-destructuring
    const cookies = req.cookies;
    if (!cookies.jwt) {
      res.locals = res.sendStatus(401);
      responsehandler.send(res);
      return;
    }
    const refreshToken = cookies.jwt;
    const foundUser = await PostgresDataSource.getRepository(Users).findOneBy({
      resetPasswordToken: refreshToken
    });

    if (!foundUser) {
      clearToken(res);
      res.locals = res.sendStatus(204);
      responsehandler.send(res);
      return;
    }
    try {
      // Saving refreshToken with current user
      await PostgresDataSource.getRepository(Users).update(
        {
          resetPasswordToken: refreshToken
        },
        {
          resetPasswordToken: ''
        }
      );

      clearToken(res);
      res.locals = res.sendStatus(204);
      responsehandler.send(res);
      return;
    } catch (err: any) {
      res.status(500).json({ message: err.message });
      responsehandler.send(res);
      next();
    }
  }

  public async changePassword(req: Request, res: Response): Promise<void> {
    // Get ID from JWT
    const id = res.locals.jwtPayload.userId;

    // Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
      res.locals = res
        .status(400)
        .json({ message: "The two passwords don't match." });
      responsehandler.send(res);
    }

    try {
      const user = await PostgresDataSource.getRepository(Users).findOneOrFail(
        id
      );
      // Check if encrypted password match
      const match = await argon2.verify(user.password, oldPassword);
      if (!match) {
        res.locals = res
          .status(401)
          .json({ message: 'Passwords do not match' });
        responsehandler.send(res);
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-shadow
    } catch (id) {
      res.status(401).send();
    }
  }

  public getUserId(_req: Request, res: Response, next: NextFunction): void {
    try {
      res.locals = res.status(201).json('สวัสดีชาวโลก');
      // res.locals.data = 'สวัสดีชาวโลก';
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public editUser(req: Request, res: Response, next: NextFunction): void {
    try {
      res.locals.data = req.params.id;
      responsehandler.send(res);
      // eslint-disable-next-line no-console
      console.log(req.body);
    } catch (err) {
      next(err);
    }
  }

  public deleteUser(req: Request, res: Response, next: NextFunction): void {
    try {
      res.locals.data = req.params.id;
      responsehandler.send(res);
      // eslint-disable-next-line no-console
      console.log(req.body);
    } catch (err) {
      next(err);
    }
  }

  public getError(_req: Request, _res: Response, next: NextFunction): void {
    try {
      throw new ApiError(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST);
    } catch (error) {
      next(error);
    }
  }
}
