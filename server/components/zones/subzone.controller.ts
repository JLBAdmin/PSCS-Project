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
export default class ZoneController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/subzone', this.router);
    this.router.get('/get', this.getSubZone);
    this.router.get('/get-zone', this.getZone);
    this.router.get('/get-zone/:id', this.getZones);
    this.router.get('/get-target', this.getTargetCane);
    this.router.get('/get-fllow', this.getFllowCane);
    this.router.get('/get-todate', this.getTodateCane);
    this.router.get('/get-target/:id', this.getTargetCanes);
    this.router.get('/get-fllow/:id', this.getFllowCanes);
    this.router.get('/get-todate/:id', this.getTodateCanes);
    this.router.put('/update', this.updateTargetCane);
    this.router.get('/error', this.getError);
  }

  public async getSubZone(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // const { crop }: any = req.params;
      // const addCrop = `25${crop.concat('/', Number(crop) + 1)}`;
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );

      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;

      const result = await queryRunner.manager.query(
        `SELECT * FROM Targets WHERE cropYear = @0 ORDER BY id ASC`,
        [cropYear]
      );

      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getZone(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // const { crop }: any = req.params;
      // const addCrop = `25${crop.concat('/', Number(crop) + 1)}`;
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );

      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;

      const result = await queryRunner.manager.query(
        `SELECT  'เขต ' + zone AS Zone FROM Targets WHERE cropYear = @0 GROUP BY zone ORDER BY  CAST(Zone AS int)`,
        [cropYear]
      );

      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getZones(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const cropOld1 = Number(id) - 1;
      const cropYear = `25${cropOld1}/${id}`;

      const result = await PostgresDataSource.query(
        `SELECT  'เขต ' + zone AS Zone FROM Targets WHERE cropYear = @0 GROUP BY zone ORDER BY  CAST(Zone AS int)`,
        [cropYear]
      );
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getTargetCane(
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

      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;
      const result = [];
      const arr: any[][] = [];
      arr.push(['Cane', 'Target', 'Zone', 'Day']);
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 100; i++) {
        // eslint-disable-next-line no-await-in-loop
        result[i] = await queryRunner.manager.query(
          `SELECT 'เขต ' + zone AS Zone, SUM(targetDay${
            i + 1
          }) AS targetDay, SUM(ComeTrue${i + 1}) AS ComeTrue
          FROM dbo.targets
          WHERE cropYear = @0 GROUP BY zone ORDER BY CAST(Zone AS int)`,
          [cropYear]
        );

        // eslint-disable-next-line prefer-destructuring
        // result[0] = ['Cane', 'Target', 'Population', 'Country', 'Day'];
        result[i].map((zone: any) =>
          arr.push([zone.ComeTrue, zone.targetDay, zone.Zone.toString(), i + 1])
        );
      }

      res.locals.data = arr;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getTargetCanes(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const cropOld1 = Number(id) - 1;
      const cropYear = `25${cropOld1}/${id}`;
      const result = [];
      const arr: any[][] = [];
      arr.push(['Cane', 'Target', 'Zone', 'Day']);
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 100; i++) {
        // eslint-disable-next-line no-await-in-loop
        result[i] = await PostgresDataSource.query(
          `SELECT 'เขต ' + zone AS Zone, SUM(targetDay${
            i + 1
          }) AS targetDay, SUM(ComeTrue${i + 1}) AS ComeTrue
          FROM dbo.targets
          WHERE cropYear = @0 GROUP BY zone ORDER BY CAST(Zone AS int)`,
          [cropYear]
        );

        // eslint-disable-next-line prefer-destructuring
        // result[0] = ['Cane', 'Target', 'Population', 'Country', 'Day'];
        result[i].map((zone: any) =>
          arr.push([zone.ComeTrue, zone.targetDay, zone.Zone.toString(), i + 1])
        );
      }

      res.locals.data = arr;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getFllowCane(
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

      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;

      const result = await queryRunner.manager.query(
        `SELECT * FROM View_CanePlanFollow WHERE cropYear = @0 ORDER BY CAST(targetManager AS int), CAST(zone AS int)`,
        [cropYear]
      );

      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getFllowCanes(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const cropOld1 = Number(id) - 1;
      const cropYear = `25${cropOld1}/${id}`;

      const result = await PostgresDataSource.query(
        `SELECT * FROM View_CanePlanFollow WHERE cropYear = @0 ORDER BY CAST(targetManager AS int), CAST(zone AS int)`,
        [cropYear]
      );
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getTodateCane(
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

      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;

      const todate = await queryRunner.manager.query(
        `SELECT DATEDIFF(day, '2023/12/12', FORMAT(GETDATE() - 1, 'yyyy/MM/dd')) AS DateDiff`
      );

      const result: any[] = [];
      const arr: any[] = []; // todate[0].DateDiff

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < Number(todate[0].DateDiff); i++) {
        // eslint-disable-next-line no-await-in-loop
        result[i] = await queryRunner.manager.query(
          `SELECT cropYear, targetManager, zone, subZone, surveyName, SUM(targetDay${
            i + 1
          }) AS targetDay, SUM(ISNULL(ComeTrue${
            i + 1
          }, 0))  AS caneDate, SUM(ISNULL(ComeBurn${
            i + 1
          }, 0))  AS burnDate FROM targets WHERE cropYear =@0 GROUP BY cropYear, targetManager, zone, subZone, surveyName ORDER BY CAST(targetManager AS int), CAST(zone AS int)`,
          [cropYear]
        );

        result[i].forEach((item: any) => {
          arr.push(item);
        });
      }

      res.locals.data = arr;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getTodateCanes(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const cropOld1 = Number(id) - 1;
      const cropYear = `25${cropOld1}/${id}`;

      const todate = await PostgresDataSource.query(
        `SELECT DATEDIFF(day, '2023/12/12', FORMAT(GETDATE() - 1, 'yyyy/MM/dd')) AS DateDiff`
      );

      const result: any[] = [];
      const arr: any[] = []; // todate[0].DateDiff

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < Number(todate[0].DateDiff); i++) {
        // eslint-disable-next-line no-await-in-loop
        result[i] = await PostgresDataSource.query(
          `SELECT cropYear, targetManager, zone, subZone, surveyName, SUM(targetDay${
            i + 1
          }) AS targetDay, SUM(ISNULL(ComeTrue${
            i + 1
          }, 0))  AS caneDate, SUM(ISNULL(ComeBurn${
            i + 1
          }, 0))  AS burnDate FROM targets WHERE cropYear =@0 GROUP BY cropYear, targetManager, zone, subZone, surveyName ORDER BY CAST(targetManager AS int), CAST(zone AS int)`,
          [cropYear]
        );

        result[i].forEach((item: any) => {
          arr.push(item);
        });
      }

      res.locals.data = arr;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async updateTargetCane(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const sub = req.body.subZone.toString();
    const year = req.body.cropYear.toString();
    try {
      const updateTargetCane: any = {
        sugarCaneCrushing: Number(req.body.sugarCaneCrushing),
        targetDay1: Number(req.body.targetDay1) || null,
        ComeTrue1: Number(req.body.ComeTrue1) || null,
        ComeBurn1: Number(req.body.ComeBurn1) || null,
        ccs1: Number(req.body.ccs1) || null,

        targetDay2: Number(req.body.targetDay2) || null,
        ComeBurn2: Number(req.body.ComeBurn2) || null,
        ComeTrue2: Number(req.body.ComeTrue2) || null,
        ccs2: Number(req.body.ccs2) || null,

        targetDay3: Number(req.body.targetDay3) || null,
        ComeTrue3: Number(req.body.ComeTrue3) || null,
        ComeBurn3: Number(req.body.ComeBurn3) || null,
        ccs3: Number(req.body.ccs3) || null,

        targetDay4: Number(req.body.targetDay4) || null,
        ComeTrue4: Number(req.body.ComeTrue4) || null,
        ComeBurn4: Number(req.body.ComeBurn4) || null,
        ccs4: Number(req.body.ccs4) || null,

        targetDay5: Number(req.body.targetDay5) || null,
        ComeTrue5: Number(req.body.ComeTrue5) || null,
        ComeBurn5: Number(req.body.ComeBurn5) || null,
        ccs5: Number(req.body.ccs5) || null,

        targetDay6: Number(req.body.targetDay6) || null,
        ComeTrue6: Number(req.body.ComeTrue6) || null,
        ComeBurn6: Number(req.body.ComeBurn6) || null,
        ccs6: Number(req.body.ccs6) || null,

        targetDay7: Number(req.body.targetDay7) || null,
        ComeTrue7: Number(req.body.ComeTrue7) || null,
        ComeBurn7: Number(req.body.ComeBurn7) || null,
        ccs7: Number(req.body.ccs7) || null,

        targetDay8: Number(req.body.targetDay8) || null,
        ComeTrue8: Number(req.body.ComeTrue8) || null,
        ComeBurn8: Number(req.body.ComeBurn8) || null,
        ccs8: Number(req.body.ccs8) || null,

        targetDay9: Number(req.body.targetDay9) || null,
        ComeTrue9: Number(req.body.ComeTrue9) || null,
        ComeBurn9: Number(req.body.ComeBurn9) || null,
        ccs9: Number(req.body.ccs9) || null,

        targetDay10: Number(req.body.targetDay10) || null,
        ComeTrue10: Number(req.body.ComeTrue10) || null,
        ComeBurn10: Number(req.body.ComeBurn10) || null,
        ccs10: Number(req.body.ccs10) || null,

        targetDay11: Number(req.body.targetDay11) || null,
        ComeTrue11: Number(req.body.ComeTrue11) || null,
        ComeBurn11: Number(req.body.ComeBurn11) || null,
        ccs11: Number(req.body.ccs11) || null,

        targetDay12: Number(req.body.targetDay12) || null,
        ComeTrue12: Number(req.body.ComeTrue12) || null,
        ComeBurn12: Number(req.body.ComeBurn12) || null,
        ccs12: Number(req.body.ccs12) || null,

        targetDay13: Number(req.body.targetDay13) || null,
        ComeTrue13: Number(req.body.ComeTrue13) || null,
        ComeBurn13: Number(req.body.ComeBurn13) || null,
        ccs13: Number(req.body.ccs13) || null,

        targetDay14: Number(req.body.targetDay14) || null,
        ComeTrue14: Number(req.body.ComeTrue14) || null,
        ComeBurn14: Number(req.body.ComeBurn14) || null,
        ccs14: Number(req.body.ccs14) || null,

        targetDay15: Number(req.body.targetDay15) || null,
        ComeTrue15: Number(req.body.ComeTrue15) || null,
        ComeBurn15: Number(req.body.ComeBurn15) || null,
        ccs15: Number(req.body.ccs15) || null,

        targetDay16: Number(req.body.targetDay16) || null,
        ComeTrue16: Number(req.body.ComeTrue16) || null,
        ComeBurn16: Number(req.body.ComeBurn16) || null,
        ccs16: Number(req.body.ccs16) || null,

        targetDay17: Number(req.body.targetDay17) || null,
        ComeTrue17: Number(req.body.ComeTrue17) || null,
        ComeBurn17: Number(req.body.ComeBurn17) || null,
        ccs17: Number(req.body.ccs17) || null,

        targetDay18: Number(req.body.targetDay18) || null,
        ComeTrue18: Number(req.body.ComeTrue) || null,
        ComeBurn18: Number(req.body.ComeBurn18) || null,
        ccs18: Number(req.body.ccs18) || null,

        targetDay19: Number(req.body.targetDay19) || null,
        ComeTrue19: Number(req.body.ComeTrue19) || null,
        ComeBurn19: Number(req.body.ComeBurn19) || null,
        ccs19: Number(req.body.ccs19) || null,

        targetDay20: Number(req.body.targetDay20) || null,
        ComeTrue20: Number(req.body.ComeTrue20) || null,
        ComeBurn20: Number(req.body.ComeBurn20) || null,
        ccs20: Number(req.body.ccs20) || null,

        targetDay21: Number(req.body.targetDay21) || null,
        ComeTrue21: Number(req.body.ComeTrue21) || null,
        ComeBurn21: Number(req.body.ComeBurn21) || null,
        ccs21: Number(req.body.ccs21) || null,

        targetDay22: Number(req.body.targetDay22) || null,
        ComeTrue22: Number(req.body.ComeTrue22) || null,
        ComeBurn22: Number(req.body.ComeBurn22) || null,
        ccs22: Number(req.body.ccs22) || null,

        targetDay23: Number(req.body.targetDay23) || null,
        ComeTrue23: Number(req.body.ComeTrue23) || null,
        ComeBurn23: Number(req.body.ComeBurn23) || null,
        ccs23: Number(req.body.ccs23) || null,

        targetDay24: Number(req.body.targetDay24) || null,
        ComeTrue24: Number(req.body.ComeTrue24) || null,
        ComeBurn24: Number(req.body.ComeBurn24) || null,
        ccs24: Number(req.body.ccs24) || null,

        targetDay25: Number(req.body.targetDay25) || null,
        ComeTrue25: Number(req.body.ComeTrue25) || null,
        ComeBurn25: Number(req.body.ComeBurn25) || null,
        ccs25: Number(req.body.ccs25) || null,

        targetDay26: Number(req.body.targetDay26) || null,
        ComeTrue26: Number(req.body.ComeTrue26) || null,
        ComeBurn26: Number(req.body.ComeBurn16) || null,
        ccs26: Number(req.body.ccs26) || null,

        targetDay27: Number(req.body.targetDay27) || null,
        ComeTrue27: Number(req.body.ComeTrue27) || null,
        ComeBurn27: Number(req.body.ComeBurn27) || null,
        ccs27: Number(req.body.ccs27) || null,

        targetDay28: Number(req.body.targetDay28) || null,
        ComeTrue28: Number(req.body.ComeTrue28) || null,
        ComeBurn28: Number(req.body.ComeBurn28) || null,
        ccs28: Number(req.body.ccs28) || null,

        targetDay29: Number(req.body.targetDay29) || null,
        ComeTrue29: Number(req.body.ComeTrue29) || null,
        ComeBurn29: Number(req.body.ComeBurn29) || null,
        ccs29: Number(req.body.ccs29) || null,

        targetDay30: Number(req.body.targetDay30) || null,
        ComeTrue30: Number(req.body.ComeTrue30) || null,
        ComeBurn30: Number(req.body.ComeBurn30) || null,
        ccs30: Number(req.body.ccs30) || null,

        targetDay31: Number(req.body.targetDay31) || null,
        ComeTrue31: Number(req.body.ComeTrue31) || null,
        ComeBurn31: Number(req.body.ComeBurn31) || null,
        ccs31: Number(req.body.ccs31) || null,

        targetDay32: Number(req.body.targetDay32) || null,
        ComeTrue32: Number(req.body.ComeTrue32) || null,
        ComeBurn32: Number(req.body.ComeBurn32) || null,
        ccs32: Number(req.body.ccs32) || null,

        targetDay33: Number(req.body.targetDay33) || null,
        ComeTrue33: Number(req.body.ComeTrue33) || null,
        ComeBurn33: Number(req.body.ComeBurn33) || null,
        ccs33: Number(req.body.ccs33) || null,

        targetDay34: Number(req.body.targetDay34) || null,
        ComeTrue34: Number(req.body.ComeTrue34) || null,
        ComeBurn34: Number(req.body.ComeBurn34) || null,
        ccs34: Number(req.body.ccs34) || null,

        targetDay35: Number(req.body.targetDay35) || null,
        ComeTrue35: Number(req.body.ComeTrue35) || null,
        ComeBurn35: Number(req.body.ComeBurn35) || null,
        ccs35: Number(req.body.ccs35) || null,

        targetDay36: Number(req.body.targetDay36) || null,
        ComeTrue36: Number(req.body.ComeTrue36) || null,
        ComeBurn36: Number(req.body.ComeBurn36) || null,
        ccs36: Number(req.body.ccs36) || null,

        targetDay37: Number(req.body.targetDay37) || null,
        ComeTrue37: Number(req.body.ComeTrue37) || null,
        ComeBurn37: Number(req.body.ComeBurn37) || null,
        ccs37: Number(req.body.ccs37) || null,

        targetDay38: Number(req.body.targetDay38) || null,
        ComeTrue38: Number(req.body.ComeTrue38) || null,
        ComeBurn38: Number(req.body.ComeBurn38) || null,
        ccs38: Number(req.body.ccs38) || null,

        targetDay39: Number(req.body.targetDay39) || null,
        ComeTrue39: Number(req.body.ComeTrue39) || null,
        ComeBurn39: Number(req.body.ComeBurn39) || null,
        ccs39: Number(req.body.ccs39) || null,

        targetDay40: Number(req.body.targetDay40) || null,
        ComeTrue40: Number(req.body.ComeTrue40) || null,
        ComeBurn40: Number(req.body.ComeBurn40) || null,
        ccs40: Number(req.body.ccs40) || null,

        targetDay41: Number(req.body.targetDay41) || null,
        ComeTrue41: Number(req.body.ComeTrue41) || null,
        ComeBurn41: Number(req.body.ComeBurn41) || null,
        ccs41: Number(req.body.ccs41) || null,

        targetDay42: Number(req.body.targetDay42) || null,
        ComeTrue42: Number(req.body.ComeTrue42) || null,
        ComeBurn42: Number(req.body.ComeBurn42) || null,
        ccs42: Number(req.body.ccs42) || null,

        targetDay43: Number(req.body.targetDay43) || null,
        ComeTrue43: Number(req.body.ComeTrue43) || null,
        ComeBurn43: Number(req.body.ComeBurn43) || null,
        ccs43: Number(req.body.ccs43) || null,

        targetDay44: Number(req.body.targetDay44) || null,
        ComeTrue44: Number(req.body.ComeTrue44) || null,
        ComeBurn44: Number(req.body.ComeBurn44) || null,
        ccs44: Number(req.body.ccs44) || null,

        targetDay45: Number(req.body.targetDay45) || null,
        ComeTrue45: Number(req.body.ComeTrue45) || null,
        ComeBurn45: Number(req.body.ComeBurn45) || null,
        ccs45: Number(req.body.ccs45) || null,

        targetDay46: Number(req.body.targetDay46) || null,
        ComeTrue46: Number(req.body.ComeTrue46) || null,
        ComeBurn46: Number(req.body.ComeBurn46) || null,
        ccs46: Number(req.body.ccs46) || null,

        targetDay47: Number(req.body.targetDay47) || null,
        ComeTrue47: Number(req.body.ComeTrue47) || null,
        ComeBurn47: Number(req.body.ComeBurn47) || null,
        ccs47: Number(req.body.ccs47) || null,

        targetDay48: Number(req.body.targetDay48) || null,
        ComeTrue48: Number(req.body.ComeTrue48) || null,
        ComeBurn48: Number(req.body.ComeBurn48) || null,
        ccs48: Number(req.body.ccs48) || null,

        targetDay49: Number(req.body.targetDay49) || null,
        ComeTrue49: Number(req.body.ComeTrue49) || null,
        ComeBurn49: Number(req.body.ComeBurn49) || null,
        ccs49: Number(req.body.ccs49) || null,

        targetDay50: Number(req.body.targetDay50) || null,
        ComeTrue50: Number(req.body.ComeTrue50) || null,
        ComeBurn50: Number(req.body.ComeBurn50) || null,
        ccs50: Number(req.body.ccs50) || null,

        targetDay51: Number(req.body.targetDay51) || null,
        ComeTrue51: Number(req.body.ComeTrue51) || null,
        ComeBurn51: Number(req.body.ComeBurn51) || null,
        ccs51: Number(req.body.ccs51) || null,

        targetDay52: Number(req.body.targetDay52) || null,
        ComeTrue52: Number(req.body.ComeTrue52) || null,
        ComeBurn52: Number(req.body.ComeBurn52) || null,
        ccs52: Number(req.body.ccs52) || null,

        targetDay53: Number(req.body.targetDay53) || null,
        ComeTrue53: Number(req.body.ComeTrue53) || null,
        ComeBurn53: Number(req.body.ComeBurn53) || null,
        ccs53: Number(req.body.ccs53) || null,

        targetDay54: Number(req.body.targetDay54) || null,
        ComeTrue54: Number(req.body.ComeTrue54) || null,
        ComeBurn54: Number(req.body.ComeBurn54) || null,
        ccs54: Number(req.body.ccs54) || null,

        targetDay55: Number(req.body.targetDay55) || null,
        ComeTrue55: Number(req.body.ComeTrue55) || null,
        ComeBurn55: Number(req.body.ComeBurn55) || null,
        ccs55: Number(req.body.ccs55) || null,

        targetDay56: Number(req.body.targetDay56) || null,
        ComeTrue56: Number(req.body.ComeTrue56) || null,
        ComeBurn56: Number(req.body.ComeBurn56) || null,
        ccs56: Number(req.body.ccs56) || null,

        targetDay57: Number(req.body.targetDay57) || null,
        ComeTrue57: Number(req.body.ComeTrue57) || null,
        ComeBurn57: Number(req.body.ComeBurn57) || null,
        ccs57: Number(req.body.ccs57) || null,

        targetDay58: Number(req.body.targetDay58) || null,
        ComeTrue58: Number(req.body.ComeTrue58) || null,
        ComeBurn58: Number(req.body.ComeBurn58) || null,
        ccs58: Number(req.body.ccs58) || null,

        targetDay59: Number(req.body.targetDay59) || null,
        ComeTrue59: Number(req.body.ComeTrue59) || null,
        ComeBurn59: Number(req.body.ComeBurn59) || null,
        ccs59: Number(req.body.ccs59) || null,

        targetDay60: Number(req.body.targetDay60) || null,
        ComeTrue60: Number(req.body.ComeTrue60) || null,
        ComeBurn60: Number(req.body.ComeBurn60) || null,
        ccs60: Number(req.body.ccs60) || null,

        targetDay61: Number(req.body.targetDay61) || null,
        ComeTrue61: Number(req.body.ComeTrue61) || null,
        ComeBurn61: Number(req.body.ComeBurn61) || null,
        ccs61: Number(req.body.ccs61) || null,

        targetDay62: Number(req.body.targetDay62) || null,
        ComeTrue62: Number(req.body.ComeTrue62) || null,
        ComeBurn62: Number(req.body.ComeBurn62) || null,
        ccs62: Number(req.body.ccs62) || null,

        targetDay63: Number(req.body.targetDay63) || null,
        ComeTrue63: Number(req.body.ComeTrue63) || null,
        ComeBurn63: Number(req.body.ComeBurn63) || null,
        ccs63: Number(req.body.ccs63) || null,

        targetDay64: Number(req.body.targetDay64) || null,
        ComeTrue64: Number(req.body.ComeTrue64) || null,
        ComeBurn64: Number(req.body.ComeBurn64) || null,
        ccs64: Number(req.body.ccs64) || null,

        targetDay65: Number(req.body.targetDay65) || null,
        ComeTrue65: Number(req.body.ComeTrue65) || null,
        ComeBurn65: Number(req.body.ComeBurn65) || null,
        ccs65: Number(req.body.ccs65) || null,

        targetDay66: Number(req.body.targetDay66) || null,
        ComeTrue66: Number(req.body.ComeTrue66) || null,
        ComeBurn66: Number(req.body.ComeBurn66) || null,
        ccs66: Number(req.body.ccs66) || null,

        targetDay67: Number(req.body.targetDay67) || null,
        ComeTrue67: Number(req.body.ComeTrue67) || null,
        ComeBurn67: Number(req.body.ComeBurn67) || null,
        ccs67: Number(req.body.ccs67) || null,

        targetDay68: Number(req.body.targetDay68) || null,
        ComeTrue68: Number(req.body.ComeTrue68) || null,
        ComeBurn68: Number(req.body.ComeBurn68) || null,
        ccs68: Number(req.body.ccs68) || null,

        targetDay69: Number(req.body.targetDay69) || null,
        ComeTrue69: Number(req.body.ComeTrue69) || null,
        ComeBurn69: Number(req.body.ComeBurn69) || null,
        ccs69: Number(req.body.ccs69) || null,

        targetDay70: Number(req.body.targetDay70) || null,
        ComeTrue70: Number(req.body.ComeTrue70) || null,
        ComeBurn70: Number(req.body.ComeBurn70) || null,
        ccs70: Number(req.body.ccs70) || null,

        targetDay71: Number(req.body.targetDay71) || null,
        ComeTrue71: Number(req.body.ComeTrue71) || null,
        ComeBurn71: Number(req.body.ComeBurn71) || null,
        ccs71: Number(req.body.ccs71) || null,

        targetDay72: Number(req.body.targetDay72) || null,
        ComeTrue72: Number(req.body.ComeTrue72) || null,
        ComeBurn72: Number(req.body.ComeBurn72) || null,
        ccs72: Number(req.body.ccs72) || null,

        targetDay73: Number(req.body.targetDay73) || null,
        ComeTrue73: Number(req.body.ComeTrue73) || null,
        ComeBurn73: Number(req.body.ComeBurn73) || null,
        ccs73: Number(req.body.ccs73) || null,

        targetDay74: Number(req.body.targetDay74) || null,
        ComeTrue74: Number(req.body.ComeTrue74) || null,
        ComeBurn74: Number(req.body.ComeBurn74) || null,
        ccs74: Number(req.body.ccs74) || null,

        targetDay75: Number(req.body.targetDay75) || null,
        ComeTrue75: Number(req.body.ComeTrue75) || null,
        ComeBurn75: Number(req.body.ComeBurn75) || null,
        ccs75: Number(req.body.ccs75) || null,

        targetDay76: Number(req.body.targetDay76) || null,
        ComeTrue76: Number(req.body.ComeTrue76) || null,
        ComeBurn76: Number(req.body.ComeBurn76) || null,
        ccs76: Number(req.body.ccs76) || null,

        targetDay77: Number(req.body.targetDay77) || null,
        ComeTrue77: Number(req.body.ComeTrue77) || null,
        ComeBurn77: Number(req.body.ComeBurn77) || null,
        ccs77: Number(req.body.ccs77) || null,

        targetDay78: Number(req.body.targetDay78) || null,
        ComeTrue78: Number(req.body.ComeTrue78) || null,
        ComeBurn78: Number(req.body.ComeBurn78) || null,
        ccs78: Number(req.body.ccs78) || null,

        targetDay79: Number(req.body.targetDay79) || null,
        ComeTrue79: Number(req.body.ComeTrue79) || null,
        ComeBurn79: Number(req.body.ComeBurn79) || null,
        ccs79: Number(req.body.ccs79) || null,

        targetDay80: Number(req.body.targetDay80) || null,
        ComeTrue80: Number(req.body.ComeTrue80) || null,
        ComeBurn80: Number(req.body.ComeBurn80) || null,
        ccs80: Number(req.body.ccs80) || null,

        targetDay81: Number(req.body.targetDay81) || null,
        ComeTrue81: Number(req.body.ComeTrue81) || null,
        ComeBurn81: Number(req.body.ComeBurn81) || null,
        ccs81: Number(req.body.ccs81) || null,

        targetDay82: Number(req.body.targetDay82) || null,
        ComeTrue82: Number(req.body.ComeTrue82) || null,
        ComeBurn82: Number(req.body.ComeBurn82) || null,
        ccs82: Number(req.body.ccs82) || null,

        targetDay83: Number(req.body.targetDay83) || null,
        ComeTrue83: Number(req.body.ComeTrue83) || null,
        ComeBurn83: Number(req.body.ComeBurn83) || null,
        ccs83: Number(req.body.ccs83) || null,

        targetDay84: Number(req.body.targetDay84) || null,
        ComeTrue84: Number(req.body.ComeTrue84) || null,
        ComeBurn84: Number(req.body.ComeBurn84) || null,
        ccs84: Number(req.body.ccs84) || null,

        targetDay85: Number(req.body.targetDay85) || null,
        ComeTrue85: Number(req.body.ComeTrue85) || null,
        ComeBurn85: Number(req.body.ComeBurn85) || null,
        ccs85: Number(req.body.ccs85) || null,

        targetDay86: Number(req.body.targetDay86) || null,
        ComeTrue86: Number(req.body.ComeTrue86) || null,
        ComeBurn86: Number(req.body.ComeBurn86) || null,
        ccs86: Number(req.body.ccs86) || null,

        targetDay87: Number(req.body.targetDay87) || null,
        ComeTrue87: Number(req.body.ComeTrue87) || null,
        ComeBurn87: Number(req.body.ComeBurn87) || null,
        ccs87: Number(req.body.ccs87) || null,

        targetDay88: Number(req.body.targetDay88) || null,
        ComeTrue88: Number(req.body.ComeTrue88) || null,
        ComeBurn88: Number(req.body.ComeBurn88) || null,
        ccs88: Number(req.body.ccs88) || null,

        targetDay89: Number(req.body.targetDay89) || null,
        ComeTrue89: Number(req.body.ComeTrue89) || null,
        ComeBurn89: Number(req.body.ComeBurn89) || null,
        ccs89: Number(req.body.ccs89) || null,

        targetDay90: Number(req.body.targetDay90) || null,
        ComeTrue90: Number(req.body.ComeTrue90) || null,
        ComeBurn90: Number(req.body.ComeBurn90) || null,
        ccs90: Number(req.body.ccs90) || null,

        targetDay91: Number(req.body.targetDay91) || null,
        ComeTrue91: Number(req.body.ComeTrue91) || null,
        ComeBurn91: Number(req.body.ComeBurn91) || null,
        ccs91: Number(req.body.ccs91) || null,

        targetDay92: Number(req.body.targetDay92) || null,
        ComeTrue92: Number(req.body.ComeTrue92) || null,
        ComeBurn92: Number(req.body.ComeBurn92) || null,
        ccs92: Number(req.body.ccs92) || null,

        targetDay93: Number(req.body.targetDay93) || null,
        ComeTrue93: Number(req.body.ComeTrue93) || null,
        ComeBurn93: Number(req.body.ComeBurn93) || null,
        ccs93: Number(req.body.ccs93) || null,

        targetDay94: Number(req.body.targetDay94) || null,
        ComeTrue94: Number(req.body.ComeTrue94) || null,
        ComeBurn94: Number(req.body.ComeBurn94) || null,
        ccs94: Number(req.body.ccs) || null,

        targetDay95: Number(req.body.targetDay95) || null,
        ComeTrue95: Number(req.body.ComeTrue95) || null,
        ComeBurn95: Number(req.body.ComeBurn95) || null,
        ccs95: Number(req.body.ccs65) || null,

        targetDay96: Number(req.body.targetDay96) || null,
        ComeTrue96: Number(req.body.ComeTrue96) || null,
        ComeBurn96: Number(req.body.ComeBurn96) || null,
        ccs96: Number(req.body.ccs96) || null,

        targetDay97: Number(req.body.targetDay97) || null,
        ComeTrue97: Number(req.body.ComeTrue97) || null,
        ComeBurn97: Number(req.body.ComeBurn97) || null,
        ccs97: Number(req.body.ccs97) || null,

        targetDay98: Number(req.body.targetDay98) || null,
        ComeTrue98: Number(req.body.ComeTrue98) || null,
        ComeBurn98: Number(req.body.ComeBurn98) || null,
        ccs98: Number(req.body.ccs98) || null,

        targetDay99: Number(req.body.targetDay99) || null,
        ComeTrue99: Number(req.body.ComeTrue99) || null,
        ComeBurn99: Number(req.body.ComeBurn99) || null,
        ccs99: Number(req.body.ccs99) || null,

        targetDay100: Number(req.body.targetDay100) || null,
        ComeTrue100: Number(req.body.ComeTrue100) || null,
        ComeBurn100: Number(req.body.ComeBurn100) || null,
        ccs100: Number(req.body.ccs100) || null,

        targetDay101: Number(req.body.targetDay101) || null,
        ComeTrue101: Number(req.body.ComeTrue101) || null,
        ComeBurn101: Number(req.body.ComeBurn101) || null,
        ccs101: Number(req.body.ccs101) || null,

        targetDay102: Number(req.body.targetDay102) || null,
        ComeTrue102: Number(req.body.ComeTrue102) || null,
        ComeBurn102: Number(req.body.ComeBurn102) || null,
        ccs102: Number(req.body.ccs102) || null,

        targetDay103: Number(req.body.targetDay103) || null,
        ComeTrue103: Number(req.body.ComeTrue103) || null,
        ComeBurn103: Number(req.body.ComeBurn103) || null,
        ccs103: Number(req.body.ccs103) || null,

        targetDay104: Number(req.body.targetDay104) || null,
        ComeTrue104: Number(req.body.ComeTrue104) || null,
        ComeBurn104: Number(req.body.ComeBurn104) || null,
        ccs104: Number(req.body.ccs104) || null,

        targetDay105: Number(req.body.targetDay105) || null,
        ComeTrue105: Number(req.body.ComeTrue105) || null,
        ComeBurn105: Number(req.body.ComeBurn105) || null,
        ccs105: Number(req.body.ccs105) || null,

        targetDay106: Number(req.body.targetDay106) || null,
        ComeTrue106: Number(req.body.ComeTrue106) || null,
        ComeBurn106: Number(req.body.ComeBurn106) || null,
        ccs106: Number(req.body.ccs106) || null,

        targetDay107: Number(req.body.targetDay107) || null,
        ComeTrue107: Number(req.body.ComeTrue107) || null,
        ComeBurn107: Number(req.body.ComeBurn107) || null,
        ccs107: Number(req.body.ccs107) || null,

        targetDay108: Number(req.body.targetDay108) || null,
        ComeTrue108: Number(req.body.ComeTrue108) || null,
        ComeBurn108: Number(req.body.ComeBurn108) || null,
        ccs108: Number(req.body.ccs108) || null,

        targetDay109: Number(req.body.targetDay109) || null,
        ComeTrue109: Number(req.body.ComeTrue109) || null,
        ComeBurn109: Number(req.body.ComeBurn109) || null,
        ccs109: Number(req.body.ccs109) || null,

        targetDay110: Number(req.body.targetDay110) || null,
        ComeTrue110: Number(req.body.ComeTru110) || null,
        ComeBurn110: Number(req.body.ComeBurn110) || null,
        ccs110: Number(req.body.ccs110) || null,

        targetDay111: Number(req.body.targetDay111) || null,
        ComeTrue111: Number(req.body.ComeTrue111) || null,
        ComeBurn111: Number(req.body.ComeBurn111) || null,
        ccs111: Number(req.body.ccs111) || null,

        targetDay112: Number(req.body.targetDay112) || null,
        ComeTrue112: Number(req.body.ComeTrue112) || null,
        ComeBurn112: Number(req.body.ComeBurn112) || null,
        ccs112: Number(req.body.ccs112) || null,

        targetDay113: Number(req.body.targetDay113) || null,
        ComeTrue113: Number(req.body.ComeTrue113) || null,
        ComeBurn113: Number(req.body.ComeBurn113) || null,
        ccs113: Number(req.body.ccs113) || null,

        targetDay114: Number(req.body.targetDay114) || null,
        ComeTrue114: Number(req.body.ComeTrue114) || null,
        ComeBurn114: Number(req.body.ComeBurn114) || null,
        ccs114: Number(req.body.ccs114) || null,

        targetDay115: Number(req.body.targetDay115) || null,
        ComeTrue115: Number(req.body.ComeTrue115) || null,
        ComeBurn115: Number(req.body.ComeBurn115) || null,
        ccs115: Number(req.body.ccs115) || null,

        targetDay116: Number(req.body.targetDay116) || null,
        ComeTrue116: Number(req.body.ComeTrue116) || null,
        ComeBurn116: Number(req.body.ComeBurn116) || null,
        ccs116: Number(req.body.ccs116) || null,

        targetDay117: Number(req.body.targetDay117) || null,
        ComeTrue117: Number(req.body.ComeTrue117) || null,
        ComeBurn117: Number(req.body.ComeBurn117) || null,
        ccs117: Number(req.body.ccs117) || null,

        targetDay118: Number(req.body.targetDay118) || null,
        ComeTrue118: Number(req.body.ComeTrue118) || null,
        ComeBurn118: Number(req.body.ComeBurn118) || null,
        ccs118: Number(req.body.ccs118) || null,

        targetDay119: Number(req.body.targetDay119) || null,
        ComeTrue119: Number(req.body.ComeTrue119) || null,
        ComeBurn119: Number(req.body.ComeBurn119) || null,
        ccs119: Number(req.body.ccs119) || null,

        targetDay120: Number(req.body.targetDay120) || null,
        ComeTrue120: Number(req.body.ComeTrue120) || null,
        ComeBurn120: Number(req.body.ComeBurn120) || null,
        ccs120: Number(req.body.ccs120) || null
      };

      await PostgresDataSource.getRepository(Targets)
        .createQueryBuilder()
        .update(Targets)
        .set(updateTargetCane)
        .where('cropYear = :year', { year })
        .andWhere('subZone = :sub', { sub })
        .execute();
      res.locals = res.status(200).json({
        msg: 'target SugarCane create susscess'
        // updatedAt: new Date()
      });
      responsehandler.send(res);
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
