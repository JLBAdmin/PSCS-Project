/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';

import { PostgresDataSource } from '../../data-source';
import { Profiles } from '../../entity/pgsql/pg.profile';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * profile ontroller
 */
export default class ProfileController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/profile', this.router);
    this.router.get('/get', this.getProfile);
    this.router.get('/get/:id', this.getUserId);
    this.router.put('/edit/:id', this.editUser);
    // this.router.get('/error', this.getError);
  }

  public async getProfile(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // res.locals = res.status(201).json('สวัสดีชาวโลก');
      const profile = await PostgresDataSource.getRepository(Profiles).find();
      res.locals.data = profile;
      responsehandler.send(res);
    } catch (err) {
      next(err);
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
}
