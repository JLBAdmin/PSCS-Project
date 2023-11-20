/* eslint-disable consistent-return */
import 'dotenv/config';

import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';

import * as responsehandler from '../lib/response-handler';

const verifyJWT = (req: any, res: Response, next: NextFunction): any => {
  const authHeader: any =
    req.headers.authorization! || req.headers.Authorization;
  if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];
  // eslint-disable-next-line no-console
  // console.log(token);
  jwt.verify(
    token,
    process.env.SECRET_REFRESH_TOKEN!,
    (err: any, decoded: any) => {
      if (err) {
        // invalid token
        res.locals = res.sendStatus(203);
        responsehandler.send(res);
        return;
      }
      req.user = decoded.username;
      req.roles = decoded.roles;
      next();
    }
  );
};

export default verifyJWT;
