import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { encrypt } from './crypto';

function send(res: Response): void {
  let obj = {};
  obj = res.locals.data;
  if (environment.isDevEnvironment()) {
    // logger.info(JSON.stringify(obj, null, 2));
  }
  if (environment.applyEncryption) {
    obj = encrypt(JSON.stringify(obj), environment.secretKey);
  }
  res.status(StatusCodes.OK).send(obj);
}

function json(res: Response): void {
  let obj = {};
  obj = res.locals.data;
  if (environment.isDevEnvironment()) {
    // logger.info(JSON.stringify(obj, null, 2));
  }
  if (environment.applyEncryption) {
    obj = encrypt(JSON.stringify(obj), environment.secretKey);
  }
  res.status(StatusCodes.OK).json(obj);
}

export { json, send };
