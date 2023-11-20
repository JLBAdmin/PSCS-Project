/* eslint-disable no-new */
import * as express from 'express';
import next from 'next';

import BudgetsController from './components/admins/budgets.controller';
import CropController from './components/admins/cropyear.controller';
import BudgetController from './components/budgets/budget.controller';
import CostController from './components/budgets/cost.controller';
import DebtController from './components/budgets/debt.controller';
import HistoryController from './components/budgets/history.controller';
import ImportController from './components/budgets/import.controller';
import McssController from './components/budgets/mcss.controller';
import PrintController from './components/budgets/print.controller';
import ProjectController from './components/budgets/project.controller';
import BudgetReqController from './components/budgets/request.controller';
import CompanyController from './components/companys/company.controller';
import DashboardController from './components/dashboard/dashboard.controller';
import FactoryController from './components/dashboard/factory.controller';
import HoursController from './components/dashboard/hours.controller';
import PlotController from './components/geoserver/plot.controller';
import MachineController from './components/machines/machine.controller';
import CarbonController from './components/quotas/carbon.controller';
import PlotCodeController from './components/quotas/plotcode.controller';
import QuotaController from './components/quotas/quota.controller';
import RainController from './components/rains/rains.controller';
import SecuritieController from './components/securities/securitie.controller';
import SystemStatusController from './components/system-status/system-status.controller';
import UserController from './components/users/users.controller';
import ZoneController from './components/zones/subzone.controller';
import TargetController from './components/zones/target.controller';
import { MssqlDataSource, PostgresDataSource } from './data-source';

const isDev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev: isDev });
const nextRequestHandler = nextApp.getRequestHandler();

export default async function registerRoutes(
  app: express.Application
): Promise<void> {
  await nextApp.prepare().then(() => {
    // establish database connection
    PostgresDataSource.initialize()
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Data Source MSSQL has been initialized!');
      })
      .catch((err: any) => {
        // eslint-disable-next-line no-console
        console.error('Error during Data Source initialization:', err);
      });

    MssqlDataSource.initialize()
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Data Source MSSQL has been initialized!');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Error during Data Source initialization:', err);
      });

    new SystemStatusController(app);
    new UserController(app);
    new MachineController(app);
    new RainController(app);
    new BudgetController(app);
    new BudgetsController(app);
    new BudgetReqController(app);
    new QuotaController(app);
    new CarbonController(app);
    new SecuritieController(app);
    new DebtController(app);
    new HistoryController(app);
    new ImportController(app);
    new PrintController(app);
    new DashboardController(app);
    new PlotController(app);
    new PlotCodeController(app);
    new TargetController(app);
    new FactoryController(app);
    new CompanyController(app);
    new McssController(app);
    new CropController(app);
    new HoursController(app);
    new PlotCodeController(app);
    new ZoneController(app);
    new ProjectController(app);
    new CostController(app);

    app.all('*', (req: express.Request, res: express.Response) => {
      return nextRequestHandler(req, res);
    });
  });
}
