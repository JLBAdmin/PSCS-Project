import 'reflect-metadata';

import { DataSource } from 'typeorm';

import { BudgetSeasons } from './entity/mssql/mssql.BudgetSeasons';
import { ContractTons } from './entity/mssql/mssql.ContractTons';
import { PlanAudits } from './entity/mssql/mssql.PlanAudits';
import { PlanSurveyImages } from './entity/mssql/mssql.PlanSurveyImages';
import { BudgetView } from './entity/mssql/mssql.plotcode';
import { Quotas } from './entity/mssql/mssql.Quotas';
import { VwFMCA0303 } from './entity/mssql/mssql.vw_FMCA0303';
import { Waters } from './entity/mssql/mssql.Waters';
import { Budgets } from './entity/pgsql/pg.budget';
import { BudgetSecurities } from './entity/pgsql/pg.budgetSecurities';
import { CostsDetail } from './entity/pgsql/pg.cost';
import { CropYears } from './entity/pgsql/pg.cropYear';
import { Factorys } from './entity/pgsql/pg.factory';
import { HistoryCane } from './entity/pgsql/pg.historyCane';
import { HistoryDebt } from './entity/pgsql/pg.historyDebt';
import { HourCane } from './entity/pgsql/pg.hour';
import { FarmerMachinery } from './entity/pgsql/pg.machines';
import { Canes } from './entity/pgsql/pg.psCane';
import { PscsOrganic } from './entity/pgsql/pg.pscsOrganic';
import { Securities } from './entity/pgsql/pg.securities';
import { Targets } from './entity/pgsql/pg.target';
import { Users } from './entity/pgsql/pg.users';
import { Companys } from './entity/pgsql/ps.company';

export const MssqlDataSource = new DataSource({
  type: 'mssql',
  // host: '10.104.1.13',
  // password: 'sugarPS2',
  host: '103.80.49.58',
  database: 'MCSS',
  username: 'sa',
  password: 'Sugarps8',
  port: 1433,
  synchronize: false,
  logging: false,
  cache: {
    type: 'database',
    tableName: 'query-result-cache'
  },
  options: {
    encrypt: false
  },
  extra: {
    trustServerCertificate: true,
    //     // max connection pool size
    max: 100
    //     // connection timeout
    // connectionTimeoutMillis: 1000
  },
  entities: [
    Quotas,
    BudgetSeasons,
    ContractTons,
    BudgetView,
    PlanAudits,
    PlanSurveyImages,
    VwFMCA0303,
    Waters
  ] // production entities: ['./entity/mssql/*.ts']
});

export const PostgresDataSource = new DataSource({
  type: 'mssql',
  // host: '10.104.1.13',
  // password: 'sugarPS2',
  host: '103.80.49.58',
  // database: 'ps_dev',
  database: 'ps_prod',
  username: 'sa',
  password: 'Sugarps8',
  port: 1433,
  synchronize: false,
  logging: false,
  // cache: {
  //   type: 'database',
  //   tableName: 'query-result-cache'
  // },
  options: {
    encrypt: false // for azure
  },
  extra: { trustServerCertificate: true, max: 100 }, // change to true for local dev / self-signed certs },
  entities: [
    Budgets,
    Securities,
    HistoryCane,
    HistoryDebt,
    Users,
    CropYears,
    Targets,
    Canes,
    Factorys,
    Companys,
    HourCane,
    CostsDetail,
    BudgetSecurities,
    PscsOrganic,
    FarmerMachinery
  ] // production entities: ['./entity/mssql/*.ts']
});
