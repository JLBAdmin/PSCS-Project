/* eslint-disable eqeqeq */
/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { MssqlDataSource } from '../../data-source';
import { PlanAudits } from '../../entity/mssql/mssql.PlanAudits';
import { BudgetView } from '../../entity/mssql/mssql.plotcode';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */

export default class PlotController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/geo', this.router);
    // this.router.get('/get', this.getGeo);
    this.router.get('/get-test', this.getGeoTest);
    this.router.get('/get-plot', this.getGeoMcss);
    this.router.get('/get-point', this.getGeoPointAll);
    this.router.get('/get-point/:id', this.getGeoPoint);
    this.router.get('/get-plot/:id', this.getGeoQuota);
    this.router.get('/get-images', this.getImages);
    this.router.get('/error', this.getError);
  }

  // public async getGeo(
  //   _req: Request,
  //   res: Response
  //   // eslint-disable-next-line @typescript-eslint/no-shadow
  // ): Promise<void> {
  //   const plot = `SELECT json_build_object(
  //     'type', 'FeatureCollection',
  //   'crs',  json_build_object(
  //         'type',      'name',
  //         'properties', json_build_object(
  //             'name', 'EPSG:4326'
  //         )
  //     ),
  //     'features', json_agg(ST_AsGeoJSON(t.*)::jsonb)
  //   )
  // FROM (
  //   SELECT
  //     id,
  //     planname,
  //     ST_Transform(geom, 4326)
  //   FROM
  //     plotcode_6566
  // ) AS t`;
  //   pool.connect();
  //   const newLocal = await pool.query(plot);
  //   const result = JSON.parse(
  //     JSON.stringify(newLocal.rows[0].json_build_object)
  //   );

  //   res.locals.data = result;
  //   responsehandler.send(res);
  // }
  public async getImages(_req: Request, res: Response): Promise<void> {
    // const { id }: any = req.params;
    const audits: any = await MssqlDataSource.getRepository(PlanAudits).find({
      // PlanId: parseInt(id, 10)
      cache: true
    });
    res.locals.data = audits;
    responsehandler.send(res);
  }

  public async getGeoTest(
    _req: Request,
    _res: Response
    // eslint-disable-next-line @typescript-eslint/no-shadow
  ): Promise<void> {
    const plot: any = await MssqlDataSource.getRepository(BudgetView).find({
      cache: true
    });
    const myArr: any = [];
    const myArrF: any = [];

    plot.forEach((item: any) => {
      const myArray: any = item.CenterPoint.split('/');
      // eslint-disable-next-line no-plusplus
      for (let i: number = 0; i < 10; i++) {
        // eslint-disable-next-line no-console
        // const myArray: any = item.PolygonPoint.split('/');

        if (typeof myArray[i] !== 'undefined') {
          myArrF[i] = myArray[i].split(',');
          // eslint-disable-next-line unused-imports/no-unused-vars
          myArr[i] = [parseFloat(myArrF[i][1]), parseFloat(myArrF[i][0])];

          // if (i === 0) {
          //   // myArr = [myArr[0], myArr[i], myArr[0]];
          //   // eslint-disable-next-line no-console
          //   // console.log(myArr);
          // }
          // if (i === 1) {
          //   myArr = [myArr[0], myArr[1], myArr[0]];
          // }
        }
      }
    });
  }

  public async getGeoPointAll(
    _req: Request,
    res: Response
    // eslint-disable-next-line @typescript-eslint/no-shadow
  ): Promise<void> {
    const point: any = await MssqlDataSource.getRepository(BudgetView).find({
      cache: true
    });
    const geojson: any = {};
    const coordinates: any = [];
    let myArr0;
    let myArr00: any | string;
    point.forEach(async (item: any) => {
      const myId = item.Id;
      const myCode = item.Code;
      const myGis = item.GisCode;
      const myName = item.Name;
      const isService = item.บริการปลูกไถบำรุงตอ;
      const isMonny = item.สถานะรับเงิน;
      const isMotify = item.พื้นที่ไร่จดแจ้ง;
      const isAreaGIS = item.พื้นที่ไร่GIS;
      // ,[เอกสารสิทธิ์]
      const isTypeArea = item.ประเภทพื้นที่;
      const isSoil = item.ชนิดดิน;
      // ,[ความยาวเฉลี่ยร่องเฉลี่ย]
      const isTypeCane = item.ประเภทอ้อย;
      // ,[วันปลูกตัด]
      // ,[พันธุ์อ้อย]
      // ,[ระยะร่อง]
      const isExpect = item.คาดการณ์ตันไร่;
      const isWaterSource = item.ประสิทธิภาพแหล่งน้ำ;
      // ,[บ่อบาดาล]
      // ,[สระเก็บน้ำ]
      // ,[ชลประทานรัฐ]
      // ,[ลำห้วยธรรมชาติ]
      // ,[ปีการผลิต]
      const isQuota = item.โควตา;
      const isFullName = item.ชื่อสกุล;
      const isZone = item.เขต;
      // ,[โควต้าใช้งาน]
      // ,[เขต]
      const isSubvZone = item.สายนักสำรวจ;
      const isSubZone = item.ชื่อนักสำรวจ;
      // ,[สถานะแปลง]
      const isComment = item.หมายเหตุ;
      // ,[สัญญาเลขที่]
      // ,[CenterPoint]
      // ,[ที่อยู่]
      const isBonsucro = item.Bonsucro;
      // ,[PolygonPoint]
      // ,[SubQuota]
      const myArray: any = item.CenterPoint.split('/');
      if (typeof myArray[0] !== 'undefined') {
        myArr0 = myArray[0].split(',');
        myArr00 = [parseFloat(myArr0[1]), parseFloat(myArr0[0])];
      }
      const feature = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: myArr00
        },
        properties: {
          myId,
          myCode,
          myGis,
          myName,
          isService,
          isMonny,
          isMotify,
          isAreaGIS,
          isExpect,
          isQuota,
          isFullName,
          isTypeArea,
          isSoil,
          isTypeCane,
          isBonsucro,
          isWaterSource,
          isZone,
          isSubvZone,
          isSubZone,
          isComment
        }
      };
      coordinates.push(feature);
      geojson.type = 'FeatureCollection';
      geojson.crs = {
        type: 'name',
        properties: {
          name: 'EPSG:4326'
        }
      };
      geojson.features = coordinates;
    });
    res.locals.data = JSON.stringify(geojson);
    responsehandler.send(res);
  }

  public async getGeoPoint(
    req: Request,
    res: Response
    // eslint-disable-next-line @typescript-eslint/no-shadow
  ): Promise<void> {
    const { id }: any = req.params;
    const point: any = await MssqlDataSource.getRepository(BudgetView).findBy({
      โควตา: parseInt(id, 10)
    });
    const geojson: any = {};
    const coordinates: any = [];
    let myArr0;
    let myArr00: any;
    point.forEach((item: any) => {
      const myId = item.Id;
      const myGis = item.GisCode;
      const myName = item.Name;
      const isService = item.บริการปลูกไถบำรุงตอ;
      const isMonny = item.สถานะรับเงิน;
      const isMotify = item.พื้นที่ไร่จดแจ้ง;
      const isGIS = item.พื้นที่ไร่GIS;
      // ,[เอกสารสิทธิ์]
      const isTypeArea = item.ประเภทพื้นที่;
      const isSoil = item.ชนิดดิน;
      // ,[ความยาวเฉลี่ยร่องเฉลี่ย]
      const isTypeCane = item.ประเภทอ้อย;
      // ,[วันปลูกตัด]
      // ,[พันธุ์อ้อย]
      // ,[ระยะร่อง]
      const isExpect = item.คาดการณ์ตันไร่;
      const isWaterSource = item.ประสิทธิภาพแหล่งน้ำ;
      // ,[บ่อบาดาล]
      // ,[สระเก็บน้ำ]
      // ,[ชลประทานรัฐ]
      // ,[ลำห้วยธรรมชาติ]
      // ,[ปีการผลิต]
      const isQuota = item.โควตา;
      const isFullName = item.ชื่อสกุล;
      // ,[ZoneList]
      // ,[โควต้าใช้งาน]
      // ,[เขต]
      // ,[สายนักสำรวจ]
      const isSubZone = item.ชื่อนักสำรวจ;
      // ,[สถานะแปลง]
      const isComment = item.หมายเหตุ;
      // ,[สัญญาเลขที่]
      // ,[CenterPoint]
      // ,[ที่อยู่]
      const isBonsucro = item.Bonsucro;
      // ,[PolygonPoint]
      // ,[SubQuota]
      const myArray: any = item.CenterPoint.split('/');
      if (typeof myArray[0] !== 'undefined') {
        myArr0 = myArray[0].split(',');
        myArr00 = [parseFloat(myArr0[1]), parseFloat(myArr0[0])];
      }
      const feature = {
        type: 'Feature',
        properties: {
          myId,
          myGis,
          myName,
          isService,
          isMonny,
          isMotify,
          isGIS,
          isExpect,
          isQuota,
          isFullName,
          isTypeArea,
          isSoil,
          isTypeCane,
          isBonsucro,
          isWaterSource,
          isSubZone,
          isComment
        },
        geometry: {
          type: 'Point',
          coordinates: myArr00
        }
      };

      coordinates.push(feature);
      geojson.type = 'FeatureCollection';
      geojson.crs = {
        type: 'name',
        properties: {
          name: 'EPSG:4326'
        }
      };
      geojson.features = coordinates;
    });
    res.locals.data = JSON.stringify(geojson);
    responsehandler.send(res);
  }

  public async getGeoQuota(
    req: Request,
    res: Response
    // eslint-disable-next-line @typescript-eslint/no-shadow
  ): Promise<void> {
    const { id }: any = req.params;
    const plot: any = await MssqlDataSource.getRepository(BudgetView).findBy({
      โควตา: parseInt(id, 10)
    });
    // Create an array that will store the features
    const geojson: any = {};
    const coordinates: any = [];
    let myArr: any = [];
    let myArr0: any;
    let myArr00: any;
    let myArr1: any;
    let myArr01: any;
    let myArr2: any;
    let myArr02: any;
    let myArr3: any;
    let myArr03: any;
    let myArr4: any;
    let myArr04: any;
    let myArr5: any;
    let myArr05: any;
    let myArr6: any;
    let myArr06: any;
    let myArr7: any;
    let myArr07: any;
    let myArr8: any;
    let myArr08: any;
    let myArr9: any;
    let myArr09: any;
    let myArr10: any;
    let myArr010: any;
    let myArr11: any;
    let myArr011: any;
    let myArr12: any;
    let myArr012: any;
    let myArr13: any;
    let myArr013: any;
    let myArr14: any;
    let myArr014: any;
    let myArr15: any;
    let myArr015: any;
    let myArr16: any;
    let myArr016: any;
    let myArr17: any;
    let myArr017: any;
    let myArr18: any;
    let myArr018: any;
    let myArr19: any;
    let myArr019: any;
    let myArr20: any;
    let myArr020: any;
    let myArr21: any;
    let myArr021: any;
    let myArr22: any;
    let myArr022: any;
    let myArr23: any;
    let myArr023: any;
    let myArr24: any;
    let myArr024: any;
    let myArr25: any;
    let myArr025: any;
    let myArr26: any;
    let myArr026: any;
    let myArr27: any;
    let myArr027: any;
    let myArr28: any;
    let myArr028: any;
    let myArr29: any;
    let myArr029: any;
    let myArr30: any;
    let myArr030: any;

    plot.forEach((item: any) => {
      const myArray: any = item.PolygonPoint.split('/');
      if (typeof myArray[0] !== 'undefined') {
        myArr0 = myArray[0].split(',');
        myArr00 = [parseFloat(myArr0[1]), parseFloat(myArr0[0])];
      }
      if (typeof myArray[1] !== 'undefined') {
        myArr1 = myArray[1].split(',');
        myArr01 = [parseFloat(myArr1[1]), parseFloat(myArr1[0])];
        myArr = [myArr00, myArr01, myArr00];
      }
      if (typeof myArray[2] !== 'undefined') {
        myArr2 = myArray[2].split(',');
        // eslint-disable-next-line unused-imports/no-unused-vars
        myArr02 = [parseFloat(myArr2[1]), parseFloat(myArr2[0])];
        myArr = [myArr00, myArr01, myArr02, myArr00];
      }
      if (typeof myArray[3] !== 'undefined') {
        myArr3 = myArray[3].split(',');
        myArr03 = [parseFloat(myArr3[1]), parseFloat(myArr3[0])];
        myArr = [myArr00, myArr01, myArr02, myArr03, myArr00];
      }
      if (typeof myArray[4] !== 'undefined') {
        myArr4 = myArray[4].split(',');
        myArr04 = [parseFloat(myArr4[1]), parseFloat(myArr4[0])];
        myArr = [myArr00, myArr01, myArr02, myArr03, myArr04, myArr00];
      }
      if (typeof myArray[5] !== 'undefined') {
        myArr5 = myArray[5].split(',');
        myArr05 = [parseFloat(myArr5[1]), parseFloat(myArr5[0])];
        myArr = [myArr00, myArr01, myArr02, myArr03, myArr04, myArr05, myArr00];
      }
      if (typeof myArray[6] !== 'undefined') {
        myArr6 = myArray[6].split(',');
        myArr06 = [parseFloat(myArr6[1]), parseFloat(myArr6[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr00
        ];
      }
      if (typeof myArray[7] !== 'undefined') {
        myArr7 = myArray[7].split(',');
        myArr07 = [parseFloat(myArr7[1]), parseFloat(myArr7[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr00
        ];
      }
      if (typeof myArray[8] !== 'undefined') {
        myArr8 = myArray[8].split(',');
        myArr08 = [parseFloat(myArr8[1]), parseFloat(myArr8[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr00
        ];
      }
      if (typeof myArray[9] !== 'undefined') {
        myArr9 = myArray[9].split(',');
        myArr09 = [parseFloat(myArr9[1]), parseFloat(myArr9[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr00
        ];
      }
      if (typeof myArray[10] !== 'undefined') {
        myArr10 = myArray[10].split(',');
        myArr010 = [parseFloat(myArr10[1]), parseFloat(myArr10[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr00
        ];
      }
      if (typeof myArray[11] !== 'undefined') {
        myArr11 = myArray[11].split(',');
        myArr011 = [parseFloat(myArr11[1]), parseFloat(myArr11[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr00
        ];
      }
      if (typeof myArray[12] !== 'undefined') {
        myArr12 = myArray[12].split(',');
        myArr012 = [parseFloat(myArr12[1]), parseFloat(myArr12[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr00
        ];
      }
      if (typeof myArray[13] !== 'undefined') {
        myArr13 = myArray[13].split(',');
        myArr013 = [parseFloat(myArr13[1]), parseFloat(myArr13[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr00
        ];
      }
      if (typeof myArray[14] !== 'undefined') {
        myArr14 = myArray[14].split(',');
        myArr014 = [parseFloat(myArr14[1]), parseFloat(myArr14[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr00
        ];
      }
      if (typeof myArray[15] !== 'undefined') {
        myArr15 = myArray[15].split(',');
        myArr015 = [parseFloat(myArr15[1]), parseFloat(myArr15[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr00
        ];
      }
      if (typeof myArray[16] !== 'undefined') {
        myArr16 = myArray[16].split(',');
        myArr016 = [parseFloat(myArr16[1]), parseFloat(myArr16[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr00
        ];
      }
      if (typeof myArray[17] !== 'undefined') {
        myArr17 = myArray[17].split(',');
        myArr017 = [parseFloat(myArr17[1]), parseFloat(myArr17[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr00
        ];
      }
      if (typeof myArray[18] !== 'undefined') {
        myArr18 = myArray[18].split(',');
        myArr018 = [parseFloat(myArr18[1]), parseFloat(myArr18[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr00
        ];
      }
      if (typeof myArray[19] !== 'undefined') {
        myArr19 = myArray[19].split(',');
        myArr019 = [parseFloat(myArr19[1]), parseFloat(myArr19[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr00
        ];
      }
      if (typeof myArray[20] !== 'undefined') {
        myArr20 = myArray[20].split(',');
        myArr020 = [parseFloat(myArr20[1]), parseFloat(myArr20[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr00
        ];
      }
      if (typeof myArray[21] !== 'undefined') {
        myArr21 = myArray[21].split(',');
        myArr021 = [parseFloat(myArr21[1]), parseFloat(myArr21[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr00
        ];
      }
      if (typeof myArray[22] !== 'undefined') {
        myArr22 = myArray[22].split(',');
        myArr022 = [parseFloat(myArr22[1]), parseFloat(myArr22[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr00
        ];
      }
      if (typeof myArray[23] !== 'undefined') {
        myArr23 = myArray[23].split(',');
        myArr023 = [parseFloat(myArr23[1]), parseFloat(myArr23[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr00
        ];
      }
      if (typeof myArray[24] !== 'undefined') {
        myArr24 = myArray[24].split(',');
        myArr024 = [parseFloat(myArr24[1]), parseFloat(myArr24[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr00
        ];
      }
      if (typeof myArray[25] !== 'undefined') {
        myArr25 = myArray[25].split(',');
        myArr025 = [parseFloat(myArr25[1]), parseFloat(myArr25[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr025,
          myArr00
        ];
      }
      if (typeof myArray[26] !== 'undefined') {
        myArr26 = myArray[26].split(',');
        myArr026 = [parseFloat(myArr26[1]), parseFloat(myArr26[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr025,
          myArr026,
          myArr00
        ];
      }
      if (typeof myArray[27] !== 'undefined') {
        myArr27 = myArray[27].split(',');
        myArr027 = [parseFloat(myArr27[1]), parseFloat(myArr27[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr025,
          myArr026,
          myArr027,
          myArr00
        ];
      }
      if (typeof myArray[28] !== 'undefined') {
        myArr28 = myArray[28].split(',');
        myArr028 = [parseFloat(myArr28[1]), parseFloat(myArr28[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr025,
          myArr026,
          myArr027,
          myArr028,
          myArr00
        ];
      }
      if (typeof myArray[29] !== 'undefined') {
        myArr29 = myArray[29].split(',');
        myArr029 = [parseFloat(myArr29[1]), parseFloat(myArr29[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr025,
          myArr026,
          myArr027,
          myArr028,
          myArr029,
          myArr00
        ];
      }
      if (typeof myArray[30] !== 'undefined') {
        myArr30 = myArray[30].split(',');
        myArr030 = [parseFloat(myArr30[1]), parseFloat(myArr30[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr025,
          myArr026,
          myArr027,
          myArr028,
          myArr029,
          myArr030,
          myArr00
        ];
      }
      const isService = item.บริการปลูกไถบำรุงตอ;
      const feature = {
        type: 'Feature',
        properties: { isService },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [[myArr]]
        }
      };
      // features.push(feature);

      coordinates.push(feature);
      geojson.type = 'FeatureCollection';
      geojson.crs = {
        type: 'name',
        properties: {
          name: 'EPSG:4326'
        }
      };
      geojson.features = coordinates;
    });

    res.locals.data = JSON.stringify(geojson);
    responsehandler.send(res);
  }

  public async getGeoMcss(
    _req: Request,
    res: Response
    // eslint-disable-next-line @typescript-eslint/no-shadow
  ): Promise<void> {
    const plot: any = await MssqlDataSource.getRepository(BudgetView).find({
      cache: true
    });
    // Create an array that will store the features
    const geojson: any = {};
    const coordinates: any = [];
    let myArr: any = [];
    let myArr0: any;
    let myArr00: any;
    let myArr1: any;
    let myArr01: any;
    let myArr2: any;
    let myArr02: any;
    let myArr3: any;
    let myArr03: any;
    let myArr4: any;
    let myArr04: any;
    let myArr5: any;
    let myArr05: any;
    let myArr6: any;
    let myArr06: any;
    let myArr7: any;
    let myArr07: any;
    let myArr8: any;
    let myArr08: any;
    let myArr9: any;
    let myArr09: any;
    let myArr10: any;
    let myArr010: any;
    let myArr11: any;
    let myArr011: any;
    let myArr12: any;
    let myArr012: any;
    let myArr13: any;
    let myArr013: any;
    let myArr14: any;
    let myArr014: any;
    let myArr15: any;
    let myArr015: any;
    let myArr16: any;
    let myArr016: any;
    let myArr17: any;
    let myArr017: any;
    let myArr18: any;
    let myArr018: any;
    let myArr19: any;
    let myArr019: any;
    let myArr20: any;
    let myArr020: any;
    let myArr21: any;
    let myArr021: any;
    let myArr22: any;
    let myArr022: any;
    let myArr23: any;
    let myArr023: any;
    let myArr24: any;
    let myArr024: any;
    let myArr25: any;
    let myArr025: any;
    let myArr26: any;
    let myArr026: any;
    let myArr27: any;
    let myArr027: any;
    let myArr28: any;
    let myArr028: any;
    let myArr29: any;
    let myArr029: any;
    let myArr30: any;
    let myArr030: any;

    let myArr31: any;
    let myArr031: any;
    let myArr32: any;
    let myArr032: any;
    let myArr33: any;
    let myArr033: any;
    let myArr34: any;
    let myArr034: any;
    let myArr35: any;
    let myArr035: any;
    let myArr36: any;
    let myArr036: any;
    let myArr37: any;
    let myArr037: any;
    let myArr38: any;
    let myArr038: any;
    let myArr39: any;
    let myArr039: any;
    let myArr40: any;
    let myArr040: any;
    let myArr41: any;
    let myArr041: any;
    let myArr42: any;
    let myArr042: any;
    let myArr43: any;
    let myArr043: any;
    let myArr44: any;
    let myArr044: any;
    let myArr45: any;
    let myArr045: any;
    let myArr46: any;
    let myArr046: any;
    let myArr47: any;
    let myArr047: any;
    let myArr48: any;
    let myArr048: any;
    let myArr49: any;
    let myArr049: any;
    let myArr50: any;
    let myArr050: any;
    let myArr51: any;
    let myArr051: any;
    let myArr52: any;
    let myArr052: any;
    let myArr53: any;
    let myArr053: any;
    let myArr54: any;
    let myArr054: any;
    let myArr55: any;
    let myArr055: any;
    let myArr56: any;
    let myArr056: any;
    let myArr57: any;
    let myArr057: any;
    let myArr58: any;
    let myArr058: any;
    let myArr59: any;
    let myArr059: any;
    let myArr60: any;
    let myArr060: any;

    plot.forEach((item: any) => {
      const myArray: any = item.PolygonPoint.split('/');
      if (typeof myArray[0] !== 'undefined') {
        myArr0 = myArray[0].split(',');
        myArr00 = [parseFloat(myArr0[1]), parseFloat(myArr0[0])];
      }
      if (typeof myArray[1] !== 'undefined') {
        myArr1 = myArray[1].split(',');
        myArr01 = [parseFloat(myArr1[1]), parseFloat(myArr1[0])];
        myArr = [myArr00, myArr01, myArr00];
      }
      if (typeof myArray[2] !== 'undefined') {
        myArr2 = myArray[2].split(',');
        // eslint-disable-next-line unused-imports/no-unused-vars
        myArr02 = [parseFloat(myArr2[1]), parseFloat(myArr2[0])];
        myArr = [myArr00, myArr01, myArr02, myArr00];
      }
      if (typeof myArray[3] !== 'undefined') {
        myArr3 = myArray[3].split(',');
        myArr03 = [parseFloat(myArr3[1]), parseFloat(myArr3[0])];
        myArr = [myArr00, myArr01, myArr02, myArr03, myArr00];
      }
      if (typeof myArray[4] !== 'undefined') {
        myArr4 = myArray[4].split(',');
        myArr04 = [parseFloat(myArr4[1]), parseFloat(myArr4[0])];
        myArr = [myArr00, myArr01, myArr02, myArr03, myArr04, myArr00];
      }
      if (typeof myArray[5] !== 'undefined') {
        myArr5 = myArray[5].split(',');
        myArr05 = [parseFloat(myArr5[1]), parseFloat(myArr5[0])];
        myArr = [myArr00, myArr01, myArr02, myArr03, myArr04, myArr05, myArr00];
      }
      if (typeof myArray[6] !== 'undefined') {
        myArr6 = myArray[6].split(',');
        myArr06 = [parseFloat(myArr6[1]), parseFloat(myArr6[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr00
        ];
      }
      if (typeof myArray[7] !== 'undefined') {
        myArr7 = myArray[7].split(',');
        myArr07 = [parseFloat(myArr7[1]), parseFloat(myArr7[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr00
        ];
      }
      if (typeof myArray[8] !== 'undefined') {
        myArr8 = myArray[8].split(',');
        myArr08 = [parseFloat(myArr8[1]), parseFloat(myArr8[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr00
        ];
      }
      if (typeof myArray[9] !== 'undefined') {
        myArr9 = myArray[9].split(',');
        myArr09 = [parseFloat(myArr9[1]), parseFloat(myArr9[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr00
        ];
      }
      if (typeof myArray[10] !== 'undefined') {
        myArr10 = myArray[10].split(',');
        myArr010 = [parseFloat(myArr10[1]), parseFloat(myArr10[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr00
        ];
      }
      if (typeof myArray[11] !== 'undefined') {
        myArr11 = myArray[11].split(',');
        myArr011 = [parseFloat(myArr11[1]), parseFloat(myArr11[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr00
        ];
      }
      if (typeof myArray[12] !== 'undefined') {
        myArr12 = myArray[12].split(',');
        myArr012 = [parseFloat(myArr12[1]), parseFloat(myArr12[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr00
        ];
      }
      if (typeof myArray[13] !== 'undefined') {
        myArr13 = myArray[13].split(',');
        myArr013 = [parseFloat(myArr13[1]), parseFloat(myArr13[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr00
        ];
      }
      if (typeof myArray[14] !== 'undefined') {
        myArr14 = myArray[14].split(',');
        myArr014 = [parseFloat(myArr14[1]), parseFloat(myArr14[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr00
        ];
      }
      if (typeof myArray[15] !== 'undefined') {
        myArr15 = myArray[15].split(',');
        myArr015 = [parseFloat(myArr15[1]), parseFloat(myArr15[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr00
        ];
      }
      if (typeof myArray[16] !== 'undefined') {
        myArr16 = myArray[16].split(',');
        myArr016 = [parseFloat(myArr16[1]), parseFloat(myArr16[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr00
        ];
      }
      if (typeof myArray[17] !== 'undefined') {
        myArr17 = myArray[17].split(',');
        myArr017 = [parseFloat(myArr17[1]), parseFloat(myArr17[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr00
        ];
      }
      if (typeof myArray[18] !== 'undefined') {
        myArr18 = myArray[18].split(',');
        myArr018 = [parseFloat(myArr18[1]), parseFloat(myArr18[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr00
        ];
      }
      if (typeof myArray[19] !== 'undefined') {
        myArr19 = myArray[19].split(',');
        myArr019 = [parseFloat(myArr19[1]), parseFloat(myArr19[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr00
        ];
      }
      if (typeof myArray[20] !== 'undefined') {
        myArr20 = myArray[20].split(',');
        myArr020 = [parseFloat(myArr20[1]), parseFloat(myArr20[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr00
        ];
      }
      if (typeof myArray[21] !== 'undefined') {
        myArr21 = myArray[21].split(',');
        myArr021 = [parseFloat(myArr21[1]), parseFloat(myArr21[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr00
        ];
      }
      if (typeof myArray[22] !== 'undefined') {
        myArr22 = myArray[22].split(',');
        myArr022 = [parseFloat(myArr22[1]), parseFloat(myArr22[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr00
        ];
      }
      if (typeof myArray[23] !== 'undefined') {
        myArr23 = myArray[23].split(',');
        myArr023 = [parseFloat(myArr23[1]), parseFloat(myArr23[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr00
        ];
      }
      if (typeof myArray[24] !== 'undefined') {
        myArr24 = myArray[24].split(',');
        myArr024 = [parseFloat(myArr24[1]), parseFloat(myArr24[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr00
        ];
      }
      if (typeof myArray[25] !== 'undefined') {
        myArr25 = myArray[25].split(',');
        myArr025 = [parseFloat(myArr25[1]), parseFloat(myArr25[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr025,
          myArr00
        ];
      }
      if (typeof myArray[26] !== 'undefined') {
        myArr26 = myArray[26].split(',');
        myArr026 = [parseFloat(myArr26[1]), parseFloat(myArr26[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr025,
          myArr026,
          myArr00
        ];
      }
      if (typeof myArray[27] !== 'undefined') {
        myArr27 = myArray[27].split(',');
        myArr027 = [parseFloat(myArr27[1]), parseFloat(myArr27[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr025,
          myArr026,
          myArr027,
          myArr00
        ];
      }
      if (typeof myArray[28] !== 'undefined') {
        myArr28 = myArray[28].split(',');
        myArr028 = [parseFloat(myArr28[1]), parseFloat(myArr28[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr025,
          myArr026,
          myArr027,
          myArr028,
          myArr00
        ];
      }
      if (typeof myArray[29] !== 'undefined') {
        myArr29 = myArray[29].split(',');
        myArr029 = [parseFloat(myArr29[1]), parseFloat(myArr29[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr025,
          myArr026,
          myArr027,
          myArr028,
          myArr029,
          myArr00
        ];
      }
      if (typeof myArray[30] !== 'undefined') {
        myArr30 = myArray[30].split(',');
        myArr030 = [parseFloat(myArr30[1]), parseFloat(myArr30[0])];
        myArr = [
          myArr00,
          myArr01,
          myArr02,
          myArr03,
          myArr04,
          myArr05,
          myArr06,
          myArr07,
          myArr08,
          myArr09,
          myArr010,
          myArr011,
          myArr012,
          myArr013,
          myArr014,
          myArr015,
          myArr016,
          myArr017,
          myArr018,
          myArr019,
          myArr020,
          myArr021,
          myArr022,
          myArr023,
          myArr024,
          myArr025,
          myArr026,
          myArr027,
          myArr028,
          myArr029,
          myArr030,
          myArr00
        ];
      }

      if (typeof myArray[31] !== 'undefined') {
        myArr31 = myArray[31].split(',');
        myArr031 = [parseFloat(myArr31[1]), parseFloat(myArr31[0])];
        myArr = [myArr00, myArr031, myArr00];
      }
      if (typeof myArray[32] !== 'undefined') {
        myArr32 = myArray[32].split(',');
        // eslint-disable-next-line unused-imports/no-unused-vars
        myArr032 = [parseFloat(myArr32[1]), parseFloat(myArr32[0])];
        myArr = [myArr00, myArr031, myArr032, myArr00];
      }
      if (typeof myArray[33] !== 'undefined') {
        myArr33 = myArray[33].split(',');
        myArr033 = [parseFloat(myArr33[1]), parseFloat(myArr33[0])];
        myArr = [myArr00, myArr031, myArr032, myArr033, myArr00];
      }
      if (typeof myArray[34] !== 'undefined') {
        myArr34 = myArray[34].split(',');
        myArr034 = [parseFloat(myArr34[1]), parseFloat(myArr34[0])];
        myArr = [myArr00, myArr031, myArr032, myArr033, myArr034, myArr00];
      }
      if (typeof myArray[35] !== 'undefined') {
        myArr35 = myArray[35].split(',');
        myArr035 = [parseFloat(myArr35[1]), parseFloat(myArr35[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr00
        ];
      }
      if (typeof myArray[36] !== 'undefined') {
        myArr36 = myArray[36].split(',');
        myArr036 = [parseFloat(myArr36[1]), parseFloat(myArr36[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr00
        ];
      }
      if (typeof myArray[37] !== 'undefined') {
        myArr37 = myArray[37].split(',');
        myArr037 = [parseFloat(myArr37[1]), parseFloat(myArr37[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr00
        ];
      }
      if (typeof myArray[38] !== 'undefined') {
        myArr38 = myArray[38].split(',');
        myArr038 = [parseFloat(myArr38[1]), parseFloat(myArr38[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr00
        ];
      }
      if (typeof myArray[39] !== 'undefined') {
        myArr39 = myArray[39].split(',');
        myArr039 = [parseFloat(myArr39[1]), parseFloat(myArr39[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr00
        ];
      }
      if (typeof myArray[40] !== 'undefined') {
        myArr40 = myArray[40].split(',');
        myArr040 = [parseFloat(myArr40[1]), parseFloat(myArr40[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr00
        ];
      }
      if (typeof myArray[41] !== 'undefined') {
        myArr41 = myArray[41].split(',');
        myArr041 = [parseFloat(myArr41[1]), parseFloat(myArr41[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr00
        ];
      }
      if (typeof myArray[42] !== 'undefined') {
        myArr42 = myArray[42].split(',');
        myArr042 = [parseFloat(myArr42[1]), parseFloat(myArr42[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr00
        ];
      }
      if (typeof myArray[43] !== 'undefined') {
        myArr43 = myArray[43].split(',');
        myArr043 = [parseFloat(myArr43[1]), parseFloat(myArr43[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr00
        ];
      }
      if (typeof myArray[44] !== 'undefined') {
        myArr44 = myArray[44].split(',');
        myArr044 = [parseFloat(myArr44[1]), parseFloat(myArr44[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr00
        ];
      }
      if (typeof myArray[45] !== 'undefined') {
        myArr45 = myArray[45].split(',');
        myArr045 = [parseFloat(myArr45[1]), parseFloat(myArr45[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr00
        ];
      }
      if (typeof myArray[46] !== 'undefined') {
        myArr46 = myArray[46].split(',');
        myArr046 = [parseFloat(myArr46[1]), parseFloat(myArr46[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr00
        ];
      }
      if (typeof myArray[47] !== 'undefined') {
        myArr47 = myArray[47].split(',');
        myArr047 = [parseFloat(myArr47[1]), parseFloat(myArr47[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr00
        ];
      }
      if (typeof myArray[48] !== 'undefined') {
        myArr48 = myArray[48].split(',');
        myArr048 = [parseFloat(myArr48[1]), parseFloat(myArr48[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr048,
          myArr00
        ];
      }
      if (typeof myArray[49] !== 'undefined') {
        myArr49 = myArray[49].split(',');
        myArr049 = [parseFloat(myArr49[1]), parseFloat(myArr49[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr048,
          myArr049,
          myArr00
        ];
      }
      if (typeof myArray[50] !== 'undefined') {
        myArr50 = myArray[50].split(',');
        myArr050 = [parseFloat(myArr50[1]), parseFloat(myArr50[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr048,
          myArr049,
          myArr050,
          myArr00
        ];
      }
      if (typeof myArray[51] !== 'undefined') {
        myArr51 = myArray[51].split(',');
        myArr051 = [parseFloat(myArr51[1]), parseFloat(myArr51[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr048,
          myArr049,
          myArr050,
          myArr051,
          myArr00
        ];
      }
      if (typeof myArray[52] !== 'undefined') {
        myArr52 = myArray[52].split(',');
        myArr052 = [parseFloat(myArr52[1]), parseFloat(myArr52[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr048,
          myArr049,
          myArr050,
          myArr051,
          myArr052,
          myArr00
        ];
      }
      if (typeof myArray[53] !== 'undefined') {
        myArr53 = myArray[53].split(',');
        myArr053 = [parseFloat(myArr53[1]), parseFloat(myArr53[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr028,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr048,
          myArr049,
          myArr050,
          myArr051,
          myArr052,
          myArr053,
          myArr00
        ];
      }
      if (typeof myArray[54] !== 'undefined') {
        myArr54 = myArray[54].split(',');
        myArr054 = [parseFloat(myArr54[1]), parseFloat(myArr54[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr048,
          myArr049,
          myArr050,
          myArr051,
          myArr052,
          myArr053,
          myArr054,
          myArr00
        ];
      }
      if (typeof myArray[55] !== 'undefined') {
        myArr55 = myArray[55].split(',');
        myArr055 = [parseFloat(myArr55[1]), parseFloat(myArr55[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr048,
          myArr049,
          myArr050,
          myArr051,
          myArr052,
          myArr053,
          myArr054,
          myArr055,
          myArr00
        ];
      }
      if (typeof myArray[56] !== 'undefined') {
        myArr56 = myArray[56].split(',');
        myArr056 = [parseFloat(myArr56[1]), parseFloat(myArr56[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr048,
          myArr049,
          myArr050,
          myArr051,
          myArr052,
          myArr053,
          myArr054,
          myArr055,
          myArr056,
          myArr00
        ];
      }
      if (typeof myArray[57] !== 'undefined') {
        myArr57 = myArray[57].split(',');
        myArr057 = [parseFloat(myArr57[1]), parseFloat(myArr57[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr048,
          myArr049,
          myArr050,
          myArr051,
          myArr052,
          myArr053,
          myArr054,
          myArr055,
          myArr056,
          myArr057,
          myArr00
        ];
      }
      if (typeof myArray[58] !== 'undefined') {
        myArr58 = myArray[58].split(',');
        myArr058 = [parseFloat(myArr58[1]), parseFloat(myArr58[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr048,
          myArr049,
          myArr050,
          myArr051,
          myArr052,
          myArr053,
          myArr054,
          myArr055,
          myArr056,
          myArr057,
          myArr058,
          myArr00
        ];
      }
      if (typeof myArray[59] !== 'undefined') {
        myArr59 = myArray[59].split(',');
        myArr059 = [parseFloat(myArr59[1]), parseFloat(myArr59[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr048,
          myArr049,
          myArr050,
          myArr051,
          myArr052,
          myArr053,
          myArr054,
          myArr055,
          myArr056,
          myArr057,
          myArr058,
          myArr059,
          myArr00
        ];
      }
      if (typeof myArray[60] !== 'undefined') {
        myArr60 = myArray[60].split(',');
        myArr060 = [parseFloat(myArr60[1]), parseFloat(myArr60[0])];
        myArr = [
          myArr00,
          myArr031,
          myArr032,
          myArr033,
          myArr034,
          myArr035,
          myArr036,
          myArr037,
          myArr038,
          myArr039,
          myArr040,
          myArr041,
          myArr042,
          myArr043,
          myArr044,
          myArr045,
          myArr046,
          myArr047,
          myArr048,
          myArr049,
          myArr050,
          myArr051,
          myArr052,
          myArr053,
          myArr054,
          myArr055,
          myArr056,
          myArr057,
          myArr058,
          myArr059,
          myArr060,
          myArr00
        ];
      }
      const isService = item.บริการปลูกไถบำรุงตอ;
      const isZone = parseInt(item.ZoneList, 10);
      const isCode = item.Code;
      const feature = {
        type: 'Feature',
        properties: {
          isService,
          isZone,
          isCode
        },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [[myArr]]
        }
      };
      // features.push(feature);

      coordinates.push(feature);
      geojson.type = 'FeatureCollection';
      geojson.crs = {
        type: 'name',
        properties: {
          name: 'EPSG:4326'
        }
      };
      geojson.features = coordinates;
    });

    res.locals.data = JSON.stringify(geojson);
    responsehandler.send(res);
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
