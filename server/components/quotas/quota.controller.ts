/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { MssqlDataSource, PostgresDataSource } from '../../data-source';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */
export default class QuotaController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/quotas', this.router);
    this.router.get('/get', this.getQuota);
    this.router.get('/get-budget', this.getQuotaBudget);
    this.router.get('/get-budgets/:id', this.getSubBudget);
    this.router.get('/print/:id', this.printQuota);
    this.router.get('/error', this.getError);
  }

  public async getQuota(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = MssqlDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    const result = await queryRunner.manager.query('SELECT * FROM Quotas');
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getQuotaBudget(
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

      const result = await queryRunner.manager.query(
        `SELECT * FROM [ps_prod].[dbo].[View_DueCheckQuota] WHERE cropYear = @0`,
        [crops[0].cropYear]
      );
      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getSubBudget(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    const { id } = req.params;
    const crops = await queryRunner.manager.query(
      'SELECT * FROM [ps_prod].[dbo].[crop_years] WHERE cropStatus = 1'
    );

    const result = await queryRunner.manager.query(
      `SELECT * FROM [ps_prod].[dbo].[View_BudgetQuota] WHERE cropYear = @0 AND subZone = @1`,
      [crops[0].cropYear, id]
    );
    try {
      res.locals.data = result;
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
      const queryRunner = MssqlDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      const result = await queryRunner.manager.query(
        'SELECT * FROM Quotas WHERE Code = @0',
        [<number>(<unknown>id)]
      );

      const zoneCode = await queryRunner.manager.query(
        'SELECT * FROM [MCSS].[dbo].[vw_QuotaZoneCode] WHERE ZoneCode = @0 AND QuotaCode = @1',
        [<number>(<unknown>result[0]?.SurveyUserCode), <number>(<unknown>id)]
      );

      // const securities = await queryRunner.manager.query(
      //   `SELECT * FROM [ps_prod].[dbo].[securities] WHERE quota = @0`,
      //   [<number>(<unknown>id)]
      // );

      const Machinery = await queryRunner.manager.query(
        `SELECT * FROM [ps_prod].[dbo].[farmer_machinery] WHERE quotaId = @0`,
        [<number>(<unknown>id)]
      );

      const CaneHistory = await queryRunner.manager.query(
        `SELECT * FROM [ps_prod].[dbo].[history_cane] WHERE quota = @0`,
        [<number>(<unknown>id)]
      );

      const DebtHistory = await queryRunner.manager.query(
        `SELECT * FROM [ps_prod].[dbo].[history_debt] WHERE quota = @0`,
        [<number>(<unknown>id)]
      );

      let titles: string;
      if (result) {
        if (result[0]?.TitleId === 1) {
          titles = 'นาย';
        } else if (result[0]?.TitleId === 2) {
          titles = 'นาง';
        } else if (result[0]?.TitleId === 3) {
          titles = 'นางสาว';
        } else {
          titles = '';
        }

        const images = `/images/Quota/${result[0]?.ImageName}`;
        res.render('quotas', {
          quota: id,
          farmar: result[0],
          img: images,
          phone: result[0]?.Phone,
          tel: result[0]?.Tel,
          fullName:
            `${titles}${result[0]?.FirstNameTH} ${result[0]?.LastNameTH}` || '',
          DateOfBirth: result[0]?.DateOfBirth.toLocaleString().split(',')[0],
          idCard: result[0]?.IDCard,
          idFarm: result[0]?.IDFarm,
          // eslint-disable-next-line no-constant-condition
          addNo: `${result[0]?.RegAddressNo}`
            ? `เลขที่ ${result[0]?.RegAddressNo}`
            : '',
          road: result[0]?.RegRoad ? `ถนน ${result[0]?.RegRoad}` : '',
          village: result[0]?.RegVillage
            ? `หมู่บ้าน ${result[0]?.RegVillage}`
            : '',
          moo: result[0]?.RegMoo ? `หมู่ที่ ${result[0]?.RegMoo}` : '',
          tambon: result[0]?.RegTambonName
            ? `ตำบล ${result[0]?.RegTambonName}`
            : '',
          amphur: result[0]?.RegAmphurName
            ? `อำเภอ ${result[0]?.RegAmphurName}`
            : '',
          province: result[0]?.RegProvinceName
            ? `จังหวัด ${result[0]?.RegProvinceName}`
            : '',
          zipcode: result[0]?.RegAddressZipcode
            ? `รหัสไปรษณีย์ ${result[0]?.RegAddressZipcode}`
            : '',
          subZone: zoneCode[0].SurveyUserCode,
          miniTractor: Machinery[0]?.mini_tractor,
          Tractor1Under90: Machinery[0]?.mini_tractor1_under_90,
          Tractor1Under120: Machinery[0]?.mini_tractor1_under_120,
          Tractor1Over120: Machinery[0]?.mini_tractor1_over_120,
          Tractor2Under90: Machinery[0]?.mini_tractor2_under_90,
          Tractor2Under120: Machinery[0]?.mini_tractor2_under_120,
          Tractor2Over120: Machinery[0]?.mini_tractor2_over_120,
          Plow3: Machinery[0]?.pioneer_plow_3,
          Plow4: Machinery[0]?.pioneer_plow_4,
          LandPlane: Machinery[0]?.land_plane,
          Ripper3: Machinery[0]?.ripper_3,
          Ripper5: Machinery[0]?.ripper_5,
          Ripper7: Machinery[0]?.ripper_7,
          Plow7: Machinery[0]?.plow_7,
          Plow10: Machinery[0]?.plow_10,
          Plow18: Machinery[0]?.plow_18,
          Plow20: Machinery[0]?.plow_20,
          Plow24: Machinery[0]?.plow_24,
          MiniCombo: Machinery[0]?.mini_combo,
          HaroPower: Machinery[0]?.haro_power,
          Rotary: Machinery[0]?.rotary,
          Planting1: Machinery[0]?.planting_tools_1,
          Planting2: Machinery[0]?.planting_tools_2,
          PlantingBillet: Machinery[0]?.planting_tools_billet,
          MiniBoomSpray: Machinery[0]?.mini_boom_spray,
          BigBoomSpray: Machinery[0]?.big_boom_spray,
          PlowMix: Machinery[0]?.plow_mix,
          CutaWay: Machinery[0]?.cutaway,
          SpringRake: Machinery[0]?.spring_rake,
          SmallPlate: Machinery[0]?.small_plate,
          SmallRotaryHoe: Machinery[0]?.small_rotary_hoe,
          BigRotaryHoe: Machinery[0]?.big_rotary_hoe,
          MiddleGrooveFertilizer: Machinery[0]?.middle_groove_fertilizer,
          WheelBarrow: Machinery[0]?.wheelbarrow,
          Wheels6: Machinery[0]?.wheels_6,
          Wheeler10Single: Machinery[0]?.wheeler_10_Single,
          Wheeler10Trailer: Machinery[0]?.wheeler_10_trailer,
          CardingMachine: Machinery[0]?.carding_machine,
          CuttingMachineLayingPiles: Machinery[0]?.cutting_machine_layingPiles,
          ForkOverTractor: Machinery[0]?.fork_over_tractor,
          ForOverWheeler3: Machinery[0]?.fork_over_wheeler_3,
          CutterUnder300: Machinery[0]?.cutter_under_300,
          CutterOver300: Machinery[0]?.cutter_over_300,
          CaneHistory: CaneHistory[0],
          DebtHistory: DebtHistory[0]
        });
      }
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
