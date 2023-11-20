/* eslint-disable class-methods-use-this */
import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import { PostgresDataSource } from '../../data-source';
import { CostsDetail } from '../../entity/pgsql/pg.cost';
import * as responsehandler from '../../lib/response-handler';
import verifyJWT from '../../middleware/verifyJWT';
import BaseApi from '../BaseApi';

/**
 * Users ontroller
 */

export default class CostController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/cost', this.router);
    this.router.get('/get', this.getCost);
    this.router.get('/get/:id', this.getCostUser);
    this.router.get('/costs/:id', this.getCostDetail);
    this.router.get('/report/:day1&:day2', this.getCostReport);
    this.router.get('/dash/:id/:day1&:day2', this.getDashboard);
    this.router.get('/dashbar/:id/:day1&:day2', this.getDashBar);
    this.router.post('/new', verifyJWT, this.newCost);
    this.router.put('/update/:id', verifyJWT, this.updateCost);
    this.router.delete('/delete', this.deleteCost);
    this.router.get('/error', this.getError);
  }

  public async getCost(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    const result = await queryRunner.manager.query(
      'SELECT * FROM costs ORDER BY MainAccount ASC'
    );
    // await console.log(result);
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getCostUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    const result = await queryRunner.manager.query(
      'SELECT * FROM costs WHERE GroupBudget LIKE @0 OR GroupBudget LIKE @1 ORDER BY MainAccount ASC',
      [`%${id}%`, `%${0}%`]
    );
    // await console.log(result);
    try {
      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getCostDetail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      await queryRunner.connect();
      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );

      const CropYears = crops[0].cropCurrent;

      let result: any;

      if (id === '0') {
        result = await queryRunner.manager.query(
          'SELECT * FROM costs_detail WHERE CropYear=@0 AND CloseAccount =@1 ORDER BY updatedAt DESC',
          [CropYears, false]
        );
      } else if (id === '00') {
        result = await queryRunner.manager.query(
          'SELECT * FROM costs_detail WHERE  CropYear=@0 AND CloseAccount =@1 ORDER BY updatedAt DESC',
          [CropYears, true]
        );
      } else {
        result = await queryRunner.manager.query(
          'SELECT * FROM costs_detail WHERE  CropYear=@0 AND UserId =@1 AND StatusAccount =@2 ORDER BY updatedAt DESC',
          [CropYears, id, false]
        );
      }
      res.locals.data = result;
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getCostReport(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { day1, day2 } = req.params;
    const queryRunner = PostgresDataSource.createQueryRunner();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    queryRunner.connect;
    const crops = await queryRunner.manager.query(
      'SELECT * FROM crop_years WHERE cropStatus = 1'
    );

    const CropYears = crops[0].cropCurrent;
    try {
      const result = await queryRunner.manager.query(
        'SELECT ReportGrp, RefNO, Seq1, Seq1Name, Seq2, Seq2Name, Budgets FROM View_MainCost ORDER BY RefNO'
      );

      if (result) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < result.length; i++) {
          if (result[i].ReportGrp === '2 รายจ่าย') {
            // eslint-disable-next-line unused-imports/no-unused-vars, no-await-in-loop
            const costsDetail = await queryRunner.manager.query(
              `SELECT SUM(TotalQTY) AS TotalCurrent, SUM(TotalAmount) AS AmountTotal FROM View_DetailCost WHERE (CropYear=@0) AND (RefNO=@1) AND (TranDate BETWEEN @2 AND @3) AND (StatusAccount = 1)`,
              [CropYears, Number(result[i].RefNO), day1, day2]
            );
            Object.assign(result[i], {
              TotalCurrent: costsDetail[0].TotalCurrent,
              AmountTotal:
                costsDetail[0].AmountTotal - costsDetail[0].AmountTotal * 2
            });
          } else {
            // eslint-disable-next-line unused-imports/no-unused-vars, no-await-in-loop
            const costsDetail = await queryRunner.manager.query(
              'SELECT SUM(TotalQTY) AS TotalCurrent, SUM(TotalAmount) AS AmountTotal FROM View_DetailCost WHERE (CropYear=@0) AND (RefNO=@1) AND (TranDate BETWEEN @2 AND @3) AND (StatusAccount = 1)',
              [CropYears, Number(result[i].RefNO), day1, day2]
            );
            Object.assign(result[i], {
              TotalCurrent: costsDetail[0].TotalCurrent,
              AmountTotal: costsDetail[0].AmountTotal
            });
          }
        }
      }

      res.locals.data = result;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async getDashboard(req: Request, res: Response, next: NextFunction) {
    const { id, day1, day2 } = req.params;
    let costString: any;
    if (id === '1') {
      costString = '1 รายรับ';
    } else {
      // eslint-disable-next-line unused-imports/no-unused-vars
      costString = '2 รายจ่าย';
    }
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      await queryRunner.connect();

      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );

      const CropYears = crops[0].cropCurrent;

      const useSums = await queryRunner.manager.query(
        'SELECT SUM(TotalAmount) as value, Seq2Name as name FROM View_DetailCost WHERE (CropYear =@0) AND (ReportGrp =@1) AND (TranDate BETWEEN @2 AND @3) AND (StatusAccount = 1) GROUP BY Seq2Name, ReportGrp',
        [CropYears, costString, day1, day2]
      );

      res.locals.data = JSON.stringify(useSums);
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async getDashBar(req: Request, res: Response, next: NextFunction) {
    const { id, day1, day2 } = req.params;
    let costString: any;
    if (id === '1') {
      costString = '1 รายรับ';
    } else {
      // eslint-disable-next-line unused-imports/no-unused-vars
      costString = '2 รายจ่าย';
    }
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      await queryRunner.connect();

      const crops = await queryRunner.manager.query(
        'SELECT * FROM crop_years WHERE cropStatus = 1'
      );

      const CropYears = crops[0].cropCurrent;

      const cost = await queryRunner.manager.query(
        `SELECT cost.ReportGrp, cost.Seq2Name, cost.RefNO, detail.CropYear, cost.Budgets,
            (SELECT SUM(TotalAmount/1000000) AS Expr1 FROM dbo.View_DetailCost AS View_DetailCost_12
            WHERE (RefNO = cost.RefNO) AND (MONTH(TranDate) = '1')) AS P1,
            (SELECT SUM(TotalAmount / 1000000) AS Expr1 FROM dbo.View_DetailCost AS View_DetailCost_11
            WHERE (RefNO = cost.RefNO) AND (MONTH(TranDate) = '2')) AS P2,
            (SELECT SUM(TotalAmount / 1000000) AS Expr1 FROM dbo.View_DetailCost AS View_DetailCost_10
            WHERE (RefNO = cost.RefNO) AND (MONTH(TranDate) = '3')) AS P3,
            (SELECT SUM(TotalAmount / 1000000) AS Expr1 FROM dbo.View_DetailCost AS View_DetailCost_9
            WHERE (RefNO = cost.RefNO) AND (MONTH(TranDate) = '4')) AS P4,
            (SELECT SUM(TotalAmount / 1000000) AS AmountTotal FROM dbo.View_DetailCost AS View_DetailCost_8
            WHERE (RefNO = cost.RefNO) AND (MONTH(TranDate) = '5')) AS P5, 
            (SELECT SUM(TotalAmount / 1000000) AS Expr1 FROM dbo.View_DetailCost AS View_DetailCost_7
            WHERE (RefNO = cost.RefNO) AND (MONTH(TranDate) = '6')) AS P6,
            (SELECT SUM(TotalAmount / 1000000) AS Expr1 FROM dbo.View_DetailCost AS View_DetailCost_6
            WHERE (RefNO = cost.RefNO) AND (MONTH(TranDate) = '7')) AS P7,
            (SELECT SUM(TotalAmount / 1000000) AS Expr1 FROM dbo.View_DetailCost AS View_DetailCost_5
            WHERE (RefNO = cost.RefNO) AND (MONTH(TranDate) = '8')) AS P8,
            (SELECT SUM(TotalAmount / 1000000) AS Expr1 FROM dbo.View_DetailCost AS View_DetailCost_4
            WHERE (RefNO = cost.RefNO) AND (MONTH(TranDate) = '9')) AS P9,
            (SELECT SUM(TotalAmount / 1000000) AS Expr1 FROM dbo.View_DetailCost AS View_DetailCost_3
            WHERE (RefNO = cost.RefNO) AND (MONTH(TranDate) = '10')) AS P10,
            (SELECT SUM(TotalAmount / 1000000) AS Expr1 FROM dbo.View_DetailCost AS View_DetailCost_2
            WHERE (RefNO = cost.RefNO) AND (MONTH(TranDate) = '11')) AS P11,
            (SELECT SUM(TotalAmount / 1000000) AS Expr1 FROM dbo.View_DetailCost AS View_DetailCost_1
            WHERE (RefNO = cost.RefNO) AND (MONTH(TranDate) = '12')) AS P12
      FROM dbo.View_MainCost AS cost LEFT OUTER JOIN dbo.View_DetailCost AS detail ON detail.RefNO = cost.RefNO
      WHERE (detail.CropYear=@0) AND (cost.ReportGrp=@1) AND (detail.TranDate BETWEEN @2 AND @3) AND (StatusAccount = 1)
      GROUP BY cost.ReportGrp, cost.Seq2Name, cost.RefNO, detail.CropYear, cost.Budgets ORDER BY cost.RefNO`,
        [CropYears, costString, day1, day2]
      );

      const totalamount: any[] = [];
      const useSums: any = [];
      const useP1: any = [];
      cost.forEach((data: any) => {
        useSums.push(data.Seq2Name);
        useP1.push([
          data.P10,
          data.P11,
          data.P12,
          data.P1,
          data.P2,
          data.P3,
          data.P4,
          data.P5,
          data.P6,
          data.P7,
          data.P8,
          data.P9
        ]);
      });
      totalamount.push(useSums, useP1);

      res.locals.data = JSON.stringify(totalamount);
      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async newCost(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      await queryRunner.connect();
      const accountID = req.body.MainAccount.trim();
      const MainAccount = await queryRunner.manager.query(
        'SELECT * FROM costs WHERE MainAccount = @0',
        [accountID]
      );

      if (MainAccount.length === 0) {
        res.locals = res
          .status(200)
          .json({ msg: `ไม่พบรหัสบัญชีนี้ ${accountID} กรุณาตรวจสอบ` });
      } else {
        const newCost: any = {
          CropYear: req.body.CropYear,
          MainAccount: req.body.MainAccount,
          NameAccount: MainAccount[0].NameAccount as string,
          TotalAmount: req.body.TotalAmount,
          TotalQTY: req.body.TotalQTY,
          TranDate: req.body.TranDate as string,
          Remark: req.body.Remark,
          StatusAccount: req.body.StatusAccount,
          UserId: req.body.UserId,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        const AddCost =
          PostgresDataSource.getRepository(CostsDetail).create(newCost);
        await PostgresDataSource.getRepository(CostsDetail).save(AddCost);
        res.locals = res
          .status(201)
          .json({ msg: 'เพิ่มข้อมูลเรียบร้อยแล้ว', createdAt: new Date() });
      }

      responsehandler.send(res);
      await queryRunner.release();
    } catch (err) {
      next(err);
    }
  }

  public async updateCost(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      await queryRunner.connect();
      const accountID = req.body.MainAccount.trim();
      const MainAccount = await queryRunner.manager.query(
        'SELECT * FROM costs WHERE MainAccount = @0',
        [accountID]
      );

      if (MainAccount.length === 0) {
        res.locals = res
          .status(200)
          .json({ msg: `ไม่พบรหัสบัญชีนี้ ${accountID} กรุณาตรวจสอบ` });
      } else {
        const updateCost: any = {
          CropYear: req.body.CropYear,
          MainAccount: req.body.MainAccount,
          NameAccount: MainAccount[0].NameAccount,
          TotalAmount: req.body.TotalAmount,
          TotalQTY: req.body.TotalQTY,
          TranDate: req.body.TranDate,
          Remark: req.body.Remark,
          StatusAccount: req.body.StatusAccount,
          CloseAccount: req.body.CloseAccount,
          UserId: req.body.UserId,
          updatedAt: new Date()
        };

        const costDetail: any = await PostgresDataSource.getRepository(
          CostsDetail
        ).findOneBy({
          id: <number>(<unknown>id)
        });

        PostgresDataSource.getRepository(CostsDetail).merge(
          costDetail,
          updateCost
        );
        await PostgresDataSource.getRepository(CostsDetail).save(costDetail);
        res.locals = res
          .status(200)
          .json({ msg: 'ปรับปรุงข้อมูลเรียบร้อยแล้ว', updatedAt: new Date() });
      }
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  public async deleteCost(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryRunner = PostgresDataSource.createQueryRunner();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      queryRunner.connect;
      await queryRunner.manager.query('DELETE FROM costs_detail');
      await queryRunner.manager.query(
        `DBCC CHECKIDENT ('costs_detail', RESEED, 0)`
      );
      res.locals = res.json({ msg: 'Delete Cost Detail' });
      responsehandler.send(res);
      return;
    } catch (err: any) {
      next(err);
      // eslint-disable-next-line no-console
      console.log(err);
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
