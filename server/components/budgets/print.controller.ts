/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable class-methods-use-this */

import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import next from 'next';
import { ThaiBaht } from 'thai-baht-text-ts';
import { IsNull } from 'typeorm';

import ApiError from '../../abstractions/ApiError';
import {
  caneName0,
  caneName1,
  caneName2,
  caneName3,
  caneName4,
  caneName5,
  caneName6,
  caneName7
} from '../../config/caneType';
import { MssqlDataSource, PostgresDataSource } from '../../data-source';
import { Quotas } from '../../entity/mssql/mssql.Quotas';
import { Budgets } from '../../entity/pgsql/pg.budget';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
import { dayTH } from '../crop-date';

/**
 * Users ontroller
 */
export default class PrintController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/budgets', this.router);
    this.router.get('/print/:id/:reqs/:crop', this.printBudget);
    this.router.get('/print1/:id/:reqs/:crop', this.print1Budget);
    this.router.get('/fertilize/:id', this.printFertilize);
    this.router.get('/parts/:id', this.printParts);
    this.router.get('/due-check/:id', this.printDueCheck);
    // this.router.get('/carbon-credit/:id', this.printOrganic);
    this.router.get('/error', this.getError);
  }

  public async printDueCheck(
    req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const queryRunner = MssqlDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      await queryRunner.connect();
      // MSSQL paramiter @0
      const dueCheck = await queryRunner.manager.query(
        `SELECT * FROM vw_DueCheckLoan2 WHERE Id = @0`,
        [id]
      );

      const crops = await queryRunner.manager.query(
        'SELECT MAX(SeasonYear) AS SeasonYear FROM vw_DueCheckLoan2'
      );

      const PlotType = await queryRunner.manager.query(
        'SELECT CaneType FROM [MCSS].[dbo].[View_Plans_DueCheck] WHERE DueCheck = @0 ORDER BY CaneSeasonId ASC',
        [id]
      );

      const CaneTypeName: any[] = [];

      PlotType.forEach((item: any) => {
        if (item.CaneType === 'ตอ1') {
          CaneTypeName.push('ตอ');
        } else if (item.CaneType === 'ตอ2') {
          CaneTypeName.push('ตอ');
        } else if (item.CaneType === 'ตอ3') {
          CaneTypeName.push('ตอ');
        } else if (item.CaneType === 'ตอ3+') {
          CaneTypeName.push('ตอ');
        } else {
          CaneTypeName.push(`${item.CaneType}`);
        }
      });

      const PlotTypeName = [...new Set(CaneTypeName)];
      const cropCurrent = crops[0].SeasonYear;
      const crop1 = crops[0].SeasonYear;
      const crop2 = Number(crop1) + 1;
      const crop3 = Number(crop1) + 2;
      const crop4 = Number(crop1) + 3;
      // const cropOld1 = Number(crop1) - 1;

      if (dueCheck.length > 0) {
        const checkQuota = await queryRunner.manager.query(
          'SELECT * FROM vw_DueCheckLoan2 WHERE SeasonYear =@0 AND QuotaCode =@1',
          [cropCurrent, dueCheck[0].QuotaCode]
        );

        const quotaAdd = await queryRunner.manager.query(
          'SELECT * FROM Quotas WHERE Id =@0',
          [Number(dueCheck[0].QuotaId)]
        );

        let raiAll: any = 0;
        let rai1: any = 0;
        let rai2: any = 0;
        let rai3: any = 0;
        let rai4: any = 0;
        let rai5: any = 0;
        let rai6: any = 0;
        let rai7: any = 0;
        let rai8: any = 0;
        let rai9: any = 0;
        let tonAll: any = 0;
        let ton1: any = 0;
        let ton2: any = 0;
        let ton3: any = 0;
        let ton4: any = 0;
        let ton5: any = 0;
        let ton6: any = 0;
        let ton7: any = 0;
        let ton8: any = 0;
        let ton9: any = 0;

        let dueCount: any = 0;

        checkQuota.forEach((item: any) => {
          // eslint-disable-next-line no-console
          // console.log(item);
          if (item.RowNo === '1') {
            rai1 = item.LoanCurrentRai;
            ton1 = item.LoanCurrentTon;
          } else if (item.RowNo === '2') {
            rai2 = item.LoanCurrentRai;
            ton2 = item.LoanCurrentTon;
          } else if (item.RowNo === '3') {
            rai3 = item.LoanCurrentRai;
            ton3 = item.LoanCurrentTon;
          } else if (item.RowNo === '4') {
            rai4 = item.LoanCurrentRai;
            ton4 = item.LoanCurrentTon;
          } else if (item.RowNo === '5') {
            rai5 = item.LoanCurrentRai;
            ton5 = item.LoanCurrentTon;
          } else if (item.RowNo === '6') {
            rai6 = item.LoanCurrentRai;
            ton6 = item.LoanCurrentTon;
          } else if (item.RowNo === '7') {
            rai7 = item.LoanCurrentRai;
            ton7 = item.LoanCurrentTon;
          } else if (item.RowNo === '8') {
            rai8 = item.LoanCurrentRai;
            ton8 = item.LoanCurrentTon;
          } else {
            rai9 = item.LoanCurrentRai;
            ton9 = item.LoanCurrentTon;
          }
        });
        if (dueCheck[0].RowNo === '1') {
          raiAll = rai1;
          tonAll = ton1;
        }
        if (dueCheck[0].RowNo === '2') {
          raiAll = rai1 + rai2;
          tonAll = ton1 + ton2;
        }
        if (dueCheck[0].RowNo === '3') {
          raiAll = rai1 + rai2 + rai3;
          tonAll = ton1 + ton2 + ton3;
        }
        if (dueCheck[0].RowNo === '4') {
          raiAll = rai1 + rai2 + rai3 + rai4;
          tonAll = ton1 + ton2 + ton3 + ton4;
        }
        if (dueCheck[0].RowNo === '5') {
          raiAll = rai1 + rai2 + rai3 + rai4 + rai5;
          tonAll = ton1 + ton2 + ton3 + ton4 + ton5;
        }
        if (dueCheck[0].RowNo === '6') {
          raiAll = rai1 + rai2 + rai3 + rai4 + rai5 + rai6;
          tonAll = ton1 + ton2 + ton3 + ton4 + ton5 + ton6;
        }
        if (dueCheck[0].RowNo === '7') {
          raiAll = rai1 + rai2 + rai3 + rai4 + rai5 + rai6 + rai7;
          tonAll = ton1 + ton2 + ton3 + ton4 + ton5 + ton6 + ton7;
        }
        if (dueCheck[0].RowNo === '8') {
          raiAll = rai1 + rai2 + rai3 + rai4 + rai5 + rai6 + rai7 + rai8;
          tonAll = ton1 + ton2 + ton3 + ton4 + ton5 + ton6 + ton7 + ton8;
        }
        if (dueCheck[0].RowNo === '9') {
          raiAll = rai1 + rai2 + rai3 + rai4 + rai5 + rai6 + rai7 + rai8 + rai9;
          tonAll = ton1 + ton2 + ton3 + ton4 + ton5 + ton6 + ton7 + ton8 + ton9;
        }
        if (dueCheck[0].Due0 > 0) {
          // eslint-disable-next-line no-plusplus
          dueCount++;
        }
        if (dueCheck[0].Due1 > 0) {
          // eslint-disable-next-line no-plusplus
          dueCount++;
        }
        if (dueCheck[0].Due2 > 0) {
          // eslint-disable-next-line no-plusplus
          dueCount++;
        }
        if (dueCheck[0].Due3 > 0) {
          // eslint-disable-next-line no-plusplus
          dueCount++;
        }
        if (dueCheck[0].Due4 > 0) {
          // eslint-disable-next-line no-plusplus
          dueCount++;
        }
        if (dueCheck[0].Due5 > 0) {
          // eslint-disable-next-line no-plusplus
          dueCount++;
        }
        if (dueCheck[0].Due6 > 0) {
          // eslint-disable-next-line no-plusplus
          dueCount++;
        }
        if (dueCheck[0].Due7 > 0) {
          // eslint-disable-next-line no-plusplus
          dueCount++;
        }

        const textPrice = ThaiBaht(Number(dueCheck[0].LoanCurrent));
        const due0Price = ThaiBaht(Number(dueCheck[0].Due0));
        const due1Price = ThaiBaht(Number(dueCheck[0].Due1));
        const due2Price = ThaiBaht(Number(dueCheck[0].Due2));
        const due3Price = ThaiBaht(Number(dueCheck[0].Due3));
        const due4Price = ThaiBaht(Number(dueCheck[0].Due4));
        const due5Price = ThaiBaht(Number(dueCheck[0].Due5));
        const due6Price = ThaiBaht(Number(dueCheck[0].Due6));
        const due7Price = ThaiBaht(Number(dueCheck[0].Due7));

        res.render('duecheck', {
          cropYear: `${crop1}/${crop2}`,
          cropNext1: `${crop2}/${crop3}`,
          cropNext2: `${crop3}/${crop4}`,
          cropBack1: `${crop1}`,
          cropCurrent: `${crop2}`,
          quotaName: dueCheck[0].QuotaName,
          caneGroup: PlotTypeName,
          quotaNo: dueCheck[0].QuotaCode,
          addNo: `เลขที่ ${quotaAdd[0].RegAddressNo}`,
          moo: `หมู่ที่ ${quotaAdd[0].RegMoo}`,
          tambon: `ตำบล ${quotaAdd[0].RegTambonName}`,
          amphur: `อำเภอ ${quotaAdd[0].RegAmphurName}`,
          province: `จังหวัด ${quotaAdd[0].RegProvinceName}`,
          zipcode: `รหัสไปรษณีย์ ${quotaAdd[0].RegAddressZipcode}`,
          subZone: dueCheck[0].SurveyUserCode,
          rowNun: dueCheck[0].RowNo,
          reqCode: dueCheck[0].Code,
          loanCurrentRai: dueCheck[0].LoanCurrentRai,
          loanHistoryRai: dueCheck[0].LoanHistoryRai,
          totalRai: raiAll,
          loanCurrentTon: dueCheck[0].LoanCurrentTon,
          loanHistoryTon: dueCheck[0].LoanHistoryTon,
          totalTon: tonAll,
          dueCount,
          loanCurrent: dueCheck[0].LoanCurrent,
          loanCurrentBathTon: dueCheck[0].LoanCurrentBathTon,
          loanCurrentBaht: textPrice,
          due0: dueCheck[0].Due0,
          due0Text: due0Price || 'ศูนย์บาทถ้วน',
          due1: dueCheck[0].Due1,
          due1Text: due1Price || 'ศูนย์บาทถ้วน',
          due2: dueCheck[0].Due2,
          due2Text: due2Price || 'ศูนย์บาทถ้วน',
          due3: dueCheck[0].Due3,
          due3Text: due3Price || 'ศูนย์บาทถ้วน',
          due4: dueCheck[0].Due4,
          due4Text: due4Price || 'ศูนย์บาทถ้วน',
          due5: dueCheck[0].Due5,
          due5Text: due5Price || 'ศูนย์บาทถ้วน',
          due6: dueCheck[0].Due6,
          due6Text: due6Price || 'ศูนย์บาทถ้วน',
          due7: dueCheck[0].Due7,
          due7Text: due7Price || 'ศูนย์บาทถ้วน'
        });
        await queryRunner.release();
      } else {
        res.render('duecheck', {});
        await queryRunner.release();
      }
    } catch (err: any) {
      next(err);
    }
  }

  public async printFertilize(
    req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    try {
      const queryRunner = MssqlDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      await queryRunner.connect();
      // MSSQL paramiter @0
      const factor = await queryRunner.manager.query(
        `SELECT * FROM [MCSS].[dbo].[vw_FMCA0303] WHERE OrderId = @0`,
        [id]
      );

      const sumFactor = await queryRunner.manager.query(
        `SELECT SUM(TotalPrice) AS TotalPrice, SUM(Interest) AS Interest, Right(SUM(Interest),2) AS Decm, SUM(Amount) AS SumAmout FROM [MCSS].[dbo].[vw_FMCA0303] WHERE OrderId = @0`,
        [id]
      );

      let Interest = 0;

      const SumAmout = Number(sumFactor[0]?.SumAmout);
      const totalNum = Number(sumFactor[0]?.TotalPrice);
      if (Number(sumFactor[0]?.Decm) > 50) {
        Interest = Math.round(Number(sumFactor[0]?.Interest));
      } else {
        Interest = Math.floor(Number(sumFactor[0]?.Interest));
      }
      // const DecMa  = Math.floor(Number(sumFactor[0]?.Interest));
      // const Interest = Math.round(Number(sumFactor[0]?.Interest));
      const textPrice = ThaiBaht(totalNum + Interest);

      // eslint-disable-next-line no-console
      // console.log(totalNum, Interest, SumAmout);
      res.render('factor', {
        crop: factor[0]?.SeasonYear,
        idCard: factor[0]?.IDCard,
        quota: factor[0]?.QuotaCode,
        quotaName: factor[0]?.QuotaName,
        quotaAdd: factor[0]?.QuotaAddress,
        vendor: factor[0]?.Name,
        zone: factor[0]?.ZoneCode,
        factor,
        proType: factor[0]?.ProductType,
        totalPrice: factor[0]?.TotalPrice,
        amount: SumAmout,
        subZone: factor[0]?.SubZone,
        // proName: factor?.ProductName,
        priceTotal: totalNum,
        proInterest: Interest,
        priceText: textPrice
      });
    } catch (err: any) {
      next(err);
    }
  }

  public async printParts(
    req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    let useSums: any;
    let sumDeduct: any;
    let sumHistoryTon: any;
    let managerName: any = '';
    let dateOrder: any;
    try {
      const parts = await MssqlDataSource.query(
        `SELECT * FROM [MCSS].[dbo].[View_Y2J_Order] WHERE FertilizeOrderId = @0`,
        [id]
      );

      if (parts.length > 0) {
        useSums = await PostgresDataSource.query(
          'SELECT cropYear, zone, quota, FullName, SUM(area_contract) as areaContract, SUM(ton_contract) as tonContract FROM View_BudgetQuotaProve WHERE quota =@0 AND cropYear=@1 GROUP BY cropYear, zone, quota, FullName',
          [
            parts[0].QuotaId,
            `25${Number(parts[0].SeasonYear) - 1}/${parts[0].SeasonYear}`
          ]
        );

        const quota = await MssqlDataSource.query(
          'SELECT * FROM [MCSS].[dbo].[vw_QuotaZone] WHERE QuotaCode =@0',
          [parts[0].QuotaId]
        );

        const managers = await MssqlDataSource.query(
          'SELECT * FROM [MCSS].[dbo].[vw_UserByZone] WHERE [Role] = @0 AND ZoneCode = @1',
          ['รองผู้จัดการอ้อย', quota[0].Zone]
        );
        if (managers.length > 0) {
          managerName = `นาย${managers[0].FullName.substring(3, 50)}`;
        } else {
          managerName = '';
        }

        dateOrder = parts[0].DeliveryDate.toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        if (useSums.length > 0) {
          // if (quota.length > 0) {
          sumDeduct = await PostgresDataSource.query(
            'SELECT TOP(1) quota, SUM(deduct1_due_previous+deduct2_due_previous+deduct3_due_previous+deduct4_due_previous) AS DueLast FROM [ps_prod].[dbo].[history_debt] WHERE quota =@0 AND cropYear=@1 GROUP BY id, quota  ORDER BY id DESC',
            [
              quota[0].QuotaCode,
              `25${Number(parts[0].SeasonYear)}/${parts[0].SeasonYear + 1}`
            ]
          );

          sumHistoryTon = await PostgresDataSource.query(
            'SELECT TOP(1) quota, history4_ton_contract, history4_ton_real, SUM(history4_canetype01 + history4_canetype02 + history4_canetype03 + history4_canetype04 + history4_canetype05 + history4_canetype06) AS history4_sum_cane FROM [ps_prod].[dbo].[history_cane] WHERE quota =@0 AND cropYear=@1 GROUP BY id, quota, history4_ton_contract, history4_ton_real ORDER BY id DESC',
            [
              quota[0].QuotaCode,
              `25${Number(parts[0].SeasonYear)}/${parts[0].SeasonYear + 1}`
            ]
          );

          let sumTon: any;
          if (sumHistoryTon[0].history4_ton_real === 0) {
            sumTon = Number(useSums[0].tonContract);
          } else if (
            sumHistoryTon[0].history4_ton_real > useSums[0].tonContract
          ) {
            sumTon = 0;
          } else {
            sumTon =
              Number(sumHistoryTon[0].history4_ton_real) +
              Number(useSums[0].tonContract);
          }

          res.render('parts', {
            cropYear:
              `25${Number(parts[0].SeasonYear) - 1}/${parts[0].SeasonYear}` ||
              '',
            quota: useSums[0].quota || '',
            fullName: useSums[0].FullName || '',
            areaContract:
              parseFloat(sumHistoryTon[0].history4_sum_cane).toLocaleString(
                undefined,
                { minimumFractionDigits: 2 }
              ) || '',
            tonContract:
              parseFloat(sumHistoryTon[0].history4_ton_contract).toLocaleString(
                undefined,
                {
                  minimumFractionDigits: 2
                }
              ) || '',
            partPrice:
              parseFloat(parts[0].TotalPrice).toLocaleString(undefined, {
                minimumFractionDigits: 2
              }) || '',
            partDeduct:
              parseFloat(sumDeduct[0].DueLast).toLocaleString(undefined, {
                minimumFractionDigits: 2
              }) || '',
            dateOrder: dateOrder || '',
            sumHistoryTon: parseFloat(
              sumHistoryTon[0].history4_ton_real
            ).toLocaleString(undefined, { minimumFractionDigits: 2 }),
            tonRemain: parseFloat(sumTon).toLocaleString(undefined, {
              minimumFractionDigits: 2
            }),
            managerName
          });
        } else {
          res.render('parts', {
            cropYear:
              `25${Number(parts[0].SeasonYear) - 1}/${parts[0].SeasonYear}` ||
              '',
            quota: quota[0].QuotaCode || '',
            fullName: quota[0].QuotaName || '',
            areaContract: '',
            tonContract: '',
            partPrice: '',
            partDeduct: '',
            dateOrder: dateOrder || '',
            sumHistoryTon: '',
            tonRemain: '',
            managerName
          });
        }
      }
    } catch (err: any) {
      next(err);
    }
  }

  public async printBudget(
    req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<void> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id, reqs, crop } = req.params;
    const queryRunnerMCSS = MssqlDataSource.createQueryRunner();
    const queryRunner = PostgresDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunnerMCSS.connect();

    const quota = await queryRunnerMCSS.manager.query(
      'SELECT * FROM [MCSS].[dbo].[vw_QuotaZone] WHERE QuotaCode =@0',
      [<number>(<unknown>id)]
    );
    const cropX = <number>(<unknown>crop) - 1;
    const cropYearX = `25${cropX}/${crop}`;
    const crops = await queryRunner.manager.query(
      'SELECT cropYear FROM budgets WHERE cropYear=@0 and quota =@1 and request_num =@2',
      [cropYearX, <number>(<unknown>id), reqs]
    );
    if (crops[0] === undefined) {
      res.render('index', {});
      await queryRunner.release();
    } else {
      const CropYears = crops[0].cropYear;
      const crop1 = CropYears.substring(2, 4);
      const crop2 = Number(crop1) + 0;
      const crop3 = Number(crop1) + 1;
      const crop4 = Number(crop1) + 2;
      const crop5 = Number(crop1) + 3;
      const crop6 = Number(crop1) + 4;
      const crop7 = Number(crop1) + 5;
      const crop8 = Number(crop1) + 6;
      const cropOld1 = Number(crop1) - 1;
      const cropOld2 = Number(crop1) - 2;
      const cropOld3 = Number(crop1) - 3;
      const cropOld4 = Number(crop1) - 4;
      const cropOld5 = Number(crop1) - 5;
      // const cropOld6 = Number(crop1) - 6;

      // เลือกประเภทอ้อยจากพื้นที่ GIS
      const crop01 = await queryRunner.manager.query(
        'SELECT * FROM [ps_prod].[dbo].[View_AreaGIS] WHERE Quota = @0',
        [<number>(<unknown>id)]
      );
      const sumCurrent: any[] = [];
      let caneType01 = 0;
      let caneType02 = 0;
      let caneType03 = 0;
      let caneType04 = 0;
      let caneType05 = 0;
      let caneType06 = 0;
      let caneType07 = 0;
      let caneType08 = 0;
      let caneType09 = 0;

      // for จัดกลุ่มประเภทอ้อยให้ตรงเอกสาร
      crop01.forEach((element: any) => {
        const cane1 = element.CaneType.endsWith('ปลายฝน');
        const cane2 = element.CaneType.endsWith('พื้นที่ใหม่');
        const cane3 = element.CaneType.endsWith('Model');
        const cane4 = element.CaneType.endsWith('รื้อตอ');
        const cane5 = element.CaneType.endsWith('ต้นฝน');
        const cane6 = element.CaneType.endsWith('ตอ1');
        const cane7 = element.CaneType.endsWith('ตอ2');
        const cane8 = element.CaneType.endsWith('ตอ3');
        // const cane9 = element.CaneType.endsWith('ตอ3+');

        if (cane1 === true) {
          caneType01 = element.AreaGis;
          // sumCurrent.push({ caneType01 });
        } else if (cane2 === true) {
          caneType02 = element.AreaGis;
          // sumCurrent.push({ caneType02 });
        } else if (cane3 === true) {
          caneType03 = element.AreaGis;
          // sumCurrent.push({ caneType03 });
        } else if (cane4 === true) {
          caneType04 = element.AreaGis;
          // sumCurrent.push({ caneType04 });
        } else if (cane5 === true) {
          caneType05 = element.AreaGis;
          // sumCurrent.push({ caneType05 });
        } else if (cane6 === true) {
          caneType06 = element.AreaGis;
          // sumCurrent.push({ caneType06 });
        } else if (cane7 === true) {
          caneType07 = element.AreaGis;
          // sumCurrent.push({ caneType07 });
        } else if (cane8 === true) {
          caneType08 = element.AreaGis;
          // sumCurrent.push({ caneType08 });
        } else {
          caneType09 = element.AreaGis;
          /// sumCurrent.push({ caneType09 });
        }
      });

      sumCurrent.push(
        caneType01 + caneType02 + caneType03, // ปลายฝน + พื้นที่ใหม่ + psmodel
        caneType04,
        caneType05,
        caneType06,
        caneType07,
        caneType08 + caneType09, // ตอ3++
        caneType01 +
          caneType02 +
          caneType03 +
          caneType04 +
          caneType05 +
          caneType06 +
          caneType07 +
          caneType08 +
          caneType09
      );

      const budgetOne = await PostgresDataSource.getRepository(
        Budgets
      ).findOneBy({
        quota: <number>(<unknown>id),
        request_num: 1,
        cropYear: cropYearX
      });
      let requestNum;
      if (<number>(<unknown>reqs) === 0) {
        requestNum = 1;
      } else {
        requestNum = <number>(<unknown>reqs);
      }

      const budget = await PostgresDataSource.getRepository(Budgets).findOneBy({
        quota: <number>(<unknown>id),
        request_num: requestNum,
        cropYear: cropYearX
      });

      let guarantor: any;
      let ownerShip: any;
      let ownerShip1: any;
      const guarantors = [];
      const ownerShips: {}[] = [];
      const ownerShips1: {}[] = [];
      let sumOwnerShip;

      // ประวัติหลักทรัพย์ค้ำประกัน
      const securities = await PostgresDataSource.manager.query(
        'SELECT * FROM budget_securities WHERE cropYear=@0 AND quota =@1 AND budgetId = @2 ORDER BY id ASC',
        [cropYearX, <number>(<unknown>id), Number(budget?.id)]
      );

      // ข้อมูลหลัก หลักทรัพย์ค้ำประกัน
      const securitie = await queryRunner.manager.query(
        'SELECT * FROM securities WHERE cropYear=@0 AND quota =@1 AND securitieType <> @2 ORDER BY id ASC',
        [cropYearX, <number>(<unknown>id), 'อื่น ๆ']
      );

      let securitiesHis: any;
      if (securities.length !== 0) {
        // มีในประวัติหลักทรัพย์
        securitiesHis = 'BudgetSecurities';
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < securities.length; i++) {
          if (securities[i]?.quotaGuarantor) {
            // eslint-disable-next-line no-await-in-loop
            guarantor = await MssqlDataSource.getRepository(Quotas).findOneBy({
              Code: <number>(<unknown>securities[i]?.quotaGuarantor)
            });
            guarantors.push(guarantor);
          }
        }
      } else {
        // มีในหลักทรัพย์หลัก
        securitiesHis = 'Securities';
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < securitie.length; i++) {
          if (securitie[i]?.quotaGuarantor) {
            // eslint-disable-next-line no-await-in-loop
            guarantor = await MssqlDataSource.getRepository(Quotas).findOneBy({
              Code: <number>(<unknown>securitie[i]?.quotaGuarantor)
            });

            guarantors.push(guarantor);
          }
        }
      }

      // eslint-disable-next-line no-console
      // console.log(guarantors);

      // eslint-disable-next-line prefer-const
      ownerShip = await PostgresDataSource.getRepository(`${securitiesHis}`)
        .createQueryBuilder('Securities')
        .select('ownershipName, ownerCardId, ownerAddress')
        .addSelect('SUM(appraisalPrice)', 'appraisalPrice')
        .where(
          `(Securities.ownerCardId IS NOT NULL AND Securities.ownerCardId != '') AND (Securities.quota = :quota)`,
          {
            quota: <number>(<unknown>id)
          }
        )
        .andWhere('Securities.cropYear = :crop', { crop: cropYearX })
        .groupBy('ownershipName, ownerCardId, ownerAddress')
        .getRawMany();

      // eslint-disable-next-line prefer-const
      ownerShip1 = await PostgresDataSource.getRepository(`${securitiesHis}`)
        .createQueryBuilder('Securities')
        .select(
          'ownerCardId, ownerAddress, ownershipName1, ownerCardId1, ownerAddress1, ownershipName2, ownerCardId2, ownerAddress2, ownershipName3, ownerCardId3, ownerAddress3'
        )
        .where(
          `(Securities.ownerCardId != '' AND Securities.ownerCardId1 != '') AND (Securities.quota = :quota)`,
          {
            quota: <number>(<unknown>id)
          }
        )
        .andWhere('Securities.cropYear = :crop', { crop: cropYearX })
        .groupBy(
          'ownerCardId, ownerAddress, ownershipName1, ownerCardId1, ownerAddress1, ownershipName2, ownerCardId2, ownerAddress2, ownershipName3, ownerCardId3, ownerAddress3'
        )
        .getRawMany();

      let securitiesPrice = '';
      ownerShip.forEach(async (owner: any, index: number) => {
        let name: string;
        if (owner.ownershipName.includes('นาย') === true) {
          name = owner.ownershipName.substring(3, 200);
        } else if (owner.ownershipName.includes('นางสาว') === true) {
          name = owner.ownershipName.substring(6, 200);
        } else if (owner.ownershipName.includes('นาง') === true) {
          name = owner.ownershipName.substring(3, 200);
        } else {
          name = owner.ownershipName;
        }

        if (ownerShip1.length > 0) {
          ownerShip1.forEach((owner1: any) => {
            let name1: string;
            if (owner1.ownershipName1.includes('นาย') === true) {
              name1 = owner1.ownershipName1.substring(3, 200);
            } else if (owner1.ownershipName1.includes('นางสาว') === true) {
              name1 = owner1.ownershipName1.substring(6, 200);
            } else if (owner1.ownershipName1.includes('นาง') === true) {
              name1 = owner1.ownershipName1.substring(3, 200);
            } else {
              name1 = owner1.ownershipName1;
            }
            let name2: string;
            if (owner1.ownershipName2.includes('นาย') === true) {
              name2 = owner1.ownershipName2.substring(3, 200);
            } else if (owner1.ownershipName2.includes('นางสาว') === true) {
              name2 = owner1.ownershipName2.substring(6, 200);
            } else if (owner1.ownershipName2.includes('นาง') === true) {
              name2 = owner1.ownershipName2.substring(3, 200);
            } else {
              name2 = owner1.ownershipName2;
            }
            let name3: string;
            if (owner1.ownershipName3.includes('นาย') === true) {
              name3 = owner1.ownershipName3.substring(3, 200);
            } else if (owner1.ownershipName3.includes('นางสาว') === true) {
              name3 = owner1.ownershipName3.substring(6, 200);
            } else if (owner1.ownershipName3.includes('นาง') === true) {
              name3 = owner1.ownershipName3.substring(3, 200);
            } else {
              name3 = owner1.ownershipName3;
            }
            if (owner1.ownerCardId === owner.ownerCardId) {
              ownerShips.push({
                index,
                ownershipName: name,
                ownershipFullName: owner.ownershipName,
                ownerCardId: owner.ownerCardId,
                ownerAddress: owner.ownerAddress,
                appraisalPrice: owner.appraisalPrice,
                ownerShipPrice: ThaiBaht(Number(owner.appraisalPrice)),
                ownerShipName1: name1,
                ownerShipFullName1: owner1.ownershipName1,
                ownerCardId1: owner1.ownerCardId1,
                ownerAddress1: owner1.ownerAddress1,
                ownerShipName2: name2,
                ownerShipFullName2: owner1.ownershipName2,
                ownerCardId2: owner1.ownerCardId2,
                ownerAddress2: owner1.ownerAddress2,
                ownerShipName3: name3,
                ownerShipFullName3: owner1.ownershipName3,
                ownerCardId3: owner1.ownerCardId3,
                ownerAddress3: owner1.ownerAddress3
              });
            } else {
              ownerShips.push({
                index,
                ownershipName: name,
                ownershipFullName: owner.ownershipName,
                ownerCardId: owner.ownerCardId,
                ownerAddress: owner.ownerAddress,
                appraisalPrice: owner.appraisalPrice,
                ownerShipPrice: ThaiBaht(Number(owner.appraisalPrice))
              });
            }
          });
        } else {
          ownerShips.push({
            index,
            ownershipName: name,
            ownershipFullName: owner.ownershipName,
            ownerCardId: owner.ownerCardId,
            ownerAddress: owner.ownerAddress,
            appraisalPrice: owner.appraisalPrice,
            ownerShipPrice: ThaiBaht(Number(owner.appraisalPrice))
          });
        }
      });

      if (securitie[0]) {
        securitiesPrice = ThaiBaht(Number(securitie[0].appraisalPrice)) || '';
      }
      // eslint-disable-next-line prefer-const
      sumOwnerShip = ownerShips.length;
      const useSums = await PostgresDataSource.getRepository(Budgets)
        .createQueryBuilder('Budgets')
        .select('SUM(Budgets.promotion0_budget_use)', 'sum0')
        .addSelect('SUM(Budgets.promotion1_budget_use)', 'sum1')
        .addSelect('SUM(Budgets.promotion2_budget_use)', 'sum2')
        .addSelect('SUM(Budgets.promotion3_budget_use)', 'sum3')
        .addSelect('SUM(Budgets.promotion4_budget_use)', 'sum4')
        .addSelect('SUM(Budgets.promotion5_budget_use)', 'sum5')
        .addSelect('SUM(Budgets.promotion6_budget_use)', 'sum6')
        .addSelect('SUM(Budgets.promotion7_budget_use)', 'sum7')
        .addSelect('SUM(Budgets.promotion0_ton_contract)', 'sumTon0')
        .addSelect('SUM(Budgets.promotion1_ton_contract)', 'sumTon1')
        .addSelect('SUM(Budgets.promotion2_ton_contract)', 'sumTon2')
        .addSelect('SUM(Budgets.promotion3_ton_contract)', 'sumTon3')
        .addSelect('SUM(Budgets.promotion4_ton_contract)', 'sumTon4')
        .addSelect('SUM(Budgets.promotion5_ton_contract)', 'sumTon5')
        .addSelect('SUM(Budgets.promotion0_area_contract)', 'sumArea0')
        .addSelect('SUM(Budgets.promotion1_area_contract)', 'sumArea1')
        .addSelect('SUM(Budgets.promotion2_area_contract)', 'sumArea2')
        .addSelect('SUM(Budgets.promotion3_area_contract)', 'sumArea3')
        .addSelect('SUM(Budgets.promotion4_area_contract)', 'sumArea4')
        .addSelect('SUM(Budgets.promotion5_area_contract)', 'sumArea5')
        .addSelect(
          'SUM(Budgets.promotion0_budget_total*Budgets.promotion0_area_contract)',
          'sumTotal0'
        )
        .addSelect(
          'SUM(Budgets.promotion1_budget_total*Budgets.promotion1_area_contract)',
          'sumTotal1'
        )
        .addSelect(
          'SUM(Budgets.promotion2_budget_total*Budgets.promotion2_area_contract)',
          'sumTotal2'
        )
        .addSelect(
          'SUM(Budgets.promotion3_budget_total*Budgets.promotion3_area_contract)',
          'sumTotal3'
        )
        .addSelect(
          'SUM(Budgets.promotion4_budget_total*Budgets.promotion4_area_contract)',
          'sumTotal4'
        )
        .addSelect(
          'SUM(Budgets.promotion5_budget_total*Budgets.promotion5_area_contract)',
          'sumTotal5'
        )
        .addSelect('SUM(Budgets.promotion0_baht_ton)', 'sumBahtTon0')
        .addSelect('SUM(Budgets.promotion1_baht_ton)', 'sumBahtTon1')
        .addSelect('SUM(Budgets.promotion2_baht_ton)', 'sumBahtTon2')
        .addSelect('SUM(Budgets.promotion3_baht_ton)', 'sumBahtTon3')
        .addSelect('SUM(Budgets.promotion4_baht_ton)', 'sumBahtTon4')
        .addSelect('SUM(Budgets.promotion5_baht_ton)', 'sumBahtTon5')
        .addSelect('SUM(Budgets.promotion6_baht_ton)', 'sumBahtTon6')
        .addSelect('SUM(Budgets.promotion7_baht_ton)', 'sumBahtTon7')
        .addSelect('SUM(increaseDecreaseContract)', 'incDecContract')
        .where('Budgets.quota = :id', { id: <number>(<unknown>id) })
        .andWhere('Budgets.budget_prove = :prove', { prove: '01' })
        .andWhere('Budgets.request_num < :num', {
          num: <number>(<unknown>reqs)
        })
        .andWhere('Budgets.cropYear = :crop', { crop: cropYearX })
        .andWhere('Budgets.deletedAt IS NULL')
        // .groupBy("user.id")
        // .getRawMany();
        .getRawOne();

      const SumArea =
        Number(useSums?.sumArea0 || 0) +
        Number(useSums?.sumArea1 || 0) +
        Number(useSums?.sumArea2 || 0) +
        Number(useSums?.sumArea3 || 0) +
        Number(useSums?.sumArea4 || 0) +
        Number(useSums?.sumArea5 || 0);

      const securitieSum = await PostgresDataSource.getRepository(
        `${securitiesHis}`
      )
        .createQueryBuilder('Securities')
        .select('SUM(Securities.appraisalPrice)', 'sum')
        .where('Securities.quota = :id', { id: <number>(<unknown>id) })
        .andWhere('Securities.securitieType <> :person', {
          person: 'ผู้ค้ำประกันแบบมีเลขโควตา'
        })
        .andWhere('Securities.securitieType <> :other', {
          other: 'ผู้ค้ำประกันแบบบุคคลอื่น'
        })
        .andWhere('Securities.cropYear = :crop', { crop: cropYearX })
        .getRawOne();

      const securitiePerson = await PostgresDataSource.getRepository(
        `${securitiesHis}`
      )
        .createQueryBuilder('Securities')
        .select('SUM(Securities.appraisalPrice)', 'sum')
        .where('Securities.quota = :id', { id: <number>(<unknown>id) })
        .andWhere('Securities.securitieType = :person', {
          person: 'ผู้ค้ำประกันแบบมีเลขโควตา'
        })
        .andWhere('Securities.cropYear = :crop', { crop: cropYearX })
        .getRawOne();

      const securitieOther = await PostgresDataSource.getRepository(
        `${securitiesHis}`
      )
        .createQueryBuilder('Securities')
        .select('SUM(Securities.appraisalPrice)', 'sum')
        .where('Securities.quota = :id', { id: <number>(<unknown>id) })
        .andWhere('Securities.securitieType = :other', {
          other: 'ผู้ค้ำประกันแบบบุคคลอื่น'
        })
        .andWhere('Securities.cropYear = :crop', { crop: cropYearX })
        .getRawOne();

      let tonContractAll: number = 0;
      let addTonContractAll: number = 0;
      if (Number(budget?.request_num) > 1) {
        tonContractAll =
          Number(useSums.sumTon0 || 0) +
          Number(useSums.sumTon1 || 0) +
          Number(useSums.sumTon2 || 0) +
          Number(useSums.sumTon3 || 0) +
          Number(useSums.sumTon4 || 0) +
          Number(useSums.sumTon5 || 0) +
          Number(useSums.incDecContract || 0);
        addTonContractAll =
          Number(budget?.promotion0_ton_contract || 0) +
          Number(budget?.promotion1_ton_contract || 0) +
          Number(budget?.promotion2_ton_contract || 0) +
          Number(budget?.promotion3_ton_contract || 0) +
          Number(budget?.promotion4_ton_contract || 0) +
          Number(budget?.promotion5_ton_contract || 0) +
          Number(budget?.increaseDecreaseContract || 0);
      } else {
        tonContractAll =
          Number(budget?.promotion0_ton_contract || 0) +
          Number(budget?.promotion1_ton_contract || 0) +
          Number(budget?.promotion2_ton_contract || 0) +
          Number(budget?.promotion3_ton_contract || 0) +
          Number(budget?.promotion4_ton_contract || 0) +
          Number(budget?.promotion5_ton_contract || 0);
        addTonContractAll = Number(budget?.increaseDecreaseContract || 0);
      }

      await PostgresDataSource.manager.query(
        'UPDATE [ps_prod].[dbo].[budgets] SET ton_contract =@1, add_ton_contract =@2, total_ton_contract =@3  WHERE id = @0',
        [
          Number(budget?.id),
          tonContractAll,
          addTonContractAll,
          tonContractAll + addTonContractAll
        ]
      );

      if (!budget || !quota || !securities) {
        res.locals = res.json({ messegs: 'No budget stated' });
        responsehandler.send(res);
        await queryRunner.release();
      }

      // let title: string;
      if (quota) {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        let budget_pass1 = 0;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        let budget_pass2 = 0;

        let budget0 = 0;
        let budget1 = 0;
        let budget2 = 0;
        let budget3 = 0;
        let budget4 = 0;
        let budget5 = 0;

        if (Number(budget?.promotion0_budget_use) > 0) {
          budget0 =
            Number(budget?.promotion0_budget_total) *
            Number(budget?.promotion0_area_contract);
        }
        if (Number(budget?.promotion1_budget_use) > 0) {
          budget1 =
            Number(budget?.promotion1_budget_total) *
            Number(budget?.promotion1_area_contract);
        }
        if (Number(budget?.promotion2_budget_use) > 0) {
          budget2 =
            Number(budget?.promotion2_budget_total) *
            Number(budget?.promotion2_area_contract);
        }
        if (Number(budget?.promotion3_budget_use) > 0) {
          budget3 =
            Number(budget?.promotion3_budget_total) *
            Number(budget?.promotion3_area_contract);
        }
        if (Number(budget?.promotion4_budget_use) > 0) {
          budget4 =
            Number(budget?.promotion4_budget_total) *
            Number(budget?.promotion4_area_contract);
        }
        if (Number(budget?.promotion5_budget_use) > 0) {
          budget5 =
            Number(budget?.promotion5_budget_total) *
            Number(budget?.promotion5_area_contract);
        }
        budget_pass1 =
          budget0 +
          budget1 +
          budget2 +
          budget3 +
          budget4 +
          budget5 +
          Number(useSums?.sumTotal0 || 0) +
          Number(useSums?.sumTotal1 || 0) +
          Number(useSums?.sumTotal2 || 0) +
          Number(useSums?.sumTotal3 || 0) +
          Number(useSums?.sumTotal4 || 0) +
          Number(useSums?.sumTotal5 || 0);

        // eslint-disable-next-line @typescript-eslint/naming-convention
        budget_pass2 =
          Number(budget?.promotion0_budget_use) +
          Number(budget?.promotion1_budget_use) +
          Number(budget?.promotion2_budget_use) +
          Number(budget?.promotion3_budget_use) +
          Number(budget?.promotion4_budget_use) +
          Number(budget?.promotion5_budget_use) +
          Number(budget?.promotion6_budget_use) +
          Number(budget?.promotion7_budget_use) +
          Number(useSums?.sum0 || 0) +
          Number(useSums?.sum1 || 0) +
          Number(useSums?.sum2 || 0) +
          Number(useSums?.sum3 || 0) +
          Number(useSums?.sum4 || 0) +
          Number(useSums?.sum5 || 0) +
          Number(useSums?.sum6 || 0) +
          Number(useSums?.sum7 || 0);

        // eslint-disable-next-line @typescript-eslint/naming-convention
        let budget_pass: string;
        if (budget_pass1 - budget_pass2 >= 0) {
          budget_pass = 'ไม่เกินเกณฑ์';
        } else {
          budget_pass = 'เกินเกณฑ์';
        }

        const avgBahtRai =
          Number(
            Number(budget?.promotion0_budget_use)
              ? Number(budget?.promotion0_budget_use) +
                  Number(useSums?.sum0 || 0)
              : Number(useSums?.sum0 || 0)
          ) +
          Number(
            Number(budget?.promotion1_budget_use)
              ? Number(budget?.promotion1_budget_use) +
                  Number(useSums?.sum1 || 0)
              : Number(useSums?.sum1 || 0)
          ) +
          Number(
            Number(budget?.promotion2_budget_use)
              ? Number(budget?.promotion2_budget_use) +
                  Number(useSums?.sum2 || 0)
              : Number(useSums?.sum2 || 0)
          ) +
          Number(
            Number(budget?.promotion3_budget_use)
              ? Number(budget?.promotion3_budget_use) +
                  Number(useSums?.sum3 || 0)
              : Number(useSums?.sum3 || 0)
          ) +
          Number(
            Number(budget?.promotion4_budget_use)
              ? Number(budget?.promotion4_budget_use) +
                  Number(useSums?.sum4 || 0)
              : Number(useSums?.sum4 || 0)
          ) +
          Number(
            Number(budget?.promotion5_budget_use)
              ? Number(budget?.promotion5_budget_use) +
                  Number(useSums?.sum5 || 0)
              : Number(useSums?.sum5 || 0)
          ) +
          Number(
            Number(budget?.promotion6_budget_use)
              ? Number(budget?.promotion6_budget_use) +
                  Number(useSums?.sum6 || 0)
              : Number(useSums?.sum6 || 0)
          ) +
          Number(
            Number(budget?.promotion7_budget_use)
              ? Number(budget?.promotion7_budget_use) +
                  Number(useSums?.sum7 || 0)
              : Number(useSums?.sum7 || 0)
          );

        const totalRai =
          Number(budget?.promotion0_area_contract || 0) +
          Number(budget?.promotion1_area_contract || 0) +
          Number(budget?.promotion2_area_contract || 0) +
          Number(budget?.promotion3_area_contract || 0) +
          Number(budget?.promotion4_area_contract || 0) +
          Number(budget?.promotion5_area_contract || 0) +
          Number(SumArea || 0);

        const AvgBahtRai = avgBahtRai / totalRai;

        const caneType0 =
          Number(budget?.promotion0_area_contract) *
          (Number(budget?.promotion0_money) +
            Number(budget?.promotion0_factor_inputs));
        const caneType1 =
          Number(budget?.promotion1_area_contract) *
          (Number(budget?.promotion1_money) +
            Number(budget?.promotion1_factor_inputs));
        const caneType2 =
          Number(budget?.promotion2_area_contract) *
          (Number(budget?.promotion2_money) +
            Number(budget?.promotion2_factor_inputs));
        const caneType3 =
          Number(budget?.promotion3_area_contract) *
          (Number(budget?.promotion3_money) +
            Number(budget?.promotion3_factor_inputs));
        const caneType4 =
          Number(budget?.promotion4_area_contract) *
          (Number(budget?.promotion4_money) +
            Number(budget?.promotion4_factor_inputs));
        const caneType5 =
          Number(budget?.promotion5_area_contract) *
          (Number(budget?.promotion5_money) +
            Number(budget?.promotion5_factor_inputs));

        let approve: string = '';
        let position: string = '';
        let one: boolean = false;
        let cropEnd: number = 0;
        let countYear: number = 0;
        let avgYear: number = 0;

        if (Number(budget?.Due1) > 1) {
          countYear = 1;
          avgYear = Number(budget?.ContractYear1) / countYear;
          cropEnd = crop3;
        }
        if (Number(budget?.Due1) > 1 && Number(budget?.Due2) > 1) {
          countYear = 2;
          avgYear =
            (Number(budget?.ContractYear1) + Number(budget?.ContractYear2)) /
            countYear;
          cropEnd = crop4;
        }
        if (
          Number(budget?.Due1) > 1 &&
          Number(budget?.Due2) > 1 &&
          Number(budget?.Due3) > 1
        ) {
          countYear = 3;
          avgYear =
            (Number(budget?.ContractYear1) +
              Number(budget?.ContractYear2) +
              Number(budget?.ContractYear3)) /
            countYear;
          cropEnd = crop5;
        }
        if (
          Number(budget?.Due1) > 1 &&
          Number(budget?.Due2) > 1 &&
          Number(budget?.Due3) > 1 &&
          Number(budget?.Due4) > 1
        ) {
          countYear = 4;
          avgYear =
            (Number(budget?.ContractYear1) +
              Number(budget?.ContractYear2) +
              Number(budget?.ContractYear3) +
              Number(budget?.ContractYear4)) /
            countYear;
          cropEnd = crop6;
        }
        if (
          Number(budget?.Due1) > 1 &&
          Number(budget?.Due2) > 1 &&
          Number(budget?.Due3) > 1 &&
          Number(budget?.Due4) > 1 &&
          Number(budget?.Due5) > 1
        ) {
          countYear = 5;
          avgYear =
            (Number(budget?.ContractYear1) +
              Number(budget?.ContractYear2) +
              Number(budget?.ContractYear3) +
              Number(budget?.ContractYear4) +
              Number(budget?.ContractYear5)) /
            countYear;
          cropEnd = crop7;
        }

        if (
          Number(budget?.Due1) > 1 &&
          Number(budget?.Due2) > 1 &&
          Number(budget?.Due3) > 1 &&
          Number(budget?.Due4) > 1 &&
          Number(budget?.Due5) > 1 &&
          Number(budget?.Due6) > 1
        ) {
          countYear = 6;
          avgYear =
            (Number(budget?.ContractYear1) +
              Number(budget?.ContractYear2) +
              Number(budget?.ContractYear3) +
              Number(budget?.ContractYear4) +
              Number(budget?.ContractYear5) +
              Number(budget?.ContractYear6)) /
            countYear;
          cropEnd = crop8;
        }

        if (Number(budget?.promotion7_budget_use) < 2000001 && countYear < 4) {
          approve = 'นายเอกรัตน์ เตชธเวช';
          position = 'ผู้ช่วยกรรมการผู้จัดการสายงาจัดหาวัตถุดิบ';
          one = false;
        } else {
          approve = 'นายชาญ ฉันท์วิภว';
          position = 'กรรมการผู้จัดการ';
          one = true;
        }

        const zoneName = await queryRunner.manager.query(
          'SELECT * FROM [MCSS].[dbo].[vw_UserByZone] WHERE [Role] = @0 AND ZoneCode = @1',
          ['หัวหน้าเขต', budget?.zone]
        );

        const managers = await queryRunner.manager.query(
          'SELECT * FROM [MCSS].[dbo].[vw_UserByZone] WHERE [Role] = @0 AND ZoneCode = @1',
          ['รองผู้จัดการอ้อย', budget?.zone]
        );

        const managerName: string = managers[0].FullName.substring(3, 50);
        let str1: string = '';
        let str2: string = '';

        if (managerName === 'สันติ น้อยธรรมราช') {
          str1 = 'รักษาการผู้จัดการฝ่ายส่งเสริมและจัดหาอ้อย';
        } else {
          str1 = 'รองผู้จัดการฝ่ายส่งเสริมและจัดหาอ้อย';
        }

        if (zoneName[0].FullName === 'เอกชัย สถาพรวรกุล') {
          str2 = 'อาวุโส 11';
        }

        const textPrice = ThaiBaht(Number(budget?.promotion7_budget_use));
        const due1Price = ThaiBaht(Number(budget?.promotion6_budget_use));
        const due2Price = ThaiBaht(Number(0));
        const due3Price = ThaiBaht(Number(0));
        const due4Price = ThaiBaht(Number(0));
        const due5Price = ThaiBaht(Number(0));
        const due6Price = ThaiBaht(Number(budget?.promotion7_budget_use));
        const due7Price = ThaiBaht(Number(0));
        const due8Price = ThaiBaht(Number(0));

        const dueTotal = ThaiBaht(
          Number(budget?.promotion7_budget_use) ||
            Number(budget?.promotion6_budget_use)
        );
        let projectScss: any;
        let ScssProject = '';

        if (budget?.promotion7_project_type?.toString() !== '') {
          projectScss = await queryRunner.manager.query(
            'SELECT * FROM projects WHERE project_name = @0',
            [budget?.promotion7_project_type?.toString()]
          );
          if (projectScss.length > 0) {
            ScssProject = projectScss[0].project_scss;
          }
        }

        const toDay: string = budget?.apporv_date || dayTH; // แยกวันที่ โดยช่วงว่าง
        const dateString: any = budget?.ProjectInspectionDate?.toString();
        const DateInspection = new Date(dateString).toLocaleDateString('th-TH');

        res.render('print', {
          codeId: budget?.id,
          statusProve: budget?.budget_prove,
          prints: budget?.printStatus2,
          crop: budget?.cropYear,
          subzone: quota[0]?.SurveyUserCode,
          zoneLocal: quota[0]?.ZoneName.split(' '),
          quota: quota[0]?.QuotaCode,
          idcard: quota[0]?.IDCard,
          todate: budget?.apporv_date || dayTH,
          arrayToDate: toDay.split(' '),
          BudgetDateOne: budgetOne!.apporv_date?.toString(),
          BudgetContact: tonContractAll,
          todebt: budget?.debt_date || dayTH,
          owerNum: guarantors.length,
          securitieSum: securitieSum.sum || 0,
          securitiePerson: securitiePerson.sum + securitieOther.sum || 0,
          fullName: quota[0]?.QuotaName || '',
          requestNum: Number(budget?.request_num),
          tonContract: tonContractAll,
          addTonContract: addTonContractAll,
          totalTon: tonContractAll + addTonContractAll,
          incDecCon: Number(budget?.increaseDecreaseContract || 0),
          AllRai: totalRai,
          AllBahtTon:
            Number(budget?.promotion0_budget_total || 0) +
            Number(budget?.promotion1_budget_total || 0) +
            Number(budget?.promotion2_budget_total || 0) +
            Number(budget?.promotion3_budget_total || 0) +
            Number(budget?.promotion4_budget_total || 0) +
            Number(budget?.promotion5_budget_total || 0) +
            Number(budget?.promotion6_budget_total || 0) +
            Number(budget?.promotion7_budget_total || 0),
          //
          promotion0_name: caneName0,
          promotion0_area_contract: budget?.promotion0_area_contract || 0,
          promotion0_ton_contract: budget?.promotion0_ton_contract || 0,
          promotion0_money: Number(budget?.promotion0_money || 0),
          promotion0_factor_inputs: Number(
            budget?.promotion0_factor_inputs || 0
          ),
          promotion0_factor_status: Number(
            budget?.promotion0_factor_status || 0
          ),
          promotion0_budget_total: Number(budget?.promotion0_budget_total || 0),
          promotion0_budget_approved:
            Number(budget?.promotion0_budget_approved) ||
            Number(useSums?.sum0 || 0),
          promotion0_budget_use: Number(budget?.promotion0_budget_use || 0),
          promotion0_budget_totle: Number(budget?.promotion0_budget_use || 0)
            ? Number(budget?.promotion0_budget_use) + Number(useSums?.sum0 || 0)
            : Number(useSums?.sum0 || 0),
          promotion0_baht_ton: Number(budget?.promotion0_baht_ton)
            ? Number(budget?.promotion0_baht_ton || 0)
            : (Number(useSums?.sum0 || 0) +
                Number(budget?.promotion0_budget_use || 0)) /
              Number(useSums?.sumTon0 || 1),
          //
          promotion1_name: caneName1,
          promotion1_area_contract: budget?.promotion1_area_contract || 0,
          promotion1_ton_contract: budget?.promotion1_ton_contract || 0,
          promotion1_money: Number(budget?.promotion1_money || 0),
          promotion1_factor_inputs: Number(budget?.promotion1_factor_inputs),
          promotion1_factor_status: Number(budget?.promotion1_factor_status),
          promotion1_budget_total: Number(budget?.promotion1_budget_total),
          promotion1_budget_approved:
            Number(budget?.promotion1_budget_approved) ||
            Number(useSums?.sum1 || 0),
          promotion1_budget_use: Number(budget?.promotion1_budget_use || 0),
          promotion1_budget_totle: Number(budget?.promotion1_budget_use)
            ? Number(budget?.promotion1_budget_use) + Number(useSums?.sum1 || 0)
            : Number(useSums?.sum1 || 0),
          promotion1_baht_ton: Number(budget?.promotion1_baht_ton || 0)
            ? Number(budget?.promotion1_baht_ton || 0)
            : (Number(useSums?.sum1 || 0) +
                Number(budget?.promotion1_budget_use || 0)) /
              Number(useSums?.sumTon1 || 1),
          //
          promotion2_name: caneName2,
          promotion2_area_contract: Number(budget?.promotion2_area_contract),
          promotion2_ton_contract: Number(budget?.promotion2_ton_contract),
          promotion2_money: Number(budget?.promotion2_money),
          promotion2_factor_inputs: Number(budget?.promotion2_factor_inputs),
          promotion2_factor_status: Number(budget?.promotion2_factor_status),
          promotion2_budget_total: Number(budget?.promotion2_budget_total),
          promotion2_budget_approved:
            Number(budget?.promotion2_budget_approved) ||
            Number(useSums?.sum2 || 0),
          promotion2_budget_use: Number(budget?.promotion2_budget_use || 0),
          promotion2_budget_totle: Number(budget?.promotion2_budget_use)
            ? Number(budget?.promotion2_budget_use) + Number(useSums?.sum2 || 0)
            : Number(useSums?.sum2 || 0),
          promotion2_baht_ton: Number(budget?.promotion2_baht_ton || 0)
            ? Number(budget?.promotion2_baht_ton || 0)
            : (Number(useSums?.sum2 || 0) +
                Number(budget?.promotion2_budget_use || 0)) /
              Number(useSums?.sumTon2 || 1),
          //
          promotion3_name: caneName3,
          promotion3_area_contract: Number(budget?.promotion3_area_contract),
          promotion3_ton_contract: Number(budget?.promotion3_ton_contract),
          promotion3_money: Number(budget?.promotion3_money),
          promotion3_factor_inputs: Number(budget?.promotion3_factor_inputs),
          promotion3_factor_status: Number(budget?.promotion3_factor_status),
          promotion3_budget_total: Number(budget?.promotion3_budget_total),
          promotion3_budget_approved:
            Number(budget?.promotion3_budget_approved) ||
            Number(useSums?.sum3 || 0),
          promotion3_budget_use: Number(budget?.promotion3_budget_use || 0),
          promotion3_budget_totle: Number(budget?.promotion3_budget_use)
            ? Number(budget?.promotion3_budget_use) + Number(useSums?.sum3 || 0)
            : Number(useSums?.sum3 || 0),
          promotion3_baht_ton: Number(budget?.promotion3_baht_ton || 0)
            ? Number(budget?.promotion3_baht_ton || 0)
            : (Number(useSums?.sum3 || 0) +
                Number(budget?.promotion3_budget_use || 0)) /
              Number(useSums?.sumTon3 || 1),
          //
          promotion4_name: caneName4,
          promotion4_area_contract: Number(budget?.promotion4_area_contract),
          promotion4_ton_contract: Number(budget?.promotion4_ton_contract),
          promotion4_money: Number(budget?.promotion4_money),
          promotion4_factor_inputs: Number(budget?.promotion4_factor_inputs),
          promotion4_factor_status: Number(budget?.promotion4_factor_status),
          promotion4_budget_total: Number(budget?.promotion4_budget_total),
          promotion4_budget_approved:
            Number(budget?.promotion4_budget_approved) ||
            Number(useSums?.sum4 || 0),
          promotion4_budget_use: Number(budget?.promotion4_budget_use || 0),
          promotion4_budget_totle: Number(budget?.promotion4_budget_use)
            ? Number(budget?.promotion4_budget_use) + Number(useSums?.sum4 || 0)
            : Number(useSums?.sum4 || 0),
          promotion4_baht_ton: Number(budget?.promotion4_baht_ton || 0)
            ? Number(budget?.promotion4_baht_ton || 0)
            : (Number(useSums?.sum4 || 0) +
                Number(budget?.promotion4_budget_use || 0)) /
              Number(useSums?.sumTon4 || 1),
          //
          promotion5_name: caneName5,
          promotion5_area_contract: Number(budget?.promotion5_area_contract),
          promotion5_ton_contract: Number(budget?.promotion5_ton_contract),
          promotion5_money: Number(budget?.promotion5_money),
          promotion5_factor_inputs: Number(budget?.promotion5_factor_inputs),
          promotion5_factor_status: Number(budget?.promotion5_factor_status),
          promotion5_budget_total: Number(budget?.promotion5_budget_total),
          promotion5_budget_approved:
            Number(budget?.promotion5_budget_approved) ||
            Number(useSums?.sum5 || 0),
          promotion5_budget_use: Number(budget?.promotion5_budget_use || 0),
          promotion5_budget_totle: Number(budget?.promotion5_budget_use)
            ? Number(budget?.promotion5_budget_use) + Number(useSums?.sum5 || 0)
            : Number(useSums?.sum5 || 0),
          promotion5_baht_ton: Number(budget?.promotion5_baht_ton || 0)
            ? Number(budget?.promotion5_baht_ton || 0)
            : (Number(useSums?.sum5 || 0) +
                Number(budget?.promotion5_budget_use || 0)) /
              Number(useSums?.sumTon5 || 1),
          //
          promotion6_name: caneName6,
          promotion6_area_contract: Number(budget?.promotion6_area_contract),
          promotion6_ton_contract: Number(budget?.promotion6_ton_contract),
          promotion6_money: Number(budget?.promotion6_money),
          promotion6_factor_inputs: Number(budget?.promotion6_factor_inputs),
          promotion6_budget_total: Number(budget?.promotion6_budget_total),
          promotion6_budget_approved:
            Number(budget?.promotion6_budget_approved) ||
            Number(useSums?.sum6 || 0),
          promotion6_budget_use: Number(budget?.promotion6_budget_use || 0),
          promotion6_budget_totle: Number(budget?.promotion6_budget_use)
            ? Number(budget?.promotion6_budget_use) + Number(useSums?.sum6 || 0)
            : Number(useSums?.sum6 || 0),
          promotion6_baht_ton:
            Number(budget?.promotion6_budget_use) + Number(useSums?.sum6 || 0)
              ? (Number(budget?.promotion6_budget_use || 0) +
                  Number(useSums?.sum6 || 0)) /
                (tonContractAll + addTonContractAll)
              : Number(budget?.promotion6_baht_ton || 0),
          //
          promotion7_name: caneName7,
          promotion7_area_contract: Number(budget?.promotion7_area_contract),
          promotion7_ton_contract: Number(budget?.promotion7_ton_contract),
          promotion7_money: Number(budget?.promotion7_money),
          promotion7_factor_inputs: Number(budget?.promotion7_factor_inputs),
          promotion7_budget_total: Number(budget?.promotion7_budget_total),
          promotion7_budget_approved:
            Number(budget?.promotion7_budget_approved) ||
            Number(useSums?.sum7 || 0),
          promotion7_budget_use: Number(budget?.promotion7_budget_use || 0),
          promotion7_budget_totle: Number(budget?.promotion7_budget_use)
            ? Number(budget?.promotion7_budget_use) + Number(useSums?.sum7 || 0)
            : Number(useSums?.sum7 || 0),
          promotion7_baht_ton:
            Number(budget?.promotion7_budget_use) + Number(useSums?.sum7 || 0)
              ? (Number(budget?.promotion7_budget_use || 0) +
                  Number(useSums?.sum7 || 0)) /
                (tonContractAll + addTonContractAll)
              : Number(budget?.promotion7_baht_ton || 0),
          //
          grade: budget?.budget_grade,
          quotaAddress: quota[0]?.QuotaAddress || quota[0]?.QuotaAddressNoMoo,
          quotaTel: quota[0]?.Tel,
          date_debt: budget?.debt_date,
          debt1_crop_due: Number(budget?.debt1_crop_due) || 0,
          deduct1_crop_due: Number(budget?.deduct1_crop_due) || 0,
          debt1_overdue_due: Number(budget?.debt1_overdue_due) || 0,
          project1_debt_crop_due: Number(budget?.project1_debt_crop_due) || 0,
          project1_deduct_crop_due:
            Number(budget?.project1_deduct_crop_due) || 0,
          project1_deduct_end_due: Number(budget?.project1_deduct_end_due) || 0,
          deduct1_total: Number(budget?.deduct1_total) || 0,
          deduct1_due_previous: Number(budget?.deduct1_due_previous) || 0,
          deduct1_due_last: Number(budget?.deduct1_due_last) || 0,
          debt2_crop_due: Number(budget?.debt2_crop_due) || 0,
          deduct2_crop_due: Number(budget?.deduct2_crop_due) || 0,
          debt2_overdue_due: Number(budget?.debt2_overdue_due) || 0,
          project2_debt_crop_due: Number(budget?.project2_debt_crop_due) || 0,
          project2_deduct_crop_due:
            Number(budget?.project2_deduct_crop_due) || 0,
          project2_deduct_end_due: Number(budget?.project2_deduct_end_due) || 0,
          deduct2_total: Number(budget?.deduct2_total) || 0,
          deduct2_due_previous: Number(budget?.deduct2_due_previous) || 0,
          deduct2_due_last: Number(budget?.deduct2_due_last) || 0,
          debt3_crop_due: Number(budget?.debt3_crop_due) || 0,
          deduct3_crop_due: Number(budget?.deduct3_crop_due) || 0,
          debt3_overdue_due: Number(budget?.debt3_overdue_due) || 0,
          project3_debt_crop_due: Number(budget?.project3_debt_crop_due) || 0,
          project3_deduct_crop_due:
            Number(budget?.project3_deduct_crop_due) || 0,
          project3_deduct_end_due: Number(budget?.project3_deduct_end_due) || 0,
          deduct3_total: Number(budget?.deduct3_total) || 0,
          deduct3_due_previous: Number(budget?.deduct3_due_previous) || 0,
          deduct3_due_last: Number(budget?.deduct3_due_last) || 0,
          debt4_crop_due: Number(budget?.debt4_crop_due) || 0,
          deduct4_crop_due: Number(budget?.deduct4_crop_due) || 0,
          debt4_overdue_due: Number(budget?.debt4_overdue_due) || 0,
          project4_debt_crop_due: Number(budget?.project4_debt_crop_due) || 0,
          project4_deduct_crop_due:
            Number(budget?.project4_deduct_crop_due) || 0,
          project4_deduct_end_due: Number(budget?.project4_deduct_end_due) || 0,
          deduct4_total: Number(budget?.deduct4_total) || 0,
          deduct4_due_previous: Number(budget?.deduct4_due_previous) || 0,
          deduct4_due_last: Number(budget?.deduct4_due_last) || 0,
          avg_baht_area: Number(budgetOne?.avg_baht_area) || 0,
          history1_ton_contract: Number(budget?.history1_ton_contract) || 0,
          history1_ton_real: Number(budget?.history1_ton_real) || 0,
          history1_ton_per: Number(budget?.history1_ton_per) || 0,
          history1_grad: budget?.history1_grad || '-',
          history1_money: Number(budget?.history1_money) || 0,
          history1_cane_ton: Number(budget?.history1_cane_ton) || 0,
          history1_canetype01: Number(budget?.history1_canetype01) || 0,
          history1_canetype02: Number(budget?.history1_canetype02) || 0,
          history1_canetype03: Number(budget?.history1_canetype03) || 0,
          history1_canetype04: Number(budget?.history1_canetype04) || 0,
          history1_canetype05: Number(budget?.history1_canetype05) || 0,
          history1_canetype06: Number(budget?.history1_canetype06) || 0,
          history2_ton_contract: Number(budget?.history2_ton_contract) || 0,
          history2_ton_real: Number(budget?.history2_ton_real) || 0,
          history2_ton_per: Number(budget?.history2_ton_per) || 0,
          history2_grad: budget?.history2_grad || '-',
          history2_money: Number(budget?.history2_money) || 0,
          history2_cane_ton: Number(budget?.history2_cane_ton) || 0,
          history2_canetype01: Number(budget?.history2_canetype01) || 0,
          history2_canetype02: Number(budget?.history2_canetype02) || 0,
          history2_canetype03: Number(budget?.history2_canetype03) || 0,
          history2_canetype04: Number(budget?.history2_canetype04) || 0,
          history2_canetype05: Number(budget?.history2_canetype05) || 0,
          history2_canetype06: Number(budget?.history2_canetype06) || 0,
          history3_ton_contract: Number(budget?.history3_ton_contract) || 0,
          history3_ton_real: Number(budget?.history3_ton_real) || 0,
          history3_ton_per: Number(budget?.history3_ton_per) || 0,
          history3_grad: budget?.history3_grad || '-',
          history3_money: Number(budget?.history3_money) || 0,
          history3_cane_ton: Number(budget?.history3_cane_ton) || 0,
          history3_canetype01: Number(budget?.history3_canetype01) || 0,
          history3_canetype02: Number(budget?.history3_canetype02) || 0,
          history3_canetype03: Number(budget?.history3_canetype03) || 0,
          history3_canetype04: Number(budget?.history3_canetype04) || 0,
          history3_canetype05: Number(budget?.history3_canetype05) || 0,
          history3_canetype06: Number(budget?.history3_canetype06) || 0,
          history4_ton_contract: Number(budget?.history4_ton_contract) || 0,
          history4_ton_real: Number(budget?.history4_ton_real) || 0,
          history4_ton_per: Number(budget?.history4_ton_per) || 0,
          history4_grad: budget?.history4_grad || '-',
          history4_money: Number(budget?.history4_money) || 0,
          history4_cane_ton: Number(budget?.history4_cane_ton) || 0,
          history4_canetype01: Number(budget?.history4_canetype01) || 0,
          history4_canetype02: Number(budget?.history4_canetype02) || 0,
          history4_canetype03: Number(budget?.history4_canetype03) || 0,
          history4_canetype04: Number(budget?.history4_canetype04) || 0,
          history4_canetype05: Number(budget?.history4_canetype05) || 0,
          history4_canetype06: Number(budget?.history4_canetype06) || 0,
          sumCurrent,
          cropCurrent: `${crop1}/${crop3}`,
          cropYears: `${crop1}`,
          cropNext1: `${crop3}/${crop4}`,
          cropNext2: `${crop4}/${crop5}`,
          cropBack1: `${cropOld1}/${crop1}`,
          cropBack2: `${cropOld2}/${cropOld1}`,
          cropBack3: `${cropOld3}/${cropOld2}`,
          cropBack4: `${cropOld4}/${cropOld3}`,
          cropBack5: `${cropOld5}/${cropOld4}`,
          securities: securitie || securities,
          guarantors,
          securitiesPrice,
          ownerShipSUM: sumOwnerShip,
          ownerShip: ownerShips || '',
          ownerShips1: ownerShips1 || '',
          pass: budget_pass,
          avgRai: AvgBahtRai,
          totalRai,
          caneType0: caneType0 || useSums?.sumTotal0 || 0,
          caneType1: caneType1 || useSums?.sumTotal1 || 0,
          caneType2: caneType2 || useSums?.sumTotal2 || 0,
          caneType3: caneType3 || useSums?.sumTotal3 || 0,
          caneType4: caneType4 || useSums?.sumTotal4 || 0,
          caneType5: caneType5 || useSums?.sumTotal5 || 0,
          cropDueNext: `${crop2}`,
          cropDueNext1: `${crop3}`,
          cropDueNext2: `${crop4}`,
          cropDueNext3: `${crop5}`,
          cropDueNext4: `${crop6}`,
          cropDueNext5: `${crop7}`,
          cropDueNext6: `${crop8}`,
          status: one,
          approve,
          position,
          cropEnd,
          totalYear: countYear || IsNull,
          avgYear,
          zoneName: `นาย${zoneName[0]?.FullName}` || null,
          str2,
          manager: `นาย${managerName}` || null,
          str1,
          histoRaiAll2:
            Number(budget?.history2_canetype01) +
            Number(budget?.history2_canetype02) +
            Number(budget?.history2_canetype03) +
            Number(budget?.history2_canetype04) +
            Number(budget?.history2_canetype05) +
            Number(budget?.history2_canetype06),
          histoContract2: budget?.history2_ton_contract,
          historyTonReal2: budget?.history2_ton_real,
          histoRaiAll3:
            Number(budget?.history3_canetype01) +
            Number(budget?.history3_canetype02) +
            Number(budget?.history3_canetype03) +
            Number(budget?.history3_canetype04) +
            Number(budget?.history3_canetype05) +
            Number(budget?.history3_canetype06),
          histoContract3: budget?.history3_ton_contract,
          historyTonReal3: budget?.history3_ton_real,
          histoRaiAll4:
            Number(budget?.history4_canetype01) +
            Number(budget?.history4_canetype02) +
            Number(budget?.history4_canetype03) +
            Number(budget?.history4_canetype04) +
            Number(budget?.history4_canetype05) +
            Number(budget?.history4_canetype06),
          histoContract4: budget?.history4_ton_contract,
          historyTonReal4: budget?.history4_ton_real,
          projectName: budget?.promotion7_project_type,
          projectscss: ScssProject || '',
          projectPrice: budget?.promotion7_budget_use,
          projectDoc: budget?.projectDoc,
          projectAmount: budget?.projectAmount,
          ProjectCapital: budget?.ProjectCapital,
          projectInterest: budget?.ProjectInterest,
          ProjectInspectionDate: DateInspection,
          contractYear1: budget?.ContractYear1 || null,
          dueYear1: budget?.Due1 || null,
          contractYear2: budget?.ContractYear2 || null,
          dueYear2: budget?.Due2 || null,
          contractYear3: budget?.ContractYear3 || null,
          dueYear3: budget?.Due3 || null,
          contractYear4: budget?.ContractYear4 || null,
          dueYear4: budget?.Due4 || null,
          contractYear5: budget?.ContractYear5 || null,
          dueYear5: budget?.Due5 || null,
          contractYear6: budget?.ContractYear6 || null,
          dueYear6: budget?.Due6 || null,
          loanCurrentBaht: textPrice,
          due1: 0,
          due1Text: due1Price || 'ศูนย์บาทถ้วน',
          due2: 0,
          due2Text: due2Price || 'ศูนย์บาทถ้วน',
          due3: 0,
          due3Text: due3Price || 'ศูนย์บาทถ้วน',
          due4: 0,
          due4Text: due4Price || 'ศูนย์บาทถ้วน',
          due5: 0,
          due5Text: due5Price || 'ศูนย์บาทถ้วน',
          due6: budget?.promotion7_budget_use,
          due6Text: due6Price || 'ศูนย์บาทถ้วน',
          due7: due7Price,
          due7Text: due7Price || 'ศูนย์บาทถ้วน',
          due8: due8Price,
          due8Text: due8Price || 'ศูนย์บาทถ้วน',
          DueNum: budget?.DueNum || null,
          DueRai: budget?.DueRai || null,
          DueTon: budget?.DueTon || null,
          dueTotalText: dueTotal || 'ศูนย์บาทถ้วน'
        });

        await queryRunner.release();
      } else {
        res.render('index', { farmer: '' });
        await queryRunner.release();
      }
    }
  }

  public async print1Budget(
    req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<void> {
    const { id, reqs, crop } = req.params;
    const queryRunnerMCSS = MssqlDataSource.createQueryRunner();
    const queryRunner = PostgresDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunnerMCSS.connect();

    const quota = await queryRunnerMCSS.manager.query(
      'SELECT * FROM [MCSS].[dbo].[vw_QuotaZone] WHERE QuotaCode =@0',
      [<number>(<unknown>id)]
    );
    const cropX = <number>(<unknown>crop) - 1;
    const cropYearX = `25${cropX}/${crop}`;
    const crops = await queryRunner.manager.query(
      'SELECT cropYear FROM budgets WHERE cropYear=@0 and quota =@1 and request_num =@2',
      [cropYearX, <number>(<unknown>id), reqs]
    );
    if (crops[0] === undefined) {
      res.render('index', {});
      await queryRunner.release();
    } else {
      const CropYears = crops[0].cropYear;

      const crop1 = CropYears.substring(2, 4);
      const crop2 = Number(crop1) + 0;
      const crop3 = Number(crop1) + 1;
      const crop4 = Number(crop1) + 2;
      const crop5 = Number(crop1) + 3;
      const crop6 = Number(crop1) + 4;
      const crop7 = Number(crop1) + 5;
      const crop8 = Number(crop1) + 6;
      const cropOld1 = Number(crop1) - 1;
      const cropOld2 = Number(crop1) - 2;
      const cropOld3 = Number(crop1) - 3;
      const cropOld4 = Number(crop1) - 4;
      const cropOld5 = Number(crop1) - 5;
      // const cropOld6 = Number(crop1) - 6;

      // เลือกประเภทอ้อยจากพื้นที่ GIS
      const crop01 = await queryRunner.manager.query(
        'SELECT * FROM [ps_prod].[dbo].[View_AreaGIS] WHERE Quota = @0',
        [<number>(<unknown>id)]
      );
      const sumCurrent: any[] = [];
      let caneType01 = 0;
      let caneType02 = 0;
      let caneType03 = 0;
      let caneType04 = 0;
      let caneType05 = 0;
      let caneType06 = 0;
      let caneType07 = 0;
      let caneType08 = 0;
      let caneType09 = 0;

      // for จัดกลุ่มประเภทอ้อยให้ตรงเอกสาร
      crop01.forEach((element: any) => {
        const cane1 = element.CaneType.endsWith('ปลายฝน');
        const cane2 = element.CaneType.endsWith('พื้นที่ใหม่');
        const cane3 = element.CaneType.endsWith('Model');
        const cane4 = element.CaneType.endsWith('รื้อตอ');
        const cane5 = element.CaneType.endsWith('ต้นฝน');
        const cane6 = element.CaneType.endsWith('ตอ1');
        const cane7 = element.CaneType.endsWith('ตอ2');
        const cane8 = element.CaneType.endsWith('ตอ3');
        // const cane9 = element.CaneType.endsWith('ตอ3+');

        if (cane1 === true) {
          caneType01 = element.AreaGis;
          // sumCurrent.push({ caneType01 });
        } else if (cane2 === true) {
          caneType02 = element.AreaGis;
          // sumCurrent.push({ caneType02 });
        } else if (cane3 === true) {
          caneType03 = element.AreaGis;
          // sumCurrent.push({ caneType03 });
        } else if (cane4 === true) {
          caneType04 = element.AreaGis;
          // sumCurrent.push({ caneType04 });
        } else if (cane5 === true) {
          caneType05 = element.AreaGis;
          // sumCurrent.push({ caneType05 });
        } else if (cane6 === true) {
          caneType06 = element.AreaGis;
          // sumCurrent.push({ caneType06 });
        } else if (cane7 === true) {
          caneType07 = element.AreaGis;
          // sumCurrent.push({ caneType07 });
        } else if (cane8 === true) {
          caneType08 = element.AreaGis;
          // sumCurrent.push({ caneType08 });
        } else {
          caneType09 = element.AreaGis;
          /// sumCurrent.push({ caneType09 });
        }
      });

      sumCurrent.push(
        caneType01 + caneType02 + caneType03, // ปลายฝน + พื้นที่ใหม่ + psmodel
        caneType04,
        caneType05,
        caneType06,
        caneType07,
        caneType08 + caneType09, // ตอ3++
        caneType01 +
          caneType02 +
          caneType03 +
          caneType04 +
          caneType05 +
          caneType06 +
          caneType07 +
          caneType08 +
          caneType09
      );

      const budgetOne = await PostgresDataSource.getRepository(
        Budgets
      ).findOneBy({
        quota: <number>(<unknown>id),
        request_num: 1,
        cropYear: cropYearX
      });
      let requestNum;
      if (<number>(<unknown>reqs) === 0) {
        requestNum = 1;
      } else {
        requestNum = <number>(<unknown>reqs);
      }

      const budget = await PostgresDataSource.getRepository(Budgets).findOneBy({
        quota: <number>(<unknown>id),
        request_num: requestNum,
        cropYear: cropYearX
      });

      let guarantor: any;
      let ownerShip: any;
      let ownerShip1: any;
      let ownerShip2: any;
      let ownerShip3: any;
      const guarantors = [];
      const ownerShips = [];
      let sumOwnerShip: any;

      // ประวัติหลักทรัพย์ค้ำประกัน
      const securities = await PostgresDataSource.manager.query(
        'SELECT * FROM budget_securities WHERE cropYear=@0 AND quota =@1 AND budgetId = @2 ORDER BY id ASC',
        [cropYearX, <number>(<unknown>id), Number(budget?.id)]
      );

      // ข้อมูลหลัก หลักทรัพย์ค้ำประกัน
      const securitie = await queryRunner.manager.query(
        'SELECT * FROM securities WHERE cropYear=@0 AND quota =@1 AND securitieType <> @2 ORDER BY id ASC',
        [cropYearX, <number>(<unknown>id), 'อื่น ๆ']
      );

      let securitiesHis: any;
      if (securities.length !== 0) {
        // มีในประวัติหลักทรัพย์
        securitiesHis = 'BudgetSecurities';
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < securities.length; i++) {
          if (securities[i]?.quotaGuarantor) {
            // eslint-disable-next-line no-await-in-loop
            guarantor = await MssqlDataSource.getRepository(Quotas).findOneBy({
              Code: <number>(<unknown>securities[i]?.quotaGuarantor)
            });
            guarantors.push(guarantor);
          }
        }
      } else {
        // มีในหลักทรัพย์หลัก
        securitiesHis = 'Securities';
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < securitie.length; i++) {
          if (securitie[i]?.quotaGuarantor) {
            // eslint-disable-next-line no-await-in-loop
            guarantor = await MssqlDataSource.getRepository(Quotas).findOneBy({
              Code: <number>(<unknown>securitie[i]?.quotaGuarantor)
            });

            guarantors.push(guarantor);
          }
        }
      }

      // eslint-disable-next-line prefer-const
      ownerShip = await PostgresDataSource.getRepository(`${securitiesHis}`)
        .createQueryBuilder('Securities')
        .select('ownershipName, ownerCardId, ownerAddress')
        .addSelect('SUM(appraisalPrice)', 'appraisalPrice')
        .where(
          `(Securities.ownerCardId IS NOT NULL AND Securities.ownerCardId != '') AND (Securities.quota = :quota)`,
          {
            quota: <number>(<unknown>id)
          }
        )
        .andWhere('Securities.cropYear = :crop', { crop: cropYearX })
        .groupBy('ownershipName, ownerCardId, ownerAddress')
        .getRawMany();

      // eslint-disable-next-line prefer-const
      ownerShip1 = await PostgresDataSource.getRepository(`${securitiesHis}`)
        .createQueryBuilder('Securities')
        .select('ownershipName1, ownerCardId1, ownerAddress1, appraisalPrice')
        .where(
          `(Securities.ownerCardId1 IS NOT NULL AND Securities.ownerCardId1 != '') AND (Securities.quota = :quota)`,
          {
            quota: <number>(<unknown>id)
          }
        )
        .andWhere('Securities.cropYear = :crop', { crop: cropYearX })
        .groupBy('ownershipName1, ownerCardId1, ownerAddress1, appraisalPrice')
        .getRawMany();

      // eslint-disable-next-line prefer-const
      ownerShip2 = await PostgresDataSource.getRepository(`${securitiesHis}`)
        .createQueryBuilder('Securities')
        .select('ownershipName2, ownerCardId2, ownerAddress2, appraisalPrice')
        .where(
          `(Securities.ownerCardId2 IS NOT NULL AND Securities.ownerCardId2 != '') AND (Securities.quota = :quota)`,
          {
            quota: <number>(<unknown>id)
          }
        )
        .andWhere('Securities.cropYear = :crop', { crop: cropYearX })
        .groupBy('ownershipName2, ownerCardId2, ownerAddress2, appraisalPrice')
        .getRawMany();

      // eslint-disable-next-line prefer-const
      ownerShip3 = await PostgresDataSource.getRepository(`${securitiesHis}`)
        .createQueryBuilder('Securities')
        .select('ownershipName3, ownerCardId3, ownerAddress3, appraisalPrice')
        .where(
          `(Securities.ownerCardId3 IS NOT NULL AND Securities.ownerCardId3 != '') AND (Securities.quota = :quota)`,
          {
            quota: <number>(<unknown>id)
          }
        )
        .andWhere('Securities.cropYear = :crop', { crop: cropYearX })
        .groupBy('ownershipName3, ownerCardId3, ownerAddress3, appraisalPrice')
        .getRawMany();

      let ownerShip0Price = '';
      let ownerShip01Price = '';
      let ownerShip02Price = '';
      let ownerShip03Price = '';
      let ownerShip1Price = '';
      let ownerShip2Price = '';
      let ownerShip3Price = '';
      let securitiesPrice = '';

      ownerShips.push(ownerShip, ownerShip1, ownerShip2, ownerShip3);

      if (ownerShips[0][0]) {
        ownerShip0Price =
          ThaiBaht(Number(ownerShips[0][0].appraisalPrice)) || '';
      }

      if (ownerShips[0][1]) {
        ownerShip01Price =
          ThaiBaht(Number(ownerShips[0][1].appraisalPrice)) || '';
      }

      if (ownerShips[0][2]) {
        ownerShip02Price =
          ThaiBaht(Number(ownerShips[0][2].appraisalPrice)) || '';
      }

      if (ownerShips[0][3]) {
        ownerShip03Price =
          ThaiBaht(Number(ownerShips[0][3].appraisalPrice)) || '';
      }

      if (ownerShips[1][0]) {
        ownerShip1Price =
          ThaiBaht(Number(ownerShips[1][0].appraisalPrice)) || '';
      }
      if (ownerShips[2][0]) {
        ownerShip2Price =
          ThaiBaht(Number(ownerShips[2][0].appraisalPrice)) || '';
      }
      if (ownerShips[3][0]) {
        ownerShip3Price =
          ThaiBaht(Number(ownerShips[3][0].appraisalPrice)) || '';
      }
      if (securities[0]) {
        securitiesPrice = ThaiBaht(Number(securities[0].appraisalPrice)) || '';
      }

      // eslint-disable-next-line prefer-const
      sumOwnerShip =
        ownerShips[0].length +
        ownerShips[1].length +
        ownerShips[2].length +
        ownerShips[3].length;

      const useSums = await PostgresDataSource.getRepository(Budgets)
        .createQueryBuilder('Budgets')
        .select('SUM(Budgets.promotion0_budget_use)', 'sum0')
        .addSelect('SUM(Budgets.promotion1_budget_use)', 'sum1')
        .addSelect('SUM(Budgets.promotion2_budget_use)', 'sum2')
        .addSelect('SUM(Budgets.promotion3_budget_use)', 'sum3')
        .addSelect('SUM(Budgets.promotion4_budget_use)', 'sum4')
        .addSelect('SUM(Budgets.promotion5_budget_use)', 'sum5')
        .addSelect('SUM(Budgets.promotion6_budget_use)', 'sum6')
        .addSelect('SUM(Budgets.promotion7_budget_use)', 'sum7')
        .addSelect('SUM(Budgets.promotion0_ton_contract)', 'sumTon0')
        .addSelect('SUM(Budgets.promotion1_ton_contract)', 'sumTon1')
        .addSelect('SUM(Budgets.promotion2_ton_contract)', 'sumTon2')
        .addSelect('SUM(Budgets.promotion3_ton_contract)', 'sumTon3')
        .addSelect('SUM(Budgets.promotion4_ton_contract)', 'sumTon4')
        .addSelect('SUM(Budgets.promotion5_ton_contract)', 'sumTon5')
        .addSelect('SUM(Budgets.promotion0_area_contract)', 'sumArea0')
        .addSelect('SUM(Budgets.promotion1_area_contract)', 'sumArea1')
        .addSelect('SUM(Budgets.promotion2_area_contract)', 'sumArea2')
        .addSelect('SUM(Budgets.promotion3_area_contract)', 'sumArea3')
        .addSelect('SUM(Budgets.promotion4_area_contract)', 'sumArea4')
        .addSelect('SUM(Budgets.promotion5_area_contract)', 'sumArea5')
        .addSelect(
          'SUM(Budgets.promotion0_budget_total*Budgets.promotion0_area_contract)',
          'sumTotal0'
        )
        .addSelect(
          'SUM(Budgets.promotion1_budget_total*Budgets.promotion1_area_contract)',
          'sumTotal1'
        )
        .addSelect(
          'SUM(Budgets.promotion2_budget_total*Budgets.promotion2_area_contract)',
          'sumTotal2'
        )
        .addSelect(
          'SUM(Budgets.promotion3_budget_total*Budgets.promotion3_area_contract)',
          'sumTotal3'
        )
        .addSelect(
          'SUM(Budgets.promotion4_budget_total*Budgets.promotion4_area_contract)',
          'sumTotal4'
        )
        .addSelect(
          'SUM(Budgets.promotion5_budget_total*Budgets.promotion5_area_contract)',
          'sumTotal5'
        )
        .addSelect('SUM(Budgets.promotion0_baht_ton)', 'sumBahtTon0')
        .addSelect('SUM(Budgets.promotion1_baht_ton)', 'sumBahtTon1')
        .addSelect('SUM(Budgets.promotion2_baht_ton)', 'sumBahtTon2')
        .addSelect('SUM(Budgets.promotion3_baht_ton)', 'sumBahtTon3')
        .addSelect('SUM(Budgets.promotion4_baht_ton)', 'sumBahtTon4')
        .addSelect('SUM(Budgets.promotion5_baht_ton)', 'sumBahtTon5')
        .addSelect('SUM(Budgets.promotion6_baht_ton)', 'sumBahtTon6')
        .addSelect('SUM(Budgets.promotion7_baht_ton)', 'sumBahtTon7')
        .addSelect('SUM(increaseDecreaseContract)', 'incDecContract')
        .where('Budgets.quota = :id', { id: <number>(<unknown>id) })
        .andWhere('Budgets.budget_prove = :prove', { prove: '01' })
        .andWhere('Budgets.request_num < :num', {
          num: <number>(<unknown>reqs)
        })
        .andWhere('Budgets.cropYear = :crop', { crop: cropYearX })
        .andWhere('Budgets.deletedAt IS NULL')
        // .groupBy("user.id")
        // .getRawMany();
        .getRawOne();

      const SumArea =
        Number(useSums?.sumArea0 || 0) +
        Number(useSums?.sumArea1 || 0) +
        Number(useSums?.sumArea2 || 0) +
        Number(useSums?.sumArea3 || 0) +
        Number(useSums?.sumArea4 || 0) +
        Number(useSums?.sumArea5 || 0);

      const securitieSum = await PostgresDataSource.getRepository(
        `${securitiesHis}`
      )
        .createQueryBuilder('Securities')
        .select('SUM(Securities.appraisalPrice)', 'sum')
        .where('Securities.quota = :id', { id: <number>(<unknown>id) })
        .andWhere('Securities.securitieType <> :person', {
          person: 'ผู้ค้ำประกันแบบมีเลขโควตา'
        })
        .andWhere('Securities.securitieType <> :other', {
          other: 'ผู้ค้ำประกันแบบบุคคลอื่น'
        })
        .andWhere('Securities.cropYear = :crop', { crop: cropYearX })
        .getRawOne();

      const securitiePerson = await PostgresDataSource.getRepository(
        `${securitiesHis}`
      )
        .createQueryBuilder('Securities')
        .select('SUM(Securities.appraisalPrice)', 'sum')
        .where('Securities.quota = :id', { id: <number>(<unknown>id) })
        .andWhere('Securities.securitieType = :person', {
          person: 'ผู้ค้ำประกันแบบมีเลขโควตา'
        })
        .andWhere('Securities.cropYear = :crop', { crop: cropYearX })
        .getRawOne();

      const securitieOther = await PostgresDataSource.getRepository(
        `${securitiesHis}`
      )
        .createQueryBuilder('Securities')
        .select('SUM(Securities.appraisalPrice)', 'sum')
        .where('Securities.quota = :id', { id: <number>(<unknown>id) })
        .andWhere('Securities.securitieType = :other', {
          other: 'ผู้ค้ำประกันแบบบุคคลอื่น'
        })
        .andWhere('Securities.cropYear = :crop', { crop: cropYearX })
        .getRawOne();

      let tonContractAll: number;
      let addTonContractAll: number;
      if (Number(budget?.request_num) > 1) {
        tonContractAll =
          Number(useSums.sumTon0 || 0) +
          Number(useSums.sumTon1 || 0) +
          Number(useSums.sumTon2 || 0) +
          Number(useSums.sumTon3 || 0) +
          Number(useSums.sumTon4 || 0) +
          Number(useSums.sumTon5 || 0) +
          Number(useSums.incDecContract || 0);
        addTonContractAll =
          Number(budget?.promotion0_ton_contract || 0) +
          Number(budget?.promotion1_ton_contract || 0) +
          Number(budget?.promotion2_ton_contract || 0) +
          Number(budget?.promotion3_ton_contract || 0) +
          Number(budget?.promotion4_ton_contract || 0) +
          Number(budget?.promotion5_ton_contract || 0) +
          Number(budget?.increaseDecreaseContract || 0);
      } else {
        tonContractAll =
          Number(budget?.promotion0_ton_contract || 0) +
          Number(budget?.promotion1_ton_contract || 0) +
          Number(budget?.promotion2_ton_contract || 0) +
          Number(budget?.promotion3_ton_contract || 0) +
          Number(budget?.promotion4_ton_contract || 0) +
          Number(budget?.promotion5_ton_contract || 0);
        addTonContractAll = Number(budget?.increaseDecreaseContract || 0);
      }

      if (!budget || !quota || !securities) {
        res.locals = res.json({ messegs: 'No budget stated' });
        responsehandler.send(res);
        await queryRunner.release();
      }

      // let title: string;
      if (quota) {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        let budget_pass1 = 0;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        let budget_pass2 = 0;

        let budget0 = 0;
        let budget1 = 0;
        let budget2 = 0;
        let budget3 = 0;
        let budget4 = 0;
        let budget5 = 0;

        if (Number(budget?.promotion0_budget_use) > 0) {
          budget0 =
            Number(budget?.promotion0_budget_total) *
            Number(budget?.promotion0_area_contract);
        }
        if (Number(budget?.promotion1_budget_use) > 0) {
          budget1 =
            Number(budget?.promotion1_budget_total) *
            Number(budget?.promotion1_area_contract);
        }
        if (Number(budget?.promotion2_budget_use) > 0) {
          budget2 =
            Number(budget?.promotion2_budget_total) *
            Number(budget?.promotion2_area_contract);
        }
        if (Number(budget?.promotion3_budget_use) > 0) {
          budget3 =
            Number(budget?.promotion3_budget_total) *
            Number(budget?.promotion3_area_contract);
        }
        if (Number(budget?.promotion4_budget_use) > 0) {
          budget4 =
            Number(budget?.promotion4_budget_total) *
            Number(budget?.promotion4_area_contract);
        }
        if (Number(budget?.promotion5_budget_use) > 0) {
          budget5 =
            Number(budget?.promotion5_budget_total) *
            Number(budget?.promotion5_area_contract);
        }
        budget_pass1 =
          budget0 +
          budget1 +
          budget2 +
          budget3 +
          budget4 +
          budget5 +
          Number(useSums?.sumTotal0 || 0) +
          Number(useSums?.sumTotal1 || 0) +
          Number(useSums?.sumTotal2 || 0) +
          Number(useSums?.sumTotal3 || 0) +
          Number(useSums?.sumTotal4 || 0) +
          Number(useSums?.sumTotal5 || 0);

        // eslint-disable-next-line @typescript-eslint/naming-convention
        budget_pass2 =
          Number(budget?.promotion0_budget_use) +
          Number(budget?.promotion1_budget_use) +
          Number(budget?.promotion2_budget_use) +
          Number(budget?.promotion3_budget_use) +
          Number(budget?.promotion4_budget_use) +
          Number(budget?.promotion5_budget_use) +
          Number(budget?.promotion6_budget_use) +
          Number(budget?.promotion7_budget_use) +
          Number(useSums?.sum0 || 0) +
          Number(useSums?.sum1 || 0) +
          Number(useSums?.sum2 || 0) +
          Number(useSums?.sum3 || 0) +
          Number(useSums?.sum4 || 0) +
          Number(useSums?.sum5 || 0) +
          Number(useSums?.sum6 || 0) +
          Number(useSums?.sum7 || 0);

        // eslint-disable-next-line @typescript-eslint/naming-convention
        let budget_pass: string;
        if (budget_pass1 - budget_pass2 >= 0) {
          budget_pass = 'ไม่เกินเกณฑ์';
        } else {
          budget_pass = 'เกินเกณฑ์';
        }

        const avgBahtRai =
          Number(
            Number(budget?.promotion0_budget_use)
              ? Number(budget?.promotion0_budget_use) +
                  Number(useSums?.sum0 || 0)
              : Number(useSums?.sum0 || 0)
          ) +
          Number(
            Number(budget?.promotion1_budget_use)
              ? Number(budget?.promotion1_budget_use) +
                  Number(useSums?.sum1 || 0)
              : Number(useSums?.sum1 || 0)
          ) +
          Number(
            Number(budget?.promotion2_budget_use)
              ? Number(budget?.promotion2_budget_use) +
                  Number(useSums?.sum2 || 0)
              : Number(useSums?.sum2 || 0)
          ) +
          Number(
            Number(budget?.promotion3_budget_use)
              ? Number(budget?.promotion3_budget_use) +
                  Number(useSums?.sum3 || 0)
              : Number(useSums?.sum3 || 0)
          ) +
          Number(
            Number(budget?.promotion4_budget_use)
              ? Number(budget?.promotion4_budget_use) +
                  Number(useSums?.sum4 || 0)
              : Number(useSums?.sum4 || 0)
          ) +
          Number(
            Number(budget?.promotion5_budget_use)
              ? Number(budget?.promotion5_budget_use) +
                  Number(useSums?.sum5 || 0)
              : Number(useSums?.sum5 || 0)
          ) +
          Number(
            Number(budget?.promotion6_budget_use)
              ? Number(budget?.promotion6_budget_use) +
                  Number(useSums?.sum6 || 0)
              : Number(useSums?.sum6 || 0)
          ) +
          Number(
            Number(budget?.promotion7_budget_use)
              ? Number(budget?.promotion7_budget_use) +
                  Number(useSums?.sum7 || 0)
              : Number(useSums?.sum7 || 0)
          );

        const totalRai =
          Number(budget?.promotion0_area_contract || 0) +
          Number(budget?.promotion1_area_contract || 0) +
          Number(budget?.promotion2_area_contract || 0) +
          Number(budget?.promotion3_area_contract || 0) +
          Number(budget?.promotion4_area_contract || 0) +
          Number(budget?.promotion5_area_contract || 0) +
          Number(SumArea || 0);

        const AvgBahtRai = avgBahtRai / totalRai;

        const caneType0 =
          Number(budget?.promotion0_area_contract) *
          (Number(budget?.promotion0_money) +
            Number(budget?.promotion0_factor_inputs));
        const caneType1 =
          Number(budget?.promotion1_area_contract) *
          (Number(budget?.promotion1_money) +
            Number(budget?.promotion1_factor_inputs));
        const caneType2 =
          Number(budget?.promotion2_area_contract) *
          (Number(budget?.promotion2_money) +
            Number(budget?.promotion2_factor_inputs));
        const caneType3 =
          Number(budget?.promotion3_area_contract) *
          (Number(budget?.promotion3_money) +
            Number(budget?.promotion3_factor_inputs));
        const caneType4 =
          Number(budget?.promotion4_area_contract) *
          (Number(budget?.promotion4_money) +
            Number(budget?.promotion4_factor_inputs));
        const caneType5 =
          Number(budget?.promotion5_area_contract) *
          (Number(budget?.promotion5_money) +
            Number(budget?.promotion5_factor_inputs));

        let approve: string = '';
        let position: string = '';
        let one: boolean = false;
        let cropEnd: number = 0;
        let countYear: number = 0;
        let avgYear: number = 0;

        if (Number(budget?.Due1) > 1) {
          countYear = 1;
          avgYear = Number(budget?.ContractYear1) / countYear;
          cropEnd = crop3;
        }
        if (Number(budget?.Due1) > 1 && Number(budget?.Due2) > 1) {
          countYear = 2;
          avgYear =
            (Number(budget?.ContractYear1) + Number(budget?.ContractYear2)) /
            countYear;
          cropEnd = crop4;
        }
        if (
          Number(budget?.Due1) > 1 &&
          Number(budget?.Due2) > 1 &&
          Number(budget?.Due3) > 1
        ) {
          countYear = 3;
          avgYear =
            (Number(budget?.ContractYear1) +
              Number(budget?.ContractYear2) +
              Number(budget?.ContractYear3)) /
            countYear;
          cropEnd = crop5;
        }
        if (
          Number(budget?.Due1) > 1 &&
          Number(budget?.Due2) > 1 &&
          Number(budget?.Due3) > 1 &&
          Number(budget?.Due4) > 1
        ) {
          countYear = 4;
          avgYear =
            (Number(budget?.ContractYear1) +
              Number(budget?.ContractYear2) +
              Number(budget?.ContractYear3) +
              Number(budget?.ContractYear4)) /
            countYear;
          cropEnd = crop6;
        }
        if (
          Number(budget?.Due1) > 1 &&
          Number(budget?.Due2) > 1 &&
          Number(budget?.Due3) > 1 &&
          Number(budget?.Due4) > 1 &&
          Number(budget?.Due5) > 1
        ) {
          countYear = 5;
          avgYear =
            (Number(budget?.ContractYear1) +
              Number(budget?.ContractYear2) +
              Number(budget?.ContractYear3) +
              Number(budget?.ContractYear4) +
              Number(budget?.ContractYear5)) /
            countYear;
          cropEnd = crop7;
        }

        if (
          Number(budget?.Due1) > 1 &&
          Number(budget?.Due2) > 1 &&
          Number(budget?.Due3) > 1 &&
          Number(budget?.Due4) > 1 &&
          Number(budget?.Due5) > 1 &&
          Number(budget?.Due6) > 1
        ) {
          countYear = 6;
          avgYear =
            (Number(budget?.ContractYear1) +
              Number(budget?.ContractYear2) +
              Number(budget?.ContractYear3) +
              Number(budget?.ContractYear4) +
              Number(budget?.ContractYear5) +
              Number(budget?.ContractYear6)) /
            countYear;
          cropEnd = crop8;
        }

        if (Number(budget?.promotion7_budget_use) < 2000001 && countYear < 4) {
          approve = 'นายเอกรัตน์ เตชธเวช';
          position = 'ผู้ช่วยกรรมการผู้จัดการสายงาจัดหาวัตถุดิบ';
          one = false;
        } else {
          approve = 'นายชาญ ฉันท์วิภว';
          position = 'กรรมการผู้จัดการ';
          one = true;
        }

        const zoneName = await queryRunner.manager.query(
          'SELECT * FROM [MCSS].[dbo].[vw_UserByZone] WHERE [Role] = @0 AND ZoneCode = @1',
          ['หัวหน้าเขต', budget?.zone]
        );

        const managers = await queryRunner.manager.query(
          'SELECT * FROM [MCSS].[dbo].[vw_UserByZone] WHERE [Role] = @0 AND ZoneCode = @1',
          ['รองผู้จัดการอ้อย', budget?.zone]
        );

        const managerName: string = managers[0].FullName.substring(3, 50);
        let str1: string = '';
        let str2: string = '';

        if (managerName === 'สันติ น้อยธรรมราช') {
          str1 = 'รักษาการผู้จัดการฝ่ายส่งเสริมและจัดหาอ้อย';
        } else {
          str1 = 'รองผู้จัดการฝ่ายส่งเสริมและจัดหาอ้อย';
        }

        if (zoneName[0].FullName === 'เอกชัย สถาพรวรกุล') {
          str2 = 'อาวุโส 11';
        }

        const textPrice = ThaiBaht(Number(budget?.promotion7_budget_use));
        const due1Price = ThaiBaht(Number(0));
        const due2Price = ThaiBaht(Number(0));
        const due3Price = ThaiBaht(Number(0));
        const due4Price = ThaiBaht(Number(0));
        const due5Price = ThaiBaht(Number(0));
        const due6Price = ThaiBaht(Number(budget?.promotion7_budget_use));
        const due7Price = ThaiBaht(Number(0));
        const due8Price = ThaiBaht(Number(0));

        const dueTotal = ThaiBaht(Number(budget?.promotion7_budget_use));

        // eslint-disable-next-line no-console
        // console.log(dueTotal);

        // const projects = await PostgresDataSource.getRepository(Projects)
        //   .createQueryBuilder('projects')
        //   .select('project_scss')
        //   .where('projects.project_scss = :scss', {
        //     scss: budget?.promotion7_project_type
        //   })
        //   .getRawOne();

        // eslint-disable-next-line no-console
        // console.log('kk', budget?.promotion7_project_type?.toString());
        let projectScss: any;
        let ScssProject = '';

        if (budget?.promotion7_project_type) {
          projectScss = await queryRunner.manager.query(
            'SELECT * FROM projects WHERE project_name = @0',
            [budget?.promotion7_project_type?.toString()]
          );
          ScssProject = projectScss[0].project_scss;
        }

        const toDay: string = budget?.apporv_date || dayTH; // แยกวันที่ โดยช่วงว่าง
        res.render('print1', {
          codeId: budget?.id,
          prints: budget?.printStatus2,
          crop: budget?.cropYear,
          subzone: quota[0]?.SurveyUserCode,
          zoneLocal: quota[0]?.ZoneName.split(' '),
          quota: quota[0]?.QuotaCode,
          idcard: quota[0]?.IDCard,
          todate: budget?.apporv_date || dayTH,
          arrayToDate: toDay.split(' '),
          BudgetDateOne: budgetOne?.apporv_date,
          BudgetContact: tonContractAll,
          todebt: budget?.debt_date || dayTH,
          owerNum: guarantors.length,
          securitieSum: securitieSum.sum || 0,
          securitiePerson: securitiePerson.sum + securitieOther.sum || 0,
          fullName: quota[0]?.QuotaName || '',
          requestNum: Number(budget?.request_num),
          tonContract: tonContractAll,
          addTonContract: addTonContractAll,
          totalTon: tonContractAll + addTonContractAll,
          incDecCon: Number(budget?.increaseDecreaseContract || 0),
          AllRai: totalRai,
          AllBahtTon:
            Number(budget?.promotion0_budget_total || 0) +
            Number(budget?.promotion1_budget_total || 0) +
            Number(budget?.promotion2_budget_total || 0) +
            Number(budget?.promotion3_budget_total || 0) +
            Number(budget?.promotion4_budget_total || 0) +
            Number(budget?.promotion5_budget_total || 0) +
            Number(budget?.promotion6_budget_total || 0) +
            Number(budget?.promotion7_budget_total || 0),
          //
          promotion0_name: caneName0,
          promotion0_area_contract: budget?.promotion0_area_contract || 0,
          promotion0_ton_contract: budget?.promotion0_ton_contract || 0,
          promotion0_money: Number(budget?.promotion0_money || 0),
          promotion0_factor_inputs: Number(
            budget?.promotion0_factor_inputs || 0
          ),
          promotion0_factor_status: Number(
            budget?.promotion0_factor_status || 0
          ),
          promotion0_budget_total: Number(budget?.promotion0_budget_total || 0),
          promotion0_budget_approved:
            Number(budget?.promotion0_budget_approved) ||
            Number(useSums?.sum0 || 0),
          promotion0_budget_use: Number(budget?.promotion0_budget_use || 0),
          promotion0_budget_totle: Number(budget?.promotion0_budget_use || 0)
            ? Number(budget?.promotion0_budget_use) + Number(useSums?.sum0 || 0)
            : Number(useSums?.sum0 || 0),
          promotion0_baht_ton: Number(budget?.promotion0_baht_ton)
            ? Number(budget?.promotion0_baht_ton || 0)
            : (Number(useSums?.sum0 || 0) +
                Number(budget?.promotion0_budget_use || 0)) /
              Number(useSums?.sumTon0 || 1),
          //
          promotion1_name: caneName1,
          promotion1_area_contract: budget?.promotion1_area_contract || 0,
          promotion1_ton_contract: budget?.promotion1_ton_contract || 0,
          promotion1_money: Number(budget?.promotion1_money || 0),
          promotion1_factor_inputs: Number(budget?.promotion1_factor_inputs),
          promotion1_factor_status: Number(budget?.promotion1_factor_status),
          promotion1_budget_total: Number(budget?.promotion1_budget_total),
          promotion1_budget_approved:
            Number(budget?.promotion1_budget_approved) ||
            Number(useSums?.sum1 || 0),
          promotion1_budget_use: Number(budget?.promotion1_budget_use || 0),
          promotion1_budget_totle: Number(budget?.promotion1_budget_use)
            ? Number(budget?.promotion1_budget_use) + Number(useSums?.sum1 || 0)
            : Number(useSums?.sum1 || 0),
          promotion1_baht_ton: Number(budget?.promotion1_baht_ton || 0)
            ? Number(budget?.promotion1_baht_ton || 0)
            : (Number(useSums?.sum1 || 0) +
                Number(budget?.promotion1_budget_use || 0)) /
              Number(useSums?.sumTon1 || 1),
          //
          promotion2_name: caneName2,
          promotion2_area_contract: Number(budget?.promotion2_area_contract),
          promotion2_ton_contract: Number(budget?.promotion2_ton_contract),
          promotion2_money: Number(budget?.promotion2_money),
          promotion2_factor_inputs: Number(budget?.promotion2_factor_inputs),
          promotion2_factor_status: Number(budget?.promotion2_factor_status),
          promotion2_budget_total: Number(budget?.promotion2_budget_total),
          promotion2_budget_approved:
            Number(budget?.promotion2_budget_approved) ||
            Number(useSums?.sum2 || 0),
          promotion2_budget_use: Number(budget?.promotion2_budget_use || 0),
          promotion2_budget_totle: Number(budget?.promotion2_budget_use)
            ? Number(budget?.promotion2_budget_use) + Number(useSums?.sum2 || 0)
            : Number(useSums?.sum2 || 0),
          promotion2_baht_ton: Number(budget?.promotion2_baht_ton || 0)
            ? Number(budget?.promotion2_baht_ton || 0)
            : (Number(useSums?.sum2 || 0) +
                Number(budget?.promotion2_budget_use || 0)) /
              Number(useSums?.sumTon2 || 1),
          //
          promotion3_name: caneName3,
          promotion3_area_contract: Number(budget?.promotion3_area_contract),
          promotion3_ton_contract: Number(budget?.promotion3_ton_contract),
          promotion3_money: Number(budget?.promotion3_money),
          promotion3_factor_inputs: Number(budget?.promotion3_factor_inputs),
          promotion3_factor_status: Number(budget?.promotion3_factor_status),
          promotion3_budget_total: Number(budget?.promotion3_budget_total),
          promotion3_budget_approved:
            Number(budget?.promotion3_budget_approved) ||
            Number(useSums?.sum3 || 0),
          promotion3_budget_use: Number(budget?.promotion3_budget_use || 0),
          promotion3_budget_totle: Number(budget?.promotion3_budget_use)
            ? Number(budget?.promotion3_budget_use) + Number(useSums?.sum3 || 0)
            : Number(useSums?.sum3 || 0),
          promotion3_baht_ton: Number(budget?.promotion3_baht_ton || 0)
            ? Number(budget?.promotion3_baht_ton || 0)
            : (Number(useSums?.sum3 || 0) +
                Number(budget?.promotion3_budget_use || 0)) /
              Number(useSums?.sumTon3 || 1),
          //
          promotion4_name: caneName4,
          promotion4_area_contract: Number(budget?.promotion4_area_contract),
          promotion4_ton_contract: Number(budget?.promotion4_ton_contract),
          promotion4_money: Number(budget?.promotion4_money),
          promotion4_factor_inputs: Number(budget?.promotion4_factor_inputs),
          promotion4_factor_status: Number(budget?.promotion4_factor_status),
          promotion4_budget_total: Number(budget?.promotion4_budget_total),
          promotion4_budget_approved:
            Number(budget?.promotion4_budget_approved) ||
            Number(useSums?.sum4 || 0),
          promotion4_budget_use: Number(budget?.promotion4_budget_use || 0),
          promotion4_budget_totle: Number(budget?.promotion4_budget_use)
            ? Number(budget?.promotion4_budget_use) + Number(useSums?.sum4 || 0)
            : Number(useSums?.sum4 || 0),
          promotion4_baht_ton: Number(budget?.promotion4_baht_ton || 0)
            ? Number(budget?.promotion4_baht_ton || 0)
            : (Number(useSums?.sum4 || 0) +
                Number(budget?.promotion4_budget_use || 0)) /
              Number(useSums?.sumTon4 || 1),
          //
          promotion5_name: caneName5,
          promotion5_area_contract: Number(budget?.promotion5_area_contract),
          promotion5_ton_contract: Number(budget?.promotion5_ton_contract),
          promotion5_money: Number(budget?.promotion5_money),
          promotion5_factor_inputs: Number(budget?.promotion5_factor_inputs),
          promotion5_factor_status: Number(budget?.promotion5_factor_status),
          promotion5_budget_total: Number(budget?.promotion5_budget_total),
          promotion5_budget_approved:
            Number(budget?.promotion5_budget_approved) ||
            Number(useSums?.sum5 || 0),
          promotion5_budget_use: Number(budget?.promotion5_budget_use || 0),
          promotion5_budget_totle: Number(budget?.promotion5_budget_use)
            ? Number(budget?.promotion5_budget_use) + Number(useSums?.sum5 || 0)
            : Number(useSums?.sum5 || 0),
          promotion5_baht_ton: Number(budget?.promotion5_baht_ton || 0)
            ? Number(budget?.promotion5_baht_ton || 0)
            : (Number(useSums?.sum5 || 0) +
                Number(budget?.promotion5_budget_use || 0)) /
              Number(useSums?.sumTon5 || 1),
          //
          promotion6_name: caneName6,
          promotion6_area_contract: Number(budget?.promotion6_area_contract),
          promotion6_ton_contract: Number(budget?.promotion6_ton_contract),
          promotion6_money: Number(budget?.promotion6_money),
          promotion6_factor_inputs: Number(budget?.promotion6_factor_inputs),
          promotion6_budget_total: Number(budget?.promotion6_budget_total),
          promotion6_budget_approved:
            Number(budget?.promotion6_budget_approved) ||
            Number(useSums?.sum6 || 0),
          promotion6_budget_use: Number(budget?.promotion6_budget_use || 0),
          promotion6_budget_totle: Number(budget?.promotion6_budget_use)
            ? Number(budget?.promotion6_budget_use) + Number(useSums?.sum6 || 0)
            : Number(useSums?.sum6 || 0),
          promotion6_baht_ton:
            Number(budget?.promotion6_budget_use) + Number(useSums?.sum6 || 0)
              ? (Number(budget?.promotion6_budget_use || 0) +
                  Number(useSums?.sum6 || 0)) /
                (tonContractAll + addTonContractAll)
              : Number(budget?.promotion6_baht_ton || 0),
          //
          promotion7_name: caneName7,
          promotion7_area_contract: Number(budget?.promotion7_area_contract),
          promotion7_ton_contract: Number(budget?.promotion7_ton_contract),
          promotion7_money: Number(budget?.promotion7_money),
          promotion7_factor_inputs: Number(budget?.promotion7_factor_inputs),
          promotion7_budget_total: Number(budget?.promotion7_budget_total),
          promotion7_budget_approved:
            Number(budget?.promotion7_budget_approved) ||
            Number(useSums?.sum7 || 0),
          promotion7_budget_use: Number(budget?.promotion7_budget_use || 0),
          promotion7_budget_totle: Number(budget?.promotion7_budget_use)
            ? Number(budget?.promotion7_budget_use) + Number(useSums?.sum7 || 0)
            : Number(useSums?.sum7 || 0),
          promotion7_baht_ton:
            Number(budget?.promotion7_budget_use) + Number(useSums?.sum7 || 0)
              ? (Number(budget?.promotion7_budget_use || 0) +
                  Number(useSums?.sum7 || 0)) /
                (tonContractAll + addTonContractAll)
              : Number(budget?.promotion7_baht_ton || 0),
          //
          grade: budget?.budget_grade,
          quotaAddress: quota[0]?.QuotaAddress || quota[0]?.QuotaAddressNoMoo,
          quotaTel: quota[0]?.Tel,
          date_debt: budget?.debt_date,
          debt1_crop_due: Number(budget?.debt1_crop_due) || 0,
          deduct1_crop_due: Number(budget?.deduct1_crop_due) || 0,
          debt1_overdue_due: Number(budget?.debt1_overdue_due) || 0,
          project1_debt_crop_due: Number(budget?.project1_debt_crop_due) || 0,
          project1_deduct_crop_due:
            Number(budget?.project1_deduct_crop_due) || 0,
          project1_deduct_end_due: Number(budget?.project1_deduct_end_due) || 0,
          deduct1_total: Number(budget?.deduct1_total) || 0,
          deduct1_due_previous: Number(budget?.deduct1_due_previous) || 0,
          deduct1_due_last: Number(budget?.deduct1_due_last) || 0,
          debt2_crop_due: Number(budget?.debt2_crop_due) || 0,
          deduct2_crop_due: Number(budget?.deduct2_crop_due) || 0,
          debt2_overdue_due: Number(budget?.debt2_overdue_due) || 0,
          project2_debt_crop_due: Number(budget?.project2_debt_crop_due) || 0,
          project2_deduct_crop_due:
            Number(budget?.project2_deduct_crop_due) || 0,
          project2_deduct_end_due: Number(budget?.project2_deduct_end_due) || 0,
          deduct2_total: Number(budget?.deduct2_total) || 0,
          deduct2_due_previous: Number(budget?.deduct2_due_previous) || 0,
          deduct2_due_last: Number(budget?.deduct2_due_last) || 0,
          debt3_crop_due: Number(budget?.debt3_crop_due) || 0,
          deduct3_crop_due: Number(budget?.deduct3_crop_due) || 0,
          debt3_overdue_due: Number(budget?.debt3_overdue_due) || 0,
          project3_debt_crop_due: Number(budget?.project3_debt_crop_due) || 0,
          project3_deduct_crop_due:
            Number(budget?.project3_deduct_crop_due) || 0,
          project3_deduct_end_due: Number(budget?.project3_deduct_end_due) || 0,
          deduct3_total: Number(budget?.deduct3_total) || 0,
          deduct3_due_previous: Number(budget?.deduct3_due_previous) || 0,
          deduct3_due_last: Number(budget?.deduct3_due_last) || 0,
          debt4_crop_due: Number(budget?.debt4_crop_due) || 0,
          deduct4_crop_due: Number(budget?.deduct4_crop_due) || 0,
          debt4_overdue_due: Number(budget?.debt4_overdue_due) || 0,
          project4_debt_crop_due: Number(budget?.project4_debt_crop_due) || 0,
          project4_deduct_crop_due:
            Number(budget?.project4_deduct_crop_due) || 0,
          project4_deduct_end_due: Number(budget?.project4_deduct_end_due) || 0,
          deduct4_total: Number(budget?.deduct4_total) || 0,
          deduct4_due_previous: Number(budget?.deduct4_due_previous) || 0,
          deduct4_due_last: Number(budget?.deduct4_due_last) || 0,
          avg_baht_area: Number(budgetOne?.avg_baht_area) || 0,
          history1_ton_contract: Number(budget?.history1_ton_contract) || 0,
          history1_ton_real: Number(budget?.history1_ton_real) || 0,
          history1_ton_per: Number(budget?.history1_ton_per) || 0,
          history1_grad: budget?.history1_grad || '-',
          history1_money: Number(budget?.history1_money) || 0,
          history1_cane_ton: Number(budget?.history1_cane_ton) || 0,
          history1_canetype01: Number(budget?.history1_canetype01) || 0,
          history1_canetype02: Number(budget?.history1_canetype02) || 0,
          history1_canetype03: Number(budget?.history1_canetype03) || 0,
          history1_canetype04: Number(budget?.history1_canetype04) || 0,
          history1_canetype05: Number(budget?.history1_canetype05) || 0,
          history1_canetype06: Number(budget?.history1_canetype06) || 0,
          history2_ton_contract: Number(budget?.history2_ton_contract) || 0,
          history2_ton_real: Number(budget?.history2_ton_real) || 0,
          history2_ton_per: Number(budget?.history2_ton_per) || 0,
          history2_grad: budget?.history2_grad || '-',
          history2_money: Number(budget?.history2_money) || 0,
          history2_cane_ton: Number(budget?.history2_cane_ton) || 0,
          history2_canetype01: Number(budget?.history2_canetype01) || 0,
          history2_canetype02: Number(budget?.history2_canetype02) || 0,
          history2_canetype03: Number(budget?.history2_canetype03) || 0,
          history2_canetype04: Number(budget?.history2_canetype04) || 0,
          history2_canetype05: Number(budget?.history2_canetype05) || 0,
          history2_canetype06: Number(budget?.history2_canetype06) || 0,
          history3_ton_contract: Number(budget?.history3_ton_contract) || 0,
          history3_ton_real: Number(budget?.history3_ton_real) || 0,
          history3_ton_per: Number(budget?.history3_ton_per) || 0,
          history3_grad: budget?.history3_grad || '-',
          history3_money: Number(budget?.history3_money) || 0,
          history3_cane_ton: Number(budget?.history3_cane_ton) || 0,
          history3_canetype01: Number(budget?.history3_canetype01) || 0,
          history3_canetype02: Number(budget?.history3_canetype02) || 0,
          history3_canetype03: Number(budget?.history3_canetype03) || 0,
          history3_canetype04: Number(budget?.history3_canetype04) || 0,
          history3_canetype05: Number(budget?.history3_canetype05) || 0,
          history3_canetype06: Number(budget?.history3_canetype06) || 0,
          history4_ton_contract: Number(budget?.history4_ton_contract) || 0,
          history4_ton_real: Number(budget?.history4_ton_real) || 0,
          history4_ton_per: Number(budget?.history4_ton_per) || 0,
          history4_grad: budget?.history4_grad || '-',
          history4_money: Number(budget?.history4_money) || 0,
          history4_cane_ton: Number(budget?.history4_cane_ton) || 0,
          history4_canetype01: Number(budget?.history4_canetype01) || 0,
          history4_canetype02: Number(budget?.history4_canetype02) || 0,
          history4_canetype03: Number(budget?.history4_canetype03) || 0,
          history4_canetype04: Number(budget?.history4_canetype04) || 0,
          history4_canetype05: Number(budget?.history4_canetype05) || 0,
          history4_canetype06: Number(budget?.history4_canetype06) || 0,
          sumCurrent,
          cropCurrent: `${crop1}/${crop3}`,
          cropYears: `${crop1}`,
          cropNext1: `${crop3}/${crop4}`,
          cropNext2: `${crop4}/${crop5}`,
          cropBack1: `${cropOld1}/${crop1}`,
          cropBack2: `${cropOld2}/${cropOld1}`,
          cropBack3: `${cropOld3}/${cropOld2}`,
          cropBack4: `${cropOld4}/${cropOld3}`,
          cropBack5: `${cropOld5}/${cropOld4}`,
          securities: securitie || securities,
          guarantors,
          securitiesPrice,
          ownerShipSUM: sumOwnerShip,
          ownerShip0: ownerShips[0] || '',
          ownerShip0Price,
          ownerShip01Price,
          ownerShip02Price,
          ownerShip03Price,
          ownerShip1: ownerShips[1] || '',
          ownerShip1Price,
          ownerShip2: ownerShips[2] || '',
          ownerShip2Price,
          ownerShip3: ownerShips[3] || '',
          ownerShip3Price,
          pass: budget_pass,
          avgRai: AvgBahtRai,
          totalRai,
          caneType0: caneType0 || useSums?.sumTotal0 || 0,
          caneType1: caneType1 || useSums?.sumTotal1 || 0,
          caneType2: caneType2 || useSums?.sumTotal2 || 0,
          caneType3: caneType3 || useSums?.sumTotal3 || 0,
          caneType4: caneType4 || useSums?.sumTotal4 || 0,
          caneType5: caneType5 || useSums?.sumTotal5 || 0,
          cropDueNext: `${crop2}`,
          cropDueNext1: `${crop3}`,
          cropDueNext2: `${crop4}`,
          cropDueNext3: `${crop5}`,
          cropDueNext4: `${crop6}`,
          cropDueNext5: `${crop7}`,
          cropDueNext6: `${crop8}`,
          status: one,
          approve,
          position,
          cropEnd,
          totalYear: countYear || IsNull,
          avgYear,
          zoneName: `นาย${zoneName[0]?.FullName}` || null,
          str2,
          manager: `นาย${managerName}` || null,
          str1,
          histoRaiAll2:
            Number(budget?.history2_canetype01) +
            Number(budget?.history2_canetype02) +
            Number(budget?.history2_canetype03) +
            Number(budget?.history2_canetype04) +
            Number(budget?.history2_canetype05) +
            Number(budget?.history2_canetype06),
          histoContract2: budget?.history2_ton_contract,
          historyTonReal2: budget?.history2_ton_real,
          histoRaiAll3:
            Number(budget?.history3_canetype01) +
            Number(budget?.history3_canetype02) +
            Number(budget?.history3_canetype03) +
            Number(budget?.history3_canetype04) +
            Number(budget?.history3_canetype05) +
            Number(budget?.history3_canetype06),
          histoContract3: budget?.history3_ton_contract,
          historyTonReal3: budget?.history3_ton_real,
          histoRaiAll4:
            Number(budget?.history4_canetype01) +
            Number(budget?.history4_canetype02) +
            Number(budget?.history4_canetype03) +
            Number(budget?.history4_canetype04) +
            Number(budget?.history4_canetype05) +
            Number(budget?.history4_canetype06),
          histoContract4: budget?.history4_ton_contract,
          historyTonReal4: budget?.history4_ton_real,
          projectName: budget?.promotion7_project_type,
          projectscss: ScssProject || null,
          projectPrice: budget?.promotion7_budget_use,
          projectDoc: budget?.projectDoc,
          projectAmount: budget?.projectAmount,
          ProjectCapital: budget?.ProjectCapital,
          projectInterest: budget?.ProjectInterest,
          contractYear1: budget?.ContractYear1 || null,
          dueYear1: budget?.Due1 || null,
          contractYear2: budget?.ContractYear2 || null,
          dueYear2: budget?.Due2 || null,
          contractYear3: budget?.ContractYear3 || null,
          dueYear3: budget?.Due3 || null,
          contractYear4: budget?.ContractYear4 || null,
          dueYear4: budget?.Due4 || null,
          contractYear5: budget?.ContractYear5 || null,
          dueYear5: budget?.Due5 || null,
          contractYear6: budget?.ContractYear6 || null,
          dueYear6: budget?.Due6 || null,
          loanCurrentBaht: textPrice,
          due1: 0,
          due1Text: due1Price || 'ศูนย์บาทถ้วน',
          due2: 0,
          due2Text: due2Price || 'ศูนย์บาทถ้วน',
          due3: 0,
          due3Text: due3Price || 'ศูนย์บาทถ้วน',
          due4: 0,
          due4Text: due4Price || 'ศูนย์บาทถ้วน',
          due5: 0,
          due5Text: due5Price || 'ศูนย์บาทถ้วน',
          due6: budget?.promotion7_budget_use,
          due6Text: due6Price || 'ศูนย์บาทถ้วน',
          due7: due7Price,
          due7Text: due7Price || 'ศูนย์บาทถ้วน',
          due8: due8Price,
          due8Text: due8Price || 'ศูนย์บาทถ้วน',
          DueNum: budget?.DueNum || null,
          DueRai: budget?.DueRai || null,
          DueTon: budget?.DueTon || null,
          dueTotalText: dueTotal || 'ศูนย์บาทถ้วน'
        });

        await queryRunner.release();
      } else {
        res.render('index', { farmer: '' });
        await queryRunner.release();
      }
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
