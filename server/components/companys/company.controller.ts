/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { PostgresDataSource } from '../../data-source';
import { Companys } from '../../entity/pgsql/ps.company';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */
export default class CompanyController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/company', this.router);
    this.router.get('/get', this.getCompany);
    this.router.get('/get-company', this.getLableCompany);
    this.router.get('/get-group', this.getLableGroup);
    this.router.get('/get-target', this.getCompanyTarget);
    this.router.get('/company-group', this.getCompanyGroup);
    this.router.get('/get-cometrue', this.getComeTrue);
    this.router.get('/get-sum', this.getSumCane);
    this.router.post('/new', this.newCompany);
    this.router.put('/update/:id', this.updateCompany);
    this.router.get('/error', this.getError);
  }

  public async getCompany(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    const result = await queryRunner.manager.query(
      'SELECT * FROM Companys ORDER BY factory'
    );
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getLableCompany(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = PostgresDataSource.createQueryRunner();
    await queryRunner.connect;
    const crops = await queryRunner.manager.query(
      'SELECT * FROM crop_years WHERE cropStatus = 1'
    );

    const crop1 = crops[0].cropYear.substring(2, 4);

    const cropOld1 = Number(crop1) - 1;
    const cropYear = `25${cropOld1}/${crop1}`;

    const result = await queryRunner.manager.query(
      'SELECT factory FROM factorys WHERE cropYear =@0 AND factory_group = 2 ORDER BY factory',
      [cropYear]
    );

    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getLableGroup(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = PostgresDataSource.createQueryRunner();
    await queryRunner.connect;
    const crops = await queryRunner.manager.query(
      'SELECT * FROM crop_years WHERE cropStatus = 1'
    );

    const crop1 = crops[0].cropYear.substring(2, 4);

    const cropOld1 = Number(crop1) - 1;
    const cropYear = `25${cropOld1}/${crop1}`;

    const result = await queryRunner.manager.query(
      'SELECT factory FROM factorys WHERE cropYear =@0 AND factory_status = 1 ORDER BY factory',
      [cropYear]
    );

    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getCompanyTarget(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();

      await queryRunner.connect;
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );

      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;
      const useSums = await queryRunner.manager.query(
        'SELECT factory_target as value, factory AS name FROM factorys WHERE cropYear =@0 AND factory_group = 2 ORDER BY factory',
        [cropYear]
      );

      res.locals.data = useSums;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getCompanyGroup(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();

      await queryRunner.connect;
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );

      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;
      const useSums = await queryRunner.manager.query(
        'SELECT factory_target as value, factory AS name FROM factorys WHERE cropYear =@0 AND factory_status = 1 ORDER BY factory',
        [cropYear]
      );

      res.locals.data = useSums;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getComeTrue(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();

      await queryRunner.connect;

      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );

      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;
      const result = [];
      const arr: any[] = [];
      arr.push(['Cane', 'Num', 'Country', 'Day']);
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 100; i++) {
        // eslint-disable-next-line no-await-in-loop
        result[i] = await queryRunner.manager.query(
          `SELECT SUM(day${
            i + 1
          }) as Day, factory FROM factorys WHERE cropYear = @0 AND factory_group = 2 GROUP BY factory ORDER BY factory`,
          [cropYear]
        );
        result[i].map((fact: any) =>
          arr.push([fact.Day, 0, fact.factory, i + 1])
        );
      }
      res.locals.data = arr;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getSumCane(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();

      await queryRunner.connect;

      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );

      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;
      // const result = [];
      const sumCane = await queryRunner.manager.query(
        'SELECT * FROM targets WHERE cropYear = @0',
        [cropYear]
      );

      res.locals.data = sumCane;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async newCompany(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const target = PostgresDataSource.getRepository(Companys).create(
        req.body
      );
      await PostgresDataSource.getRepository(Companys).save(target);
      res.locals = res.status(201).json({
        msg: 'Companys susscess',
        createdAt: new Date()
      });
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async updateCompany(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const factory: any = await PostgresDataSource.getRepository(
      Companys
    ).findOneBy({
      id: <number>(<unknown>id)
    });

    try {
      PostgresDataSource.getRepository(Companys).merge(factory, req.body);
      await PostgresDataSource.getRepository(Companys).save(factory);
      res.locals = res.status(200).json({
        msg: 'Companys update susscess',
        updatedAt: new Date()
      });
      responsehandler.send(res);
    } catch (err) {
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
