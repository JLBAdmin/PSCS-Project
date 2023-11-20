/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { PostgresDataSource } from '../../data-source';
import { Factorys } from '../../entity/pgsql/pg.factory';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */
export default class FactoryController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/factory', this.router);
    this.router.get('/get', this.getFactory);
    this.router.get('/get-cane/:group', this.getCaneFactory);
    this.router.get('/get-ccs/:group', this.getCcsFactory);
    this.router.get('/get-canegroup/:group', this.getCaneGroup);
    this.router.get('/get-ccsgroup/:group', this.getCcsGroup);
    this.router.get('/get-year', this.getYearFactory);
    this.router.post('/new', this.newFactory);
    this.router.put('/update/:id', this.updateFactory);
    this.router.get('/error', this.getError);
    this.router.get('/get-plan/:id/:group', this.getPlan);
    this.router.get('/get-plan/:id/:group/:crop', this.getPlans);
  }

  public async getFactory(
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
      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;
      const result = await queryRunner.manager.query(
        'SELECT * FROM factorys WHERE cropYear =@0 ORDER BY factory',
        [cropYear]
      );

      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getCaneFactory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { group } = req.params;
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    try {
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );
      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;

      const cropYear = `25${cropOld1}/${crop1}`;
      const result = await queryRunner.manager.query(
        `SELECT factory, ISNULL(day1, 0), day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14, day15, day16, day17, day18, day19, day20,  
        day22, day23, day24, day25, day26, day27, day28, day29, day30, day31, day32, day33, day34, day35, day36, day37, day38, day39, day40, day41, day42, 
        day43, day44, day45, day46, day47, day48, day49, day50, day51, day52, day53, day54, day55, day56, day57, day58, day59, day60, day61, day62, day63,
        day64, day65, day66, day67, day68, day69, day70, day71, day72, day73, day74, day75, day76, day77, day78, day79, day80, day81, day82, day83, day84,
        day85, day86, day87, day88, day89, day90, day91, day92, day93, day94, day95, day96, day97, day98, day99, day100 FROM factorys WHERE factory_group = @0 AND cropYear =@1 ORDER BY factory`,
        [group, cropYear]
      );
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getCcsFactory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { group } = req.params;
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    await queryRunner.connect;
    try {
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );
      const crop1 = crops[0].cropYear.substring(2, 4);
      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;
      const result = await queryRunner.manager.query(
        `SELECT factory, ISNULL(ccs1, 0), ccs2, ccs3, ccs4, ccs5, ccs6, ccs7, ccs8, ccs9, ccs10, ccs11, ccs12, ccs13, ccs14, ccs15, ccs16, ccs17, ccs18, ccs19, ccs20,  
        ccs22, ccs23, ccs24, ccs25, ccs26, ccs27, ccs28, ccs29, ccs30, ccs31, ccs32, ccs33, ccs34, ccs35, ccs36, ccs37, ccs38, ccs39, ccs40, ccs41, ccs42, 
        ccs43, ccs44, ccs45, ccs46, ccs47, ccs48, ccs49, ccs50, ccs51, ccs52, ccs53, ccs54, ccs55, ccs56, ccs57, ccs58, ccs59, ccs60, ccs61, ccs62, ccs63,
        ccs64, ccs65, ccs66, ccs67, ccs68, ccs69, ccs70, ccs71, ccs72, ccs73, ccs74, ccs75, ccs76, ccs77, ccs78, ccs79, ccs80, ccs81, ccs82, ccs83, ccs84,
        ccs85, ccs86, ccs87, ccs88, ccs89, ccs90, ccs91, ccs92, ccs93, ccs94, ccs95, ccs96, ccs97, ccs98, ccs99, ccs100 FROM factorys WHERE factory_group = @0 AND cropYear =@1 ORDER BY factory`,
        [group, cropYear]
      );
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getCaneGroup(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { group } = req.params;
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    try {
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );
      const crop1 = crops[0].cropYear.substring(2, 4);
      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;
      const result = await queryRunner.manager.query(
        `SELECT factory, ISNULL(day1, 0), day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14, day15, day16, day17, day18, day19, day20,  
        day22, day23, day24, day25, day26, day27, day28, day29, day30, day31, day32, day33, day34, day35, day36, day37, day38, day39, day40, day41, day42, 
        day43, day44, day45, day46, day47, day48, day49, day50, day51, day52, day53, day54, day55, day56, day57, day58, day59, day60, day61, day62, day63,
        day64, day65, day66, day67, day68, day69, day70, day71, day72, day73, day74, day75, day76, day77, day78, day79, day80, day81, day82, day83, day84,
        day85, day86, day87, day88, day89, day90, day91, day92, day93, day94, day95, day96, day97, day98, day99, day100 FROM factorys WHERE factory_status = @0 AND cropYear =@1 ORDER BY factory`,
        [group, cropYear]
      );
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getCcsGroup(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { group } = req.params;
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    await queryRunner.connect;
    try {
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );
      const crop1 = crops[0].cropYear.substring(2, 4);
      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;
      const result = await queryRunner.manager.query(
        `SELECT factory, ISNULL(ccs1, 0), ccs2, ccs3, ccs4, ccs5, ccs6, ccs7, ccs8, ccs9, ccs10, ccs11, ccs12, ccs13, ccs14, ccs15, ccs16, ccs17, ccs18, ccs19, ccs20,  
        ccs22, ccs23, ccs24, ccs25, ccs26, ccs27, ccs28, ccs29, ccs30, ccs31, ccs32, ccs33, ccs34, ccs35, ccs36, ccs37, ccs38, ccs39, ccs40, ccs41, ccs42, 
        ccs43, ccs44, ccs45, ccs46, ccs47, ccs48, ccs49, ccs50, ccs51, ccs52, ccs53, ccs54, ccs55, ccs56, ccs57, ccs58, ccs59, ccs60, ccs61, ccs62, ccs63,
        ccs64, ccs65, ccs66, ccs67, ccs68, ccs69, ccs70, ccs71, ccs72, ccs73, ccs74, ccs75, ccs76, ccs77, ccs78, ccs79, ccs80, ccs81, ccs82, ccs83, ccs84,
        ccs85, ccs86, ccs87, ccs88, ccs89, ccs90, ccs91, ccs92, ccs93, ccs94, ccs95, ccs96, ccs97, ccs98, ccs99, ccs100 FROM factorys WHERE factory_status = @0 AND cropYear =@1 ORDER BY factory`,
        [group, cropYear]
      );
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getYearFactory(
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
      const crop1 = crops[0].cropYear.substring(2, 4);

      const cropOld1 = Number(crop1) - 1;
      const cropYear = `25${cropOld1}/${crop1}`;
      const result = await queryRunner.manager.query(
        'SELECT * FROM factorys WHERE cropYear =@0 ORDER BY factory',
        [cropYear]
      );
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async newFactory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const target = PostgresDataSource.getRepository(Factorys).create(
        req.body
      );
      await PostgresDataSource.getRepository(Factorys).save(target);
      res.locals = res.status(201).json({
        msg: 'Factory SugarCane create susscess',
        createdAt: new Date()
      });
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async updateFactory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    try {
      const updateFactory: any = {
        cropYear: req.body.cropYear,
        factory: req.body.factory,
        factory_status: req.body.factory_status,
        factory_group: Number(req.body.factory_group),
        factory_start: req.body.factory_start,
        factory_stop: req.body.factory_stop,
        factory_target: req.body.factory_target,
        factory_rate: req.body.factory_rate,
        factory_area: req.body.factory_area,
        day1: Number(req.body.day1) || null,
        ccs1: Number(req.body.ccs1) || null,
        day2: Number(req.body.day2) || null,
        ccs2: Number(req.body.ccs2) || null,
        day3: Number(req.body.day3) || null,
        ccs3: Number(req.body.ccs3) || null,
        day4: Number(req.body.day4) || null,
        ccs4: Number(req.body.ccs4) || null,
        day5: Number(req.body.day5) || null,
        ccs5: Number(req.body.ccs5) || null,
        day6: Number(req.body.day6) || null,
        ccs6: Number(req.body.ccs6) || null,
        day7: Number(req.body.day7) || null,
        ccs7: Number(req.body.ccs7) || null,
        day8: Number(req.body.day8) || null,
        ccs8: Number(req.body.ccs8) || null,
        day9: Number(req.body.day9) || null,
        ccs9: Number(req.body.ccs9) || null,
        day10: Number(req.body.day10) || null,
        ccs10: Number(req.body.ccs10) || null,
        day11: Number(req.body.day11) || null,
        ccs11: Number(req.body.ccs11) || null,
        day12: Number(req.body.day12) || null,
        ccs12: Number(req.body.ccs12) || null,
        day13: Number(req.body.day13) || null,
        ccs13: Number(req.body.ccs13) || null,
        day14: Number(req.body.day14) || null,
        ccs14: Number(req.body.ccs14) || null,
        day15: Number(req.body.day15) || null,
        ccs15: Number(req.body.ccs15) || null,
        day16: Number(req.body.day16) || null,
        ccs16: Number(req.body.ccs16) || null,
        day17: Number(req.body.day17) || null,
        ccs17: Number(req.body.ccs17) || null,
        day18: Number(req.body.day18) || null,
        ccs18: Number(req.body.ccs18) || null,
        day19: Number(req.body.day19) || null,
        ccs19: Number(req.body.ccs19) || null,
        day20: Number(req.body.day20) || null,
        ccs20: Number(req.body.ccs20) || null,
        day21: Number(req.body.day21) || null,
        ccs21: Number(req.body.ccs21) || null,
        day22: Number(req.body.day22) || null,
        ccs22: Number(req.body.ccs22) || null,
        day23: Number(req.body.day23) || null,
        ccs23: Number(req.body.ccs23) || null,
        day24: Number(req.body.day24) || null,
        ccs24: Number(req.body.ccs24) || null,
        day25: Number(req.body.day25) || null,
        ccs25: Number(req.body.ccs25) || null,
        day26: Number(req.body.day26) || null,
        ccs26: Number(req.body.ccs26) || null,
        day27: Number(req.body.day27) || null,
        ccs27: Number(req.body.ccs27) || null,
        day28: Number(req.body.day28) || null,
        ccs28: Number(req.body.ccs28) || null,
        day29: Number(req.body.day29) || null,
        ccs29: Number(req.body.ccs29) || null,
        day30: Number(req.body.day30) || null,
        ccs30: Number(req.body.ccs30) || null,
        day31: Number(req.body.day31) || null,
        ccs31: Number(req.body.ccs31) || null,
        day32: Number(req.body.day32) || null,
        ccs32: Number(req.body.ccs32) || null,
        day33: Number(req.body.day33) || null,
        ccs33: Number(req.body.ccs33) || null,
        day34: Number(req.body.day34) || null,
        ccs34: Number(req.body.ccs34) || null,
        day35: Number(req.body.day35) || null,
        ccs35: Number(req.body.ccs35) || null,
        day36: Number(req.body.day36) || null,
        ccs36: Number(req.body.ccs36) || null,
        day37: Number(req.body.day37) || null,
        ccs37: Number(req.body.ccs37) || null,
        day38: Number(req.body.day38) || null,
        ccs38: Number(req.body.ccs38) || null,
        day39: Number(req.body.day39) || null,
        ccs39: Number(req.body.ccs39) || null,
        day40: Number(req.body.day40) || null,
        ccs40: Number(req.body.ccs40) || null,
        day41: Number(req.body.day41) || null,
        ccs41: Number(req.body.ccs41) || null,
        day42: Number(req.body.day42) || null,
        ccs42: Number(req.body.ccs42) || null,
        day43: Number(req.body.day43) || null,
        ccs43: Number(req.body.ccs43) || null,
        day44: Number(req.body.day44) || null,
        ccs44: Number(req.body.ccs44) || null,
        day45: Number(req.body.day45) || null,
        ccs45: Number(req.body.ccs45) || null,
        day46: Number(req.body.day46) || null,
        ccs46: Number(req.body.ccs46) || null,
        day47: Number(req.body.day47) || null,
        ccs47: Number(req.body.ccs47) || null,
        day48: Number(req.body.day48) || null,
        ccs48: Number(req.body.ccs48) || null,
        day49: Number(req.body.day49) || null,
        ccs49: Number(req.body.ccs49) || null,
        day50: Number(req.body.day50) || null,
        ccs50: Number(req.body.ccs50) || null,
        day51: Number(req.body.day51) || null,
        ccs51: Number(req.body.ccs51) || null,
        day52: Number(req.body.day52) || null,
        ccs52: Number(req.body.ccs52) || null,
        day53: Number(req.body.day53) || null,
        ccs53: Number(req.body.ccs53) || null,
        day54: Number(req.body.day54) || null,
        ccs54: Number(req.body.ccs54) || null,
        day55: Number(req.body.day55) || null,
        ccs55: Number(req.body.ccs55) || null,
        day56: Number(req.body.day56) || null,
        ccs56: Number(req.body.ccs56) || null,
        day57: Number(req.body.day57) || null,
        ccs57: Number(req.body.ccs57) || null,
        day58: Number(req.body.day58) || null,
        ccs58: Number(req.body.ccs58) || null,
        day59: Number(req.body.day59) || null,
        ccs59: Number(req.body.ccs59) || null,
        day60: Number(req.body.day60) || null,
        ccs60: Number(req.body.ccs60) || null,
        day61: Number(req.body.day61) || null,
        ccs61: Number(req.body.ccs61) || null,
        day62: Number(req.body.day62) || null,
        ccs62: Number(req.body.ccs62) || null,
        day63: Number(req.body.day63) || null,
        ccs63: Number(req.body.ccs63) || null,
        day64: Number(req.body.day64) || null,
        ccs64: Number(req.body.ccs64) || null,
        day65: Number(req.body.day65) || null,
        ccs65: Number(req.body.ccs65) || null,
        day66: Number(req.body.day66) || null,
        ccs66: Number(req.body.ccs66) || null,
        day67: Number(req.body.day67) || null,
        ccs67: Number(req.body.ccs67) || null,
        day68: Number(req.body.day68) || null,
        ccs68: Number(req.body.ccs68) || null,
        day69: Number(req.body.day69) || null,
        ccs69: Number(req.body.ccs69) || null,
        day70: Number(req.body.day70) || null,
        ccs70: Number(req.body.ccs70) || null,
        day71: Number(req.body.day71) || null,
        ccs71: Number(req.body.ccs71) || null,
        day72: Number(req.body.day72) || null,
        ccs72: Number(req.body.ccs72) || null,
        day73: Number(req.body.day73) || null,
        ccs73: Number(req.body.ccs73) || null,
        day74: Number(req.body.day74) || null,
        ccs74: Number(req.body.ccs74) || null,
        day75: Number(req.body.day75) || null,
        ccs75: Number(req.body.ccs75) || null,
        day76: Number(req.body.day76) || null,
        ccs76: Number(req.body.ccs76) || null,
        day77: Number(req.body.day77) || null,
        ccs77: Number(req.body.ccs77) || null,
        day78: Number(req.body.day78) || null,
        ccs78: Number(req.body.ccs78) || null,
        day79: Number(req.body.day79) || null,
        ccs79: Number(req.body.ccs79) || null,
        day80: Number(req.body.day80) || null,
        ccs80: Number(req.body.ccs80) || null,
        day81: Number(req.body.day81) || null,
        ccs81: Number(req.body.ccs81) || null,
        day82: Number(req.body.day82) || null,
        ccs82: Number(req.body.ccs82) || null,
        day83: Number(req.body.day83) || null,
        ccs83: Number(req.body.ccs83) || null,
        day84: Number(req.body.day84) || null,
        ccs84: Number(req.body.ccs84) || null,
        day85: Number(req.body.day85) || null,
        ccs85: Number(req.body.ccs85) || null,
        day86: Number(req.body.day86) || null,
        ccs86: Number(req.body.ccs86) || null,
        day87: Number(req.body.day87) || null,
        ccs87: Number(req.body.ccs87) || null,
        day88: Number(req.body.day88) || null,
        ccs88: Number(req.body.ccs88) || null,
        day89: Number(req.body.day89) || null,
        ccs89: Number(req.body.ccs89) || null,
        day90: Number(req.body.day90) || null,
        ccs90: Number(req.body.ccs90) || null,
        day91: Number(req.body.day91) || null,
        ccs91: Number(req.body.ccs91) || null,
        day92: Number(req.body.day92) || null,
        ccs92: Number(req.body.ccs92) || null,
        day93: Number(req.body.day93) || null,
        ccs93: Number(req.body.ccs93) || null,
        day94: Number(req.body.day94) || null,
        ccs94: Number(req.body.ccs94) || null,
        day95: Number(req.body.day95) || null,
        ccs95: Number(req.body.ccs95) || null,
        day96: Number(req.body.day96) || null,
        ccs96: Number(req.body.ccs96) || null,
        day97: Number(req.body.day97) || null,
        ccs97: Number(req.body.ccs97) || null,
        day98: Number(req.body.day98) || null,
        ccs98: Number(req.body.ccs98) || null,
        day99: Number(req.body.day99) || null,
        ccs99: Number(req.body.ccs99) || null,
        day100: Number(req.body.day100) || null,
        ccs100: Number(req.body.ccs100) || null,
        day101: Number(req.body.day101) || null,
        ccs101: Number(req.body.ccs101) || null,
        day102: Number(req.body.day102) || null,
        ccs102: Number(req.body.ccs102) || null,
        day103: Number(req.body.day103) || null,
        ccs103: Number(req.body.ccs103) || null,
        day104: Number(req.body.day104) || null,
        ccs104: Number(req.body.ccs104) || null,
        day105: Number(req.body.day105) || null,
        ccs105: Number(req.body.ccs105) || null,
        day106: Number(req.body.day106) || null,
        ccs106: Number(req.body.ccs106) || null,
        day107: Number(req.body.day107) || null,
        ccs107: Number(req.body.ccs107) || null,
        day108: Number(req.body.day108) || null,
        ccs108: Number(req.body.ccs108) || null,
        day109: Number(req.body.day109) || null,
        ccs109: Number(req.body.ccs109) || null,
        day110: Number(req.body.day110) || null,
        ccs110: Number(req.body.ccs110) || null,
        day111: Number(req.body.day111) || null,
        ccs111: Number(req.body.ccs111) || null,
        day112: Number(req.body.day112) || null,
        ccs112: Number(req.body.ccs112) || null,
        day113: Number(req.body.day113) || null,
        ccs113: Number(req.body.ccs113) || null,
        day114: Number(req.body.day114) || null,
        ccs114: Number(req.body.ccs114) || null,
        day115: Number(req.body.day115) || null,
        ccs115: Number(req.body.ccs115) || null,
        day116: Number(req.body.day116) || null,
        ccs116: Number(req.body.ccs116) || null,
        day117: Number(req.body.day117) || null,
        ccs117: Number(req.body.ccs117) || null,
        day118: Number(req.body.day118) || null,
        ccs118: Number(req.body.ccs118) || null,
        day119: Number(req.body.day119) || null,
        ccs119: Number(req.body.ccs119) || null,
        day120: Number(req.body.day120) || null,
        ccs120: Number(req.body.ccs120) || null
      };
      await PostgresDataSource.getRepository(Factorys)
        .createQueryBuilder()
        .update(Factorys)
        .set(updateFactory)
        .where('id = :id', { id })
        .execute();
      res.locals = res.status(200).json({
        msg: 'Factory SugarCane create susscess',
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

  public async getPlan(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id, group } = req.params;
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    await queryRunner.connect;
    const crops = await queryRunner.manager.query(
      'SELECT * FROM crop_years WHERE cropStatus = 1'
    );

    const crop1 = crops[0].cropYear.substring(2, 4);

    const cropOld1 = Number(crop1) - 1;

    const cropPlan = `25${cropOld1}/${crop1}`;
    const result = await queryRunner.manager.query(
      `SELECT * FROM factorys WHERE factory_group = @0 AND id = @1 AND cropYear =@2`,
      [group, id, cropPlan]
    );
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getPlans(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id, group, crop } = req.params;
    const cropOld1 = Number(crop) - 1;
    const cropYear = `25${cropOld1}/${crop}`;
    const result = await PostgresDataSource.query(
      `SELECT * FROM factorys WHERE factory_group = @0 AND id = @1 AND cropYear =@2`,
      [group, id, cropYear]
    );
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }
}
