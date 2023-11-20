/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { PostgresDataSource } from '../../data-source';
import { CropYears } from '../../entity/pgsql/pg.cropYear';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */
export default class CropController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/crop_years', this.router);
    this.router.get('/get', this.getCropYear);
    this.router.get('/get-crop', this.getCropYears);
    this.router.get('/get-current', this.getCropCurrent);
    this.router.post('/new', this.newCropYear);
    this.router.put('/update/:id', this.updateCropYear);
    this.router.get('/error', this.getError);
  }

  public async getCropYear(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      await queryRunner.connect();
      const crops = await queryRunner.manager.query(
        'SELECT TOP(2) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
      );

      res.locals.data = crops;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getCropYears(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      await queryRunner.connect();
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years ORDER BY id DESC'
      );

      res.locals.data = crops;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async newCropYear(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const newCropYear = {
      cropYear: req.body.cropYear,
      cropStatus: req.body.cropStatus
    };

    try {
      // console.log(newEmp)
      const cropYears =
        PostgresDataSource.getRepository(CropYears).create(newCropYear);
      await PostgresDataSource.getRepository(CropYears).save(cropYears);
      res.locals = res.status(201).json({ msg: 'CropYear create susscess' });
      responsehandler.send(res);
      return;
    } catch (error) {
      // res.status(409).send('Mechines already in use');
      // responsehandler.send(res);
      next(error);
    }
  }

  public async updateCropYear(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    // eslint-disable-next-line no-console
    // console.log(req.body, id);
    try {
      const results = await PostgresDataSource.query(
        'UPDATE crop_years SET cropYear =@0, cropStatus =@1 WHERE id=@2',
        [req.body.cropYear, req.body.cropStatus, <number>(<unknown>id)]
      );
      // res.setHeader('Content-Type', 'application/json');
      res.locals.data = results;
      responsehandler.send(res);
      return;
    } catch (err: any) {
      next(err);
    }
  }

  public async getCropCurrent(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      await queryRunner.connect();
      const crops = await queryRunner.manager.query(
        'SELECT TOP(1) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
      );

      res.locals.data = crops;
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
