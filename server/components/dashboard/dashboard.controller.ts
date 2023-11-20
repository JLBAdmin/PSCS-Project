import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { Brackets } from 'typeorm/query-builder/Brackets';

import ApiError from '../../abstractions/ApiError';
import { PostgresDataSource } from '../../data-source';
import { Budgets } from '../../entity/pgsql/pg.budget';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';

export default class DashboardController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/dashboard', this.router);
    this.router.get('/get', this.getDashboard);
    this.router.get('/request', this.getRequest);
    this.router.get('/approve', this.getApprove);
    this.router.get('/project', this.getProject);
    this.router.get('/project-prove', this.getProjectProve);
    this.router.get('/error', this.getError);
  }

  // eslint-disable-next-line class-methods-use-this
  public async getDashboard(_req: Request, res: Response): Promise<void> {
    //  const { id }: any = req.params;
    const useSums: any = await PostgresDataSource.getRepository(Budgets)
      .createQueryBuilder('Budgets')
      .select('SUM(Budgets.promotion0_budget_use)', 'sumUse0')
      .addSelect('SUM(Budgets.promotion1_budget_use)', 'sumUse1')
      .addSelect('SUM(Budgets.promotion2_budget_use)', 'sumUse2')
      .addSelect('SUM(Budgets.promotion3_budget_use)', 'sumUse3')
      .addSelect('SUM(Budgets.promotion4_budget_use)', 'sumUse4')
      .addSelect('SUM(Budgets.promotion5_budget_use)', 'sumUse5')
      .addSelect('SUM(Budgets.promotion6_budget_use)', 'sumUse6')
      .addSelect('SUM(Budgets.promotion7_budget_use)', 'sumUse7')
      .addSelect('SUM(Budgets.promotion0_ton_contract)', 'sumTon0')
      .addSelect('SUM(Budgets.promotion1_ton_contract)', 'sumTon1')
      .addSelect('SUM(Budgets.promotion2_ton_contract)', 'sumTon2')
      .addSelect('SUM(Budgets.promotion3_ton_contract)', 'sumTon3')
      .addSelect('SUM(Budgets.promotion4_ton_contract)', 'sumTon4')
      .addSelect('SUM(Budgets.promotion5_ton_contract)', 'sumTon5')
      .addSelect('SUM(Budgets.promotion6_baht_ton)', 'sumBahtTon6')
      .addSelect('SUM(Budgets.promotion7_baht_ton)', 'sumBahtTon7')
      .where('Budgets.deletedAt IS NULL')
      // .andWhere('Budgets.budget_prove = :prove', { prove: '01' })
      // .andWhere('Budgets.request_num < :num', { num: <number>(<unknown>reqs) })
      // .groupBy("user.id")
      // .getRawMany();
      .getRawOne();
    res.locals.data = useSums;
    responsehandler.send(res);
  }

  // eslint-disable-next-line class-methods-use-this
  public async getRequest(_req: Request, res: Response): Promise<void> {
    //  const { id }: any = req.params;
    const useSums: any = await PostgresDataSource.getRepository(Budgets)
      .createQueryBuilder('Budgets')
      .select('SUM(Budgets.promotion0_budget_use)', 'sumUse0')
      .addSelect('SUM(Budgets.promotion1_budget_use)', 'sumUse1')
      .addSelect('SUM(Budgets.promotion2_budget_use)', 'sumUse2')
      .addSelect('SUM(Budgets.promotion3_budget_use)', 'sumUse3')
      .addSelect('SUM(Budgets.promotion4_budget_use)', 'sumUse4')
      .addSelect('SUM(Budgets.promotion5_budget_use)', 'sumUse5')
      .addSelect('SUM(Budgets.promotion6_budget_use)', 'sumUse6')
      .addSelect('SUM(Budgets.promotion7_budget_use)', 'sumUse7')
      .addSelect('SUM(Budgets.promotion0_ton_contract)', 'sumTon0')
      .addSelect('SUM(Budgets.promotion1_ton_contract)', 'sumTon1')
      .addSelect('SUM(Budgets.promotion2_ton_contract)', 'sumTon2')
      .addSelect('SUM(Budgets.promotion3_ton_contract)', 'sumTon3')
      .addSelect('SUM(Budgets.promotion4_ton_contract)', 'sumTon4')
      .addSelect('SUM(Budgets.promotion5_ton_contract)', 'sumTon5')
      .addSelect('SUM(Budgets.promotion6_baht_ton)', 'sumBahtTon6')
      .addSelect('SUM(Budgets.promotion7_baht_ton)', 'sumBahtTon7')
      .where('Budgets.deletedAt IS NULL')
      // .where('Budgets.quota = :id', { id: <number>(<unknown>id) })
      // .andWhere('Budgets.budget_prove = :prove', { prove: '01' })
      // .andWhere('Budgets.request_num < :num', { num: <number>(<unknown>reqs) })
      // .groupBy("user.id")
      // .getRawMany();
      .getRawOne();
    res.locals.data = useSums;
    responsehandler.send(res);
  }

  // eslint-disable-next-line class-methods-use-this
  public async getApprove(_req: Request, res: Response): Promise<void> {
    //  const { id }: any = req.params;
    const provSums: any = await PostgresDataSource.getRepository(Budgets)
      .createQueryBuilder('Budgets')
      .select('SUM(Budgets.promotion0_budget_use)', 'sumUse0')
      .addSelect('SUM(Budgets.promotion1_budget_use)', 'sumUse1')
      .addSelect('SUM(Budgets.promotion2_budget_use)', 'sumUse2')
      .addSelect('SUM(Budgets.promotion3_budget_use)', 'sumUse3')
      .addSelect('SUM(Budgets.promotion4_budget_use)', 'sumUse4')
      .addSelect('SUM(Budgets.promotion5_budget_use)', 'sumUse5')
      .addSelect('SUM(Budgets.promotion6_budget_use)', 'sumUse6')
      .addSelect('SUM(Budgets.promotion7_budget_use)', 'sumUse7')
      .addSelect('SUM(Budgets.promotion0_area_contract)', 'sumArea0')
      .addSelect('SUM(Budgets.promotion1_area_contract)', 'sumArea1')
      .addSelect('SUM(Budgets.promotion2_area_contract)', 'sumArea2')
      .addSelect('SUM(Budgets.promotion3_area_contract)', 'sumArea3')
      .addSelect('SUM(Budgets.promotion4_area_contract)', 'sumArea4')
      .addSelect('SUM(Budgets.promotion5_area_contract)', 'sumArea5')
      .addSelect('SUM(Budgets.promotion0_ton_contract)', 'sumTon0')
      .addSelect('SUM(Budgets.promotion1_ton_contract)', 'sumTon1')
      .addSelect('SUM(Budgets.promotion2_ton_contract)', 'sumTon2')
      .addSelect('SUM(Budgets.promotion3_ton_contract)', 'sumTon3')
      .addSelect('SUM(Budgets.promotion4_ton_contract)', 'sumTon4')
      .addSelect('SUM(Budgets.promotion5_ton_contract)', 'sumTon5')
      .addSelect('SUM(Budgets.promotion6_baht_ton)', 'sumBahtTon6')
      .addSelect('SUM(Budgets.promotion7_baht_ton)', 'sumBahtTon7')
      // .where('Budgets.quota = :id', { id: <number>(<unknown>id) })
      .where('Budgets.budget_prove = :prove', { prove: '01' })
      .andWhere('Budgets.deletedAt IS NULL')
      // .andWhere('Budgets.request_num < :num', { num: <number>(<unknown>reqs) })
      // .groupBy("user.id")
      // .getRawMany();
      .getRawOne();
    res.locals.data = provSums;
    responsehandler.send(res);
  }

  // eslint-disable-next-line class-methods-use-this
  public async getProject(_req: Request, res: Response): Promise<void> {
    //  const { id }: any = req.params;
    const useSums: any = await PostgresDataSource.getRepository(Budgets)
      .createQueryBuilder('Budgets')
      .select('SUM(Budgets.promotion0_budget_use)', 'sumUse0')
      .addSelect('SUM(Budgets.promotion1_budget_use)', 'sumUse1')
      .addSelect('SUM(Budgets.promotion2_budget_use)', 'sumUse2')
      .addSelect('SUM(Budgets.promotion3_budget_use)', 'sumUse3')
      .addSelect('SUM(Budgets.promotion4_budget_use)', 'sumUse4')
      .addSelect('SUM(Budgets.promotion5_budget_use)', 'sumUse5')
      .addSelect('SUM(Budgets.promotion6_budget_use)', 'sumUse6')
      .addSelect('SUM(Budgets.promotion7_budget_use)', 'sumUse7')
      .addSelect('SUM(Budgets.promotion0_ton_contract)', 'sumTon0')
      .addSelect('SUM(Budgets.promotion1_ton_contract)', 'sumTon1')
      .addSelect('SUM(Budgets.promotion2_ton_contract)', 'sumTon2')
      .addSelect('SUM(Budgets.promotion3_ton_contract)', 'sumTon3')
      .addSelect('SUM(Budgets.promotion4_ton_contract)', 'sumTon4')
      .addSelect('SUM(Budgets.promotion5_ton_contract)', 'sumTon5')
      .addSelect('SUM(Budgets.promotion6_baht_ton)', 'sumBahtTon6')
      .addSelect('SUM(Budgets.promotion7_baht_ton)', 'sumBahtTon7')
      .where('Budgets.promotion6_budget_use > :p6', { p6: 1 })
      .orWhere('Budgets.promotion7_budget_use > :p7', { p7: 1 })
      .andWhere('Budgets.deletedAt IS NULL')
      // .andWhere('Budgets.request_num < :num', { num: <number>(<unknown>reqs) })
      // .groupBy("user.id")
      // .getRawMany();
      .getRawOne();
    res.locals.data = useSums;
    responsehandler.send(res);
  }

  // eslint-disable-next-line class-methods-use-this
  public async getProjectProve(_req: Request, res: Response): Promise<void> {
    // https://typeorm.io/select-query-builder#adding-where-expression ตัวอย่าง select แบบมีเงื่อนไข
    const useSums: any = await PostgresDataSource.getRepository(Budgets)
      .createQueryBuilder('Budgets')
      .select('SUM(Budgets.promotion0_budget_use)', 'sumUse0')
      .addSelect('SUM(Budgets.promotion1_budget_use)', 'sumUse1')
      .addSelect('SUM(Budgets.promotion2_budget_use)', 'sumUse2')
      .addSelect('SUM(Budgets.promotion3_budget_use)', 'sumUse3')
      .addSelect('SUM(Budgets.promotion4_budget_use)', 'sumUse4')
      .addSelect('SUM(Budgets.promotion5_budget_use)', 'sumUse5')
      .addSelect('SUM(Budgets.promotion6_budget_use)', 'sumUse6')
      .addSelect('SUM(Budgets.promotion7_budget_use)', 'sumUse7')
      .addSelect('SUM(Budgets.promotion0_ton_contract)', 'sumTon0')
      .addSelect('SUM(Budgets.promotion1_ton_contract)', 'sumTon1')
      .addSelect('SUM(Budgets.promotion2_ton_contract)', 'sumTon2')
      .addSelect('SUM(Budgets.promotion3_ton_contract)', 'sumTon3')
      .addSelect('SUM(Budgets.promotion4_ton_contract)', 'sumTon4')
      .addSelect('SUM(Budgets.promotion5_ton_contract)', 'sumTon5')
      .addSelect('SUM(Budgets.promotion6_baht_ton)', 'sumBahtTon6')
      .addSelect('SUM(Budgets.promotion7_baht_ton)', 'sumBahtTon7')
      .where('Budgets.budget_prove = :prove', { prove: '01' })
      .andWhere('Budgets.deletedAt IS NULL')
      .andWhere(
        new Brackets((subQb) => {
          subQb.where('Budgets.promotion6_budget_use > 1');
          subQb.orWhere('Budgets.promotion7_budget_use > 1');
        })
      )
      .getRawOne();
    res.locals.data = useSums;
    responsehandler.send(res);
  }

  // eslint-disable-next-line class-methods-use-this
  public getError(_req: Request, _res: Response, next: NextFunction): void {
    try {
      throw new ApiError(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST);
    } catch (error) {
      next(error);
    }
  }
}
