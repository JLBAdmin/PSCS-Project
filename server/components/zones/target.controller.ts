/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { PostgresDataSource } from '../../data-source';
import { Targets } from '../../entity/pgsql/pg.target';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */
export default class TargetController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/target', this.router);
    this.router.get('/get', this.getTarget);
    this.router.get('/get-area/:id', this.getAreaTarget);
    this.router.get('/get-ton', this.getTonTarget);
    this.router.get('/get-ton/:id', this.getTonTargets);
    this.router.get('/get-zone', this.getTonZoneTarget);
    this.router.get('/get-zone/:id', this.getTonZoneTargets);
    this.router.get('/get-top/:id', this.getTopTarget);
    this.router.get('/get-target/:id', this.getManagerTarget);
    this.router.get('/get-targetzone/:crop', this.getZoneTarget);
    this.router.post('/get-targetzone/:id', this.newZoneTarget);
    this.router.get('/get-count/:id', this.getCountBudget);
    this.router.post('/new', this.newTarget);
    this.router.put('/update/:id', this.updateTarget);
    this.router.delete('/delete', this.deleteTarget);
    this.router.get('/error', this.getError);
  }

  public async getTarget(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const result = await PostgresDataSource.query(
        `SELECT * FROM Targets ORDER BY cropYear DESC`
      );
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getAreaTarget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const cropOld1 = Number(id) - 1;
      const cropYear = `25${cropOld1}/${id}`;
      const queryRunner = PostgresDataSource.createQueryRunner();
      const useSums: any = await PostgresDataSource.getRepository(Targets)
        .createQueryBuilder('Targets')
        .select('SUM(targetAll)', 'value')
        .addSelect(`'เขต ' + zone`, 'name')
        .where('cropYear = :crop', { crop: cropYear })
        .groupBy('zone')
        .orderBy('zone')
        .getRawMany();

      res.locals.data = JSON.stringify(useSums);
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getTonTarget(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      await queryRunner.connect();
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );
      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;
      const useSums: any = await PostgresDataSource.getRepository(Targets)
        .createQueryBuilder('Targets')
        .select('SUM(ISNULL(sugarCaneCrushing, 0))', 'value')
        .addSelect(`'เขต ' + zone`, 'name')
        .where('cropYear = :crop', { crop: cropYear })
        .groupBy('zone')
        .orderBy('zone')
        .getRawMany();

      res.locals.data = JSON.stringify(useSums);
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getTonTargets(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const cropOld1 = Number(id) - 1;
      const cropYear = `25${cropOld1}/${id}`;

      const useSums: any = await PostgresDataSource.getRepository(Targets)
        .createQueryBuilder('Targets')
        .select('SUM(ISNULL(sugarCaneCrushing, 0))', 'value')
        .addSelect(`'เขต ' + zone`, 'name')
        .where('cropYear = :crop', { crop: cropYear })
        .groupBy('zone')
        .orderBy('zone')
        .getRawMany();
      res.locals.data = JSON.stringify(useSums);
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getTonZoneTarget(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      await queryRunner.connect();
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );
      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;
      const useSums: any = await PostgresDataSource.getRepository(Targets)
        .createQueryBuilder('Targets')
        .select(
          'SUM(ISNULL(ComeTrue1, 0) + ISNULL(ComeTrue2, 0) + ISNULL(ComeTrue3, 0) + ISNULL(ComeTrue4, 0) + ISNULL(ComeTrue5, 0) + ISNULL(ComeTrue6, 0) + ISNULL(ComeTrue7, 0) + ISNULL(ComeTrue8, 0) + ISNULL(ComeTrue9, 0) + ISNULL(ComeTrue10, 0) + ISNULL(ComeTrue11, 0) + ISNULL(ComeTrue12, 0) + ISNULL(ComeTrue13, 0) + ISNULL(ComeTrue14, 0) + ISNULL(ComeTrue15, 0) + ISNULL(ComeTrue16, 0) + ISNULL(ComeTrue17, 0) + ISNULL(ComeTrue18, 0) + ISNULL(ComeTrue19, 0) + ISNULL(ComeTrue20, 0) + ISNULL(ComeTrue21, 0) + ISNULL(ComeTrue22, 0) + ISNULL(ComeTrue23, 0) + ISNULL(ComeTrue24, 0) + ISNULL(ComeTrue25, 0) + ISNULL(ComeTrue26, 0) + ISNULL(ComeTrue27, 0) + ISNULL(ComeTrue28, 0) + ISNULL(ComeTrue29, 0) + ISNULL(ComeTrue30, 0) + ISNULL(ComeTrue31, 0) + ISNULL(ComeTrue32, 0) + ISNULL(ComeTrue33, 0) + ISNULL(ComeTrue34, 0) + ISNULL(ComeTrue35, 0) + ISNULL(ComeTrue36, 0) + ISNULL(ComeTrue37, 0) + ISNULL(ComeTrue38, 0) + ISNULL(ComeTrue39, 0) + ISNULL(ComeTrue40, 0) + ISNULL(ComeTrue41, 0) + ISNULL(ComeTrue42, 0) + ISNULL(ComeTrue43, 0) + ISNULL(ComeTrue44, 0) + ISNULL(ComeTrue45, 0) + ISNULL(ComeTrue46, 0) + ISNULL(ComeTrue47, 0) + ISNULL(ComeTrue48, 0) + ISNULL(ComeTrue49, 0) + ISNULL(ComeTrue50, 0) + ISNULL(ComeTrue51, 0) + ISNULL(ComeTrue52, 0) + ISNULL(ComeTrue53, 0) + ISNULL(ComeTrue54, 0) + ISNULL(ComeTrue55, 0) + ISNULL(ComeTrue56, 0) + ISNULL(ComeTrue57, 0) + ISNULL(ComeTrue58, 0) + ISNULL(ComeTrue59, 0) + ISNULL(ComeTrue60, 0) + ISNULL(ComeTrue61, 0) + ISNULL(ComeTrue62, 0) + ISNULL(ComeTrue63, 0) + ISNULL(ComeTrue64, 0) + ISNULL(ComeTrue65, 0) + ISNULL(ComeTrue66, 0) + ISNULL(ComeTrue67, 0) + ISNULL(ComeTrue68, 0) + ISNULL(ComeTrue69, 0) + ISNULL(ComeTrue70, 0) + ISNULL(ComeTrue71, 0) + ISNULL(ComeTrue72, 0) + ISNULL(ComeTrue73, 0) + ISNULL(ComeTrue74, 0) + ISNULL(ComeTrue75, 0) + ISNULL(ComeTrue76, 0) + ISNULL(ComeTrue77, 0) + ISNULL(ComeTrue78, 0) + ISNULL(ComeTrue79, 0) + ISNULL(ComeTrue80, 0) + ISNULL(ComeTrue81, 0) + ISNULL(ComeTrue82, 0) + ISNULL(ComeTrue83, 0) + ISNULL(ComeTrue84, 0) + ISNULL(ComeTrue85, 0) + ISNULL(ComeTrue86, 0) + ISNULL(ComeTrue87, 0) + ISNULL(ComeTrue88, 0) + ISNULL(ComeTrue89, 0) + ISNULL(ComeTrue90, 0) + ISNULL(ComeTrue91, 0) + ISNULL(ComeTrue92, 0) + ISNULL(ComeTrue93, 0) + ISNULL(ComeTrue94, 0) + ISNULL(ComeTrue95, 0) + ISNULL(ComeTrue96, 0) + ISNULL(ComeTrue97, 0) + ISNULL(ComeTrue98, 0) + ISNULL(ComeTrue99, 0) + ISNULL(ComeTrue100, 0))',
          'value'
        )
        .addSelect(`'เขต ' + zone`, 'name')
        .where('cropYear = :crop', { crop: cropYear })
        .groupBy('zone')
        .orderBy('zone')
        .getRawMany();

      res.locals.data = JSON.stringify(useSums);
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getTonZoneTargets(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const cropOld1 = Number(id) - 1;
      const cropYear = `25${cropOld1}/${id}`;
      const useSums: any = await PostgresDataSource.getRepository(Targets)
        .createQueryBuilder('Targets')
        .select(
          'SUM(ISNULL(ComeTrue1, 0) + ISNULL(ComeTrue2, 0) + ISNULL(ComeTrue3, 0) + ISNULL(ComeTrue4, 0) + ISNULL(ComeTrue5, 0) + ISNULL(ComeTrue6, 0) + ISNULL(ComeTrue7, 0) + ISNULL(ComeTrue8, 0) + ISNULL(ComeTrue9, 0) + ISNULL(ComeTrue10, 0) + ISNULL(ComeTrue11, 0) + ISNULL(ComeTrue12, 0) + ISNULL(ComeTrue13, 0) + ISNULL(ComeTrue14, 0) + ISNULL(ComeTrue15, 0) + ISNULL(ComeTrue16, 0) + ISNULL(ComeTrue17, 0) + ISNULL(ComeTrue18, 0) + ISNULL(ComeTrue19, 0) + ISNULL(ComeTrue20, 0) + ISNULL(ComeTrue21, 0) + ISNULL(ComeTrue22, 0) + ISNULL(ComeTrue23, 0) + ISNULL(ComeTrue24, 0) + ISNULL(ComeTrue25, 0) + ISNULL(ComeTrue26, 0) + ISNULL(ComeTrue27, 0) + ISNULL(ComeTrue28, 0) + ISNULL(ComeTrue29, 0) + ISNULL(ComeTrue30, 0) + ISNULL(ComeTrue31, 0) + ISNULL(ComeTrue32, 0) + ISNULL(ComeTrue33, 0) + ISNULL(ComeTrue34, 0) + ISNULL(ComeTrue35, 0) + ISNULL(ComeTrue36, 0) + ISNULL(ComeTrue37, 0) + ISNULL(ComeTrue38, 0) + ISNULL(ComeTrue39, 0) + ISNULL(ComeTrue40, 0) + ISNULL(ComeTrue41, 0) + ISNULL(ComeTrue42, 0) + ISNULL(ComeTrue43, 0) + ISNULL(ComeTrue44, 0) + ISNULL(ComeTrue45, 0) + ISNULL(ComeTrue46, 0) + ISNULL(ComeTrue47, 0) + ISNULL(ComeTrue48, 0) + ISNULL(ComeTrue49, 0) + ISNULL(ComeTrue50, 0) + ISNULL(ComeTrue51, 0) + ISNULL(ComeTrue52, 0) + ISNULL(ComeTrue53, 0) + ISNULL(ComeTrue54, 0) + ISNULL(ComeTrue55, 0) + ISNULL(ComeTrue56, 0) + ISNULL(ComeTrue57, 0) + ISNULL(ComeTrue58, 0) + ISNULL(ComeTrue59, 0) + ISNULL(ComeTrue60, 0) + ISNULL(ComeTrue61, 0) + ISNULL(ComeTrue62, 0) + ISNULL(ComeTrue63, 0) + ISNULL(ComeTrue64, 0) + ISNULL(ComeTrue65, 0) + ISNULL(ComeTrue66, 0) + ISNULL(ComeTrue67, 0) + ISNULL(ComeTrue68, 0) + ISNULL(ComeTrue69, 0) + ISNULL(ComeTrue70, 0) + ISNULL(ComeTrue71, 0) + ISNULL(ComeTrue72, 0) + ISNULL(ComeTrue73, 0) + ISNULL(ComeTrue74, 0) + ISNULL(ComeTrue75, 0) + ISNULL(ComeTrue76, 0) + ISNULL(ComeTrue77, 0) + ISNULL(ComeTrue78, 0) + ISNULL(ComeTrue79, 0) + ISNULL(ComeTrue80, 0) + ISNULL(ComeTrue81, 0) + ISNULL(ComeTrue82, 0) + ISNULL(ComeTrue83, 0) + ISNULL(ComeTrue84, 0) + ISNULL(ComeTrue85, 0) + ISNULL(ComeTrue86, 0) + ISNULL(ComeTrue87, 0) + ISNULL(ComeTrue88, 0) + ISNULL(ComeTrue89, 0) + ISNULL(ComeTrue90, 0) + ISNULL(ComeTrue91, 0) + ISNULL(ComeTrue92, 0) + ISNULL(ComeTrue93, 0) + ISNULL(ComeTrue94, 0) + ISNULL(ComeTrue95, 0) + ISNULL(ComeTrue96, 0) + ISNULL(ComeTrue97, 0) + ISNULL(ComeTrue98, 0) + ISNULL(ComeTrue99, 0) + ISNULL(ComeTrue100, 0))',
          'value'
        )
        .addSelect(`'เขต ' + zone`, 'name')
        .where('cropYear = :crop', { crop: cropYear })
        .groupBy('zone')
        .orderBy('zone')
        .getRawMany();

      res.locals.data = JSON.stringify(useSums);
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getManagerTarget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const cropOld1 = Number(id) - 1;
      const cropYear = `25${cropOld1}/${id}`;
      // const queryCrop = PostgresDataSource.createQueryRunner();
      // await queryCrop.connect();
      // const crops = await queryCrop.manager.query(
      //   'SELECT * FROM [ps_prod].[dbo].[crop_years] WHERE cropStatus = 1'
      // )

      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      const result = await queryRunner.manager.query(
        `SELECT * FROM [ps_prod].[dbo].[View_TargetZone] WHERE cropYear = @0 ORDER BY CAST(zone AS int)`,
        [cropYear]
      );

      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getZoneTarget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { crop } = req.params;
      // const cropOld1 = Number(id) - 1;
      // const cropYear = `25${cropOld1}/${id}`;
      const queryCrop = PostgresDataSource.createQueryRunner();
      await queryCrop.connect();
      // const crops = await queryCrop.manager.query(
      //   'SELECT * FROM crop_years WHERE cropStatus = 1'
      // );

      const cropOld1 = Number(crop) - 1;
      const cropYear = `25${cropOld1}/${crop}`;
      // const CropYears = crops[0].cropYear;
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      const result = await queryRunner.manager.query(
        'SELECT * FROM View_BudgetTarget WHERE cropYear =@0 ORDER BY CAST(zone AS int), CAST(subZone AS int)',
        [cropYear]
      );

      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async newZoneTarget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    try {
      const queryCrop = PostgresDataSource.createQueryRunner();
      await queryCrop.connect();
      const crops = await queryCrop.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );
      const CropYears = crops[0].cropYear;
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      const result = await queryRunner.manager.query(
        'SELECT * FROM targets WHERE cropYear =@0 AND zone = @1',
        [CropYears, id]
      );

      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getTopTarget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const cropOld1 = Number(id) - 1;
      const cropYear = `25${cropOld1}/${id}`;
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      const result = await queryRunner.manager.query(
        'SELECT TOP(5) * FROM View_BudgetTarget WHERE cropYear = @0 AND PercenWork > 0 ORDER BY PercenWork DESC',
        [cropYear]
      );

      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async newTarget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const newTarget: any = {
        cropYear: req.body.cropYear,
        targetManager: req.body.targetManager,
        zone: req.body.zone,
        subZone: req.body.subZone,
        surveyName: req.body.surveyName,
        targetAll: req.body.targetAll,
        targetNewArea: req.body.targetNewArea,
        targetCaneStump: req.body.targetCaneStump,
        targetDemolishStump: req.body.targetDemolishStump,
        targetCaneTon: req.body.targetCaneTon
      };
      const target =
        PostgresDataSource.getRepository(Targets).create(newTarget);
      await PostgresDataSource.getRepository(Targets).save(target);
      res.locals = res
        .status(201)
        .json({ msg: 'Target create susscess', createdAt: new Date() });
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async updateTarget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;

    const updateTargetDay: any = {
      cropYear: req.body.cropYear,
      zone: req.body.zone,
      subZone: req.body.subZone,
      surveyName: req.body.surveyName,
      sugarCaneCrushing: Number(req.body.sugarCaneCrushing) || null,
      targetDay1: Number(req.body.targetDay1) || null,
      targetDay2: Number(req.body.targetDay2) || null,
      targetDay3: Number(req.body.targetDay3) || null,
      targetDay4: Number(req.body.targetDay4) || null,
      targetDay5: Number(req.body.targetDay5) || null,
      targetDay6: Number(req.body.targetDay6) || null,
      targetDay7: Number(req.body.targetDay7) || null,
      targetDay8: Number(req.body.targetDay8) || null,
      targetDay9: Number(req.body.targetDay9) || null,
      targetDay10: Number(req.body.targetDay10) || null,
      targetDay11: Number(req.body.targetDay11) || null,
      targetDay12: Number(req.body.targetDay12) || null,
      targetDay13: Number(req.body.targetDay13) || null,
      targetDay14: Number(req.body.targetDay14) || null,
      targetDay15: Number(req.body.targetDay15) || null,
      targetDay16: Number(req.body.targetDay16) || null,
      targetDay17: Number(req.body.targetDay17) || null,
      targetDay18: Number(req.body.targetDay18) || null,
      targetDay19: Number(req.body.targetDay19) || null,
      targetDay20: Number(req.body.targetDay20) || null,
      targetDay21: Number(req.body.targetDay21) || null,
      targetDay22: Number(req.body.targetDay22) || null,
      targetDay23: Number(req.body.targetDay23) || null,
      targetDay24: Number(req.body.targetDay24) || null,
      targetDay25: Number(req.body.targetDay25) || null,
      targetDay26: Number(req.body.targetDay26) || null,
      targetDay27: Number(req.body.targetDay27) || null,
      targetDay28: Number(req.body.targetDay28) || null,
      targetDay29: Number(req.body.targetDay29) || null,
      targetDay30: Number(req.body.targetDay30) || null,
      targetDay31: Number(req.body.targetDay31) || null,
      targetDay32: Number(req.body.targetDay32) || null,
      targetDay33: Number(req.body.targetDay33) || null,
      targetDay34: Number(req.body.targetDay34) || null,
      targetDay35: Number(req.body.targetDay35) || null,
      targetDay36: Number(req.body.targetDay36) || null,
      targetDay37: Number(req.body.targetDay37) || null,
      targetDay38: Number(req.body.targetDay38) || null,
      targetDay39: Number(req.body.targetDay39) || null,
      targetDay40: Number(req.body.targetDay40) || null,
      targetDay41: Number(req.body.targetDay41) || null,
      targetDay42: Number(req.body.targetDay42) || null,
      targetDay43: Number(req.body.targetDay43) || null,
      targetDay44: Number(req.body.targetDay44) || null,
      targetDay45: Number(req.body.targetDay45) || null,
      targetDay46: Number(req.body.targetDay46) || null,
      targetDay47: Number(req.body.targetDay47) || null,
      targetDay48: Number(req.body.targetDay48) || null,
      targetDay49: Number(req.body.targetDay49) || null,
      targetDay50: Number(req.body.targetDay50) || null,
      targetDay51: Number(req.body.targetDay51) || null,
      targetDay52: Number(req.body.targetDay52) || null,
      targetDay53: Number(req.body.targetDay53) || null,
      targetDay54: Number(req.body.targetDay54) || null,
      targetDay55: Number(req.body.targetDay55) || null,
      targetDay56: Number(req.body.targetDay56) || null,
      targetDay57: Number(req.body.targetDay57) || null,
      targetDay58: Number(req.body.targetDay58) || null,
      targetDay59: Number(req.body.targetDay59) || null,
      targetDay60: Number(req.body.targetDay60) || null,
      targetDay61: Number(req.body.targetDay61) || null,
      targetDay62: Number(req.body.targetDay62) || null,
      targetDay63: Number(req.body.targetDay63) || null,
      targetDay64: Number(req.body.targetDay64) || null,
      targetDay65: Number(req.body.targetDay65) || null,
      targetDay66: Number(req.body.targetDay66) || null,
      targetDay67: Number(req.body.targetDay67) || null,
      targetDay68: Number(req.body.targetDay68) || null,
      targetDay69: Number(req.body.targetDay69) || null,
      targetDay70: Number(req.body.targetDay70) || null,
      targetDay71: Number(req.body.targetDay71) || null,
      targetDay72: Number(req.body.targetDay72) || null,
      targetDay73: Number(req.body.targetDay73) || null,
      targetDay74: Number(req.body.targetDay74) || null,
      targetDay75: Number(req.body.targetDay75) || null,
      targetDay76: Number(req.body.targetDay76) || null,
      targetDay77: Number(req.body.targetDay77) || null,
      targetDay78: Number(req.body.targetDay78) || null,
      targetDay79: Number(req.body.targetDay79) || null,
      targetDay80: Number(req.body.targetDay80) || null,
      targetDay81: Number(req.body.targetDay81) || null,
      targetDay82: Number(req.body.targetDay82) || null,
      targetDay83: Number(req.body.targetDay83) || null,
      targetDay84: Number(req.body.targetDay84) || null,
      targetDay85: Number(req.body.targetDay85) || null,
      targetDay86: Number(req.body.targetDay86) || null,
      targetDay87: Number(req.body.targetDay87) || null,
      targetDay88: Number(req.body.targetDay88) || null,
      targetDay89: Number(req.body.targetDay89) || null,
      targetDay90: Number(req.body.targetDay90) || null,
      targetDay91: Number(req.body.targetDay91) || null,
      targetDay92: Number(req.body.targetDay92) || null,
      targetDay93: Number(req.body.targetDay93) || null,
      targetDay94: Number(req.body.targetDay94) || null,
      targetDay95: Number(req.body.targetDay95) || null,
      targetDay96: Number(req.body.targetDay96) || null,
      targetDay97: Number(req.body.targetDay97) || null,
      targetDay98: Number(req.body.targetDay98) || null,
      targetDay99: Number(req.body.targetDay99) || null,
      targetDay100: Number(req.body.targetDay100) || null,
      targetDay101: Number(req.body.targetDay101) || null,
      targetDay102: Number(req.body.targetDay102) || null,
      targetDay103: Number(req.body.targetDay103) || null,
      targetDay104: Number(req.body.targetDay104) || null,
      targetDay105: Number(req.body.targetDay105) || null,
      targetDay106: Number(req.body.targetDay106) || null,
      targetDay107: Number(req.body.targetDay107) || null,
      targetDay108: Number(req.body.targetDay108) || null,
      targetDay109: Number(req.body.targetDay109) || null,
      targetDay110: Number(req.body.targetDay110) || null,
      targetDay111: Number(req.body.targetDay111) || null,
      targetDay112: Number(req.body.targetDay112) || null,
      targetDay113: Number(req.body.targetDay113) || null,
      targetDay114: Number(req.body.targetDay114) || null,
      targetDay115: Number(req.body.targetDay115) || null,
      targetDay116: Number(req.body.targetDay116) || null,
      targetDay117: Number(req.body.targetDay117) || null,
      targetDay118: Number(req.body.targetDay118) || null,
      targetDay119: Number(req.body.targetDay119) || null,
      targetDay120: Number(req.body.targetDay120) || null,
      ComeTrue1: Number(req.body.ComeTrue1) || null,
      ComeTrue2: Number(req.body.ComeTrue2) || null,
      ComeTrue3: Number(req.body.ComeTrue3) || null,
      ComeTrue4: Number(req.body.ComeTrue4) || null,
      ComeTrue5: Number(req.body.ComeTrue5) || null,
      ComeTrue6: Number(req.body.ComeTrue6) || null,
      ComeTrue7: Number(req.body.ComeTrue7) || null,
      ComeTrue8: Number(req.body.ComeTrue8) || null,
      ComeTrue9: Number(req.body.ComeTrue9) || null,
      ComeTrue10: Number(req.body.ComeTrue10) || null,
      ComeTrue11: Number(req.body.ComeTrue11) || null,
      ComeTrue12: Number(req.body.ComeTrue12) || null,
      ComeTrue13: Number(req.body.ComeTrue13) || null,
      ComeTrue14: Number(req.body.ComeTrue14) || null,
      ComeTrue15: Number(req.body.ComeTrue15) || null,
      ComeTrue16: Number(req.body.ComeTrue16) || null,
      ComeTrue17: Number(req.body.ComeTrue17) || null,
      ComeTrue18: Number(req.body.ComeTrue18) || null,
      ComeTrue19: Number(req.body.ComeTrue19) || null,
      ComeTrue20: Number(req.body.ComeTrue20) || null,
      ComeTrue21: Number(req.body.ComeTrue21) || null,
      ComeTrue22: Number(req.body.ComeTrue22) || null,
      ComeTrue23: Number(req.body.ComeTrue23) || null,
      ComeTrue24: Number(req.body.ComeTrue24) || null,
      ComeTrue25: Number(req.body.ComeTrue25) || null,
      ComeTrue26: Number(req.body.ComeTrue26) || null,
      ComeTrue27: Number(req.body.ComeTrue27) || null,
      ComeTrue28: Number(req.body.ComeTrue28) || null,
      ComeTrue29: Number(req.body.ComeTrue29) || null,
      ComeTrue30: Number(req.body.ComeTrue30) || null,
      ComeTrue31: Number(req.body.ComeTrue31) || null,
      ComeTrue32: Number(req.body.ComeTrue32) || null,
      ComeTrue33: Number(req.body.ComeTrue33) || null,
      ComeTrue34: Number(req.body.ComeTrue34) || null,
      ComeTrue35: Number(req.body.ComeTrue35) || null,
      ComeTrue36: Number(req.body.ComeTrue36) || null,
      ComeTrue37: Number(req.body.ComeTrue37) || null,
      ComeTrue38: Number(req.body.ComeTrue38) || null,
      ComeTrue39: Number(req.body.ComeTrue39) || null,
      ComeTrue40: Number(req.body.ComeTrue40) || null,
      ComeTrue41: Number(req.body.ComeTrue41) || null,
      ComeTrue42: Number(req.body.ComeTrue42) || null,
      ComeTrue43: Number(req.body.ComeTrue43) || null,
      ComeTrue44: Number(req.body.ComeTrue44) || null,
      ComeTrue45: Number(req.body.ComeTrue45) || null,
      ComeTrue46: Number(req.body.ComeTrue46) || null,
      ComeTrue47: Number(req.body.ComeTrue47) || null,
      ComeTrue48: Number(req.body.ComeTrue48) || null,
      ComeTrue49: Number(req.body.ComeTrue49) || null,
      ComeTrue50: Number(req.body.ComeTrue50) || null,
      ComeTrue51: Number(req.body.ComeTrue51) || null,
      ComeTrue52: Number(req.body.ComeTrue52) || null,
      ComeTrue53: Number(req.body.ComeTrue53) || null,
      ComeTrue54: Number(req.body.ComeTrue54) || null,
      ComeTrue55: Number(req.body.ComeTrue55) || null,
      ComeTrue56: Number(req.body.ComeTrue56) || null,
      ComeTrue57: Number(req.body.ComeTrue57) || null,
      ComeTrue58: Number(req.body.ComeTrue58) || null,
      ComeTrue59: Number(req.body.ComeTrue59) || null,
      ComeTrue60: Number(req.body.ComeTrue60) || null,
      ComeTrue61: Number(req.body.ComeTrue61) || null,
      ComeTrue62: Number(req.body.ComeTrue62) || null,
      ComeTrue63: Number(req.body.ComeTrue63) || null,
      ComeTrue64: Number(req.body.ComeTrue64) || null,
      ComeTrue65: Number(req.body.ComeTrue65) || null,
      ComeTrue66: Number(req.body.ComeTrue66) || null,
      ComeTrue67: Number(req.body.ComeTrue67) || null,
      ComeTrue68: Number(req.body.ComeTrue68) || null,
      ComeTrue69: Number(req.body.ComeTrue69) || null,
      ComeTrue70: Number(req.body.ComeTrue70) || null,
      ComeTrue71: Number(req.body.ComeTrue71) || null,
      ComeTrue72: Number(req.body.ComeTrue72) || null,
      ComeTrue73: Number(req.body.ComeTrue73) || null,
      ComeTrue74: Number(req.body.ComeTrue74) || null,
      ComeTrue75: Number(req.body.ComeTrue75) || null,
      ComeTrue76: Number(req.body.ComeTrue76) || null,
      ComeTrue77: Number(req.body.ComeTrue77) || null,
      ComeTrue78: Number(req.body.ComeTrue78) || null,
      ComeTrue79: Number(req.body.ComeTrue79) || null,
      ComeTrue80: Number(req.body.ComeTrue80) || null,
      ComeTrue81: Number(req.body.ComeTrue81) || null,
      ComeTrue82: Number(req.body.ComeTrue82) || null,
      ComeTrue83: Number(req.body.ComeTrue83) || null,
      ComeTrue84: Number(req.body.ComeTrue84) || null,
      ComeTrue85: Number(req.body.ComeTrue85) || null,
      ComeTrue86: Number(req.body.ComeTrue86) || null,
      ComeTrue87: Number(req.body.ComeTrue87) || null,
      ComeTrue88: Number(req.body.ComeTrue88) || null,
      ComeTrue89: Number(req.body.ComeTrue89) || null,
      ComeTrue90: Number(req.body.ComeTrue90) || null,
      ComeTrue91: Number(req.body.ComeTrue91) || null,
      ComeTrue92: Number(req.body.ComeTrue92) || null,
      ComeTrue93: Number(req.body.ComeTrue93) || null,
      ComeTrue94: Number(req.body.ComeTrue94) || null,
      ComeTrue95: Number(req.body.ComeTrue95) || null,
      ComeTrue96: Number(req.body.ComeTrue96) || null,
      ComeTrue97: Number(req.body.ComeTrue97) || null,
      ComeTrue98: Number(req.body.ComeTrue98) || null,
      ComeTrue99: Number(req.body.ComeTrue99) || null,
      ComeTrue100: Number(req.body.ComeTrue100) || null,
      ComeTrue101: Number(req.body.ComeTrue101) || null,
      ComeTrue102: Number(req.body.ComeTrue102) || null,
      ComeTrue103: Number(req.body.ComeTrue103) || null,
      ComeTrue104: Number(req.body.ComeTrue104) || null,
      ComeTrue105: Number(req.body.ComeTrue105) || null,
      ComeTrue106: Number(req.body.ComeTrue106) || null,
      ComeTrue107: Number(req.body.ComeTrue107) || null,
      ComeTrue108: Number(req.body.ComeTrue108) || null,
      ComeTrue109: Number(req.body.ComeTrue109) || null,
      ComeTrue110: Number(req.body.ComeTrue110) || null,
      ComeTrue111: Number(req.body.ComeTrue111) || null,
      ComeTrue112: Number(req.body.ComeTrue112) || null,
      ComeTrue113: Number(req.body.ComeTrue113) || null,
      ComeTrue114: Number(req.body.ComeTrue114) || null,
      ComeTrue115: Number(req.body.ComeTrue115) || null,
      ComeTrue116: Number(req.body.ComeTrue116) || null,
      ComeTrue117: Number(req.body.ComeTrue117) || null,
      ComeTrue118: Number(req.body.ComeTrue118) || null,
      ComeTrue119: Number(req.body.ComeTrue119) || null,
      ComeTrue120: Number(req.body.ComeTrue120) || null,
      ComeBurn1: Number(req.body.ComeBurn1) || null,
      ComeBurn2: Number(req.body.ComeBurn2) || null,
      ComeBurn3: Number(req.body.ComeBurn3) || null,
      ComeBurn4: Number(req.body.ComeBurn4) || null,
      ComeBurn5: Number(req.body.ComeBurn5) || null,
      ComeBurn6: Number(req.body.ComeBurn6) || null,
      ComeBurn7: Number(req.body.ComeBurn7) || null,
      ComeBurn8: Number(req.body.ComeBurn8) || null,
      ComeBurn9: Number(req.body.ComeBurn9) || null,
      ComeBurn10: Number(req.body.ComeBurn10) || null,
      ComeBurn11: Number(req.body.ComeBurn11) || null,
      ComeBurn12: Number(req.body.ComeBurn12) || null,
      ComeBurn13: Number(req.body.ComeBurn13) || null,
      ComeBurn14: Number(req.body.ComeBurn14) || null,
      ComeBurn15: Number(req.body.ComeBurn15) || null,
      ComeBurn16: Number(req.body.ComeBurn16) || null,
      ComeBurn17: Number(req.body.ComeBurn17) || null,
      ComeBurn18: Number(req.body.ComeBurn18) || null,
      ComeBurn19: Number(req.body.ComeBurn19) || null,
      ComeBurn20: Number(req.body.ComeBurn20) || null,
      ComeBurn21: Number(req.body.ComeBurn21) || null,
      ComeBurn22: Number(req.body.ComeBurn22) || null,
      ComeBurn23: Number(req.body.ComeBurn23) || null,
      ComeBurn24: Number(req.body.ComeBurn24) || null,
      ComeBurn25: Number(req.body.ComeBurn25) || null,
      ComeBurn26: Number(req.body.ComeBurn26) || null,
      ComeBurn27: Number(req.body.ComeBurn27) || null,
      ComeBurn28: Number(req.body.ComeBurn28) || null,
      ComeBurn29: Number(req.body.ComeBurn29) || null,
      ComeBurn30: Number(req.body.ComeBurn30) || null,
      ComeBurn31: Number(req.body.ComeBurn31) || null,
      ComeBurn32: Number(req.body.ComeBurn32) || null,
      ComeBurn33: Number(req.body.ComeBurn33) || null,
      ComeBurn34: Number(req.body.ComeBurn34) || null,
      ComeBurn35: Number(req.body.ComeBurn35) || null,
      ComeBurn36: Number(req.body.ComeBurn36) || null,
      ComeBurn37: Number(req.body.ComeBurn37) || null,
      ComeBurn38: Number(req.body.ComeBurn38) || null,
      ComeBurn39: Number(req.body.ComeBurn39) || null,
      ComeBurn40: Number(req.body.ComeBurn40) || null,
      ComeBurn41: Number(req.body.ComeBurn41) || null,
      ComeBurn42: Number(req.body.ComeBurn42) || null,
      ComeBurn43: Number(req.body.ComeBurn43) || null,
      ComeBurn44: Number(req.body.ComeBurn44) || null,
      ComeBurn45: Number(req.body.ComeBurn45) || null,
      ComeBurn46: Number(req.body.ComeBurn46) || null,
      ComeBurn47: Number(req.body.ComeBurn47) || null,
      ComeBurn48: Number(req.body.ComeBurn48) || null,
      ComeBurn49: Number(req.body.ComeBurn49) || null,
      ComeBurn50: Number(req.body.ComeBurn50) || null,
      ComeBurn51: Number(req.body.ComeBurn51) || null,
      ComeBurn52: Number(req.body.ComeBurn52) || null,
      ComeBurn53: Number(req.body.ComeBurn53) || null,
      ComeBurn54: Number(req.body.ComeBurn54) || null,
      ComeBurn55: Number(req.body.ComeBurn55) || null,
      ComeBurn56: Number(req.body.ComeBurn56) || null,
      ComeBurn57: Number(req.body.ComeBurn57) || null,
      ComeBurn58: Number(req.body.ComeBurn58) || null,
      ComeBurn59: Number(req.body.ComeBurn59) || null,
      ComeBurn60: Number(req.body.ComeBurn60) || null,
      ComeBurn61: Number(req.body.ComeBurn61) || null,
      ComeBurn62: Number(req.body.ComeBurn62) || null,
      ComeBurn63: Number(req.body.ComeBurn63) || null,
      ComeBurn64: Number(req.body.ComeBurn64) || null,
      ComeBurn65: Number(req.body.ComeBurn65) || null,
      ComeBurn66: Number(req.body.ComeBurn66) || null,
      ComeBurn67: Number(req.body.ComeBurn67) || null,
      ComeBurn68: Number(req.body.ComeBurn68) || null,
      ComeBurn69: Number(req.body.ComeBurn69) || null,
      ComeBurn70: Number(req.body.ComeBurn70) || null,
      ComeBurn71: Number(req.body.ComeBurn71) || null,
      ComeBurn72: Number(req.body.ComeBurn72) || null,
      ComeBurn73: Number(req.body.ComeBurn73) || null,
      ComeBurn74: Number(req.body.ComeBurn74) || null,
      ComeBurn75: Number(req.body.ComeBurn75) || null,
      ComeBurn76: Number(req.body.ComeBurn76) || null,
      ComeBurn77: Number(req.body.ComeBurn77) || null,
      ComeBurn78: Number(req.body.ComeBurn78) || null,
      ComeBurn79: Number(req.body.ComeBurn79) || null,
      ComeBurn80: Number(req.body.ComeBurn80) || null,
      ComeBurn81: Number(req.body.ComeBurn81) || null,
      ComeBurn82: Number(req.body.ComeBurn82) || null,
      ComeBurn83: Number(req.body.ComeBurn83) || null,
      ComeBurn84: Number(req.body.ComeBurn84) || null,
      ComeBurn85: Number(req.body.ComeBurn85) || null,
      ComeBurn86: Number(req.body.ComeBurn86) || null,
      ComeBurn87: Number(req.body.ComeBurn87) || null,
      ComeBurn88: Number(req.body.ComeBurn88) || null,
      ComeBurn89: Number(req.body.ComeBurn89) || null,
      ComeBurn90: Number(req.body.ComeBurn90) || null,
      ComeBurn91: Number(req.body.ComeBurn91) || null,
      ComeBurn92: Number(req.body.ComeBurn92) || null,
      ComeBurn93: Number(req.body.ComeBurn93) || null,
      ComeBurn94: Number(req.body.ComeBurn94) || null,
      ComeBurn95: Number(req.body.ComeBurn95) || null,
      ComeBurn96: Number(req.body.ComeBurn96) || null,
      ComeBurn97: Number(req.body.ComeBurn97) || null,
      ComeBurn98: Number(req.body.ComeBurn98) || null,
      ComeBurn99: Number(req.body.ComeBurn99) || null,
      ComeBurn100: Number(req.body.ComeBurn100) || null,
      ComeBurn101: Number(req.body.ComeBurn101) || null,
      ComeBurn102: Number(req.body.ComeBurn102) || null,
      ComeBurn103: Number(req.body.ComeBurn103) || null,
      ComeBurn104: Number(req.body.ComeBurn104) || null,
      ComeBurn105: Number(req.body.ComeBurn105) || null,
      ComeBurn106: Number(req.body.ComeBurn106) || null,
      ComeBurn107: Number(req.body.ComeBurn107) || null,
      ComeBurn108: Number(req.body.ComeBurn108) || null,
      ComeBurn109: Number(req.body.ComeBurn109) || null,
      ComeBurn110: Number(req.body.ComeBurn110) || null,
      ComeBurn111: Number(req.body.ComeBurn111) || null,
      ComeBurn112: Number(req.body.ComeBurn112) || null,
      ComeBurn113: Number(req.body.ComeBurn113) || null,
      ComeBurn114: Number(req.body.ComeBurn114) || null,
      ComeBurn115: Number(req.body.ComeBurn115) || null,
      ComeBurn117: Number(req.body.ComeBurn116) || null,
      ComeBurn118: Number(req.body.ComeBurn118) || null,
      ComeBurn119: Number(req.body.ComeBurn119) || null,
      ComeBurn120: Number(req.body.ComeBurn120) || null
    };

    try {
      await PostgresDataSource.getRepository(Targets)
        .createQueryBuilder()
        .update(Targets)
        .set(updateTargetDay)
        .where('id = :id', { id })
        .execute();

      // PostgresDataSource.getRepository(Targets).merge(target, req.body);
      // await PostgresDataSource.getRepository(Targets).save(target);
      res.locals = res.json({ updatedAt: new Date() });
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async deleteTarget(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );
      const CropYears = crops[0].cropYear;
      const result = await queryRunner.manager.query(
        `DELETE FROM [dbo].[targets] WHERE cropYear =@0`,
        [CropYears]
      );
      res.locals.data = result;
      responsehandler.send(res);
      return;
    } catch (err: any) {
      next(err);
    }
  }

  public async getCountBudget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const cropOld1 = Number(id) - 1;
      const cropYear = `25${cropOld1}/${id}`;
      const queryRunner = PostgresDataSource.createQueryRunner();

      await queryRunner.connect;
      // const crops = await queryRunner.manager.query(
      //   'SELECT * FROM crop_years WHERE cropStatus = 1'
      // );

      const result1 = await queryRunner.manager.query(
        `SELECT COUNT(*) AS Status00 FROM Budgets WHERE cropYear = @0 AND deletedAt IS NULL AND budget_status = 00`,
        [cropYear]
      );

      const result2 = await queryRunner.manager.query(
        `SELECT COUNT(*) AS Status01 FROM Budgets WHERE cropYear = @0 AND deletedAt IS NULL AND budget_status = 01`,
        [cropYear]
      );
      const result3 = await queryRunner.manager.query(
        `SELECT COUNT(*) AS Status02 FROM Budgets WHERE cropYear = @0 AND deletedAt IS NULL AND budget_status = 02`,
        [cropYear]
      );

      const result4 = await queryRunner.manager.query(
        `SELECT COUNT(*) AS Status03 FROM Budgets WHERE cropYear = @0 AND deletedAt IS NULL AND budget_prove = 01`,
        [cropYear]
      );

      const result5 = await queryRunner.manager.query(
        `SELECT COUNT(*) AS Status04 FROM Budgets WHERE cropYear = @0 AND deletedAt IS NULL AND budget_prove = 02`,
        [cropYear]
      );

      res.locals.data = {
        result1,
        result2,
        result3,
        result4,
        result5
      };
      responsehandler.send(res);
      await queryRunner.release();
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
