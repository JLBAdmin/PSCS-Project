/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { MssqlDataSource, PostgresDataSource } from '../../data-source';
import { Quotas } from '../../entity/mssql/mssql.Quotas';
import { Budgets } from '../../entity/pgsql/pg.budget';
import { Securities } from '../../entity/pgsql/pg.securities';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */
export default class RequestController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/budgetReq', this.router);
    this.router.get('/get', this.getBudget);
    this.router.get('/get/:id', this.getBudgetQuota);
    this.router.post('/new', this.newBudget);
    this.router.put('/update/:id', this.updateBudget);
    this.router.get('/delete/:id', this.deleteBudget); // soft delete
    this.router.get('/restore/:id', this.restoreBudget); // soft delete
    this.router.get('/print/:id/:reqs', this.printBudget);
    this.router.get('/error', this.getError);
  }

  public async getBudget(
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const result = await PostgresDataSource.getRepository(Budgets).find({
      where: [{ budget_status: '00' }],
      order: {
        updatedAt: 'DESC'
      }
    });
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getBudgetQuota(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const result = await PostgresDataSource.getRepository(Budgets).findBy({
      quota: <number>(<unknown>id)
    });
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async newBudget(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    try {
      const budget = PostgresDataSource.getRepository(Budgets).create(req.body);
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

  public async updateBudget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const budget: any = await PostgresDataSource.getRepository(
      Budgets
    ).findOneBy({
      id: <number>(<unknown>id)
    });
    try {
      PostgresDataSource.getRepository(Budgets).merge(budget, req.body);
      const results = await PostgresDataSource.getRepository(Budgets).save(
        budget
      );
      res.locals.data = results;
      responsehandler.send(res);
      return;
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
      const result = await PostgresDataSource.getRepository(Budgets).softDelete(
        {
          id: <number>(<unknown>id)
        }
      );

      res.locals.data = result;
      responsehandler.send(res);
      return;
    } catch (err: any) {
      next(err);
    }
  }

  public async restoreBudget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    try {
      const result = await PostgresDataSource.getRepository(Budgets).restore({
        id: <number>(<unknown>id)
      });

      res.locals.data = result;
      responsehandler.send(res);
      return;
    } catch (err: any) {
      next(err);
    }
  }

  public async printBudget(
    req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<void> {
    const { id, reqs } = req.params;
    const quota = await MssqlDataSource.getRepository(Quotas).findOneBy({
      Code: <number>(<unknown>id)
    });
    const budget = await PostgresDataSource.getRepository(Budgets).findOneBy({
      quota: <number>(<unknown>id),
      budget_status: '00'
    });

    const useSums = await PostgresDataSource.getRepository(Budgets)
      .createQueryBuilder('Budgets')
      .select('SUM(Budgets.promotion1_budget_use)', 'sum1')
      .addSelect('SUM(Budgets.promotion2_budget_use)', 'sum2')
      .where('Budgets.quota = :id', { id: <number>(<unknown>id) })
      .andWhere('Budgets.budget_status = :status', { stauts: '01' })
      // .groupBy("user.id")
      // .getRawMany();
      .getRawOne();

    const reqBudget = await PostgresDataSource.getRepository(Budgets)
      .createQueryBuilder('Budgets')
      .select('Budgets')
      .where('Budgets.quota = :id', { id: <number>(<unknown>id) })
      .andWhere('Budgets.request_num = :reqs', {
        reqs: <number>(<unknown>reqs)
      })
      .andWhere('Budgets.budget_status = :false', { false: false })
      .orderBy('Budgets.createdAt', 'DESC')
      .getOne();

    const securitieSum = await PostgresDataSource.getRepository(Securities)
      .createQueryBuilder('Securities')
      .select('SUM(Securities.appraisalPrice)', 'sum')
      .where('Securities.quota = :id', { id: <number>(<unknown>id) })
      .getRawOne();

    const securities = await PostgresDataSource.getRepository(
      Securities
    ).findBy({
      quota: <number>(<unknown>id)
    });

    if (!budget || !quota || !securities || !reqBudget) {
      res.locals = res.json({ messegs: 'No budget stated' });
      responsehandler.send(res);
    }

    const date = new Date();
    const dayTH = date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    let title;
    if (quota) {
      if (quota?.TitleId === 1) {
        title = 'นาย';
      } else if (quota?.TitleId === 2) {
        title = 'นาง';
      } else if (quota?.TitleId === 3) {
        title = 'นางสาว';
      } else {
        title = '';
      }
      res.render('print', {
        crop: budget?.cropYear,
        subzone: budget?.subZone,
        quota: quota?.Code,
        idcard: quota?.IDCard,
        todate: dayTH,
        securitie: securitieSum.sum,
        fullName: `${title}${quota?.FirstNameTH} ${quota?.LastNameTH}`,
        requestNum: Number(reqBudget?.request_num || 0),
        tonContract: Number(reqBudget?.ton_contract || 0),
        addTonContract: Number(reqBudget?.add_ton_contract || 0),
        totalTon:
          Number(reqBudget!.ton_contract || 0) +
          Number(reqBudget!.add_ton_contract || 0),

        promotion1_area_contract: Number(
          reqBudget?.promotion1_area_contract || 0
        ),
        promotion1_ton_contract: Number(
          reqBudget?.promotion1_ton_contract || 0
        ),
        promotion1_money: Number(reqBudget?.promotion1_money || 0),
        promotion1_factor_inputs:
          Number(reqBudget?.promotion1_factor_inputs) || 0,
        promotion1_budget_total:
          Number(reqBudget?.promotion1_budget_total) || 0,
        promotion1_budget_approved:
          Number(budget?.promotion1_budget_approved) + Number(useSums.sum1),
        //   Number(reqBudget?.promotion1_budget_approved) + Number(useSums.sum1),
        promotion1_budget_use: Number(reqBudget?.promotion1_budget_use) || 0,

        promotion1_budget_totle:
          Number(reqBudget!.promotion1_budget_use || 0) +
          Number(budget!.promotion1_budget_approved || 1),

        promotion1_baht_ton:
          Number(reqBudget!.promotion1_ton_contract) /
          Number(reqBudget!.promotion1_budget_use),

        promotion2_area_contract: Number(
          reqBudget?.promotion2_area_contract || 0
        ),
        promotion2_ton_contract: Number(
          reqBudget?.promotion2_ton_contract || 0
        ),
        promotion2_money: Number(reqBudget?.promotion2_money),
        promotion2_factor_inputs: Number(reqBudget?.promotion2_factor_inputs),
        promotion2_budget_total: Number(reqBudget?.promotion2_budget_total),
        promotion2_budget_approved:
          Number(budget?.promotion2_budget_approved) + Number(useSums.sum2),
        promotion2_budget_use: Number(reqBudget?.promotion2_budget_use) || 0,

        promotion2_budget_totle:
          Number(reqBudget!.promotion2_budget_use || 0) +
          Number(budget!.promotion2_budget_approved || 0),
        promotion2_baht_ton:
          Number(reqBudget!.promotion2_ton_contract || 0) /
          (Number(reqBudget!.promotion2_budget_use || 0) +
            Number(reqBudget!.promotion2_budget_approved || 0)),

        promotion3_area_contract: Number(
          reqBudget?.promotion3_area_contract || 0
        ),
        promotion3_ton_contract: Number(
          reqBudget?.promotion3_ton_contract || 0
        ),
        promotion3_money: Number(reqBudget?.promotion3_money || 0),
        promotion3_factor_inputs: Number(
          reqBudget?.promotion3_factor_inputs || 0
        ),
        promotion3_budget_total: Number(
          reqBudget?.promotion3_budget_total || 0
        ),
        promotion3_budget_approved: Number(
          budget?.promotion3_budget_approved || 0
        ),
        promotion3_budget_use: Number(reqBudget?.promotion3_budget_use || 0),
        promotion3_budget_totle:
          Number(reqBudget!.promotion3_budget_use || 0) +
          Number(reqBudget!.promotion3_budget_approved || 0),
        promotion3_baht_ton:
          Number(reqBudget!.promotion3_ton_contract || 0) /
          (Number(reqBudget!.promotion3_budget_use || 0) +
            Number(reqBudget!.promotion3_budget_approved || 0)),

        promotion4_area_contract: Number(
          reqBudget?.promotion4_area_contract || 0
        ),
        promotion4_ton_contract: Number(
          reqBudget?.promotion4_ton_contract || 0
        ),
        promotion4_money: Number(reqBudget?.promotion4_money || 0),
        promotion4_factor_inputs: Number(
          reqBudget?.promotion4_factor_inputs || 0
        ),
        promotion4_budget_total: Number(
          reqBudget?.promotion4_budget_total || 0
        ),
        promotion4_budget_approved: Number(
          budget?.promotion4_budget_approved || 0
        ),
        promotion4_budget_use: Number(reqBudget?.promotion4_budget_use || 0),

        promotion4_budget_totle:
          Number(reqBudget!.promotion4_budget_use) +
          Number(reqBudget!.promotion4_budget_approved),
        promotion4_baht_ton:
          Number(reqBudget!.promotion4_ton_contract) /
          (Number(reqBudget!.promotion4_budget_use) +
            Number(reqBudget!.promotion4_budget_approved)),

        promotion5_area_contract: reqBudget?.promotion5_area_contract,
        promotion5_ton_contract: reqBudget?.promotion5_ton_contract,
        promotion5_money: Number(reqBudget?.promotion5_money),
        promotion5_factor_inputs: Number(reqBudget?.promotion5_factor_inputs),
        promotion5_budget_total: Number(reqBudget?.promotion5_budget_total),
        promotion5_budget_approved: Number(budget?.promotion5_budget_approved),
        promotion5_budget_use: Number(reqBudget?.promotion5_budget_use),
        promotion5_budget_totle:
          Number(reqBudget!.promotion5_budget_use) +
          Number(reqBudget!.promotion5_budget_approved),
        promotion5_baht_ton:
          Number(reqBudget!.promotion5_ton_contract) /
          (Number(reqBudget!.promotion5_budget_use) +
            Number(reqBudget!.promotion5_budget_approved)),

        promotion6_area_contract: reqBudget?.promotion6_area_contract,
        promotion6_ton_contract: reqBudget?.promotion6_ton_contract,
        promotion6_money: Number(reqBudget?.promotion6_money),
        promotion6_factor_inputs: Number(reqBudget?.promotion6_factor_inputs),
        promotion6_budget_total: Number(reqBudget?.promotion6_budget_total),
        promotion6_budget_approved: Number(budget?.promotion6_budget_approved),
        promotion6_budget_use: Number(reqBudget?.promotion6_budget_use),
        promotion6_budget_totle:
          Number(reqBudget!.promotion6_budget_use) +
          Number(reqBudget!.promotion6_budget_approved),
        promotion6_baht_ton:
          Number(reqBudget!.promotion6_ton_contract) /
          (Number(reqBudget!.promotion6_budget_use) +
            Number(reqBudget!.promotion6_budget_approved)),

        promotion7_area_contract: reqBudget?.promotion7_area_contract,
        promotion7_ton_contract: reqBudget?.promotion7_ton_contract,
        promotion7_money: Number(reqBudget?.promotion7_money),
        promotion7_factor_inputs: Number(reqBudget?.promotion7_factor_inputs),
        promotion7_budget_total: Number(reqBudget?.promotion7_budget_total),
        promotion7_budget_approved: Number(budget?.promotion7_budget_approved),
        promotion7_budget_use: Number(reqBudget?.promotion7_budget_use),
        promotion7_budget_totle:
          Number(reqBudget!.promotion7_budget_use) +
          Number(reqBudget!.promotion7_budget_approved),
        promotion7_baht_ton:
          Number(reqBudget!.promotion7_ton_contract) /
          (Number(reqBudget!.promotion7_budget_use) +
            Number(reqBudget!.promotion7_budget_approved)),

        addNo: quota?.RegAddressNo ? `เลขที่ ${quota?.RegAddressNo}` : '',
        village: quota?.RegVillage ? `หมู่บ้าน ${quota?.RegVillage}` : '',
        moo: quota?.RegMoo ? `หมู่ที่ ${quota?.RegMoo}` : '',
        tambon: quota?.RegTambonName ? `ตำบล ${quota?.RegTambonName}` : '',
        amphur: quota?.RegAmphurName ? `อำเภอ ${quota?.RegAmphurName}` : '',
        province: quota?.RegProvinceName
          ? `จังหวัด ${quota?.RegProvinceName}`
          : '',
        zipcode: quota?.RegAddressZipcode
          ? `รหัสไปรษณีย์ ${quota?.RegAddressZipcode}`
          : '',
        debt1_crop_due: Number(budget?.debt1_crop_due),
        deduct1_crop_due: Number(budget?.deduct1_crop_due),
        debt1_overdue_due: Number(budget?.debt1_overdue_due),
        project1_debt_crop_due: Number(budget?.project1_debt_crop_due),
        project1_deduct_crop_due: Number(budget?.project1_deduct_crop_due),
        project1_deduct_end_due: Number(budget?.project1_deduct_end_due),
        deduct1_total: Number(budget?.deduct1_total),
        deduct1_due_previous: Number(budget?.deduct1_due_previous),
        deduct1_due_last: Number(budget?.deduct1_due_last),
        debt2_crop_due: Number(budget?.debt2_crop_due),
        deduct2_crop_due: Number(budget?.deduct2_crop_due),
        debt2_overdue_due: Number(budget?.debt2_overdue_due),
        project2_debt_crop_due: Number(budget?.project2_debt_crop_due),
        project2_deduct_crop_due: Number(budget?.project2_deduct_crop_due),
        project2_deduct_end_due: Number(budget?.project2_deduct_end_due),
        deduct2_total: Number(budget?.deduct2_total),
        deduct2_due_previous: Number(budget?.deduct2_due_previous),
        deduct2_due_last: Number(budget?.deduct2_due_last),
        debt3_crop_due: Number(budget?.debt3_crop_due),
        deduct3_crop_due: Number(budget?.deduct3_crop_due),
        debt3_overdue_due: Number(budget?.debt3_overdue_due),
        project3_debt_crop_due: Number(budget?.project3_debt_crop_due),
        project3_deduct_crop_due: Number(budget?.project3_deduct_crop_due),
        project3_deduct_end_due: Number(budget?.project3_deduct_end_due),
        deduct3_total: Number(budget?.deduct3_total),
        deduct3_due_previous: Number(budget?.deduct3_due_previous),
        deduct3_due_last: Number(budget?.deduct3_due_last),
        debt4_crop_due: Number(budget?.debt4_crop_due),
        deduct4_crop_due: Number(budget?.deduct4_crop_due),
        debt4_overdue_due: Number(budget?.debt4_overdue_due),
        project4_debt_crop_due: Number(budget?.project4_debt_crop_due),
        project4_deduct_crop_due: Number(budget?.project4_deduct_crop_due),
        project4_deduct_end_due: Number(budget?.project4_deduct_end_due),
        deduct4_total: Number(budget?.deduct4_total),
        deduct4_due_previous: Number(budget?.deduct4_due_previous),
        deduct4_due_last: Number(budget?.deduct4_due_last),
        avg_baht_area: Number(budget?.avg_baht_area),
        history1_ton_contract: Number(budget?.history1_ton_contract),
        history1_ton_real: Number(budget?.history1_ton_real),
        history1_ton_per: Number(budget?.history1_ton_per),
        history1_grad: budget?.history1_grad,
        history1_money: Number(budget?.history1_money),
        history1_cane_ton: Number(budget?.history1_cane_ton),
        history1_canetype01: Number(budget?.history1_canetype01),
        history1_canetype02: Number(budget?.history1_canetype02),
        history1_canetype03: Number(budget?.history1_canetype03),
        history1_canetype04: Number(budget?.history1_canetype04),
        history1_canetype05: Number(budget?.history1_canetype05),
        history1_canetype06: Number(budget?.history1_canetype06),
        history2_ton_contract: Number(budget?.history2_ton_contract),
        history2_ton_real: Number(budget?.history2_ton_real),
        history2_ton_per: Number(budget?.history2_ton_per),
        history2_grad: budget?.history2_grad,
        history2_money: Number(budget?.history2_money),
        history2_cane_ton: Number(budget?.history2_cane_ton),
        history2_canetype01: Number(budget?.history2_canetype01),
        history2_canetype02: Number(budget?.history2_canetype02),
        history2_canetype03: Number(budget?.history2_canetype03),
        history2_canetype04: Number(budget?.history2_canetype04),
        history2_canetype05: Number(budget?.history2_canetype05),
        history2_canetype06: Number(budget?.history2_canetype06),
        history3_ton_contract: Number(budget?.history3_ton_contract),
        history3_ton_real: Number(budget?.history3_ton_real),
        history3_ton_per: Number(budget?.history3_ton_per),
        history3_grad: budget?.history3_grad,
        history3_money: Number(budget?.history3_money),
        history3_cane_ton: Number(budget?.history3_cane_ton),
        history3_canetype01: Number(budget?.history3_canetype01),
        history3_canetype02: Number(budget?.history3_canetype02),
        history3_canetype03: Number(budget?.history3_canetype03),
        history3_canetype04: Number(budget?.history3_canetype04),
        history3_canetype05: Number(budget?.history3_canetype05),
        history3_canetype06: Number(budget?.history3_canetype06),
        history4_ton_contract: Number(budget?.history4_ton_contract),
        history4_ton_real: Number(budget?.history4_ton_real),
        history4_ton_per: Number(budget?.history4_ton_per),
        history4_grad: budget?.history4_grad,
        history4_money: Number(budget?.history4_money),
        history4_cane_ton: Number(budget?.history4_cane_ton),
        history4_canetype01: Number(budget?.history4_canetype01),
        history4_canetype02: Number(budget?.history4_canetype02),
        history4_canetype03: Number(budget?.history4_canetype03),
        history4_canetype04: Number(budget?.history4_canetype04),
        history4_canetype05: Number(budget?.history4_canetype05),
        history4_canetype06: Number(budget?.history4_canetype06),
        securities
      });
    } else {
      res.render('print', { farmer: '' });
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
