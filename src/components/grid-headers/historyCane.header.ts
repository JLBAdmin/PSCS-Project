import {
  integerTemplate,
  number2Template,
  number4Template
} from '../jquery-ui/formatTemplate';

export const colName = [
  'act',
  'quota',
  'สัญญาตัน(2562/63)',
  'ส่งจริง(2562/63)',
  '%ส่งจริง(2562/63)',
  'เกรด(2562/63)',
  'รับเงินส่งเสริม(2562/63)',
  'บาทต่อตัน(2562/63)',
  'ปลายฝน(2562/63)',
  'ปลายฝนรื้อตอ(2562/63)',
  'อ้อยต้นฝน(2562/63)',
  'อ้อยตอ1(2562/63)',
  'อ้อยตอ2(2562/63)',
  'อ้อยตอ3+(2562/63)',
  'สัญญาตัน(2563/64)',
  'ส่งจริง(2563/64)',
  '%ส่งจริง(2563/64)',
  'เกรด(2563/64)',
  'รับเงินส่งเสริม(2563/64)',
  'บาทต่อตัน(2563/64)',
  'ปลายฝน(2563/64)',
  'ปลายฝนรื้อตอ(2563/64)',
  'อ้อยต้นฝน(2563/64)',
  'อ้อยตอ1(2563/64)',
  'อ้อยตอ2(2563/64)',
  'อ้อยตอ3+(2563/64)',
  'สัญญาตัน(2564/65)',
  'ส่งจริง(2564/65)',
  '%ส่งจริง(2564/65)',
  'เกรด(2564/65)',
  'รับเงินส่งเสริม(2564/65)',
  'บาทต่อตัน(2564/65)',
  'ปลายฝน(2564/65)',
  'ปลายฝนรื้อตอ(2564/65)',
  'อ้อยต้นฝน(2564/65)',
  'อ้อยตอ1(2564/65)',
  'อ้อยตอ2(2563/64)',
  'อ้อยตอ3+(2564/65)',
  'สัญญาตัน(2565/66)',
  'ส่งจริง(2565/66)',
  '%ส่งจริง(2565/66)',
  'เกรด(2565/66)',
  'รับเงินส่งเสริม(2565/66)',
  'บาทต่อตัน(2565/66)',
  'ปลายฝน(2565/66)',
  'ปลายฝนรื้อตอ(2565/66)',
  'อ้อยต้นฝน(2565/66)',
  'อ้อยตอ1(2565/66)',
  'อ้อยตอ2(2565/66)',
  'อ้อยตอ3+(2565/66)',
  'ปีการส่งเสริม'
];

export const colModel = [
  {
    name: 'act',
    template: 'actions',
    width: 100,
    formatoptions: {
      keys: true // we want use [Enter] key to save the row and [Esc] to cancel editing.
    },
    frozen: true
  },
  {
    name: 'quota',
    // label: 'โควตา',
    index: 'quota',
    width: 100,
    align: 'center',
    template: integerTemplate,
    frozen: true
  },
  {
    name: 'budget_grade',
    // label: 'สัญญาตัน(2562/63)',
    width: 50
    // template: number2Template
  },
  {
    name: 'history1_ton_contract',
    // label: 'สัญญาตัน(2562/63)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history1_ton_real',
    // label: 'ส่งจริง(2562/63)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history1_ton_per',
    // label: '%ส่ง(2562/63)',
    width: 100,
    template: number4Template
  },
  {
    name: 'history1_grad',
    // label: 'เกรด(2562/63)',
    width: 100,
    formatter: 'string'
  },
  {
    name: 'history1_money',
    // label: 'รับเงิน(2562/63)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history1_cane_ton',
    // label: 'รับเงิน(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history1_canetype01',
    // label: 'ปลายฝน(2562/63)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history1_canetype02',
    // label: 'ปลายฝนรื้อตอ(2562/63)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history1_canetype03',
    // label: 'ต้นฝน(2562/63)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history1_canetype04',
    // label: 'ตอ1(2562/63)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history1_canetype05',
    // label: 'ตอ2(2562/63)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history1_canetype06',
    // label: 'ตอ3(2562/63)',
    width: 100,
    template: number2Template
  },

  {
    name: 'history2_ton_contract',
    // label: 'สัญญาตัน(2563/64)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history2_ton_real',
    // label: 'ส่งจริง(2563/64)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history2_ton_per',
    // label: '%ส่ง(2563/64)',
    width: 100,
    template: number4Template
  },
  {
    name: 'history2_grad',
    // label: 'เกรด(2563/64)',
    width: 100,
    formatter: 'string'
  },
  {
    name: 'history2_money',
    // label: 'รับเงิน(2563/64)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history2_cane_ton',
    // label: 'รับเงิน(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history2_canetype01',
    // label: 'ปลายฝน(2563/64)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history2_canetype02',
    // label: 'ปลายฝนรื้อตอ(2563/64)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history2_canetype03',
    // label: 'ต้นฝน(2563/64)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history2_canetype04',
    // label: 'ตอ1(2563/64)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history2_canetype05',
    // label: 'ตอ2(2563/64)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history2_canetype06',
    // label: 'ตอ3(2563/64)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history3_ton_contract',
    // label: 'สัญญาตัน(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history3_ton_real',
    // label: 'ส่งจริง(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history3_ton_per',
    // label: '%ส่ง(2564/65)',
    width: 100,
    template: number4Template
  },
  {
    name: 'history3_grad',
    // label: 'เกรด(2564/65)',
    width: 100,
    formatter: 'string'
  },
  {
    name: 'history3_money',
    // label: 'รับเงิน(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history3_cane_ton',
    // label: 'รับเงิน(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history3_canetype01',
    // label: 'ปลายฝน(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history3_canetype02',
    // label: 'ปลายฝนรื้อตอ(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history3_canetype03',
    // label: 'ต้นฝน(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history3_canetype04',
    // label: 'ตอ1(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history3_canetype05',
    // label: 'ตอ2(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history3_canetype06',
    // label: 'ตอ3(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history4_ton_contract',
    // label: 'สัญญาตัน(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history4_ton_real',
    // label: 'ส่งจริง(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history4_ton_per',
    // label: '%ส่ง(2564/65)',
    width: 100,
    template: number4Template
  },
  {
    name: 'history4_grad',
    // label: 'เกรด(2564/65)',
    width: 100,
    formatter: 'string'
  },
  {
    name: 'history4_money',
    // label: 'รับเงิน(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history4_cane_ton',
    // label: 'รับเงิน(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history4_canetype01',
    // label: 'ปลายฝน(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history4_canetype02',
    // label: 'ปลายฝนรื้อตอ(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history4_canetype03',
    // label: 'ต้นฝน(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history4_canetype04',
    // label: 'ตอ1(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history4_canetype05',
    // label: 'ตอ2(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'history4_canetype06',
    // label: 'ตอ3(2564/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'cropYear',
    // label: 'ปีการผลิต',
    width: 100
  }
];

export const colNameImp = [
  'act',
  'quota',
  'budget_grade',
  'history1_ton_contract',
  'history1_ton_real',
  'history1_ton_per',
  'history1_grad',
  'history1_money',
  'history1_cane_ton',
  'history1_canetype01',
  'history1_canetype02',
  'history1_canetype03',
  'history1_canetype04',
  'history1_canetype05',
  'history1_canetype06',
  'history2_ton_contract',
  'history2_ton_real',
  'history2_ton_per',
  'history2_grad',
  'history2_money',
  'history2_cane_ton',
  'history2_canetype01',
  'history2_canetype02',
  'history2_canetype03',
  'history2_canetype04',
  'history2_canetype05',
  'history2_canetype06',
  'history3_ton_contract',
  'history3_ton_real',
  'history3_ton_per',
  'history3_grad',
  'history3_money',
  'history3_cane_ton',
  'history3_canetype01',
  'history3_canetype02',
  'history3_canetype03',
  'history3_canetype04',
  'history3_canetype05',
  'history3_canetype06',
  'history4_ton_contract',
  'history4_ton_real',
  'history4_ton_per',
  'history4_grad',
  'history4_money',
  'history4_cane_ton',
  'history4_canetype01',
  'history4_canetype02',
  'history4_canetype03',
  'history4_canetype04',
  'history4_canetype05',
  'history4_canetype06',
  'cropYear'
];
