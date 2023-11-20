import 'select2/dist/css/select2.css';
import 'select2/dist/js/select2';

import { number2Template } from '../jquery-ui/formatTemplate';

export const colName = [
  'ประเภท',
  'รายการ',
  'รายละเอียด',
  'งบประมาณ',
  'มูลค่าถึงปัจจุบัน',
  'จำนวนถึงวันปัจจุบัน'
];

export const colModel = [
  {
    name: 'ReportGrp',
    // label: 'รหัสงบประมาณ',
    width: 290,
    editable: false
  },
  {
    name: 'Seq1Name',
    // label: 'มูลค่า',
    width: 150,
    editable: false
  },
  {
    name: 'Seq2Name',
    // label: 'จำนวนหน่วยปีก่อน',
    width: 250,
    editable: false
  },
  {
    name: 'Budgets',
    // label: 'จำนวนหน่วยปีก่อน',
    width: 250,
    // template: number2Template,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryTpl: '<b>{0}</b>',
    summaryType: 'sum'
  },
  {
    name: 'AmountTotal',
    // label: 'จำนวนหน่วยปีก่อน',
    width: 250,
    // template: number2Template,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryTpl: '<b>{0}</b>',
    summaryType: 'sum'
  },
  {
    name: 'TotalCurrent',
    // label: 'จำนวนหน่วยปีก่อน',
    width: 250,
    // template: number2Template,
    template: number2Template,
    sorttype: 'number',
    formatter: 'number',
    summaryTpl: '<b>{0}</b>',
    summaryType: 'sum'
  }
];
