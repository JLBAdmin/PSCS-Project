/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { MssqlDataSource } from '../../data-source';
// import { BudgetView } from '../../entity/mssql/mssql.plotcode';
import { Waters } from '../../entity/mssql/mssql.Waters';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';

// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */
export default class PlotCodeController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/plotcode', this.router);
    this.router.get('/get', this.getPlot);
    this.router.get('/get/:id', this.getPlotCode);
    this.router.get('/notify', this.getNotify);
    this.router.get('/notify/:id', this.getNotifys);
    this.router.get('/print/:id', this.printQuota);
    this.router.put('/update/:id', this.updateWaters);
    this.router.patch('/update/:id', this.updatePlot);
    this.router.get('/error', this.getError);
  }

  public async getPlot(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = MssqlDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    const result = await queryRunner.manager.query(
      'SELECT * FROM [MCSS].[dbo].[vw_PlanGPSExcel] ORDER BY ID DESC'
    );
    try {
      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
      await queryRunner.release();
    }
  }

  public async getPlotCode(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const result = await MssqlDataSource.query(
        'SELECT * FROM [MCSS].[dbo].[vw_PlanGPSExcelAll] WHERE ปีการผลิต =@0 ORDER BY ID DESC',
        [Number(id) - 1]
      );

      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getNotify(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = MssqlDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    const crops = await queryRunner.manager.query(
      'SELECT MAX(Year) AS CorpYear FROM SeasonYears'
    );
    const result = await queryRunner.manager.query(
      'SELECT Waters.Id, Waters.PlanId, Waters.StatusPlan, Quotas.Code, Waters.WaterName, Waters.Location, Waters.SeasonYear, Waters.CreatedBy, AspNetUsers.FullName, Waters.CreatedDate,Waters.ApprovedBy,Waters.ApprovedDate,Waters.Status,Waters.Depth,Waters.Cubit,Waters.SraWidth,Waters.SraLong,Waters.SraDepth,Waters.ImageName,Waters.ImageGps,Waters.ForecastRai,Waters.Comments FROM Waters LEFT JOIN Quotas ON Quotas.Id = Waters.QuotaId LEFT JOIN AspNetUsers ON AspNetUsers.UserCode = Waters.CreatedBy WHERE Waters.SeasonYear = @0',
      [crops[0].CorpYear]
    );
    try {
      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
      await queryRunner.release();
    }
  }

  public async getNotifys(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const result = await MssqlDataSource.query(
      'SELECT Waters.Id, Waters.PlanId, Waters.StatusPlan, Quotas.Code, Waters.WaterName, Waters.Location, Waters.SeasonYear, Waters.CreatedBy, AspNetUsers.FullName, Waters.CreatedDate,Waters.ApprovedBy,Waters.ApprovedDate,Waters.Status,Waters.Depth,Waters.Cubit,Waters.SraWidth,Waters.SraLong,Waters.SraDepth,Waters.ImageName,Waters.ImageGps,Waters.ForecastRai,Waters.Comments FROM Waters LEFT JOIN Quotas ON Quotas.Id = Waters.QuotaId LEFT JOIN AspNetUsers ON AspNetUsers.UserCode = Waters.CreatedBy WHERE Waters.SeasonYear = @0',
      [Number(id) - 1]
    );
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async updateWaters(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;

    const updateWater = {
      Comments: req.body.Comments,
      PlanId: req.body.PlanId || null,
      StatusPlan: req.body.StatusPlan
    };

    try {
      await MssqlDataSource.createQueryBuilder()
        .createQueryBuilder()
        .update(Waters)
        .set(updateWater)
        .where('Id = :id', { id })
        .execute();
      res.locals = res.status(200).json({ updatedAt: new Date() });
    } catch (err) {
      next(err);
    }
  }

  public async updatePlot(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    try {
      const queryRunner = MssqlDataSource.createQueryRunner();
      await queryRunner.connect();
      queryRunner.manager.query(
        'UPDATE [dbo].[PlanGps] SET ProjectType =@0 WHERE PlanId = @1',
        [req.body.ProjectType, <number>(<unknown>id)]
      );
      res.locals = res.status(200).json({ updatedAt: new Date() });
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
      res.render('quotas', {
        quota: id
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
