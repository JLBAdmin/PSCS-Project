/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { MssqlDataSource, PostgresDataSource } from '../../data-source';
import { Quotas } from '../../entity/mssql/mssql.Quotas';
import { PscsOrganic } from '../../entity/pgsql/pg.pscsOrganic';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * Carbon Credit ontroller
 */
export default class CarbonController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/carbon', this.router);
    this.router.get('/credit', this.getCarbonCredit);
    this.router.get('/credit/:id', this.printCredit);
    this.router.get('/error', this.getError);
  }

  public async getCarbonCredit(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    const result = await queryRunner.manager.query(
      'SELECT * FROM pscs_organic'
    );
    // eslint-disable-next-line no-console
    // console.log(result);
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async printCredit(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      const queryRunner = PostgresDataSource.createQueryRunner();
      await queryRunner.connect();

      const quotaId = await MssqlDataSource.getRepository(Quotas).findOneBy({
        Code: <number>(<unknown>id)
      });

      const zoneCode = await queryRunner.manager.query(
        'SELECT * FROM [MCSS].[dbo].[vw_QuotaZoneCode] WHERE ZoneCode = @0 AND QuotaCode = @1',
        [<number>(<unknown>quotaId?.SurveyUserCode), <number>(<unknown>id)]
      );

      // eslint-disable-next-line no-console
      //  console.log(zoneCode[0].SurveyUserCode);
      const Organic = await PostgresDataSource.getRepository(
        PscsOrganic
      ).findBy({
        quotaId: <number>(<unknown>id)
      });

      // eslint-disable-next-line no-console
      // console.log(Organic);

      let titles: string;
      if (quotaId) {
        if (quotaId?.TitleId === 1) {
          titles = 'นาย';
        } else if (quotaId?.TitleId === 2) {
          titles = 'นาง';
        } else if (quotaId?.TitleId === 3) {
          titles = 'นางสาว';
        } else {
          titles = '';
        }

        res.render('carbon-cerdit', {
          quota: quotaId?.Code,
          fullName:
            `${titles}${quotaId?.FirstNameTH} ${quotaId?.LastNameTH}` || '',
          subZone: zoneCode[0].SurveyUserCode,
          Organic
        });
      } else {
        res.render('carbon-cerdit', {});
      }
    } catch (err: any) {
      next(err);
    }
  }

  public async getQuotaBudget(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    try {
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );

      const result = await queryRunner.manager.query(
        `SELECT * FROM [ps_prod].[dbo].[View_DueCheckQuota] WHERE cropYear = @0`,
        [crops[0].cropYear]
      );
      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getSubBudget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    const { id } = req.params;
    const crops = await queryRunner.manager.query(
      'SELECT * FROM [ps_prod].[dbo].[crop_years] WHERE cropStatus = 1'
    );

    const result = await queryRunner.manager.query(
      `SELECT * FROM [ps_prod].[dbo].[View_BudgetQuota] WHERE cropYear = @0 AND subZone = @1`,
      [crops[0].cropYear, id]
    );
    try {
      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async printQuota(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    try {
      const images = `<img src="/images/Quota/quotacode_${id}_20190824.jpg" width="130" height="150" alt="">`;
      res.render('quotas', {
        quota: id,
        img: images
      });
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
