/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { PostgresDataSource } from '../../data-source';
import { HistoryDebt } from '../../entity/pgsql/pg.historyDebt';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
import { dayTH } from '../crop-date';
// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */

export default class DeptController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/debt', this.router);
    this.router.get('/get', this.getDebt);
    this.router.get('/get/:id', this.getByQuota);
    // this.router.get('/sum/:id', this.getSum);
    this.router.post('/new', this.newDebt);
    this.router.put('/update/:id', this.updateDebt);
    this.router.delete('/delete', this.deleteAll);
    // this.router.get('/print/:id', this.printBudget);
    this.router.get('/error', this.getError);
  }

  public async getDebt(
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const result = await PostgresDataSource.getRepository(HistoryDebt).find({
      order: {
        updatedAt: 'DESC',
        quota: 'ASC'
      }
    });
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getByQuota(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const result = await PostgresDataSource.getRepository(HistoryDebt).findBy({
      quota: <number>(<unknown>id)
    });
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async newDebt(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const newDebt = {
      quota: req.body.quota,
      cropYear: req.body.cropYear,
      dateDept: req.body.dateDept || dayTH,
      debt1_crop_due: req.body.debt1_crop_due,
      deduct1_crop_due: req.body.deduct1_crop_due,
      debt1_overdue_due: req.body.debt1_overdue_due,
      project1_debt_crop_due: req.body.project1_debt_crop_due,
      project1_deduct_crop_due: req.body.project1_deduct_crop_due,
      project1_deduct_end_due: req.body.project1_deduct_end_due,
      deduct1_total: req.body.deduct1_total,
      deduct1_due_previous: req.body.deduct1_due_previous,
      deduct1_due_last: req.body.deduct1_due_last,
      debt2_crop_due: req.body.debt2_crop_due,
      deduct2_crop_due: req.body.deduct2_crop_due,
      debt2_overdue_due: req.body.debt2_overdue_due,
      project2_debt_crop_due: req.body.project2_debt_crop_due,
      project2_deduct_crop_due: req.body.project2_deduct_crop_due,
      project2_deduct_end_due: req.body.project2_deduct_end_due,
      deduct2_total: req.body.deduct2_total,
      deduct2_due_previous: req.body.deduct2_due_previous,
      deduct2_due_last: req.body.deduct2_due_last,
      debt3_crop_due: req.body.debt3_crop_due,
      deduct3_crop_due: req.body.deduct3_crop_due,
      debt3_overdue_due: req.body.debt3_overdue_due,
      project3_debt_crop_due: req.body.project3_debt_crop_due,
      project3_deduct_crop_due: req.body.project3_deduct_crop_due,
      project3_deduct_end_due: req.body.project3_deduct_end_due,
      deduct3_total: req.body.deduct3_total,
      deduct3_due_previous: req.body.deduct3_due_previous,
      deduct3_due_last: req.body.deduct3_due_last,
      debt4_crop_due: req.body.debt4_crop_due,
      deduct4_crop_due: req.body.deduct4_crop_due,
      debt4_overdue_due: req.body.debt4_overdue_due,
      project4_debt_crop_due: req.body.project4_debt_crop_due,
      project4_deduct_crop_due: req.body.project4_deduct_crop_due,
      project4_deduct_end_due: req.body.project4_deduct_end_due,
      deduct4_total: req.body.deduct4_total,
      deduct4_due_previous: req.body.deduct4_due_previous,
      deduct4_due_last: req.body.deduct4_due_last
    };

    try {
      const debt =
        PostgresDataSource.getRepository(HistoryDebt).create(newDebt);
      // const budget = PostgresDataSource.getRepository(Budgets).create(req.body);
      await PostgresDataSource.getRepository(HistoryDebt).save(debt);
      res.locals = res.status(201).json({ msg: 'HistoryDebt create susscess' });
      responsehandler.send(res);
    } catch (error) {
      next(error);
    }
  }

  public async updateDebt(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const budget: any = await PostgresDataSource.getRepository(
      HistoryDebt
    ).findOneBy({
      id: <number>(<unknown>id)
    });
    try {
      PostgresDataSource.getRepository(HistoryDebt).merge(budget, req.body);
      await PostgresDataSource.getRepository(HistoryDebt).save(budget);
      res.locals = res.status(200).json({ updatedAt: new Date() });
      responsehandler.send(res);
    } catch (err: any) {
      next(err);
    }
  }

  public async deleteAll(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    // const codes = parseInt(id, 10);
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;

      const crop = await queryRunner.manager.query(
        'SELECT TOP (1) cropYear, cropCurrent FROM crop_years ORDER BY id DESC'
      );
      await queryRunner.manager.query(
        'DELETE FROM history_debt WHERE cropYear=@0',
        [crop[0].cropYear]
      );
      // await queryRunner.manager.query(
      //   `DBCC CHECKIDENT ('history_debt', RESEED, 0)`
      // );
      res.locals = res.json({ msg: 'delete Debt' });
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err: any) {
      next(err);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  public getError(_req: Request, _res: Response, next: NextFunction): void {
    try {
      throw new ApiError(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST);
    } catch (error) {
      next(error);
    }
  }
}
