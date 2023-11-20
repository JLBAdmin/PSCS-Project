/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { MssqlDataSource, PostgresDataSource } from '../../data-source';
import { QuotaMachines } from '../../entity/mssql/mssql.Machines';
import { FarmerMachinery } from '../../entity/pgsql/pg.machines';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
// eslint-disable-next-line import/no-unresolved

/**
 * Users ontroller
 */
export default class MachineController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/machine', this.router);
    this.router.get('/get', this.getMachine);
    this.router.get('/get/:id', this.getMachineQuota);
    this.router.get('/get/:id/:year', this.getMachineCorp);
    this.router.post('/new', this.newMachine);
    this.router.put('/update/:id', this.updateMachine);
    this.router.get('/delCrop/:id', this.delMachine);
    this.router.get('/error', this.getError);
  }

  public async getMachine(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    const result = await queryRunner.manager.query(
      'SELECT * FROM [ps_prod].[dbo].[farmer_machinery] ORDER BY quotaId'
    );
    // await console.log(result);
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getMachineQuota(
    req: Request,
    res: Response
    // next: NextFunction
  ): Promise<void> {
    const machineQuota = await MssqlDataSource.getRepository(
      QuotaMachines
    ).findOneBy({ QuotaId: <number>(<unknown>req.params.id) });

    if (machineQuota) {
      res.locals.data = machineQuota;
      responsehandler.send(res);
    } else {
      res.json('Not found');
    }

    // eslint-disable-next-line no-console
    // await console.log(result);
  }

  public async getMachineCorp(
    req: Request,
    res: Response
    // next: NextFunction
  ): Promise<void> {
    const { id, year } = req.params;
    const machineCorp = await MssqlDataSource.getRepository(
      QuotaMachines
    ).findOneBy({
      QuotaId: <number>(<unknown>id),
      Year: <number>(<unknown>year)
    });
    if (machineCorp) {
      res.locals.data = machineCorp;
      responsehandler.send(res);
    } else {
      res.json('Not found');
    }

    // eslint-disable-next-line no-console
    // await console.log(result);
  }

  public async newMachine(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    // eslint-disable-next-line no-console
    const newMac = {
      quotaId: req.body.quotaId,
      mini_tractor: req.body.mini_tractor,
      mini_tractor1_under_90: req.body.mini_tractor1_under_90,
      mini_tractor1_under_120: req.body.mini_tractor1_under_120,
      mini_tractor1_over_120: req.body.mini_tractor1_over_120,
      mini_tractor2_under_90: req.body.mini_tractor2_under_90,
      mini_tractor2_under_120: req.body.mini_tractor2_under_120,
      mini_tractor2_over_120: req.body.mini_tractor2_over_120,
      pioneer_plow_3: req.body.pioneer_plow_3,
      pioneer_plow_4: req.body.pioneer_plow_4,
      land_plane: req.body.land_plane,
      ripper_3: req.body.ripper_3,
      ripper_5: req.body.ripper_5,
      ripper_7: req.body.ripper_7,
      plow_7: req.body.plow_7,
      plow_10: req.body.plow_10,
      plow_18: req.body.plow_18,
      plow_20: req.body.plow_20,
      plow_24: req.body.plow_24,
      mini_combo: req.body.mini_combo,
      haro_power: req.body.haro_power,
      rotary: req.body.rotary,
      planting_tools_1: req.body.planting_tools_1,
      planting_tools_2: req.body.planting_tools_2,
      planting_tools_billet: req.body.planting_tools_billet,
      mini_boom_spray: req.body.mini_boom_spray,
      big_boom_spray: req.body.big_boom_spray,
      plow_mix: req.body.plow_mix,
      cutaway: req.body.cutaway,
      spring_rake: req.body.spring_rake,
      small_plate: req.body.small_plate,
      small_rotary_hoe: req.body.small_rotary_hoe,
      big_rotary_hoe: req.body.big_rotary_hoe,
      middle_groove_fertilizer: req.body.middle_groove_fertilizer,
      wheelbarrow: req.body.wheelbarrow,
      wheels_6: req.body.wheels_6,
      wheeler_10_Single: req.body.wheeler_10_Single,
      wheeler_10_trailer: req.body.wheeler_10_trailer,
      carding_machine: req.body.carding_machine,
      cutting_machine_layingPiles: req.body.cutting_machine_layingPiles,
      fork_over_tractor: req.body.fork_over_tractor,
      fork_over_wheeler_3: req.body.fork_over_wheeler_3,
      cutter_under_300: req.body.cutter_under_300,
      cutter_over_300: req.body.cutter_over_300
    };

    try {
      // console.log(newEmp)
      await PostgresDataSource.getRepository(FarmerMachinery).create(newMac);
      await PostgresDataSource.getRepository(FarmerMachinery).save(newMac);

      res.locals = res.status(201).json({ msg: 'Mechines create susscess' });
      responsehandler.send(res);
      return;
    } catch (error) {
      res.status(409).send('Mechines already in use');
      responsehandler.send(res);
      next();
    }
  }

  public async updateMachine(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const quota: any = await PostgresDataSource.getRepository(
      FarmerMachinery
    ).findOneBy({
      id: <number>(<unknown>id)
    });
    // // eslint-disable-next-line no-console
    // console.log(id, res);
    try {
      PostgresDataSource.getRepository(FarmerMachinery).merge(quota, req.body);
      const results = await PostgresDataSource.getRepository(
        FarmerMachinery
      ).save(quota);

      // eslint-disable-next-line no-console
      // console.log(results);
      res.locals.data = results;
      responsehandler.send(res);
      return;
    } catch (err) {
      next(err);
    }
  }

  public async delMachine(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    try {
      await MssqlDataSource.getRepository(QuotaMachines).delete({
        Year: <number>(<unknown>id)
      });
      res.locals = res.status(200).json({ msg: 'Mechines delete susscess' });
      responsehandler.send(res);
      return;
    } catch (error) {
      res.status(409).send('Mechines already in use');
      responsehandler.send(res);
      next(error);
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
