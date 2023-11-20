import { number2Template } from '../jquery-ui/formatTemplate';

export const colName = [
  // 'act',
  'ปีส่งเสริม',
  'รองฯ',
  'เขตส่งเสริม',
  'นักส่งเสริม',
  'ชื่อ - สกุล',
  'พื้นที่รวม',
  'พื้นที่ใหม่',
  'พื้นที่อ้อยตอ',
  'พื้นที่รื้อตอ',
  'เป้าหมายตัน',
  'สัญญาตันอนุมัติ',
  'พื้นที่อนุมัติ',
  'พื้นที่ GPS',
  '%เป้าพื้นที่',
  'อนุมัติเงินส่งเสริม',
  'จ่ายเงินส่งเสริม',
  'คงเหลือส่งเสริม',
  'อนุมัติโครงการ',
  'อนุมัติรับคนงาน'
];

export const colModel = [
  {
    name: 'cropYear',
    width: 70,
    // editable: true,
    sorttype: 'int',
    summaryType: 'count',
    summaryTpl: '({0}) total'
  },
  {
    name: 'targetManager',
    width: 50
    // editable: true
  },
  {
    name: 'zone',
    width: 50
    // editable: true
  },
  {
    name: 'subZone',
    width: 70
    // editable: true
  },
  {
    name: 'surveyName',
    width: 120
    // editable: true
  },
  {
    name: 'TargetAll',
    width: 70,
    // editable: true,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'sum'
  },
  {
    name: 'TargetNewArea',
    width: 70,
    // editable: true,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'sum'
  },
  {
    name: 'TargetCaneStump',
    width: 70,
    // editable: true,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'sum'
  },
  {
    name: 'TargetDemolishStump',
    width: 70,
    // editable: true,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'sum'
  },
  {
    name: 'TargetCaneTon',
    width: 80,
    // editable: true,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'sum'
  },
  {
    name: 'TonProve',
    width: 90,
    // editable: true,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'sum'
  },

  {
    name: 'AreaProve',
    width: 70,
    // editable: true,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'sum'
  },
  {
    name: 'MCSSAreaCount',
    width: 70,
    // editable: true,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'sum'
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
    // sorttype: 'integer',
    searchoptions: { sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge'] },
    jsonmap(item: any) {
      return Math.round((item.MCSSAreaCount * 100) / item.TargetAll);
    }
  },
  {
    name: 'BudgetProve',
    width: 95,
    // editable: true,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'sum'
  },
  {
    name: 'LoanCurrent',
    width: 100,
    // editable: true,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryType: 'sum'
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
      return Math.round(item.BudgetProve - item.LoanCurrent);
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
