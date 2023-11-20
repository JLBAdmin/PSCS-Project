/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { MssqlDataSource, PostgresDataSource } from '../../data-source';
import { BudgetSeasons } from '../../entity/mssql/mssql.BudgetSeasons';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */
export default class McssController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/mcss', this.router);
    this.router.get('/budgets', this.getBudget);
    this.router.put('/update/:id', this.updateBudget);
    this.router.get('/delete/:id', this.deleteBudget);
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
    const CropYears = crops[0].cropYear.substring(2, 4);

    const queryRunner1 = MssqlDataSource.createQueryRunner();
    await queryRunner1.connect();
    const result = await queryRunner1.manager.query(
      'SELECT * FROM BudgetSeasons WHERE SeasonYear =@0',
      [CropYears]
    );
    try {
      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      await queryRunner.release();
      next(err);
    }
  }

  public async updateBudget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;

    try {
      const budget: any | null = await MssqlDataSource.getRepository(
        BudgetSeasons
      ).findOneBy({
        Id: <number>(<unknown>id)
      });

      MssqlDataSource.getRepository(BudgetSeasons).merge(budget, req.body);

      await MssqlDataSource.getRepository(BudgetSeasons).save(budget);
      res.locals = res.status(200).json({ updatedAt: new Date() });
      responsehandler.send(res);
    } catch (err: any) {
      next(err);
    }
  }

  public async deleteBudget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;

    try {
      const result = await MssqlDataSource.getRepository(BudgetSeasons).delete({
        Id: <number>(<unknown>id)
      });
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err: any) {
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
