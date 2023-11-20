/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';

import { PostgresDataSource } from '../../data-source';
import { HourCane } from '../../entity/pgsql/pg.hour';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * profile ontroller
 */
export default class HoursController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/hours', this.router);
    this.router.get('/get', this.getHour);
    this.router.get('/get-day', this.getHourDay);
    this.router.post('/new', this.newHour);
    this.router.put('/update/:id', this.updateHour);
    // this.router.get('/error', this.getError);
  }

  public async getHour(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      const result = await queryRunner.manager.query(
        'SELECT * FROM (SELECT TOP(24) * FROM hour_cane ORDER BY id DESC) T ORDER BY id ASC'
      );
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getHourDay(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      const result = await queryRunner.manager.query(
        'SELECT * FROM (SELECT TOP 24 id, hourNum, [hours], hourCar, hourTon, hourCarBurn, hourTonBurn, SUM(hourCar + hourCarBurn) as SumCar, SUM(hourTon + hourTonBurn) as SumTon, hourCarIn ,hourCarOutside, SUM(hourCarIn + hourCarOutside) as SumCarAll FROM hour_cane GROUP BY  id, hourNum, [hours], hourCar, hourTon, hourCarBurn, hourTonBurn, hourCarIn ,hourCarOutside order by id DESC) T ORDER BY id ASC'
      );
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async newHour(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const hour = PostgresDataSource.getRepository(HourCane).create(req.body);
      await PostgresDataSource.getRepository(HourCane).save(hour);
      res.locals = res.status(201).json({
        msg: 'Factory SugarCane create susscess',
        createdAt: new Date()
      });
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async updateHour(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const hour: any = await PostgresDataSource.getRepository(
      HourCane
    ).findOneBy({
      id: <number>(<unknown>id)
    });

    try {
      PostgresDataSource.getRepository(HourCane).merge(hour, req.body);
      await PostgresDataSource.getRepository(HourCane).save(hour);
      res.locals = res.status(200).json({ updatedAt: new Date() });
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public deleteUser(req: Request, res: Response, next: NextFunction): void {
    try {
      res.locals.data = req.params.id;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }
}
