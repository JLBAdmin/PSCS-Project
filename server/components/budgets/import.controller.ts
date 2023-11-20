/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { PostgresDataSource } from '../../data-source';
import { Budgets } from '../../entity/pgsql/pg.budget';
import { HistoryCane } from '../../entity/pgsql/pg.historyCane';
import { HistoryDebt } from '../../entity/pgsql/pg.historyDebt';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';

/**
 * Users ontroller
 */
export default class ImportController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/import', this.router);
    this.router.get('/new', this.importBudget);
    this.router.get('/delete', this.deleteBudget);
    this.router.get('/error', this.getError);
  }

  public async importBudget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const debt = await PostgresDataSource.getRepository(HistoryDebt).findOneBy({
      quota: <number>(<unknown>req.body.quota)
    });

    const history = await PostgresDataSource.getRepository(
      HistoryCane
    ).findOneBy({
      quota: <number>(<unknown>req.body.quota)
    });

    const newBudget: any = {
      budget_status: '00',
      budget_prove: '00',
      cropYear: req.body.cropYear.toString(),
      // apporv_date: req.body.apporv_date,
      quota: req.body.quota,
      zone: req.body.zone.toString(),
      subZone: req.body.subZone.toString(),
      manager: req.body.manager,
      // outside: 0,
      request_num: 1,
      ton_contract: req.body.ton_contract || 0,
      add_ton_contract: req.body.add_ton_contract || 0,
      total_ton_contract: req.body.total_ton_contract || 0,
      //
      promotion1_area_contract: req.body.promotion1_area_contract || 0,
      promotion1_ton_contract: req.body.promotion1_ton_contract || 0,
      promotion1_money: req.body.promotion1_money || 0,
      promotion1_factor_inputs: req.body.promotion1_factor_inputs || 0,
      promotion1_budget_total: req.body.promotion1_budget_total || 0,
      promotion1_budget_approved: Number(0) || 0,
      promotion1_budget_use: req.body.promotion1_budget_use || 0,
      promotion1_baht_ton: req.body.promotion1_baht_ton || 0,
      //
      promotion2_area_contract: req.body.promotion2_area_contract || 0,
      promotion2_ton_contract: req.body.promotion2_ton_contract || 0,
      promotion2_money: req.body.promotion2_money || 0,
      promotion2_factor_inputs: req.body.promotion1_factor_inputs || 0,
      promotion2_budget_total: req.body.promotion2_budget_total || 0,
      promotion2_budget_approved: Number(0) || 0,
      promotion2_budget_use: req.body.promotion2_budget_use || 0,
      promotion2_baht_ton: req.body.promotion2_baht_ton || 0,
      //
      promotion3_area_contract: req.body.promotion3_area_contract || 0,
      promotion3_ton_contract: req.body.promotion3_ton_contract || 0,
      promotion3_money: req.body.promotion3_money || 0,
      promotion3_factor_inputs: req.body.promotion3_factor_inputs || 0,
      promotion3_budget_total: req.body.promotion3_budget_total || 0,
      promotion3_budget_approved: Number(0) || 0,
      promotion3_budget_use: req.body.promotion3_budget_use || 0,
      promotion3_baht_ton: req.body.promotion3_baht_ton || 0,
      //
      promotion4_area_contract: req.body.promotion4_area_contract || 0,
      promotion4_ton_contract: req.body.promotion4_ton_contract || 0,
      promotion4_money: req.body.promotion4_money || 0,
      promotion4_factor_inputs: req.body.promotion4_factor_inputs || 0,
      promotion4_budget_total: req.body.promotion4_budget_total || 0,
      promotion4_budget_approved: Number(0) || 0,
      promotion4_budget_use: req.body.promotion4_budget_use || 0,
      promotion4_baht_ton: req.body.promotion4_baht_ton || 0,
      //
      promotion5_area_contract: req.body.promotion5_area_contract || 0,
      promotion5_ton_contract: req.body.promotion5_ton_contract || 0,
      promotion5_money: req.body.promotion5_money || 0,
      promotion5_factor_inputs: req.body.promotion5_factor_inputs || 0,
      promotion5_budget_total: req.body.promotion5_budget_total || 0,
      promotion5_budget_approved: Number(0) || 0,
      promotion5_budget_use: req.body.promotion5_budget_use || 0,
      promotion5_baht_ton: req.body.promotion5_baht_ton || 0,
      //
      promotion6_area_contract: req.body.promotion6_area_contract || 0,
      promotion6_ton_contract: req.body.promotion6_ton_contract || 0,
      promotion6_money: req.body.promotion6_money || 0,
      promotion6_factor_inputs: req.body.promotion6_factor_inputs || 0,
      promotion6_budget_total: req.body.promotion6_budget_total || 0,
      promotion6_budget_approved: Number(0) || 0,
      promotion6_budget_use: req.body.promotion6_budget_use || 0,
      promotion6_baht_ton: req.body.promotion6_baht_ton || 0,
      //
      promotion7_area_contract: req.body.promotion7_area_contract || 0,
      promotion7_ton_contract: req.body.promotion7_ton_contract || 0,
      promotion7_money: req.body.promotion7_money || 0,
      promotion7_factor_inputs: req.body.promotion7_factor_inputs || 0,
      promotion7_budget_total: req.body.promotion7_budget_total || 0,
      promotion7_budget_approved: Number(0) || 0,
      promotion7_budget_use: req.body.promotion7_budget_use || 0,
      promotion7_baht_ton: req.body.promotion7_baht_ton || 0,
      // นำเข้าหนี้
      debt_date: debt?.dateDept || '',
      debt1_crop_due: debt?.debt1_crop_due || 0,
      deduct1_crop_due: debt?.deduct1_crop_due || 0,
      debt1_overdue_due: debt?.debt1_overdue_due || 0,
      project1_debt_crop_due: debt?.project1_debt_crop_due || 0,
      project1_deduct_crop_due: debt?.project1_deduct_crop_due || 0,
      project1_deduct_end_due: debt?.project1_deduct_end_due || 0,
      deduct1_total: debt?.deduct1_total || 0,
      deduct1_due_previous: debt?.deduct1_due_previous || 0,
      deduct1_due_last: debt?.deduct1_due_last || 0,
      debt2_crop_due: debt?.debt2_crop_due || 0,
      deduct2_crop_due: debt?.deduct2_crop_due || 0,
      debt2_overdue_due: debt?.debt2_overdue_due || 0,
      project2_debt_crop_due: debt?.project2_debt_crop_due || 0,
      project2_deduct_crop_due: debt?.project2_deduct_crop_due || 0,
      project2_deduct_end_due: debt?.project2_deduct_end_due || 0,
      deduct2_total: debt?.deduct2_total || 0,
      deduct2_due_previous: debt?.deduct2_due_previous || 0,
      deduct2_due_last: debt?.deduct2_due_last || 0,
      debt3_crop_due: debt?.debt3_crop_due || 0,
      deduct3_crop_due: debt?.deduct3_crop_due || 0,
      debt3_overdue_due: debt?.debt3_overdue_due || 0,
      project3_debt_crop_due: debt?.project3_debt_crop_due || 0,
      project3_deduct_crop_due: debt?.project3_deduct_crop_due || 0,
      project3_deduct_end_due: debt?.project3_deduct_end_due || 0,
      deduct3_total: debt?.deduct3_total || 0,
      deduct3_due_previous: debt?.deduct3_due_previous || 0,
      deduct3_due_last: debt?.deduct3_due_last || 0,
      debt4_crop_due: debt?.debt4_crop_due || 0,
      deduct4_crop_due: debt?.deduct4_crop_due || 0,
      debt4_overdue_due: debt?.debt4_overdue_due || 0,
      project4_debt_crop_due: debt?.project4_debt_crop_due || 0,
      project4_deduct_crop_due: debt?.project4_deduct_crop_due || 0,
      project4_deduct_end_due: debt?.project4_deduct_end_due || 0,
      deduct4_total: debt?.deduct4_total || 0,
      deduct4_due_previous: debt?.deduct4_due_previous || 0,
      deduct4_due_last: debt?.deduct4_due_last || 0,
      avg_baht_area: 0,
      history1_ton_contract: history?.history1_ton_contract || 0,
      history1_ton_real: history?.history1_ton_real || 0,
      history1_ton_per: history?.history1_ton_per || 0,
      history1_grad: history?.history1_grad || '',
      history1_money: history?.history1_money || 0,
      history1_cane_ton: history?.history1_cane_ton || 0,
      history1_canetype01: history?.history1_canetype01 || 0,
      history1_canetype02: history?.history1_canetype02 || 0,
      history1_canetype03: history?.history1_canetype03 || 0,
      history1_canetype04: history?.history1_canetype04 || 0,
      history1_canetype05: history?.history1_canetype05 || 0,
      history1_canetype06: history?.history1_canetype06 || 0,
      history2_ton_contract: history?.history2_ton_contract || 0,
      history2_ton_real: history?.history2_ton_real || 0,
      history2_ton_per: history?.history2_ton_per || 0,
      history2_grad: history?.history2_grad || '',
      history2_money: history?.history2_money || 0,
      history2_cane_ton: history?.history2_cane_ton || 0,
      history2_canetype01: history?.history2_canetype01 || 0,
      history2_canetype02: history?.history2_canetype02 || 0,
      history2_canetype03: history?.history2_canetype03 || 0,
      history2_canetype04: history?.history2_canetype04 || 0,
      history2_canetype05: history?.history2_canetype05 || 0,
      history2_canetype06: history?.history2_canetype06 || 0,
      history3_ton_contract: history?.history3_ton_contract || 0,
      history3_ton_real: history?.history3_ton_real || 0,
      history3_ton_per: history?.history3_ton_per || 0,
      history3_grad: history?.history3_grad || '',
      history3_money: history?.history3_money || 0,
      history3_cane_ton: history?.history3_cane_ton || 0,
      history3_canetype01: history?.history3_canetype01 || 0,
      history3_canetype02: history?.history3_canetype02 || 0,
      history3_canetype03: history?.history3_canetype03 || 0,
      history3_canetype04: history?.history3_canetype04 || 0,
      history3_canetype05: history?.history3_canetype05 || 0,
      history3_canetype06: history?.history3_canetype06 || 0,
      history4_ton_contract: history?.history4_ton_contract || 0,
      history4_ton_real: history?.history4_ton_real || 0,
      history4_ton_per: history?.history4_ton_per || 0,
      history4_grad: history?.history4_grad || '',
      history4_money: history?.history4_money || 0,
      history4_cane_ton: history?.history4_cane_ton || 0,
      history4_canetype01: history?.history4_canetype01 || 0,
      history4_canetype02: history?.history4_canetype02 || 0,
      history4_canetype03: history?.history4_canetype03 || 0,
      history4_canetype04: history?.history4_canetype04 || 0,
      history4_canetype05: history?.history4_canetype05 || 0,
      history4_canetype06: history?.history4_canetype06 || 0
    };

    try {
      const budget =
        PostgresDataSource.getRepository(Budgets).create(newBudget);
      // const budget = PostgresDataSource.getRepository(Budgets).create(req.body);
      await PostgresDataSource.getRepository(Budgets).save(budget);

      res.locals = res.status(201).json({ msg: 'Budget create susscess' });
      responsehandler.send(res);
      return;
    } catch (error) {
      // res.status(409).send('Mechines already in use');
      // responsehandler.send(res);
      next(error);
    }
  }

  public async deleteBudget(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      // const result = await queryRunner.manager.query('DROP TABLE budgets');
      const result = await queryRunner.manager.query(
        'TRUNCATE TABLE Budgets RESTART IDENTITY'
      );
      res.locals.data = result;
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
