/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { MssqlDataSource } from '../../data-source';
// eslint-disable-next-line import/no-unresolved
import { Quotas } from '../../entity/mssql/mssql.Quotas';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';

/**
 * Users ontroller
 */
export default class QuotaController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/quota', this.router);
    this.router.get('/get', this.getQuota);
    this.router.get('/get/:id', this.getQuotas);
    this.router.get('/error', this.getError);
  }

  public async getQuotas(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const codes: any = req.params.id;
    const quota = await MssqlDataSource.getRepository(Quotas).findOneBy({
      Code: parseInt(codes, 10)
    });
    try {
      res.locals.data = quota;
      responsehandler.send(res);
      return;
    } catch (err) {
      next(err);
    }
  }

  public async getQuota(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = MssqlDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    const result = await queryRunner.manager.query(
      'SELECT Code AS id, FirstNameTH, LastNameTH FROM Quotas WHERE SurveyUserCode <> 0 AND IDFarm > 1111'
    );
    // await console.log(result);
    try {
      res.locals.data = result;
      responsehandler.send(res);
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
