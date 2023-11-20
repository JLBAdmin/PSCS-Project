/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { PostgresDataSource } from '../../data-source';
import * as responsehandler from '../../lib/response-handler';
import verifyJWT from '../../middleware/verifyJWT';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */
export default class BudgetsController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/admin', this.router);
    this.router.get('/budget', this.getBudget);
    this.router.put('/update/:id', verifyJWT, this.updateBudget);
    this.router.get('/error', this.getError);
  }

  public async getBudget(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = PostgresDataSource.createQueryRunner();
    await queryRunner.connect();
    const crops = await queryRunner.manager.query(
      'SELECT * FROM crop_years WHERE cropStatus = 1'
    );
    const CropYears = crops[0].cropYear;
    const result = await queryRunner.manager.query(
      'SELECT * FROM budgets WHERE cropYear =@0 AND deletedAt IS NULL',
      [CropYears]
    );
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async updateBudget(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    const result = await queryRunner.manager.query(
      'SELECT * FROM budgets WHERE deletedAt IS NULL'
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
