import { NextFunction, Request, Response } from 'express';

import { PostgresDataSource } from '../data-source';
import { Users } from '../entity/pgsql/pg.users';

export const checkRole = (roles: Array<string>) => {
  PostgresDataSource.initialize();

  return async (_req: Request, res: Response, next: NextFunction) => {
    // Get the user ID from previous midleware
    const id = res.locals.jwtPayload.userId;

    // Get user role from the database
    // const userRepository = await PostgresDataSource.getRepository(Users).find();
    let user: any;
    try {
      user = await PostgresDataSource.getRepository(Users).findOneOrFail(id);
      // eslint-disable-next-line @typescript-eslint/no-shadow
    } catch (id) {
      res.status(401).send();
    }

    // Check if array of authorized roles includes the user's role
    if (roles.indexOf(user.role) > -1) next();
    else res.status(401).send();
  };
};
