import { number2Template } from '../jquery-ui/formatTemplate';

export const subColName = [
  'โควตา',
  'ชื่อ - สกุล',
  'พื้นที่อนุมัติ',
  'สัญญาตันอ้อย',
  'อนุมัติเงินส่งเสริม',
  'พื้นที่ GPS',
  '%เป้าพื้นที่',
  'จ่ายเงินส่งเสริม',
  'คงเหลือส่งเสริม',
  'อนุมัติโครงการ',
  'อนุมัติรับคนงาน'
];

export const subColModel = [
  {
    name: 'quota',
    width: 50
    // editable: true
  },
  {
    name: 'FullName',
    width: 120
    // editable: true
  },
  {
    name: 'AreaContract',
    width: 70,
    template: number2Template
  },
  {
    name: 'TonContract',
    width: 80,
    template: number2Template
  },
  {
    name: 'BudgetContract',
    width: 90,
    // editable: true,
    template: number2Template
  },
  {
    name: 'MCSSAreaCount',
    width: 70,
    // editable: true,
    template: number2Template
  },
  {
    name: 'PercenWork',
    width: 50,
    // editable: true,
    // template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'avg',
    formatoptions: { suffix: '%', decimalPlaces: 0.0 },
    align: 'right',
    jsonmap(item: any) {
      return Math.round((item.MCSSAreaCount * 100) / item.AreaContract);
    }
  },
  {
    name: 'LoanCurrent',
    width: 90,
    template: number2Template
  },
  {
    name: 'BudgetBalance',
    width: 100,
    // editable: true,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'sum',
    jsonmap(item: any) {
      return Math.round(item.BudgetContract - item.LoanCurrent);
    }
  },
  {
    name: 'ProjectProve',
    width: 90,
    // editable: true,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'sum'
  },
  {
    name: 'Worker',
    width: 80,
    // editable: true,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'sum'
  }
];
