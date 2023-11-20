/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { PostgresDataSource } from '../../data-source';
import { Securities } from '../../entity/pgsql/pg.securities';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */

export default class SecuritieController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/securitie', this.router);
    this.router.get('/get', this.getSecuritie);
    this.router.get('/get/:id', this.getByQuota);
    this.router.get('/sum/:id', this.getSum);
    this.router.post('/new', this.newSecuritie);
    this.router.put('/update/:id', this.updateSecuritie);
    this.router.get('/delete', this.deleteAll);
    this.router.delete('/del/:id', this.deleteId);
    this.router.get('/error', this.getError);
  }

  public async getSecuritie(
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const crops = await PostgresDataSource.query(
      'SELECT TOP(1) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
    );
    const result = await PostgresDataSource.query(
      'SELECT * FROM Securities WHERE cropYear =@0 ORDER BY updatedAt',
      [crops[0].cropYear]
    );
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
    const result = await PostgresDataSource.getRepository(Securities).findBy({
      quota: <number>(<unknown>id)
    });
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getSum(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;

    const securitieSum = await PostgresDataSource.getRepository(Securities)
      .createQueryBuilder('Securities')
      .select('SUM(Securities.appraisalPrice)', 'sum')
      .where('Securities.quota = :id', { id: <number>(<unknown>id) })
      .getRawOne();
    try {
      res.locals.data = securitieSum;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async newSecuritie(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const newSecuritie = {
      cropYear: req.body.cropYear,
      quota: req.body.quota,
      quotaGuarantor: req.body.quotaGuarantor,
      securitieType: req.body.securitieType,
      securitieDetail: req.body.securitieDetail,
      securitieValue: req.body.securitieValue,
      appraisalPrice: req.body.appraisalPrice,
      ownership: req.body.ownership,
      ownerCardId: req.body.ownerCardId,
      ownerAddress: req.body.ownerAddress,
      ownershipName1: req.body.ownershipName1,
      ownerCardId1: req.body.ownerCardId1,
      ownerAddress1: req.body.ownerAddress1,
      ownershipName2: req.body.ownershipName2,
      ownerCardId2: req.body.ownerCardId2,
      ownerAddress2: req.body.ownerAddress2,
      ownershipName3: req.body.ownershipName3,
      ownerCardId3: req.body.ownerCardId3,
      ownerAddress3: req.body.ownerAddress3
    };

    try {
      const securitie = await PostgresDataSource.getRepository(
        Securities
      ).create(newSecuritie);
      // const budget = PostgresDataSource.getRepository(Budgets).create(req.body);
      await PostgresDataSource.getRepository(Securities).save(securitie);

      res.locals = res.status(201).json({ msg: 'Securitie create susscess' });
      responsehandler.send(res);
      return;
    } catch (error) {
      next(error);
    }
  }

  public async updateSecuritie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const budget: any = await PostgresDataSource.getRepository(
      Securities
    ).findOneBy({
      id: <number>(<unknown>id)
    });
    try {
      PostgresDataSource.getRepository(Securities).merge(budget, req.body);
      const results = await PostgresDataSource.getRepository(Securities).save(
        budget
      );
      res.setHeader('Content-Type', 'application/json');
      res.locals.data = results;
      responsehandler.send(res);
      return;
    } catch (err: any) {
      next(err);
    }
  }

  public async deleteAll(
    _req: Request,
    res: Response
    // next: NextFunction
  ): Promise<void> {
    // const codes = parseInt(id, 10);
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      const crops = await queryRunner.manager.query(
        'SELECT TOP(1) * FROM crop_years WHERE cropStatus = 1 ORDER BY id DESC'
      );
      await queryRunner.manager.query(
        'DELETE FROM securities WHERE cropYear =@0',
        [crops[0].cropYear]
      );
      // await queryRunner.manager.query(
      //   `DBCC CHECKIDENT ('securities', RESEED, 0)`
      // );
      res.locals = res.json({ msg: 'delete Securities' });
      responsehandler.send(res);
      return;
    } catch (err: any) {
      // next(err);
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  public async deleteId(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      await queryRunner.manager.query(
        'UPDATE FROM securities SET quotaGuarantor = 0 WHERE id=@0',
        [<number>(<unknown>id)]
      );
      res.locals = res.json({ msg: 'delete Securities' });
      responsehandler.send(res);
      return;
    } catch (err: any) {
      next(err);
      // eslint-disable-next-line no-console
      console.log(err);
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
