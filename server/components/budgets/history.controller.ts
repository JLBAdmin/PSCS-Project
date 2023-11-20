/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { PostgresDataSource } from '../../data-source';
import { HistoryCane } from '../../entity/pgsql/pg.historyCane';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */

export default class HistoryController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/history', this.router);
    this.router.get('/get', this.getHistory);
    this.router.get('/get/:id', this.getByQuota);
    // this.router.get('/sum/:id', this.getSum);
    this.router.post('/new', this.newHistory);
    this.router.put('/update/:id', this.updateHistory);
    this.router.delete('/delete', this.deleteAll);
    // this.router.get('/print/:id', this.printBudget);
    this.router.get('/error', this.getError);
  }

  public async getHistory(
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const result = await PostgresDataSource.getRepository(HistoryCane).find({
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
    const result = await PostgresDataSource.getRepository(HistoryCane).findBy({
      quota: <number>(<unknown>id)
    });
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async newHistory(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const newHistory = {
      quota: req.body.quota,
      cropYear: req.body.cropYear,
      budget_grade: req.body.budget_grade,
      history1_ton_contract: req.body.history1_ton_contract,
      history1_ton_real: req.body.history1_ton_real,
      history1_ton_per: req.body.history1_ton_per,
      history1_grad: req.body.history1_grad,
      history1_money: req.body.history1_money,
      history1_cane_ton: req.body.history1_cane_ton,
      history1_canetype01: req.body.history1_canetype01,
      history1_canetype02: req.body.history1_canetype02,
      history1_canetype03: req.body.history1_canetype03,
      history1_canetype04: req.body.history1_canetype04,
      history1_canetype05: req.body.history1_canetype05,
      history1_canetype06: req.body.history1_canetype06,
      history2_ton_contract: req.body.history2_ton_contract,
      history2_ton_real: req.body.history2_ton_real,
      history2_ton_per: req.body.history2_ton_per,
      history2_grad: req.body.history2_grad,
      history2_money: req.body.history2_money,
      history2_cane_ton: req.body.history2_cane_ton,
      history2_canetype01: req.body.history2_canetype01,
      history2_canetype02: req.body.history2_canetype02,
      history2_canetype03: req.body.history2_canetype03,
      history2_canetype04: req.body.history2_canetype04,
      history2_canetype05: req.body.history2_canetype05,
      history2_canetype06: req.body.history2_canetype06,
      history3_ton_contract: req.body.history3_ton_contract,
      history3_ton_real: req.body.history3_ton_real,
      history3_ton_per: req.body.history3_ton_per,
      history3_grad: req.body.history3_grad,
      history3_money: req.body.history3_money,
      history3_cane_ton: req.body.history3_cane_ton,
      history3_canetype01: req.body.history3_canetype01,
      history3_canetype02: req.body.history3_canetype02,
      history3_canetype03: req.body.history3_canetype03,
      history3_canetype04: req.body.history3_canetype04,
      history3_canetype05: req.body.history3_canetype05,
      history3_canetype06: req.body.history3_canetype06,
      history4_ton_contract: req.body.history4_ton_contract,
      history4_ton_real: req.body.history4_ton_real,
      history4_ton_per: req.body.history4_ton_per,
      history4_grad: req.body.history4_grad,
      history4_money: req.body.history4_money,
      history4_cane_ton: req.body.history4_cane_ton,
      history4_canetype01: req.body.history4_canetype01,
      history4_canetype02: req.body.history4_canetype02,
      history4_canetype03: req.body.history4_canetype03,
      history4_canetype04: req.body.history4_canetype04,
      history4_canetype05: req.body.history4_canetype05,
      history4_canetype06: req.body.history4_canetype06
    };
    try {
      const history = await PostgresDataSource.getRepository(
        HistoryCane
      ).create(newHistory);
      // const budget = PostgresDataSource.getRepository(Budgets).create(req.body);
      await PostgresDataSource.getRepository(HistoryCane).save(history);

      // await PostgresDataSource.createQueryBuilder()
      //   .insert()
      //   .into(HistoryCane)
      //   .values([newHistory])
      //   .execute();
      res.locals = res.status(201).json({ msg: 'HistoryCane create susscess' });
      responsehandler.send(res);
    } catch (error) {
      next(error);
    }
  }

  public async updateHistory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const budget: any = await PostgresDataSource.getRepository(
      HistoryCane
    ).findOneBy({
      id: <number>(<unknown>id)
    });
    try {
      PostgresDataSource.getRepository(HistoryCane).merge(budget, req.body);
      await PostgresDataSource.getRepository(HistoryCane).save(budget);
      res.locals = res.status(200).json({ updatedAt: new Date() });
      responsehandler.send(res);
      return;
    } catch (err: any) {
      next(err);
    }
  }

  public async deleteAll(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      const crop = await queryRunner.manager.query(
        'SELECT TOP (1) cropYear, cropCurrent FROM crop_years ORDER BY id DESC'
      );
      await queryRunner.manager.query(
        'DELETE FROM history_cane WHERE cropYear=@0',
        [crop[0].cropYear]
      );
      // await queryRunner.manager.query(
      //   `DBCC CHECKIDENT ('history_cane', RESEED, 0)`
      // );
      res.locals = res.json({ msg: 'delete history' });
      responsehandler.send(res);
      return;
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
