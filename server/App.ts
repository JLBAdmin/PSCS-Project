/* eslint-disable class-methods-use-this */
import 'reflect-metadata';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import path from 'path';

import { corsOptions } from './config/corsOptions';
import addErrorHandler from './middleware/error-handler';
import registerRoutes from './routes';

export default class App {
  public express!: express.Application;

  public httpServer!: http.Server;

  public async init(): Promise<void> {
    this.express = express();
    this.httpServer = http.createServer(this.express);
    this.express.set('views', path.join(__dirname, '../views'));
    this.express.set('view engine', 'ejs');
    this.middleware();
    this.routes();
    this.addErrorHandler();
  }

  /**
   * here register your all routes
   */
  private routes(): void {
    this.express.get('/web', this.parseRequestHeader);
    this.express.get('/psc', this.pscRequest);
    this.express.get('/print', this.printRequest);
    this.express.use('/v1', this.basePathRoute);
    registerRoutes(this.express);
  }

  /**
   * here you can apply your middlewares
   */
  private middleware(): void {
    // support application/json type post data
    // support application/x-www-form-urlencoded post data
    // Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
    // this.express.use('/', express.static(path.join(__dirname, '../public')));
    // serve static files
    // this.express.use('/static'
    //   'D:/httpdocs/MCSSData/Images',
    //   express.static(path.join(__dirname, 'images'))
    // );
    this.express.use('/images', express.static('D:/httpdocs/MCSSData/Images'));
    this.express.use(helmet({ contentSecurityPolicy: false }));
    this.express.use(express.json({ limit: '100mb' }));
    this.express.use(express.urlencoded({ limit: '100mb', extended: true }));
    this.express.use(cors(corsOptions));
    // middleware for cookies
    this.express.use(cookieParser());
  }

  private parseRequestHeader(
    _req: express.Request,
    res: express.Response
  ): void {
    // res.sendFile(path.join(__dirname, '../views', 'index.html'));
    res.render('index', { title: 'บริษัท น้ำตาลพิษณุโลก จำกัด' });
  }

  private pscRequest(
    _req: express.Request,
    res: express.Response,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    next: Function
  ): void {
    // res.sendFile(path.join(__dirname, '../views', 'index.html'));
    res.render('psc/psc', { title: 'บริษัท น้ำตาลพิษณุโลก จำกัด' });
    // eslint-disable-next-line no-console
    // console.log(req.headers.access_token);
    next();
  }

  private basePathRoute(
    _request: express.Request,
    response: express.Response
  ): void {
    response.json({ message: 'base path' });
  }

  private printRequest(
    _req: express.Request,
    response: express.Response
  ): void {
    // response.json({ message : 'base path' });
    response.render('print', { title: 'บริษัท น้ำตาลพิษณุโลก จำกัด' });
  }

  private addErrorHandler(): void {
    this.express.use(addErrorHandler);
  }
}
