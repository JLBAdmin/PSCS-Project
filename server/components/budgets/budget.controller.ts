/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import {
  BudgetTotal0,
  BudgetTotal1,
  BudgetTotal2,
  BudgetTotal3,
  BudgetTotal4,
  BudgetTotal5,
  BudgetTotal6,
  BudgetTotal7,
  caneType0,
  FactorInputs0,
  FactorInputs1,
  FactorInputs2,
  FactorInputs3,
  FactorInputs4,
  FactorInputs5,
  FactorInputs6,
  FactorInputs7,
  FactorInputs31,
  FactorInputs32,
  FactorInputs33,
  FactorInputs34,
  FactorInputs35,
  FactorInputs39,
  factorPer0,
  factorPer1,
  factorPer2,
  factorPer4,
  factorPer5,
  factorPer31,
  factorPer32,
  factorPer33,
  factorPer34,
  factorPer35,
  factorPer39,
  Money0,
  Money1,
  Money2,
  Money4,
  Money5,
  Money6,
  Money7,
  Money31,
  Money32,
  Money33,
  Money34,
  Money35,
  Money39
} from '../../config/caneType';
import { MssqlDataSource, PostgresDataSource } from '../../data-source';
import { BudgetSeasons } from '../../entity/mssql/mssql.BudgetSeasons';
import { Budgets } from '../../entity/pgsql/pg.budget';
import { BudgetSecurities } from '../../entity/pgsql/pg.budgetSecurities';
import { HistoryCane } from '../../entity/pgsql/pg.historyCane';
import { HistoryDebt } from '../../entity/pgsql/pg.historyDebt';
import { Securities } from '../../entity/pgsql/pg.securities';
import * as responsehandler from '../../lib/response-handler';
import verifyJWT from '../../middleware/verifyJWT';
import BaseApi from '../BaseApi';
import { dayTH } from '../crop-date';

/**
 * Users ontroller
 */
export default class BudgetController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/budget', this.router);
    // this.router.get('/get', verifyJWT, this.getBudget);
    this.router.get('/get', this.getBudget);
    this.router.get('/getProve', verifyJWT, this.getApprove);
    this.router.get('/noProve', verifyJWT, this.getNoApprove);
    this.router.get('/project', verifyJWT, this.getProject);
    this.router.get('/all', verifyJWT, this.getBudgetAll);
    this.router.get('/get/:id', this.getBudgetQuota);
    this.router.get('/zone/:id/', this.getBudgetZone);
    this.router.get('/zone-project/:id', verifyJWT, this.getProjectZone);
    this.router.get('/req/:id', verifyJWT, this.getRequestZone);
    this.router.post('/new', verifyJWT, this.newBudget);
    this.router.put('/update/:id', verifyJWT, this.updateBudget);
    this.router.delete('/del/:id', verifyJWT, this.deleteBudget);
    this.router.delete('/deleteAll', verifyJWT, this.deleteBudgetAll);
    this.router.get('/updateHistory/:id', this.getUpdateHistory);
    this.router.get('/error', this.getError);
  }

  public async getUpdateHistory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      await queryRunner.connect();
      const crops = await queryRunner.manager.query(
        'SELECT TOP(1) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
      );
      const result = await queryRunner.manager.query(
        'SELECT * FROM budgets WHERE cropYear=@0 AND quota=@1 AND deletedAt IS NULL',
        [crops[0].cropYear, id]
      );
      const debt = await PostgresDataSource.getRepository(
        HistoryDebt
      ).findOneBy({
        quota: <number>(<unknown>id),
        cropYear: result?.cropYear
      });

      const history = await PostgresDataSource.getRepository(
        HistoryCane
      ).findOneBy({
        quota: <number>(<unknown>id),
        cropYear: result?.cropYear
      });

      const updateHistory: any = {
        // นำเข้าหนี้
        debt_date: debt?.dateDept || 0,
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
        budget_grade: history?.budget_grade || 9,
        history1_ton_contract: history?.history1_ton_contract || 0,
        history1_ton_real: history?.history1_ton_real || 0,
        history1_ton_per: history?.history1_ton_per || 0,
        history1_grad: history?.history1_grad || '-',
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
        history2_grad: history?.history2_grad || '-',
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
        history3_grad: history?.history3_grad || '-',
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
        history4_grad: history?.history4_grad || '-',
        history4_money: history?.history4_money || 0,
        history4_cane_ton: history?.history4_cane_ton || 0,
        history4_canetype01: history?.history4_canetype01 || 0,
        history4_canetype02: history?.history4_canetype02 || 0,
        history4_canetype03: history?.history4_canetype03 || 0,
        history4_canetype04: history?.history4_canetype04 || 0,
        history4_canetype05: history?.history4_canetype05 || 0,
        history4_canetype06: history?.history4_canetype06 || 0
      };

      const budgetId = result?.id;

      await PostgresDataSource.getRepository(Budgets)
        .createQueryBuilder()
        .update(Budgets)
        .set(updateHistory)
        .where('id = :id', { budgetId })
        .execute();

      res.locals = res.status(200).json({ deletedAt: new Date() });
      responsehandler.send(res);
    } catch (err: any) {
      next(err);
    }
  }

  public async getBudget(
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    try {
      const crops = await PostgresDataSource.query(
        'SELECT TOP(1) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
      );
      const result = await PostgresDataSource.query(
        'SELECT * FROM budgets WHERE (cropYear=@0 OR cropYear=@1) AND deletedAt IS NULL ORDER BY updatedAt DESC',
        [crops[0].cropCurrent, crops[0].cropYear]
      );
      res.locals.data = result;
      responsehandler.send(res);
      // await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getApprove(
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const crops = await PostgresDataSource.query(
      'SELECT TOP(1) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
    );
    const result = await PostgresDataSource.query(
      'SELECT * FROM budgets WHERE (cropYear=@0 OR cropYear=@1) AND deletedAt IS NULL AND budget_status=@2 AND budget_prove=@3 AND deletedAt IS NULL ORDER BY updatedAt DESC',
      [crops[0].cropCurrent, crops[0].cropYear, '02', '00']
    );

    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getNoApprove(
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const crops = await PostgresDataSource.query(
      'SELECT TOP(1) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
    );

    const result = await PostgresDataSource.query(
      'SELECT * FROM budgets WHERE (cropYear=@0 OR cropYear=@1) AND deletedAt IS NULL AND budget_status=@2 AND budget_prove=@3 ORDER BY updatedAt DESC',
      [crops[0].cropCurrent, crops[0].cropYear, '01', '00']
    );
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getProject(
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    try {
      const crops = await PostgresDataSource.query(
        'SELECT TOP(1) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
      );

      const result = await PostgresDataSource.query(
        'SELECT * FROM budgets WHERE (cropYear=@0 OR cropYear=@1) AND promotion7_budget_use > 100 AND deletedAt IS NULL ORDER BY updatedAt DESC',
        [crops[0].cropCurrent, crops[0].cropYear, '01', '00']
      );

      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getBudgetAll(
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    try {
      const crops = await PostgresDataSource.query(
        'SELECT TOP(1) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
      );
      const result = await PostgresDataSource.query(
        'SELECT * FROM budgets WHERE (cropYear=@0 OR cropYear=@1) AND deletedAt IS NULL ORDER BY updatedAt DESC',
        [crops[0].cropCurrent, crops[0].cropYear]
      );

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
    try {
      const crops = await PostgresDataSource.query(
        'SELECT TOP(1) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
      );
      const result = await PostgresDataSource.query(
        'SELECT * FROM budgets WHERE (cropYear=@0 OR cropYear=@1) AND quota=@2 AND deletedAt IS NULL',
        [crops[0].cropCurrent, crops[0].cropYear, id]
      );

      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getBudgetZone(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const crops = await PostgresDataSource.query(
      'SELECT TOP(1) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
    );
    const result = await PostgresDataSource.query(
      'SELECT * FROM budgets WHERE (cropYear=@0 OR cropYear=@1) AND zone=@2 AND budget_status=@3 AND deletedAt IS NULL',
      [crops[0].cropCurrent, crops[0].cropYear, id, '00']
    );

    if (result) {
      res.locals.data = result;
      responsehandler.send(res);
    }
  }

  public async getProjectZone(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const crops = await PostgresDataSource.query(
      'SELECT TOP(1) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
    );
    // const CropYears = crops[0].cropYear;
    const result = await PostgresDataSource.query(
      'SELECT * FROM budgets WHERE (cropYear=@0 OR cropYear=@1) AND zone =@2 AND promotion7_budget_use > 100 AND deletedAt IS NULL ORDER BY updatedAt DESC',
      [crops[0].cropCurrent, crops[0].cropYear, id]
    );
    if (result) {
      res.locals.data = result;
      responsehandler.send(res);
    }
  }

  public async getRequestZone(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const { id }: any = req.params;
    try {
      const crops = await PostgresDataSource.query(
        'SELECT TOP(1) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
      );

      const result = await PostgresDataSource.query(
        'SELECT * FROM budgets WHERE (cropYear=@0 OR cropYear=@1) AND zone =@2 AND deletedAt IS NULL ORDER BY updatedAt DESC',
        [crops[0].cropCurrent, crops[0].cropYear, id]
      );

      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async newBudget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let InMoney0 = 0;
    let InMoney1 = 0;
    let InMoney2 = 0;
    let InMoney3 = 0;
    let InMoney4 = 0;
    let InMoney5 = 0;

    let InFactorInputs0 = 0;
    let InFactorInputs1 = 0;
    let InFactorInputs2 = 0;
    let InFactorInputs3 = 0;
    let InFactorInputs4 = 0;
    let InFactorInputs5 = 0;

    let InBudgetTotal0 = 0;
    let InBudgetTotal1 = 0;
    let InBudgetTotal2 = 0;
    let InBudgetTotal3 = 0;
    let InBudgetTotal4 = 0;
    let InBudgetTotal5 = 0;

    let RaiContract0 = 0;
    let RaiContract1 = 0;
    let RaiContract2 = 0;
    let RaiContract3 = 0;
    let RaiContract4 = 0;
    let RaiContract5 = 0;

    let useSums: any;

    if (<number>(<unknown>req.body.request_num) > 1) {
      useSums = await PostgresDataSource.getRepository(Budgets)
        .createQueryBuilder('Budgets')
        .select('Budgets.promotion0_money', 'sumMoney0')
        .addSelect('Budgets.promotion1_money', 'sumMoney1')
        .addSelect('Budgets.promotion2_money', 'sumMoney2')
        .addSelect('Budgets.promotion3_money', 'sumMoney3')
        .addSelect('Budgets.promotion4_money', 'sumMoney4')
        .addSelect('Budgets.promotion5_money', 'sumMoney5')
        .addSelect('promotion0_factor_inputs', 'sumFactorInput0')
        .addSelect('promotion1_factor_inputs', 'sumFactorInput1')
        .addSelect('promotion2_factor_inputs', 'sumFactorInput2')
        .addSelect('promotion3_factor_inputs', 'sumFactorInput3')
        .addSelect('promotion4_factor_inputs', 'sumFactorInput4')
        .addSelect('promotion5_factor_inputs', 'sumFactorInput5')
        .addSelect(
          'SUM(Budgets.promotion0_budget_total*Budgets.promotion0_area_contract)',
          'sumTotal0'
        )
        .addSelect(
          'SUM(Budgets.promotion1_budget_total*Budgets.promotion1_area_contract)',
          'sumTotal1'
        )
        .addSelect(
          'SUM(Budgets.promotion2_budget_total*Budgets.promotion2_area_contract)',
          'sumTotal2'
        )
        .addSelect(
          'SUM(Budgets.promotion3_budget_total*Budgets.promotion3_area_contract)',
          'sumTotal3'
        )
        .addSelect(
          'SUM(Budgets.promotion4_budget_total*Budgets.promotion4_area_contract)',
          'sumTotal4'
        )
        .addSelect(
          'SUM(Budgets.promotion5_budget_total*Budgets.promotion5_area_contract)',
          'sumTotal5'
        )
        .addSelect('SUM(Budgets.promotion0_area_contract)', 'sumArea0')
        .addSelect('SUM(Budgets.promotion1_area_contract)', 'sumArea1')
        .addSelect('SUM(Budgets.promotion2_area_contract)', 'sumArea2')
        .addSelect('SUM(Budgets.promotion3_area_contract)', 'sumArea3')
        .addSelect('SUM(Budgets.promotion4_area_contract)', 'sumArea4')
        .addSelect('SUM(Budgets.promotion5_area_contract)', 'sumArea5')
        .where('Budgets.quota = :id', { id: <number>(<unknown>req.body.quota) })
        .andWhere('Budgets.budget_prove = :prove', { prove: '01' })
        .andWhere('Budgets.request_num < :num', {
          num: <number>(<unknown>req.body.request_num)
        })
        .andWhere('Budgets.cropYear = :crop', { crop: req.body.cropYear })
        .andWhere('Budgets.deletedAt IS NULL')
        .groupBy(
          'Budgets.promotion0_money, Budgets.promotion1_money, Budgets.promotion2_money, Budgets.promotion3_money, Budgets.promotion4_money, Budgets.promotion5_money, Budgets.promotion0_factor_inputs, Budgets.promotion1_factor_inputs, Budgets.promotion2_factor_inputs, Budgets.promotion3_factor_inputs, Budgets.promotion4_factor_inputs, Budgets.promotion5_factor_inputs'
        )
        .getRawOne();
    } else {
      useSums = await PostgresDataSource.getRepository(Budgets)
        .createQueryBuilder('Budgets')
        .select('SUM(Budgets.promotion0_money)', 'sumMoney0')
        .addSelect('SUM(Budgets.promotion1_money)', 'sumMoney1')
        .addSelect('SUM(Budgets.promotion2_money)', 'sumMoney2')
        .addSelect('SUM(Budgets.promotion3_money)', 'sumMoney3')
        .addSelect('SUM(Budgets.promotion4_money)', 'sumMoney4')
        .addSelect('SUM(Budgets.promotion5_money)', 'sumMoney5')
        .addSelect('SUM(promotion0_factor_inputs)', 'sumFactorInput0')
        .addSelect('SUM(promotion1_factor_inputs)', 'sumFactorInput1')
        .addSelect('SUM(promotion2_factor_inputs)', 'sumFactorInput2')
        .addSelect('SUM(promotion3_factor_inputs)', 'sumFactorInput3')
        .addSelect('SUM(promotion4_factor_inputs)', 'sumFactorInput4')
        .addSelect('SUM(promotion5_factor_inputs)', 'sumFactorInput5')
        .addSelect(
          'SUM(Budgets.promotion0_budget_total*Budgets.promotion0_area_contract)',
          'sumTotal0'
        )
        .addSelect(
          'SUM(Budgets.promotion1_budget_total*Budgets.promotion1_area_contract)',
          'sumTotal1'
        )
        .addSelect(
          'SUM(Budgets.promotion2_budget_total*Budgets.promotion2_area_contract)',
          'sumTotal2'
        )
        .addSelect(
          'SUM(Budgets.promotion3_budget_total*Budgets.promotion3_area_contract)',
          'sumTotal3'
        )
        .addSelect(
          'SUM(Budgets.promotion4_budget_total*Budgets.promotion4_area_contract)',
          'sumTotal4'
        )
        .addSelect(
          'SUM(Budgets.promotion5_budget_total*Budgets.promotion5_area_contract)',
          'sumTotal5'
        )
        .addSelect('SUM(Budgets.promotion0_area_contract)', 'sumArea0')
        .addSelect('SUM(Budgets.promotion1_area_contract)', 'sumArea1')
        .addSelect('SUM(Budgets.promotion2_area_contract)', 'sumArea2')
        .addSelect('SUM(Budgets.promotion3_area_contract)', 'sumArea3')
        .addSelect('SUM(Budgets.promotion4_area_contract)', 'sumArea4')
        .addSelect('SUM(Budgets.promotion5_area_contract)', 'sumArea5')
        .where('Budgets.quota = :id', { id: <number>(<unknown>req.body.quota) })
        .andWhere('Budgets.budget_prove = :prove', { prove: '01' })
        .andWhere('Budgets.request_num = :num', {
          num: <number>(<unknown>req.body.request_num)
        })
        .andWhere('Budgets.cropYear = :crop', { crop: req.body.cropYear })
        .andWhere('Budgets.deletedAt IS NULL')
        // .groupBy(
        //   'Budgets.promotion0_money, Budgets.promotion1_money, Budgets.promotion2_money, Budgets.promotion3_money, Budgets.promotion4_money, Budgets.promotion5_money, Budgets.promotion0_factor_inputs, Budgets.promotion1_factor_inputs, Budgets.promotion2_factor_inputs, Budgets.promotion3_factor_inputs, Budgets.promotion4_factor_inputs, Budgets.promotion5_factor_inputs'
        // )
        .getRawOne();
    }

    let BahtTon0 = 0;
    let TonContract0 = 0;
    let BudgetUse0 = Number(req.body.promotion0_budget_use);
    // ถ้าพื้นที่มากกว่า 1 ไร่
    if (req.body.promotion0_area_contract > 1) {
      RaiContract0 = req.body.promotion0_area_contract;
      TonContract0 = req.body.promotion0_area_contract * caneType0;
      if (req.body.promotion0_budget_use < 1) {
        BudgetUse0 = 0;
      } else if (req.body.promotion0_budget_use < 2) {
        BudgetUse0 = req.body.promotion0_area_contract * BudgetTotal0;
      } else {
        BudgetUse0 = req.body.promotion0_budget_use;
      }
      BahtTon0 = BudgetUse0 / TonContract0;
      InFactorInputs0 = FactorInputs0;
      InMoney0 = Money0;
      InBudgetTotal0 = BudgetTotal0;
      // พื้นที่น้อยกว่า 2 ไร่
    } else {
      RaiContract0 = 0;
      TonContract0 = 0;
      BudgetUse0 = req.body.promotion0_budget_use || 0;
      InFactorInputs0 = useSums.sumFactorInput0;
      InMoney0 = useSums.sumMoney0;
      InBudgetTotal0 = useSums.sumFactorInput0 + useSums.sumMoney0;
    }

    let BahtTon1 = 0;
    let TonContract1 = 0;
    let BudgetUse1 = Number(req.body.promotion1_budget_use);
    if (req.body.promotion1_area_contract > 1) {
      RaiContract1 = req.body.promotion1_area_contract;
      TonContract1 = req.body.promotion1_ton_contract;
      if (req.body.promotion1_budget_use < 1) {
        BudgetUse1 = 0;
      } else if (req.body.promotion1_budget_use < 2) {
        BudgetUse1 = req.body.promotion1_area_contract * BudgetTotal1;
      } else {
        BudgetUse1 = req.body.promotion1_budget_use;
      }
      BahtTon1 = BudgetUse1 / TonContract1;
      InFactorInputs1 = FactorInputs1;
      InMoney1 = Money1;
      InBudgetTotal1 = BudgetTotal1;
    } else {
      RaiContract1 = 0;
      TonContract1 = 0;
      BudgetUse1 = req.body.promotion1_budget_use || 0;
      InFactorInputs1 = useSums.sumFactorInput1;
      InMoney1 = useSums.sumMoney1;
      InBudgetTotal1 = useSums.sumFactorInput1 + useSums.sumMoney1;
    }

    let BahtTon2 = 0;
    let TonContract2 = 0;
    let BudgetUse2 = Number(req.body.promotion2_budget_use);
    if (req.body.promotion2_area_contract > 1) {
      RaiContract2 = req.body.promotion2_area_contract;
      TonContract2 = req.body.promotion2_ton_contract;
      if (req.body.promotion2_budget_use < 1) {
        BudgetUse2 = 0;
      } else if (req.body.promotion2_budget_use < 2) {
        BudgetUse2 = req.body.promotion2_area_contract * BudgetTotal2;
      } else {
        BudgetUse2 = req.body.promotion2_budget_use;
      }
      BahtTon2 = BudgetUse2 / TonContract2;
      InFactorInputs2 = FactorInputs2;
      InMoney2 = Money2;
      InBudgetTotal2 = BudgetTotal2;
    } else {
      RaiContract2 = 0;
      TonContract2 = 0;
      BudgetUse2 = req.body.promotion2_budget_use || 0;
      InFactorInputs2 = useSums.sumFactorInput2;
      InMoney2 = useSums.sumMoney2;
      InBudgetTotal2 = useSums.sumFactorInput2 + useSums.sumMoney2;
    }

    let BahtTon3 = 0;
    let TonContract3 = 0;
    let BudgetUse3 = Number(req.body.promotion3_budget_use);
    if (req.body.promotion3_area_contract > 1) {
      RaiContract3 = req.body.promotion3_area_contract;
      TonContract3 = req.body.promotion3_ton_contract;
      if (req.body.promotion3_budget_use < 1) {
        BudgetUse3 = 0;
      } else if (req.body.promotion3_budget_use < 2) {
        BudgetUse3 = req.body.promotion3_area_contract * BudgetTotal3;
      } else {
        BudgetUse3 = req.body.promotion3_budget_use;
      }
      BahtTon3 = BudgetUse3 / TonContract3;

      if (req.body.budget_grade === 1) {
        InFactorInputs3 = FactorInputs31;
        InMoney3 = Money31;
        InBudgetTotal3 = InFactorInputs3 + InMoney3;
      } else if (req.body.budget_grade === 2) {
        InFactorInputs3 = FactorInputs32;
        InMoney3 = Money32;
        InBudgetTotal3 = InFactorInputs3 + InMoney3;
      } else if (req.body.budget_grade === 3) {
        InFactorInputs3 = FactorInputs33;
        InMoney3 = Money33;
        InBudgetTotal3 = InFactorInputs3 + InMoney3;
      } else if (req.body.budget_grade === 4) {
        InFactorInputs3 = FactorInputs34;
        InMoney3 = Money34;
        InBudgetTotal3 = InFactorInputs3 + InMoney3;
      } else if (req.body.budget_grade === 5) {
        InFactorInputs3 = FactorInputs35;
        InMoney3 = Money35;
        InBudgetTotal3 = InFactorInputs3 + InMoney3;
      } else {
        InFactorInputs3 = FactorInputs39;
        InMoney3 = Money39;
        InBudgetTotal3 = InFactorInputs3 + InMoney3;
      }
    } else {
      RaiContract3 = 0;
      TonContract3 = 0;
      BudgetUse3 = req.body.promotion3_budget_use || 0;
      InFactorInputs3 = useSums.sumFactorInput3;
      InMoney3 = useSums.sumMoney3;
      InBudgetTotal3 = useSums.sumFactorInput3 + useSums.sumMoney3;
    }

    let BahtTon4 = 0;
    let TonContract4 = 0;
    let BudgetUse4 = Number(req.body.promotion4_budget_use);
    if (req.body.promotion4_area_contract > 1) {
      RaiContract4 = req.body.promotion4_area_contract;
      TonContract4 = req.body.promotion4_ton_contract;
      if (req.body.promotion4_budget_use < 1) {
        BudgetUse4 = 0;
      } else if (req.body.promotion4_budget_use < 2) {
        BudgetUse4 = req.body.promotion4_area_contract * BudgetTotal4;
      } else {
        BudgetUse4 = req.body.promotion4_budget_use || 0;
      }
      BahtTon4 = BudgetUse4 / TonContract4;
      InFactorInputs4 = FactorInputs4;
      InMoney4 = Money4;
      InBudgetTotal4 = BudgetTotal4;
    } else {
      RaiContract4 = 0;
      TonContract4 = 0;
      BudgetUse4 = req.body.promotion4_budget_use || 0;
      InFactorInputs4 = useSums.sumFactorInput4;
      InMoney4 = useSums.sumMoney4;
      InBudgetTotal4 = useSums.sumFactorInput4 + useSums.sumMoney4;
    }

    let BahtTon5 = 0;
    let TonContract5 = 0;
    let BudgetUse5 = Number(req.body.promotion5_budget_use);
    if (req.body.promotion5_area_contract > 1) {
      RaiContract5 = req.body.promotion5_area_contract;
      TonContract5 = req.body.promotion5_ton_contract;
      if (req.body.promotion5_budget_use < 1) {
        BudgetUse5 = 0;
      } else if (req.body.promotion5_budget_use < 2) {
        BudgetUse5 = req.body.promotion5_area_contract * BudgetTotal5;
      } else {
        BudgetUse5 = req.body.promotion5_budget_use;
      }
      BahtTon5 = BudgetUse5 / TonContract5;
      InFactorInputs5 = FactorInputs5;
      InMoney5 = Money5;
      InBudgetTotal5 = BudgetTotal5;
    } else {
      RaiContract5 = 0;
      TonContract5 = 0;
      BudgetUse5 = req.body.promotion5_budget_use || 0;
      InFactorInputs5 = useSums.sumFactorInput5;
      InMoney5 = useSums.sumMoney5;
      InBudgetTotal5 = useSums.sumFactorInput5 + useSums.sumMoney5;
    }

    const TonTotal =
      TonContract0 +
      TonContract1 +
      TonContract2 +
      TonContract3 +
      TonContract4 +
      TonContract5;

    let BahtTon6 = 0;
    let TonContract6;
    let BudgetUse6 = 0;
    if (TonTotal > 0 && req.body.promotion6_budget_use > 0) {
      BudgetUse6 = req.body.promotion6_budget_use;
      BahtTon6 = req.body.promotion6_budget_use / TonTotal;
    } else {
      BudgetUse6 = req.body.promotion6_budget_use;
      BahtTon6 = 0;
    }

    let BahtTon7 = 0;
    let TonContract7;
    let BudgetUse7 = 0;
    if (TonTotal > 0 && req.body.promotion7_budget_use > 0) {
      BudgetUse7 = req.body.promotion7_budget_use;
      BahtTon7 = req.body.promotion7_budget_use / TonTotal;
    } else {
      BudgetUse7 = req.body.promotion7_budget_use;
      BahtTon7 = 0;
    }

    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    await queryRunner.connect();
    // const crops = await queryRunner.manager.query(
    //   'SELECT * FROM crop_years WHERE cropStatus = 1'
    // );

    const CropYears = req.body.cropYear;
    const useMax = await PostgresDataSource.getRepository(Budgets)
      .createQueryBuilder('Budgets')
      .select('Max(Budgets.request_num)', 'reqMax')
      .where('Budgets.quota = :id', { id: <number>(<unknown>req.body.quota) })
      .andWhere('Budgets.deletedAt IS NULL')
      .andWhere('Budgets.cropYear = :crop', { crop: CropYears })
      .getRawOne();

    let addNum: number = 0;
    if (<number>(<unknown>req.body.request_num) === 0) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      addNum + 1;
    } else {
      addNum = useMax.reqMax + 1;
    }

    const debt = await PostgresDataSource.getRepository(HistoryDebt).findOneBy({
      quota: <number>(<unknown>req.body.quota)
    });

    const history = await PostgresDataSource.getRepository(
      HistoryCane
    ).findOneBy({
      quota: <number>(<unknown>req.body.quota)
    });

    const newBudget: any = {
      budget_status: req.body.budget_status || '00',
      budget_prove: '00',
      cropYear: req.body.cropYear.toString(),
      apporv_date: dayTH,
      quota: req.body.quota || null,
      zone: req.body.zone.toString(),
      subZone: req.body.subZone.toString(),
      manager: req.body.manager,
      request_num: Number(addNum),
      ton_contract: req.body.ton_contract,
      add_ton_contract: req.body.add_ton_contract,
      total_ton_contract: req.body.total_ton_contract,
      increaseDecreaseContract: Number(req.body.increaseDecreaseContract),
      promotion0_area_contract: Number(RaiContract0),
      promotion0_ton_contract: req.body.promotion0_ton_contract, // Number(TonContract0),
      promotion0_money: Number(InMoney0),
      promotion0_factor_inputs: Number(InFactorInputs0),
      promotion0_factor_status: req.body.promotion0_factor_status,
      promotion0_budget_total: Number(InBudgetTotal0),
      promotion0_budget_approved: Number(0),
      promotion0_budget_use: Number(BudgetUse0),
      promotion0_baht_ton: Number(BahtTon0),
      //
      promotion1_area_contract: Number(RaiContract1),
      promotion1_ton_contract: req.body.promotion1_ton_contract, // Number(TonContract1),
      promotion1_money: Number(InMoney1),
      promotion1_factor_inputs: Number(InFactorInputs1),
      promotion1_factor_status: req.body.promotion1_factor_status,
      promotion1_budget_total: Number(InBudgetTotal1),
      promotion1_budget_approved: Number(0),
      promotion1_budget_use: Number(BudgetUse1),
      promotion1_baht_ton: Number(BahtTon1),
      //
      promotion2_area_contract: Number(RaiContract2),
      promotion2_ton_contract: req.body.promotion2_ton_contract, // Number(TonContract2),
      promotion2_money: Number(InMoney2),
      promotion2_factor_inputs: Number(InFactorInputs2),
      promotion2_factor_status: req.body.promotion2_factor_status,
      promotion2_budget_total: Number(InBudgetTotal2),
      promotion2_budget_approved: Number(0),
      promotion2_budget_use: Number(BudgetUse2),
      promotion2_baht_ton: Number(BahtTon2),
      //
      promotion3_area_contract: Number(RaiContract3),
      promotion3_ton_contract: req.body.promotion3_ton_contract, // Number(TonContract3),
      promotion3_money: Number(InMoney3),
      promotion3_factor_inputs: Number(InFactorInputs3),
      promotion3_factor_status: req.body.promotion3_factor_status,
      promotion3_budget_total: Number(InBudgetTotal3),
      promotion3_budget_approved: Number(0),
      promotion3_budget_use: Number(BudgetUse3),
      promotion3_baht_ton: Number(BahtTon3),
      //
      promotion4_area_contract: Number(RaiContract4),
      promotion4_ton_contract: req.body.promotion4_ton_contract, // Number(TonContract4),
      promotion4_money: Number(InMoney4),
      promotion4_factor_inputs: Number(InFactorInputs4),
      promotion4_factor_status: req.body.promotion4_factor_status,
      promotion4_budget_total: Number(InBudgetTotal4),
      promotion4_budget_approved: Number(0),
      promotion4_budget_use: Number(BudgetUse4),
      promotion4_baht_ton: Number(BahtTon4),
      //
      promotion5_area_contract: Number(RaiContract5),
      promotion5_ton_contract: req.body.promotion5_ton_contract, // Number(TonContract5),
      promotion5_money: Number(InMoney5),
      promotion5_factor_inputs: Number(InFactorInputs5),
      promotion5_factor_status: req.body.promotion5_factor_status,
      promotion5_budget_total: Number(InBudgetTotal5),
      promotion5_budget_approved: Number(0),
      promotion5_budget_use: Number(BudgetUse5),
      promotion5_baht_ton: Number(BahtTon5),
      //
      promotion6_area_contract: req.body.promotion6_area_contract,
      promotion6_ton_contract: Number(TonContract6),
      promotion6_money: Number(Money6),
      promotion6_factor_inputs: Number(FactorInputs6),
      promotion6_budget_total: Number(BudgetTotal6),
      promotion6_budget_approved: Number(0),
      promotion6_budget_use: Number(BudgetUse6),
      promotion6_baht_ton: Number(BahtTon6),
      //
      promotion7_area_contract: req.body.promotion7_area_contract,
      promotion7_ton_contract: Number(TonContract7),
      promotion7_money: Number(Money7),
      promotion7_factor_inputs: Number(FactorInputs7),
      promotion7_budget_total: Number(BudgetTotal7),
      promotion7_budget_approved: Number(0),
      promotion7_project_type: req.body.promotion7_project_type,
      promotion7_budget_use: Number(BudgetUse7),
      promotion7_baht_ton: Number(BahtTon7),
      // นำเข้าหนี้
      debt_date: debt?.dateDept,
      debt1_crop_due: debt?.debt1_crop_due,
      deduct1_crop_due: debt?.deduct1_crop_due,
      debt1_overdue_due: debt?.debt1_overdue_due,
      project1_debt_crop_due: debt?.project1_debt_crop_due,
      project1_deduct_crop_due: debt?.project1_deduct_crop_due,
      project1_deduct_end_due: debt?.project1_deduct_end_due,
      deduct1_total: debt?.deduct1_total,
      deduct1_due_previous: debt?.deduct1_due_previous,
      deduct1_due_last: debt?.deduct1_due_last,
      debt2_crop_due: debt?.debt2_crop_due,
      deduct2_crop_due: debt?.deduct2_crop_due,
      debt2_overdue_due: debt?.debt2_overdue_due,
      project2_debt_crop_due: debt?.project2_debt_crop_due,
      project2_deduct_crop_due: debt?.project2_deduct_crop_due,
      project2_deduct_end_due: debt?.project2_deduct_end_due,
      deduct2_total: debt?.deduct2_total,
      deduct2_due_previous: debt?.deduct2_due_previous,
      deduct2_due_last: debt?.deduct2_due_last,
      debt3_crop_due: debt?.debt3_crop_due,
      deduct3_crop_due: debt?.deduct3_crop_due,
      debt3_overdue_due: debt?.debt3_overdue_due,
      project3_debt_crop_due: debt?.project3_debt_crop_due,
      project3_deduct_crop_due: debt?.project3_deduct_crop_due,
      project3_deduct_end_due: debt?.project3_deduct_end_due,
      deduct3_total: debt?.deduct3_total,
      deduct3_due_previous: debt?.deduct3_due_previous,
      deduct3_due_last: debt?.deduct3_due_last,
      debt4_crop_due: debt?.debt4_crop_due,
      deduct4_crop_due: debt?.deduct4_crop_due,
      debt4_overdue_due: debt?.debt4_overdue_due,
      project4_debt_crop_due: debt?.project4_debt_crop_due,
      project4_deduct_crop_due: debt?.project4_deduct_crop_due,
      project4_deduct_end_due: debt?.project4_deduct_end_due,
      deduct4_total: debt?.deduct4_total,
      deduct4_due_previous: debt?.deduct4_due_previous,
      deduct4_due_last: debt?.deduct4_due_last,
      avg_baht_area: 0,
      budget_grade: history?.budget_grade || 9,
      history1_ton_contract: history?.history1_ton_contract,
      history1_ton_real: history?.history1_ton_real,
      history1_ton_per: history?.history1_ton_per,
      history1_grad: history?.history1_grad || '-',
      history1_money: history?.history1_money,
      history1_cane_ton: history?.history1_cane_ton,
      history1_canetype01: history?.history1_canetype01,
      history1_canetype02: history?.history1_canetype02,
      history1_canetype03: history?.history1_canetype03,
      history1_canetype04: history?.history1_canetype04,
      history1_canetype05: history?.history1_canetype05,
      history1_canetype06: history?.history1_canetype06,
      history2_ton_contract: history?.history2_ton_contract,
      history2_ton_real: history?.history2_ton_real,
      history2_ton_per: history?.history2_ton_per,
      history2_grad: history?.history2_grad || '-',
      history2_money: history?.history2_money,
      history2_cane_ton: history?.history2_cane_ton,
      history2_canetype01: history?.history2_canetype01,
      history2_canetype02: history?.history2_canetype02,
      history2_canetype03: history?.history2_canetype03,
      history2_canetype04: history?.history2_canetype04,
      history2_canetype05: history?.history2_canetype05,
      history2_canetype06: history?.history2_canetype06,
      history3_ton_contract: history?.history3_ton_contract,
      history3_ton_real: history?.history3_ton_real,
      history3_ton_per: history?.history3_ton_per,
      history3_grad: history?.history3_grad || '-',
      history3_money: history?.history3_money,
      history3_cane_ton: history?.history3_cane_ton,
      history3_canetype01: history?.history3_canetype01,
      history3_canetype02: history?.history3_canetype02,
      history3_canetype03: history?.history3_canetype03,
      history3_canetype04: history?.history3_canetype04,
      history3_canetype05: history?.history3_canetype05,
      history3_canetype06: history?.history3_canetype06,
      history4_ton_contract: history?.history4_ton_contract,
      history4_ton_real: history?.history4_ton_real,
      history4_ton_per: history?.history4_ton_per,
      history4_grad: history?.history4_grad || '-',
      history4_money: history?.history4_money,
      history4_cane_ton: history?.history4_cane_ton,
      history4_canetype01: history?.history4_canetype01,
      history4_canetype02: history?.history4_canetype02,
      history4_canetype03: history?.history4_canetype03,
      history4_canetype04: history?.history4_canetype04,
      history4_canetype05: history?.history4_canetype05,
      history4_canetype06: history?.history4_canetype06,
      Due1: req.body.Due1 || null,
      Due2: req.body.Due2 || null,
      Due3: req.body.Due3 || null,
      Due4: req.body.Due4 || null,
      Due5: req.body.Due5 || null,
      Due6: req.body.Due6 || null,
      ContractYear1: req.body.ContractYear1 || null,
      ContractYear2: req.body.ContractYear2 || null,
      ContractYear3: req.body.ContractYear3 || null,
      ContractYear4: req.body.ContractYear4 || null,
      ContractYear5: req.body.ContractYear5 || null,
      ContractYear6: req.body.ContractYear6 || null,
      projectDoc: req.body.projectDoc || null,
      projectAmount: req.body.projectAmount || null,
      DueNum: req.body.DueNum || null,
      DueRai: req.body.DueRai || null,
      DueTon: req.body.DueTon || null,
      userUpdate: req.body.userUpdate || null
    };

    try {
      // const queryRunner = PostgresDataSource.createQueryRunner();
      // await queryRunner.connect();
      // const checkBudget = await queryRunner.manager.query(
      //   'SELECT count(*) as proveNum FROM budgets WHERE quota =@0 AND budget_prove !=@1',
      //   [<number>(<unknown>req.body.quota), '01']
      // );

      // if (checkBudget[0].proveNum <= 2) {
      //   res.locals = res.status(200).json({
      //     msg: 'กรุณารอแฟ้มครั้งก่อนผ่านการอนุมัติ'
      //   });
      //   responsehandler.send(res);
      // } else {
      const budget =
        PostgresDataSource.getRepository(Budgets).create(newBudget);
      // const budget = PostgresDataSource.getRepository(Budgets).create(req.body);
      await PostgresDataSource.getRepository(Budgets).save(budget);
      res.locals = res
        .status(201)
        .json({ msg: 'Budget create susscess', createdAt: new Date() });
      responsehandler.send(res);
      await queryRunner.release();
    } catch (error) {
      // since we have errors let's rollback changes we made
      next(error);
      await queryRunner.release();
    }
  }

  public async updateBudget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;

    // สถานะยกเลิกเอกสาร
    if (req.body.budget_prove.toString() === '09') {
      try {
        const queryRunner = PostgresDataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.manager.query(
          'UPDATE [dbo].[budgets] SET deletedAt = @0 WHERE id = @1',
          [new Date(), <number>(<unknown>id)]
        );

        res.locals = res.status(200).json({ deletedAt: new Date() });
        responsehandler.send(res);

        await queryRunner.release();
      } catch (err: any) {
        next(err);
      }
    }

    let InMoney0 = 0;
    let InMoney1 = 0;
    let InMoney2 = 0;
    let InMoney3 = 0;
    let InMoney4 = 0;
    let InMoney5 = 0;

    let InFactorInputs0 = 0;
    let InFactorInputs1 = 0;
    let InFactorInputs2 = 0;
    let InFactorInputs3 = 0;
    let InFactorInputs4 = 0;
    let InFactorInputs5 = 0;

    let InBudgetTotal0 = 0;
    let InBudgetTotal1 = 0;
    let InBudgetTotal2 = 0;
    let InBudgetTotal3 = 0;
    let InBudgetTotal4 = 0;
    let InBudgetTotal5 = 0;

    let RaiContract0 = 0;
    let RaiContract1 = 0;
    let RaiContract2 = 0;
    let RaiContract3 = 0;
    let RaiContract4 = 0;
    let RaiContract5 = 0;

    let useSums: any;

    if (<number>(<unknown>req.body.request_num) > 1) {
      useSums = await PostgresDataSource.getRepository(Budgets)
        .createQueryBuilder('Budgets')
        .select('Budgets.promotion0_money', 'sumMoney0')
        .addSelect('Budgets.promotion1_money', 'sumMoney1')
        .addSelect('Budgets.promotion2_money', 'sumMoney2')
        .addSelect('Budgets.promotion3_money', 'sumMoney3')
        .addSelect('Budgets.promotion4_money', 'sumMoney4')
        .addSelect('Budgets.promotion5_money', 'sumMoney5')
        .addSelect('promotion0_factor_inputs', 'sumFactorInput0')
        .addSelect('promotion1_factor_inputs', 'sumFactorInput1')
        .addSelect('promotion2_factor_inputs', 'sumFactorInput2')
        .addSelect('promotion3_factor_inputs', 'sumFactorInput3')
        .addSelect('promotion4_factor_inputs', 'sumFactorInput4')
        .addSelect('promotion5_factor_inputs', 'sumFactorInput5')
        .addSelect(
          'SUM(Budgets.promotion0_budget_total*Budgets.promotion0_area_contract)',
          'sumTotal0'
        )
        .addSelect(
          'SUM(Budgets.promotion1_budget_total*Budgets.promotion1_area_contract)',
          'sumTotal1'
        )
        .addSelect(
          'SUM(Budgets.promotion2_budget_total*Budgets.promotion2_area_contract)',
          'sumTotal2'
        )
        .addSelect(
          'SUM(Budgets.promotion3_budget_total*Budgets.promotion3_area_contract)',
          'sumTotal3'
        )
        .addSelect(
          'SUM(Budgets.promotion4_budget_total*Budgets.promotion4_area_contract)',
          'sumTotal4'
        )
        .addSelect(
          'SUM(Budgets.promotion5_budget_total*Budgets.promotion5_area_contract)',
          'sumTotal5'
        )
        .addSelect('SUM(Budgets.promotion0_area_contract)', 'sumArea0')
        .addSelect('SUM(Budgets.promotion1_area_contract)', 'sumArea1')
        .addSelect('SUM(Budgets.promotion2_area_contract)', 'sumArea2')
        .addSelect('SUM(Budgets.promotion3_area_contract)', 'sumArea3')
        .addSelect('SUM(Budgets.promotion4_area_contract)', 'sumArea4')
        .addSelect('SUM(Budgets.promotion5_area_contract)', 'sumArea5')
        .where('Budgets.quota = :id', { id: <number>(<unknown>req.body.quota) })
        .andWhere('Budgets.budget_prove = :prove', { prove: '01' })
        .andWhere('Budgets.request_num < :num', {
          num: <number>(<unknown>req.body.request_num)
        })
        .andWhere('Budgets.cropYear = :crop', { crop: req.body.cropYear })
        .andWhere('Budgets.deletedAt IS NULL')
        .groupBy(
          'Budgets.promotion0_money, Budgets.promotion1_money, Budgets.promotion2_money, Budgets.promotion3_money, Budgets.promotion4_money, Budgets.promotion5_money, Budgets.promotion0_factor_inputs, Budgets.promotion1_factor_inputs, Budgets.promotion2_factor_inputs, Budgets.promotion3_factor_inputs, Budgets.promotion4_factor_inputs, Budgets.promotion5_factor_inputs'
        )
        .getRawOne();
    } else {
      useSums = await PostgresDataSource.getRepository(Budgets)
        .createQueryBuilder('Budgets')
        .select('SUM(Budgets.promotion0_money)', 'sumMoney0')
        .addSelect('SUM(Budgets.promotion1_money)', 'sumMoney1')
        .addSelect('SUM(Budgets.promotion2_money)', 'sumMoney2')
        .addSelect('SUM(Budgets.promotion3_money)', 'sumMoney3')
        .addSelect('SUM(Budgets.promotion4_money)', 'sumMoney4')
        .addSelect('SUM(Budgets.promotion5_money)', 'sumMoney5')
        .addSelect('SUM(promotion0_factor_inputs)', 'sumFactorInput0')
        .addSelect('SUM(promotion1_factor_inputs)', 'sumFactorInput1')
        .addSelect('SUM(promotion2_factor_inputs)', 'sumFactorInput2')
        .addSelect('SUM(promotion3_factor_inputs)', 'sumFactorInput3')
        .addSelect('SUM(promotion4_factor_inputs)', 'sumFactorInput4')
        .addSelect('SUM(promotion5_factor_inputs)', 'sumFactorInput5')
        .addSelect(
          'SUM(Budgets.promotion0_budget_total*Budgets.promotion0_area_contract)',
          'sumTotal0'
        )
        .addSelect(
          'SUM(Budgets.promotion1_budget_total*Budgets.promotion1_area_contract)',
          'sumTotal1'
        )
        .addSelect(
          'SUM(Budgets.promotion2_budget_total*Budgets.promotion2_area_contract)',
          'sumTotal2'
        )
        .addSelect(
          'SUM(Budgets.promotion3_budget_total*Budgets.promotion3_area_contract)',
          'sumTotal3'
        )
        .addSelect(
          'SUM(Budgets.promotion4_budget_total*Budgets.promotion4_area_contract)',
          'sumTotal4'
        )
        .addSelect(
          'SUM(Budgets.promotion5_budget_total*Budgets.promotion5_area_contract)',
          'sumTotal5'
        )
        .addSelect('SUM(Budgets.promotion0_area_contract)', 'sumArea0')
        .addSelect('SUM(Budgets.promotion1_area_contract)', 'sumArea1')
        .addSelect('SUM(Budgets.promotion2_area_contract)', 'sumArea2')
        .addSelect('SUM(Budgets.promotion3_area_contract)', 'sumArea3')
        .addSelect('SUM(Budgets.promotion4_area_contract)', 'sumArea4')
        .addSelect('SUM(Budgets.promotion5_area_contract)', 'sumArea5')
        .where('Budgets.quota = :id', { id: <number>(<unknown>req.body.quota) })
        .andWhere('Budgets.budget_prove = :prove', { prove: '01' })
        .andWhere('Budgets.request_num = :num', {
          num: <number>(<unknown>req.body.request_num)
        })
        .andWhere('Budgets.cropYear = :crop', { crop: req.body.cropYear })
        .andWhere('Budgets.deletedAt IS NULL')
        // .groupBy(
        //   'Budgets.promotion0_money, Budgets.promotion1_money, Budgets.promotion2_money, Budgets.promotion3_money, Budgets.promotion4_money, Budgets.promotion5_money, Budgets.promotion0_factor_inputs, Budgets.promotion1_factor_inputs, Budgets.promotion2_factor_inputs, Budgets.promotion3_factor_inputs, Budgets.promotion4_factor_inputs, Budgets.promotion5_factor_inputs'
        // )
        .getRawOne();
    }

    let BahtTon0 = 0;
    let TonContract0 = 0;
    let BudgetUse0 = 0;

    if (req.body.promotion0_area_contract > 1) {
      RaiContract0 = req.body.promotion0_area_contract;
      TonContract0 = req.body.promotion0_ton_contract;
      // BudgetUse1 = req.body.promotion1_area_contract * BudgetTotal1;
      if (req.body.promotion0_budget_use < 1) {
        BudgetUse0 = 0;
      } else if (req.body.promotion0_budget_use < 2) {
        BudgetUse0 = req.body.promotion0_area_contract * BudgetTotal0;
      } else {
        BudgetUse0 = req.body.promotion0_budget_use;
      }
      BahtTon0 = BudgetUse0 / TonContract0;
      InFactorInputs0 = FactorInputs0;
      InMoney0 = Money0;
      InBudgetTotal0 = BudgetTotal0;
    } else {
      RaiContract0 = 0;
      TonContract0 = 0;
      BudgetUse0 = Number(req.body.promotion0_budget_use || 0);
      InFactorInputs0 = Number(useSums.sumFactorInput0);
      InMoney0 = Number(useSums.sumMoney0);
      InBudgetTotal0 = Number(useSums.sumFactorInput0 + useSums.sumMoney0);
    }

    let BahtTon1 = 0;
    let TonContract1 = 0;
    let BudgetUse1 = 0;
    if (req.body.promotion1_area_contract > 1) {
      RaiContract1 = req.body.promotion1_area_contract;
      TonContract1 = req.body.promotion1_ton_contract;
      if (req.body.promotion1_budget_use < 1) {
        BudgetUse1 = 0;
      } else if (req.body.promotion1_budget_use < 2) {
        BudgetUse1 = req.body.promotion1_area_contract * BudgetTotal1;
      } else {
        BudgetUse1 = req.body.promotion1_budget_use;
      }
      BahtTon1 = BudgetUse1 / TonContract1;
      InFactorInputs1 = FactorInputs1;
      InMoney1 = Money1;
      InBudgetTotal1 = BudgetTotal1;
    } else {
      RaiContract1 = 0;
      TonContract1 = 0;
      BudgetUse1 = Number(req.body.promotion1_budget_use || 0);
      InFactorInputs1 = Number(useSums.sumFactorInput1 || 0);
      InMoney1 = Number(useSums.sumMoney1 || 0);
      InBudgetTotal1 = Number(useSums.sumFactorInput1 + useSums.sumMoney1 || 0);
    }

    let BahtTon2 = 0;
    let TonContract2 = 0;
    let BudgetUse2 = 0;
    if (req.body.promotion2_area_contract > 1) {
      RaiContract2 = req.body.promotion2_area_contract;
      TonContract2 = req.body.promotion2_ton_contract;
      if (req.body.promotion2_budget_use < 1) {
        BudgetUse2 = 0;
      } else if (req.body.promotion2_budget_use < 2) {
        BudgetUse2 = req.body.promotion2_area_contract * BudgetTotal2;
      } else {
        BudgetUse2 = req.body.promotion2_budget_use;
      }
      BahtTon2 = BudgetUse2 / TonContract2;
      InFactorInputs2 = FactorInputs2;
      InMoney2 = Money2;
      InBudgetTotal2 = BudgetTotal2;
    } else {
      RaiContract2 = 0;
      TonContract2 = 0;
      BudgetUse2 = Number(req.body.promotion2_budget_use || 0);
      InFactorInputs2 = Number(useSums.sumFactorInput2 || 0);
      InMoney2 = Number(useSums.sumMoney2 || 0);
      InBudgetTotal2 = Number(useSums.sumFactorInput2 + useSums.sumMoney2 || 0);
    }

    let BahtTon3 = 0;
    let TonContract3 = 0;
    let BudgetUse3 = 0;
    if (req.body.promotion3_area_contract > 1) {
      RaiContract3 = req.body.promotion3_area_contract;
      TonContract3 = req.body.promotion3_ton_contract;
      if (req.body.promotion3_budget_use < 1) {
        BudgetUse3 = 0;
      } else if (req.body.promotion3_budget_use < 2) {
        BudgetUse3 = req.body.promotion03area_contract * BudgetTotal3;
      } else {
        BudgetUse3 = req.body.promotion3_budget_use;
      }
      BahtTon3 = BudgetUse3 / TonContract3;
      if (req.body.budget_grade === 1) {
        InFactorInputs3 = FactorInputs31;
        InMoney3 = Money31;
        InBudgetTotal3 = InFactorInputs3 + InMoney3;
      } else if (req.body.budget_grade === 2) {
        InFactorInputs3 = FactorInputs32;
        InMoney3 = Money32;
        InBudgetTotal3 = InFactorInputs3 + InMoney3;
      } else if (req.body.budget_grade === 3) {
        InFactorInputs3 = FactorInputs33;
        InMoney3 = Money33;
        InBudgetTotal3 = InFactorInputs3 + InMoney3;
      } else if (req.body.budget_grade === 4) {
        InFactorInputs3 = FactorInputs34;
        InMoney3 = Money34;
        InBudgetTotal3 = InFactorInputs3 + InMoney3;
      } else if (req.body.budget_grade === 5) {
        InFactorInputs3 = FactorInputs35;
        InMoney3 = Money35;
        InBudgetTotal3 = InFactorInputs3 + InMoney3;
      } else {
        InFactorInputs3 = FactorInputs39;
        InMoney3 = Money39;
        InBudgetTotal3 = InFactorInputs3 + InMoney3;
      }
    } else {
      RaiContract3 = 0;
      TonContract3 = 0;
      BudgetUse3 = Number(req.body.promotion3_budget_use || 0);
      InFactorInputs3 = Number(useSums.sumFactorInput3 || 0);
      InMoney3 = Number(useSums.sumMoney3 || 0);
      InBudgetTotal3 = Number(useSums.sumFactorInput3 + useSums.sumMoney3 || 0);
    }

    let BahtTon4 = 0;
    let TonContract4 = 0;
    let BudgetUse4 = 0;
    if (req.body.promotion4_area_contract > 1) {
      RaiContract4 = req.body.promotion4_area_contract;
      TonContract4 = req.body.promotion4_ton_contract;
      if (req.body.promotion4_budget_use < 1) {
        BudgetUse4 = 0;
      } else if (req.body.promotion4_budget_use < 2) {
        BudgetUse4 = req.body.promotion4_area_contract * BudgetTotal4;
      } else {
        BudgetUse4 = req.body.promotion4_budget_use;
      }
      BahtTon4 = BudgetUse4 / TonContract4;
      InFactorInputs4 = FactorInputs4;
      InMoney4 = Money4;
      InBudgetTotal4 = BudgetTotal4;
    } else {
      RaiContract4 = 0;
      TonContract4 = 0;
      BudgetUse4 = Number(req.body.promotion4_budget_use || 0);
      InFactorInputs4 = Number(useSums.sumFactorInput4 || 0);
      InMoney4 = Number(useSums.sumMoney4 || 0);
      InBudgetTotal4 = Number(useSums.sumFactorInput4 + useSums.sumMoney4 || 0);
    }

    let BahtTon5 = 0;
    let TonContract5 = 0;
    let BudgetUse5 = 0;
    if (req.body.promotion5_area_contract > 1) {
      RaiContract5 = req.body.promotion5_area_contract;
      TonContract5 = req.body.promotion5_ton_contract;
      if (req.body.promotion5_budget_use < 1) {
        BudgetUse5 = 0;
      } else if (req.body.promotion5_budget_use < 2) {
        BudgetUse5 = req.body.promotion5_area_contract * BudgetTotal5;
      } else {
        BudgetUse5 = req.body.promotion5_budget_use;
      }
      BahtTon5 = BudgetUse5 / TonContract5;
      InFactorInputs5 = FactorInputs5;
      InMoney5 = Money5;
      InBudgetTotal5 = BudgetTotal5;
    } else {
      RaiContract5 = 0;
      TonContract5 = 0;
      BudgetUse5 = Number(req.body.promotion5_budget_use || 0);
      InFactorInputs5 = Number(useSums.sumFactorInput5 || 0);
      InMoney5 = Number(useSums.sumMoney5 || 0);
      InBudgetTotal5 = Number(useSums.sumFactorInput5 + useSums.sumMoney5 || 0);
    }

    const TonTotal =
      TonContract0 +
      TonContract1 +
      TonContract2 +
      TonContract3 +
      TonContract4 +
      TonContract5;

    let BahtTon6 = 0;
    let TonContract6;
    let BudgetUse6 = 0;
    if (TonTotal > 0 && req.body.promotion6_budget_use >= 0) {
      BudgetUse6 = req.body.promotion6_budget_use;
      BahtTon6 = req.body.promotion6_budget_use / TonTotal;
    } else {
      BudgetUse6 = req.body.promotion6_budget_use;
      BahtTon6 = 0;
    }

    let BahtTon7 = 0;
    let TonContract7;
    let BudgetUse7 = 0;
    if (TonTotal > 0 && req.body.promotion7_budget_use >= 0) {
      BudgetUse7 = req.body.promotion7_budget_use;
      BahtTon7 = req.body.promotion7_budget_use / TonTotal;
    } else {
      BudgetUse7 = req.body.promotion7_budget_use;
      BahtTon7 = 0;
    }
    const debt = await PostgresDataSource.getRepository(HistoryDebt).findOneBy({
      quota: <number>(<unknown>req.body.quota),
      cropYear: req.body.cropYear
    });

    const history = await PostgresDataSource.getRepository(
      HistoryCane
    ).findOneBy({
      quota: <number>(<unknown>req.body.quota),
      cropYear: req.body.cropYear
    });

    // รวมหลักทรัพย์ ที่เป็นทรัพย์สิน
    const securitieSum = await PostgresDataSource.getRepository(Securities)
      .createQueryBuilder('Securities')
      .select('SUM(Securities.appraisalPrice)', 'sum')
      .where('Securities.quota = :id', {
        id: <number>(<unknown>req.body.quota)
      })
      .andWhere('Securities.securitieType <> :person', {
        person: 'ผู้ค้ำประกันแบบมีเลขโควตา'
      })
      .andWhere('Securities.securitieType <> :other', {
        other: 'ผู้ค้ำประกันแบบบุคคลอื่น'
      })
      .getRawOne();

    // รวมมูลค่าบุคคลค้ำประกัน
    const securitiePerson = await PostgresDataSource.getRepository(Securities)
      .createQueryBuilder('Securities')
      .select('SUM(Securities.appraisalPrice)', 'sum')
      .where('Securities.quota = :id', {
        id: <number>(<unknown>req.body.quota)
      })
      .andWhere('Securities.securitieType = :person', {
        person: 'ผู้ค้ำประกันแบบมีเลขโควตา'
      })
      .getRawOne();

    // เขตยืนยันเอกสารเข้ามา ให้ทำการบันทึกประวัติหลักทรัพย์
    if (
      req.body.budget_status.toString() === '01' &&
      req.body.budget_prove.toString() === '00'
    ) {
      // const queryRunner = PostgresDataSource.createQueryRunner();
      // await queryRunner.connect();
      PostgresDataSource.query(
        'DELETE FROM budget_securities WHERE budgetId = @0',
        [<number>(<unknown>id)]
      );
      const securitie = await PostgresDataSource.query(
        'SELECT * FROM securities WHERE cropYear=@0 AND quota =@1 AND securitieType <> @2 ORDER BY id ASC',
        [req.body.cropYear, <number>(<unknown>id), 'อื่น ๆ']
      );

      let newSecurities;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < securitie.length; i++) {
        newSecurities = {
          securitiesId: Number(securitie[i].id),
          cropYear: securitie[i].cropYear,
          quota: securitie[i].quota,
          securitieType: securitie[i].securitieType,
          quotaGuarantor: securitie[i].quotaGuarantor,
          securitieDetail: securitie[i].securitieDetail,
          securitieValue: securitie[i].securitieValue,
          appraisalPrice: securitie[i].appraisalPrice,
          ownership: securitie[i].ownerShip,
          ownerCardId: securitie[i].ownerCardId,
          ownerAddress: securitie[i].ownerAddress,
          ownershipName: securitie[i].ownershipName,
          ownershipName1: securitie[i].ownershipName1,
          ownerCardId1: securitie[i].ownerCardId1,
          ownerAddress1: securitie[i].ownerAddress1,
          ownershipName2: securitie[i].ownershipName2,
          ownerCardId2: securitie[i].ownerCardId2,
          ownerAddress2: securitie[i].ownerAddress2,
          ownershipName3: securitie[i].ownershipName3,
          ownerCardId3: securitie[i].ownerCardId3,
          ownerAddress3: securitie[i].ownerAddress3,
          budgetId: Number(id),
          createdAt: securitie[i].createdAt,
          updatedAt: securitie[i].updatedAt
        };

        PostgresDataSource.createQueryBuilder()
          .update(BudgetSecurities)
          .set(newSecurities)
          .where('securitiesId = :id', { id: Number(securitie[i].id) })
          .execute();
      }
    }

    let updateBudget: any = {};

    const queryRunner = MssqlDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      if (
        req.body.budget_prove.toString() === '00' &&
        (req.body.budget_status.toString() === '01' ||
          req.body.budget_status.toString() === '02')
      ) {
        updateBudget = {
          budget_prove: req.body.budget_prove.toString(),
          budget_status: req.body.budget_status.toString(),
          budget_pass: req.body.budget_pass
        };
        await PostgresDataSource.getRepository(Budgets)
          .createQueryBuilder()
          .update(Budgets)
          .set(updateBudget)
          .where('id = :id', { id })
          .execute();
      } else if (
        req.body.budget_prove.toString() === '01' &&
        req.body.budget_status.toString() === '02'
      ) {
        if (req.body.budget_pass === true) {
          updateBudget = {
            budget_prove: req.body.budget_prove.toString(),
            budget_status: req.body.budget_status.toString(),
            budget_pass: req.body.budget_pass
          };
          await PostgresDataSource.getRepository(Budgets)
            .createQueryBuilder()
            .update(Budgets)
            .set(updateBudget)
            .where('id = :id', { id })
            .execute();
        } else {
          const quotaMcss = await queryRunner.manager.query(
            'SELECT Id FROM Quotas WHERE Code =@0',
            [req.body.quota]
          );

          let Credit00 = 0;
          let Money00 = 0;
          let Credit01 = 0;
          let Money01 = 0;
          let Credit02 = 0;
          let Money02 = 0;
          let Credit03 = 0;
          let Money03 = 0;
          let Credit04 = 0;
          let Money04 = 0;
          let Credit05 = 0;
          let Money05 = 0;
          if (req.body.promotion0_area_contract > 0) {
            if (req.body.promotion0_factor_status.toString() === '01') {
              Credit00 = factorPer0 * BudgetUse0;
              Money00 = BudgetUse0 - Credit00;
            } else if (req.body.promotion0_factor_status.toString() === '02') {
              Money00 = BudgetUse0;
            } else if (req.body.promotion0_factor_status.toString() === '03') {
              Credit00 = BudgetUse0;
            } else {
              Credit00 =
                FactorInputs0 * Number(req.body.promotion0_area_contract);
              Money00 = InMoney0 * Number(req.body.promotion0_area_contract);
            }

            await MssqlDataSource.createQueryBuilder()
              .insert()
              .into(BudgetSeasons)
              .values({
                SeasonYear: req.body.cropYear.substring(2, 4),
                QuotaId: quotaMcss[0].Id,
                CaneSeasonGroupId: 5, // PS MODEL
                ForecastRai: Number(req.body.promotion0_area_contract),
                ForecastTon: Number(req.body.promotion0_ton_contract),
                Request: Number(BudgetUse0),
                Money: Number(Money00),
                Credit: Number(Credit00),
                CreatedBy: 1,
                CreatedDate: new Date(),
                ApprovedBy: 1,
                ApprovedDate: new Date(),
                Status: 5,
                BudgetID: Number(req.body.id)
              })
              .execute();
          } else if (
            req.body.promotion0_area_contract === 0 &&
            req.body.promotion0_budget_use > 100
          ) {
            if (req.body.promotion0_factor_status.toString() === '01') {
              Credit00 = factorPer0 * BudgetUse0;
              Money00 = BudgetUse0 - Credit00;
            } else if (req.body.promotion0_factor_status.toString() === '02') {
              Money00 = BudgetUse0;
            } else if (req.body.promotion0_factor_status.toString() === '03') {
              Credit00 = BudgetUse0;
            } else {
              Credit00 = FactorInputs0 * Number(useSums.sumArea0);
              Money00 = InMoney0 * Number(useSums.sumArea0);
            }
            await MssqlDataSource.createQueryBuilder()
              .insert()
              .into(BudgetSeasons)
              .values({
                SeasonYear: req.body.cropYear.substring(2, 4),
                QuotaId: quotaMcss[0].Id,
                CaneSeasonGroupId: 5, // PS MODEL
                ForecastRai: Number(0),
                ForecastTon: Number(0),
                Request: Number(BudgetUse0),
                Money: Number(Money00),
                Credit: Number(Credit00),
                CreatedBy: 1,
                CreatedDate: new Date(),
                ApprovedBy: 1,
                ApprovedDate: new Date(),
                Status: 5,
                BudgetID: Number(req.body.id)
              })
              .execute();
          }
          if (req.body.promotion1_area_contract > 0) {
            if (req.body.promotion1_factor_status.toString() === '01') {
              Credit01 = factorPer1 * BudgetUse1;
              Money01 = BudgetUse1 - Credit01;
            } else if (req.body.promotion1_factor_status.toString() === '02') {
              Money01 = BudgetUse1;
            } else if (req.body.promotion1_factor_status.toString() === '03') {
              Credit01 = BudgetUse1;
            } else {
              Credit01 =
                FactorInputs1 * Number(req.body.promotion1_area_contract);
              Money01 = InMoney1 * Number(req.body.promotion1_area_contract);
            }

            await MssqlDataSource.createQueryBuilder()
              .insert()
              .into(BudgetSeasons)
              .values({
                SeasonYear: req.body.cropYear.substring(2, 4),
                QuotaId: quotaMcss[0].Id,
                CaneSeasonGroupId: 1, // ปลายฝน
                ForecastRai: Number(req.body.promotion1_area_contract),
                ForecastTon: Number(req.body.promotion1_ton_contract),
                Request: Number(BudgetUse1),
                Money: Number(Money01),
                Credit: Number(Credit01),
                CreatedBy: 1,
                CreatedDate: new Date(),
                ApprovedBy: 1,
                ApprovedDate: new Date(),
                Status: 5,
                BudgetID: Number(req.body.id)
              })
              .execute();
          } else if (
            req.body.promotion1_area_contract === 0 &&
            req.body.promotion1_budget_use > 100
          ) {
            if (req.body.promotion1_factor_status.toString() === '01') {
              Credit01 = factorPer1 * BudgetUse1;
              Money01 = BudgetUse1 - Credit01;
            } else if (req.body.promotion1_factor_status.toString() === '02') {
              Money01 = BudgetUse1;
            } else if (req.body.promotion1_factor_status.toString() === '03') {
              Credit01 = BudgetUse1;
            } else {
              Credit01 = FactorInputs1 * Number(useSums.sumArea1);
              Money01 = InMoney1 * Number(useSums.sumArea1);
            }
            await MssqlDataSource.createQueryBuilder()
              .insert()
              .into(BudgetSeasons)
              .values({
                SeasonYear: req.body.cropYear.substring(2, 4),
                QuotaId: quotaMcss[0].Id,
                CaneSeasonGroupId: 1, // ปลายฝน
                ForecastRai: Number(0),
                ForecastTon: Number(0),
                Request: Number(BudgetUse1),
                Money: Number(Money01),
                Credit: Number(Credit01),
                CreatedBy: 1,
                CreatedDate: new Date(),
                ApprovedBy: 1,
                ApprovedDate: new Date(),
                Status: 5,
                BudgetID: Number(req.body.id)
              })
              .execute();
          }
          if (req.body.promotion2_area_contract > 0) {
            if (req.body.promotion2_factor_status.toString() === '01') {
              Credit02 = factorPer2 * BudgetUse2;
              Money02 = BudgetUse2 - Credit02;
            } else if (req.body.promotion2_factor_status.toString() === '02') {
              Money02 = BudgetUse2;
            } else if (req.body.promotion2_factor_status.toString() === '03') {
              Credit02 = BudgetUse2;
            } else {
              Credit02 =
                FactorInputs2 * Number(req.body.promotion2_area_contract);
              Money02 = InMoney2 * Number(req.body.promotion2_area_contract);
            }
            await MssqlDataSource.createQueryBuilder()
              .insert()
              .into(BudgetSeasons)
              .values({
                SeasonYear: req.body.cropYear.substring(2, 4),
                QuotaId: quotaMcss[0].Id,
                CaneSeasonGroupId: 1, // อ้อยปลายฝน
                ForecastRai: Number(req.body.promotion2_area_contract),
                ForecastTon: Number(req.body.promotion2_ton_contract),
                Request: Number(BudgetUse2),
                Money: Number(Money02),
                Credit: Number(Credit02),
                CreatedBy: 1,
                CreatedDate: new Date(),
                ApprovedBy: 1,
                ApprovedDate: new Date(),
                Status: 5,
                BudgetID: Number(req.body.id)
              })
              .execute();
          } else if (
            req.body.promotion2_area_contract === 0 &&
            req.body.promotion2_budget_use > 100
          ) {
            if (req.body.promotion2_factor_status.toString() === '01') {
              Credit02 = factorPer2 * BudgetUse2;
              Money02 = BudgetUse2 - Credit02;
            } else if (req.body.promotion2_factor_status.toString() === '02') {
              Money02 = BudgetUse2;
            } else if (req.body.promotion2_factor_status.toString() === '03') {
              Credit02 = BudgetUse2;
            } else {
              Credit02 = FactorInputs2 * Number(useSums.sumArea2);
              Money02 = InMoney2 * Number(useSums.sumArea2);
            }
            await MssqlDataSource.createQueryBuilder()
              .insert()
              .into(BudgetSeasons)
              .values({
                SeasonYear: req.body.cropYear.substring(2, 4),
                QuotaId: quotaMcss[0].Id,
                CaneSeasonGroupId: 1, // อ้อยปลายฝน
                ForecastRai: Number(0),
                ForecastTon: Number(0),
                Request: Number(BudgetUse2),
                Money: Number(Money02),
                Credit: Number(Credit02),
                CreatedBy: 1,
                CreatedDate: new Date(),
                ApprovedBy: 1,
                ApprovedDate: new Date(),
                Status: 5,
                BudgetID: Number(req.body.id)
              })
              .execute();
          }
          if (req.body.promotion3_area_contract > 0) {
            if (req.body.promotion3_factor_status.toString() === '01') {
              if (req.body.budget_grade === 1) {
                Credit03 = factorPer31 * BudgetUse3;
              } else if (req.body.budget_grade === 2) {
                Credit03 = factorPer32 * BudgetUse3;
              } else if (req.body.budget_grade === 3) {
                Credit03 = factorPer33 * BudgetUse3;
              } else if (req.body.budget_grade === 4) {
                Credit03 = factorPer34 * BudgetUse3;
              } else if (req.body.budget_grade === 5) {
                Credit03 = factorPer35 * BudgetUse3;
              } else {
                Credit03 = factorPer39 * BudgetUse3;
              }
              Money03 = BudgetUse3 - Credit03;
            } else if (req.body.promotion3_factor_status.toString() === '02') {
              Money03 = BudgetUse3;
            } else if (req.body.promotion3_factor_status.toString() === '03') {
              Credit03 = BudgetUse3;
            } else {
              Credit03 =
                FactorInputs3 * Number(req.body.promotion3_area_contract);
              Money03 = InMoney2 * Number(req.body.promotion3_area_contract);
            }

            await MssqlDataSource.createQueryBuilder()
              .insert()
              .into(BudgetSeasons)
              .values({
                SeasonYear: req.body.cropYear.substring(2, 4),
                QuotaId: quotaMcss[0].Id,
                CaneSeasonGroupId: 3, // อ้อยตอ
                ForecastRai: Number(req.body.promotion3_area_contract),
                ForecastTon: Number(req.body.promotion3_ton_contract),
                Request: Number(BudgetUse3),
                Money: Number(Money03),
                Credit: Number(Credit03),
                CreatedBy: 1,
                CreatedDate: new Date(),
                ApprovedBy: 1,
                ApprovedDate: new Date(),
                Status: 5,
                BudgetID: Number(req.body.id)
              })
              .execute();
          } else if (
            req.body.promotion3_area_contract === 0 &&
            req.body.promotion3_budget_use > 100
          ) {
            if (req.body.promotion3_factor_status.toString() === '01') {
              if (req.body.budget_grade === 1) {
                Credit03 = factorPer31 * BudgetUse3;
              } else if (req.body.budget_grade === 2) {
                Credit03 = factorPer32 * BudgetUse3;
              } else if (req.body.budget_grade === 3) {
                Credit03 = factorPer33 * BudgetUse3;
              } else if (req.body.budget_grade === 4) {
                Credit03 = factorPer34 * BudgetUse3;
              } else if (req.body.budget_grade === 5) {
                Credit03 = factorPer35 * BudgetUse3;
              } else {
                Credit03 = factorPer39 * BudgetUse3;
              }
              Money03 = BudgetUse3 - Credit03;
            } else if (req.body.promotion3_factor_status.toString() === '02') {
              Money03 = BudgetUse3;
            } else if (req.body.promotion3_factor_status.toString() === '03') {
              Credit03 = BudgetUse3;
            } else {
              Credit03 = FactorInputs3 * Number(useSums.sumArea3);
              Money03 = InMoney3 * Number(useSums.sumArea3);
            }
            await MssqlDataSource.createQueryBuilder()
              .insert()
              .into(BudgetSeasons)
              .values({
                SeasonYear: req.body.cropYear.substring(2, 4),
                QuotaId: quotaMcss[0].Id,
                CaneSeasonGroupId: 3, // อ้อยตอ
                ForecastRai: Number(0),
                ForecastTon: Number(0),
                Request: Number(BudgetUse3),
                Money: Number(Money03),
                Credit: Number(Credit03),
                CreatedBy: 1,
                CreatedDate: new Date(),
                ApprovedBy: 1,
                ApprovedDate: new Date(),
                Status: 5,
                BudgetID: Number(req.body.id)
              })
              .execute();
          }
          if (req.body.promotion4_area_contract > 0) {
            if (req.body.promotion4_factor_status.toString() === '01') {
              Credit04 = factorPer4 * BudgetUse4;
              Money04 = BudgetUse4 - Credit04;
            } else if (req.body.promotion4_factor_status.toString() === '02') {
              Money04 = BudgetUse4;
            } else if (req.body.promotion4_factor_status.toString() === '03') {
              Credit04 = BudgetUse4;
            } else {
              Credit04 =
                FactorInputs4 * Number(req.body.promotion4_area_contract);
              Money04 = InMoney4 * Number(req.body.promotion4_area_contract);
            }

            await MssqlDataSource.createQueryBuilder()
              .insert()
              .into(BudgetSeasons)
              .values({
                SeasonYear: req.body.cropYear.substring(2, 4),
                QuotaId: quotaMcss[0].Id,
                CaneSeasonGroupId: 2, // อ้อยต้นฝน
                ForecastRai: Number(req.body.promotion4_area_contract),
                ForecastTon: Number(req.body.promotion4_ton_contract),
                Request: Number(BudgetUse4),
                Money: Number(Money04),
                Credit: Number(Credit04),
                CreatedBy: 1,
                CreatedDate: new Date(),
                ApprovedBy: 1,
                ApprovedDate: new Date(),
                Status: 5,
                BudgetID: Number(req.body.id)
              })
              .execute();
          } else if (
            req.body.promotion4_area_contract === 0 &&
            req.body.promotion4_budget_use > 100
          ) {
            if (req.body.promotion4_factor_status.toString() === '01') {
              Credit04 = factorPer4 * BudgetUse4;
              Money04 = BudgetUse4 - Credit04;
            } else if (req.body.promotion4_factor_status.toString() === '02') {
              Money04 = BudgetUse4;
            } else if (req.body.promotion4_factor_status.toString() === '03') {
              Credit04 = BudgetUse4;
            } else {
              Credit04 = FactorInputs4 * Number(useSums.sumArea4);
              Money04 = InMoney4 * Number(useSums.sumArea4);
            }
            await MssqlDataSource.createQueryBuilder()
              .insert()
              .into(BudgetSeasons)
              .values({
                SeasonYear: req.body.cropYear.substring(2, 4),
                QuotaId: quotaMcss[0].Id,
                CaneSeasonGroupId: 2, // อ้อยต้นฝน
                ForecastRai: Number(0),
                ForecastTon: Number(0),
                Request: Number(BudgetUse4),
                Money: Number(Money04),
                Credit: Number(Credit04),
                CreatedBy: 1,
                CreatedDate: new Date(),
                ApprovedBy: 1,
                ApprovedDate: new Date(),
                Status: 5,
                BudgetID: Number(req.body.id)
              })
              .execute();
          }

          if (req.body.promotion5_area_contract > 0) {
            if (req.body.promotion5_factor_status.toString() === '01') {
              Credit05 = factorPer5 * BudgetUse5;
              Money05 = BudgetUse5 - Credit05;
            } else if (req.body.promotion5_factor_status.toString() === '02') {
              Money05 = BudgetUse5;
            } else if (req.body.promotion5_factor_status.toString() === '03') {
              Credit05 = BudgetUse5;
            } else {
              Credit05 =
                FactorInputs5 * Number(req.body.promotion5_area_contract);
              Money05 = InMoney5 * Number(req.body.promotion5_area_contract);
            }

            await MssqlDataSource.createQueryBuilder()
              .insert()
              .into(BudgetSeasons)
              .values({
                SeasonYear: req.body.cropYear.substring(2, 4),
                QuotaId: quotaMcss[0].Id,
                CaneSeasonGroupId: 4, // อ้อยอินทรีย์
                ForecastRai: Number(req.body.promotion5_area_contract),
                ForecastTon: Number(req.body.promotion5_ton_contract),
                Request: Number(BudgetUse5),
                Money: Number(Money05),
                Credit: Number(Credit05),
                CreatedBy: 1,
                CreatedDate: new Date(),
                ApprovedBy: 1,
                ApprovedDate: new Date(),
                Status: 5,
                BudgetID: Number(req.body.id)
              })
              .execute();
          } else if (
            req.body.promotion5_area_contract === 0 &&
            req.body.promotion5_budget_use > 100
          ) {
            if (req.body.promotion5_factor_status.toString() === '01') {
              Credit05 = factorPer5 * BudgetUse5;
              Money05 = BudgetUse5 - Credit05;
            } else if (req.body.promotion5_factor_status.toString() === '02') {
              Money05 = BudgetUse5;
            } else if (req.body.promotion5_factor_status.toString() === '03') {
              Credit05 = BudgetUse5;
            } else {
              Credit05 = FactorInputs5 * Number(useSums.sumArea5);
              Money05 = InMoney5 * Number(useSums.sumArea5);
            }
            await MssqlDataSource.createQueryBuilder()
              .insert()
              .into(BudgetSeasons)
              .values({
                SeasonYear: req.body.cropYear.substring(2, 4),
                QuotaId: quotaMcss[0].Id,
                CaneSeasonGroupId: 4, // อ้อยอินทรีย์
                ForecastRai: Number(0),
                ForecastTon: Number(0),
                Request: Number(BudgetUse5),
                Money: Number(Money05),
                Credit: Number(Credit05),
                CreatedBy: 1,
                CreatedDate: new Date(),
                ApprovedBy: 1,
                ApprovedDate: new Date(),
                Status: 5,
                BudgetID: Number(req.body.id)
              })
              .execute();
          }

          updateBudget = {
            budget_prove: req.body.budget_prove.toString(),
            DueNum: req.body.DueNum || null,
            DueRai: req.body.DueRai || null,
            DueTon: req.body.DueTon || null
          };
          await PostgresDataSource.getRepository(Budgets)
            .createQueryBuilder()
            .update(Budgets)
            .set(updateBudget)
            .where('id = :id', { id })
            .execute();
        }
      } else {
        const crop1 = req.body.cropYear.substring(2, 4);
        const crop2 = `25${crop1}`;
        const dueEnd: number | any = new Date(`${Number(crop2) - 542}-03-07`);

        // eslint-disable-next-line no-console
        // console.log(dueEnd);

        let increase: null | any;
        let totalIncrease: number = 0;
        // คิดดอกเบี้ยตาวัน
        if (req.body.ProjectInspectionDate) {
          increase = new Date(req.body.ProjectInspectionDate);
          const diffTime = Math.abs(increase - dueEnd);
          const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

          totalIncrease =
            ((req.body.ProjectCapital * 4) / 100 / 365) * diffDays;
        }

        updateBudget = {
          budget_status: req.body.budget_status.toString(),
          cropYear: req.body.cropYear.toString(),
          budget_prove: req.body.budget_prove.toString(),
          quota: req.body.quota,
          apporv_date: req.body.apporv_date || dayTH,
          zone: req.body.zone.toString(),
          subZone: req.body.subZone.toString(),
          manager: req.body.manager,
          securitiesValue: Number(securitieSum.sum || 0),
          guarantorValue: Number(securitiePerson.sum || 0),
          request_num: req.body.request_num,
          ton_contract: req.body.ton_contract,
          add_ton_contract: req.body.add_ton_contract,
          total_ton_contract: req.body.total_ton_contract,
          increaseDecreaseContract:
            Number(req.body.increaseDecreaseContract) || null,
          //
          promotion0_area_contract: Number(RaiContract0),
          promotion0_ton_contract: req.body.promotion0_ton_contract,
          promotion0_money: Number(InMoney0),
          promotion0_factor_inputs: Number(InFactorInputs0),
          promotion0_factor_status: req.body.promotion0_factor_status,
          promotion0_budget_total: Number(InBudgetTotal0),
          promotion0_budget_approved: Number(0),
          promotion0_budget_use: Number(BudgetUse0),
          promotion0_baht_ton: Number(BahtTon0),
          //
          promotion1_area_contract: Number(RaiContract1),
          promotion1_ton_contract: req.body.promotion1_ton_contract, // Number(TonContract1),
          promotion1_money: Number(InMoney1),
          promotion1_factor_inputs: Number(InFactorInputs1),
          promotion1_factor_status: req.body.promotion1_factor_status,
          promotion1_budget_total: Number(InBudgetTotal1),
          promotion1_budget_approved: Number(0),
          promotion1_budget_use: Number(BudgetUse1),
          promotion1_baht_ton: Number(BahtTon1),
          //
          promotion2_area_contract: Number(RaiContract2),
          promotion2_ton_contract: req.body.promotion2_ton_contract, // Number(TonContract2),
          promotion2_money: Number(InMoney2),
          promotion2_factor_inputs: Number(InFactorInputs2),
          promotion2_factor_status: req.body.promotion2_factor_status,
          promotion2_budget_total: Number(InBudgetTotal2),
          promotion2_budget_approved: Number(0),
          promotion2_budget_use: Number(BudgetUse2),
          promotion2_baht_ton: Number(BahtTon2),
          //
          promotion3_area_contract: Number(RaiContract3),
          promotion3_ton_contract: req.body.promotion3_ton_contract, // Number(TonContract3),
          promotion3_money: Number(InMoney3),
          promotion3_factor_inputs: Number(InFactorInputs3),
          promotion3_factor_status: req.body.promotion3_factor_status,
          promotion3_budget_total: Number(InBudgetTotal3),
          promotion3_budget_approved: Number(0),
          promotion3_budget_use: Number(BudgetUse3),
          promotion3_baht_ton: Number(BahtTon3),
          //
          promotion4_area_contract: Number(RaiContract4),
          promotion4_ton_contract: req.body.promotion4_ton_contract, // Number(TonContract4),
          promotion4_money: Number(InMoney4),
          promotion4_factor_inputs: Number(InFactorInputs4),
          promotion4_factor_status: req.body.promotion4_factor_status,
          promotion4_budget_total: Number(InBudgetTotal4),
          promotion4_budget_approved: Number(0),
          promotion4_budget_use: Number(BudgetUse4),
          promotion4_baht_ton: Number(BahtTon4),
          //
          promotion5_area_contract: Number(RaiContract5),
          promotion5_ton_contract: req.body.promotion5_ton_contract, // Number(TonContract5),
          promotion5_money: Number(InMoney5),
          promotion5_factor_inputs: Number(InFactorInputs5),
          promotion5_factor_status: req.body.promotion5_factor_status,
          promotion5_budget_total: Number(InBudgetTotal5),
          promotion5_budget_approved: Number(0),
          promotion5_budget_use: Number(BudgetUse5),
          promotion5_baht_ton: Number(BahtTon5),
          //
          promotion6_area_contract: req.body.promotion6_area_contract,
          promotion6_ton_contract: Number(TonContract6),
          promotion6_money: Number(Money6),
          promotion6_factor_inputs: Number(FactorInputs6),
          promotion6_budget_total: Number(BudgetTotal6),
          promotion6_budget_approved: Number(0),
          promotion6_budget_use: Number(BudgetUse6),
          promotion6_baht_ton: Number(BahtTon6),
          //
          promotion7_area_contract: req.body.promotion7_area_contract,
          promotion7_ton_contract: Number(TonContract7),
          promotion7_money: Number(Money7),
          promotion7_factor_inputs: Number(FactorInputs7),
          promotion7_budget_total: Number(BudgetTotal7),
          promotion7_budget_approved: Number(0),
          promotion7_project_type: req.body.promotion7_project_type || null,
          promotion7_budget_use: Number(BudgetUse7),
          promotion7_baht_ton: Number(BahtTon7),
          //
          debt_date: debt?.dateDept,
          debt1_crop_due: debt?.debt1_crop_due,
          deduct1_crop_due: debt?.deduct1_crop_due,
          debt1_overdue_due: debt?.debt1_overdue_due,
          project1_debt_crop_due: debt?.project1_debt_crop_due,
          project1_deduct_crop_due: debt?.project1_deduct_crop_due,
          project1_deduct_end_due: debt?.project1_deduct_end_due,
          deduct1_total: debt?.deduct1_total,
          deduct1_due_previous: debt?.deduct1_due_previous,
          deduct1_due_last: debt?.deduct1_due_last,
          debt2_crop_due: debt?.debt2_crop_due,
          deduct2_crop_due: debt?.deduct2_crop_due,
          debt2_overdue_due: debt?.debt2_overdue_due,
          project2_debt_crop_due: debt?.project2_debt_crop_due,
          project2_deduct_crop_due: debt?.project2_deduct_crop_due,
          project2_deduct_end_due: debt?.project2_deduct_end_due,
          deduct2_total: debt?.deduct2_total,
          deduct2_due_previous: debt?.deduct2_due_previous,
          deduct2_due_last: debt?.deduct2_due_last,
          debt3_crop_due: debt?.debt3_crop_due,
          deduct3_crop_due: debt?.deduct3_crop_due,
          debt3_overdue_due: debt?.debt3_overdue_due,
          project3_debt_crop_due: debt?.project3_debt_crop_due,
          project3_deduct_crop_due: debt?.project3_deduct_crop_due,
          project3_deduct_end_due: debt?.project3_deduct_end_due,
          deduct3_total: debt?.deduct3_total,
          deduct3_due_previous: debt?.deduct3_due_previous,
          deduct3_due_last: debt?.deduct3_due_last,
          debt4_crop_due: debt?.debt4_crop_due,
          deduct4_crop_due: debt?.deduct4_crop_due,
          debt4_overdue_due: debt?.debt4_overdue_due,
          project4_debt_crop_due: debt?.project4_debt_crop_due,
          project4_deduct_crop_due: debt?.project4_deduct_crop_due,
          project4_deduct_end_due: debt?.project4_deduct_end_due,
          deduct4_total: debt?.deduct4_total,
          deduct4_due_previous: debt?.deduct4_due_previous,
          deduct4_due_last: debt?.deduct4_due_last,
          avg_baht_area: req.body.avg_baht_area,
          // ประวัติส่งอ้อย
          budget_grade: history?.budget_grade || 9,
          history1_ton_contract: history?.history1_ton_contract,
          history1_ton_real: history?.history1_ton_real,
          history1_ton_per: Number(history?.history1_ton_per),
          history1_grad: history?.history1_grad || '-',
          history1_money: history?.history1_money,
          history1_cane_ton: history?.history1_cane_ton,
          history1_canetype01: history?.history1_canetype01,
          history1_canetype02: history?.history1_canetype02,
          history1_canetype03: history?.history1_canetype03,
          history1_canetype04: history?.history1_canetype04,
          history1_canetype05: history?.history1_canetype05,
          history1_canetype06: history?.history1_canetype06,
          history2_ton_contract: history?.history2_ton_contract,
          history2_ton_real: history?.history2_ton_real,
          history2_ton_per: history?.history2_ton_per,
          history2_grad: history?.history2_grad || '-',
          history2_money: history?.history2_money,
          history2_cane_ton: history?.history2_cane_ton,
          history2_canetype01: history?.history2_canetype01,
          history2_canetype02: history?.history2_canetype02,
          history2_canetype03: history?.history2_canetype03,
          history2_canetype04: history?.history2_canetype04,
          history2_canetype05: history?.history2_canetype05,
          history2_canetype06: history?.history2_canetype06,
          history3_ton_contract: history?.history3_ton_contract,
          history3_ton_real: history?.history3_ton_real,
          history3_ton_per: history?.history3_ton_per,
          history3_grad: history?.history3_grad || '-',
          history3_money: history?.history3_money,
          history3_cane_ton: history?.history3_cane_ton,
          history3_canetype01: history?.history3_canetype01,
          history3_canetype02: history?.history3_canetype02,
          history3_canetype03: history?.history3_canetype03,
          history3_canetype04: history?.history3_canetype04,
          history3_canetype05: history?.history3_canetype05,
          history3_canetype06: history?.history3_canetype06,
          history4_ton_contract: history?.history4_ton_contract,
          history4_ton_real: history?.history4_ton_real,
          history4_ton_per: history?.history4_ton_per,
          history4_grad: history?.history4_grad || '-',
          history4_money: history?.history4_money,
          history4_cane_ton: history?.history4_cane_ton,
          history4_canetype01: history?.history4_canetype01,
          history4_canetype02: history?.history4_canetype02,
          history4_canetype03: history?.history4_canetype03,
          history4_canetype04: history?.history4_canetype04,
          history4_canetype05: history?.history4_canetype05,
          history4_canetype06: history?.history4_canetype06,
          Due1: req.body.Due1 || null,
          Due2: req.body.Due2 || null,
          Due3: req.body.Due3 || null,
          Due4: req.body.Due4 || null,
          Due5: req.body.Due5 || null,
          Due6: req.body.Due6 || null,
          ContractYear1: req.body.ContractYear1 || null,
          ContractYear2: req.body.ContractYear2 || null,
          ContractYear3: req.body.ContractYear3 || null,
          ContractYear4: req.body.ContractYear4 || null,
          ContractYear5: req.body.ContractYear5 || null,
          ContractYear6: req.body.ContractYear6 || null,
          projectDoc: req.body.projectDoc || null,
          projectAmount: req.body.projectAmount || null,
          ProjectInterest: Math.ceil(totalIncrease) || null,
          ProjectCapital: req.body.ProjectCapital || null,
          ProjectInspectionDate: increase || null,
          DueNum: req.body.DueNum || null,
          DueRai: req.body.DueRai || null,
          DueTon: req.body.DueTon || null
          // userUpdate: req.body.userUpdate || null
        };
      }

      await PostgresDataSource.getRepository(Budgets)
        .createQueryBuilder()
        .update(Budgets)
        .set(updateBudget)
        .where('id = :id', { id })
        .execute();
      // }

      res.locals = res
        .status(200)
        .json({ updatedAt: new Date(), data: updateBudget });
      await queryRunner.commitTransaction();
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err: any) {
      next(err);
      await queryRunner.rollbackTransaction();
    }
  }

  public async deleteBudget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    try {
      await PostgresDataSource.getRepository(Budgets).softDelete({
        id: <number>(<unknown>id)
      });

      res.locals = res.status(200).json({ deletedAt: new Date() });
      responsehandler.send(res);
    } catch (err: any) {
      next(err);
    }
  }

  public async deleteBudgetAll(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = PostgresDataSource.createQueryRunner();
    queryRunner.connect();
    try {
      // const result = await queryRunner.manager.query('DROP TABLE budgets');
      await queryRunner.manager.query('DELETE FROM budgets');
      await queryRunner.manager.query(`DBCC CHECKIDENT ('budgets', RESEED, 0)`);
      res.locals = res.json({ msg: 'delete Budgets' });
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err: any) {
      next(err);
      // eslint-disable-next-line no-console
      await queryRunner.release();
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
