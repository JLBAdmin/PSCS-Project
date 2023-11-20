import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import * as os from 'os';
import * as process from 'process';

import ApiError from '../../abstractions/ApiError';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';
import {
  IProcessInfoResponse,
  IResourceUsageResponse,
  IServerTimeResponse,
  ISystemInfoResponse
} from './system-status.types';

/**
 * Status controller
 */
export default class SystemStatusController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/status', this.router);
    this.router.get('/system', this.getSystemInfo);
    this.router.get('/time', this.getServerTime);
    this.router.get('/usage', this.getResourceUsage);
    this.router.get('/process', this.getProcessInfo);
    this.router.get('/error', this.getError);
  }

  // eslint-disable-next-line class-methods-use-this
  public getSystemInfo(_req: Request, res: Response, next: NextFunction): void {
    try {
      const response: ISystemInfoResponse = {
        cpus: os.cpus(),
        network: os.networkInterfaces(),
        os: {
          platform: process.platform,
          version: os.release(),
          totalMemory: os.totalmem(),
          uptime: os.uptime()
        },
        currentUser: os.userInfo()
      };
      res.locals.data = response;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public getError(_req: Request, _res: Response, next: NextFunction): void {
    try {
      throw new ApiError(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST);
    } catch (error) {
      next(error);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public getServerTime(_req: Request, res: Response, next: NextFunction): void {
    try {
      const now: Date = new Date();
      const utc: Date = new Date(
        now.getTime() + now.getTimezoneOffset() * 60000
      );
      const time: IServerTimeResponse = {
        utc,
        date: now
      };
      res.locals.data = time;
      responsehandler.send(res);
    } catch (error) {
      next(error);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public getResourceUsage(
    _req: Request,
    res: Response,
    next: NextFunction
  ): void {
    try {
      const totalMem: number = os.totalmem();
      const memProc: NodeJS.MemoryUsage = process.memoryUsage();
      const freemMem: number = os.freemem();

      const response: IResourceUsageResponse = {
        processMemory: memProc,
        systemMemory: {
          free: freemMem,
          total: totalMem,
          percentFree: Math.round((freemMem / totalMem) * 100)
        },
        processCpu: process.cpuUsage(),
        systemCpu: os.cpus()
      };

      res.locals.data = response;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public getProcessInfo(
    _req: Request,
    res: Response,
    next: NextFunction
  ): void {
    try {
      const response: IProcessInfoResponse = {
        procCpu: process.cpuUsage(),
        memUsage: process.memoryUsage(),
        env: process.env,
        pid: process.pid,
        uptime: process.uptime(),
        applicationVersion: process.version,
        nodeDependencyVersions: process.versions
      };
      res.locals.data = response;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }
}
