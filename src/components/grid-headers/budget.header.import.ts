import axios from 'axios';
import useSWR from 'swr';

import {
  integerTemplate,
  number2Template,
  numberTemplate
} from '../jquery-ui/formatTemplate';

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// eslint-disable-next-line react-hooks/rules-of-hooks
export const { data } = useSWR([`/api/crop/get/`], fetcher, {});

export const colName = [
  'act',
  'ปีส่งเสริม',
  'โควตา',
  'กลุ่ม',
  'ครั้งที่ขอ',
  'เขตส่งเสริม',
  'นักส่งส่งเสริม',
  'รองฯอ้อย',
  'จำนวนตัน',
  'สัญญาตันเพิ่ม',
  'รวมสัญญาตัน',
  'อ้อย PS Model(จำนวนไร่)',
  '0สัญญาตัน(PS Model)',
  '0เงินบำรุง(PS Model)',
  '0ปัจจัยการผลิต(PS Model)',
  '0งบประมาณรวม(PS Model)',
  '0อนุมัติแล้ว(PS Model)',
  'อ้อย PS Model(ขอเงินครั้งนี้)',
  '0บาท/ตัน(PS Model)',
  'อ้อยปลายฝน(จำนวนไร่)',
  '1สัญญาตัน(ปลายฝน)',
  '1เงินบำรุง(ปลายฝน)',
  '1ปัจจัยการผลิต(ปลายฝน)',
  '1งบประมาณรวม(ปลายฝน)',
  '1อนุมัติแล้ว(ปลายฝน)',
  'อ้อยปลายฝน(ขอเงินครั้งนี้)',
  '1บาท/ตัน(ปลายฝน)',
  'อ้อยปลายฝนรื้อตอ(จำนวนไร่)',
  '2สัญญาตัน(รื้อตอ)',
  '2เงินบำรุง(รื้อตอ)',
  '2ปัจจัยการผลิต(รื้อตอ)',
  '2งบประมาณรวม(รื้อตอ)',
  '2อนุมัติแล้ว(รื้อตอ)',
  'อ้อยปลายฝนรื้อตอ(ขอเงินครั้งนี้)',
  '2บาท/ตัน(รื้อตอ)',
  'อ้อยตอตามเกรด(จำนวนไร่)',
  '3สัญญาตัน(ตามเกรด)',
  '3เงินบำรุง(ตามเกรด)',
  '3ปัจจัยการผลิต(ตามเกรด)',
  '3งบประมาณรวม(ตามเกรด)',
  '3อนุมัติแล้ว(ตามเกรด)',
  'อ้อยตอตามเกรด(ขอครั้งนี้)',
  '3บาท/ตัน(ตามเกรด)',
  'อ้อยต้นฝน(จำนวนไร่)',
  '4สัญญาตัน(ต้นฝน)',
  '4เงินบำรุง(ต้นฝน)',
  '4ปัจจัยการผลิต(ต้นฝน)',
  '4งบประมาณรวม(ต้นฝน)',
  '4อนุมัติแล้ว(ต้นฝน)',
  'อ้อยต้นฝน(ขอครั้งนี้)',
  '4บาท/ตัน(ต้นฝน)',
  'อ้อยอินทรีย์(จำนวนไร่)',
  '5สัญญาตัน(อ้อยอินทรีย์)',
  '5เงินบำรุง(อ้อยอินทรีย์)',
  '5ปัจจัยการผลิต(อ้อยอินทรีย์)',
  '5งบประมาณรวม(อ้อยอินทรีย์)',
  '5อนุมัติแล้ว(อ้อยอินทรีย์)',
  'อ้อยอินทรีย์(ขอครั้งนี้)',
  '5บาท/ตัน(ต้นฝน)',
  '6จำนวนไร่(รับคนงาน)',
  '6สัญญาตัน(รับคนงาน)',
  '6เงินบำรุง(รับคนงาน)',
  '6ปัจจัยการผลิต(รับคนงาน)',
  '6งบประมาณรวม(รับคนงาน)',
  '6อนุมัติแล้ว(รับคนงาน)',
  'รับคนงาน(ขอครั้งนี้)',
  '6บาท/ตัน(รับคนงาน)',
  '7จำนวนไร่(โครงการ)',
  '7สัญญาตัน(โครงการ)',
  '7เงินบำรุง(โครงการ)',
  '7ปัจจัยการผลิต(โครงการ)',
  '7งบประมาณรวม(โครงการ)',
  '7อนุมัติแล้ว(โครงการ)',
  'โครงการ(ขอครั้งนี้)',
  '7บาท/ตัน(โครงการ)'
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
    name: 'cropYear',
    // label: 'ปีส่งเสริม',
    width: 100,
    align: 'center',
    frozen: true,
    edittype: 'select',
    editoptions: {
      value: `${data[0]}:${data[0]};${data[1]}:${data[1]}`,
      defaultValue: `${data[0]}`
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: `${data[1]}:${data[1]};${data[0]}:${data[0]};`
    }
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
    name: 'zone',
    // label: 'นักส่งเสริม',
    width: 100,
    editable: false
    // template: numberTemplate
  },
  {
    name: 'subZone',
    // label: 'นักส่งเสริม',
    width: 100
    // template: numberTemplate
  },
  {
    name: 'manager',
    // label: 'รองฯอ้อย',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'request_num',
    // label: 'ครั้งที่ขอ',
    width: 70,
    template: numberTemplate,
    frozen: true
  },
  {
    name: 'ton_contract',
    // label: 'จำนวนตัน',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'add_ton_contract',
    // label: 'สัญญาตันเพิ่ม',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'total_ton_contract',
    // label: 'รวมสัญญาตัน',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'promotion0_area_contract',
    // label: 'จำนวนไร่(ปลายฝน)',
    width: 150,
    template: numberTemplate
  },
  {
    name: 'promotion0_ton_contract',
    // label: 'สัญญาตัน(ปลายฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion0_money',
    // label: 'เงินบำรุง(ปลายฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion0_factor_inputs',
    // label: 'ปัจจัยการผลิต(ปลายฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion0_budget_total',
    // label: 'งบประมาณรวม(ปลายฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion0_budget_approved',
    // label: 'อนุมัติแล้ว(ปลายฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion0_budget_use',
    // label: 'ขอครั้งนี้(ปลายฝน)',
    width: 150,
    template: number2Template
  },
  {
    name: 'promotion0_baht_ton',
    // label: 'บาท/ตัน(ปลายฝน)',
    width: 100,
    template: number2Template
  },
  {
    name: 'promotion1_area_contract',
    // label: 'จำนวนไร่(ปลายฝน)',
    width: 150,
    template: numberTemplate
  },
  {
    name: 'promotion1_ton_contract',
    // label: 'สัญญาตัน(ปลายฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion1_money',
    // label: 'เงินบำรุง(ปลายฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion1_factor_inputs',
    // label: 'ปัจจัยการผลิต(ปลายฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion1_budget_total',
    // label: 'งบประมาณรวม(ปลายฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion1_budget_approved',
    // label: 'อนุมัติแล้ว(ปลายฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion1_budget_use',
    // label: 'ขอครั้งนี้(ปลายฝน)',
    width: 150,
    template: number2Template
  },
  {
    name: 'promotion1_baht_ton',
    // label: 'บาท/ตัน(ปลายฝน)',
    width: 100,
    template: number2Template
  },
  {
    name: 'promotion2_area_contract',
    // label: 'จำนวนไร่(รื้อตอ)',
    width: 150,
    template: numberTemplate
  },
  {
    name: 'promotion2_ton_contract',
    // label: 'สัญญาตัน(รื้อตอ)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion2_money',
    // label: 'เงินบำรุง(รื้อตอ)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion2_factor_inputs',
    // label: 'ปัจจัยการผลิต(รื้อตอ)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion2_budget_total',
    // label: 'งบประมาณรวม(รื้อตอ)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion2_budget_approved',
    // label: 'อนุมัติแล้ว(รื้อตอ)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion2_budget_use',
    // label: 'ขอครั้งนี้(รื้อตอ)',
    width: 150,
    template: number2Template
  },
  {
    name: 'promotion2_baht_ton',
    // label: 'บาท/ตัน(รื้อตอ)',
    width: 100,
    template: number2Template
  },
  {
    name: 'promotion3_area_contract',
    // label: 'จำนวนไร่(ตามเกรด)',
    width: 150,
    template: number2Template
  },
  {
    name: 'promotion3_ton_contract',
    // label: 'สัญญาตัน(ตามเกรด)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion3_money',
    // label: 'เงินบำรุง(ตามเกรด)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion3_factor_inputs',
    // label: 'ปัจจัยการผลิต(ตามเกรด)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion3_budget_total',
    // label: 'งบประมาณรวม(ตามเกรด)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion3_budget_approved',
    // label: 'อนุมัติแล้ว(ตามเกรด)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion3_budget_use',
    // label: 'ขอครั้งนี้(ตามเกรด)',
    width: 150,
    template: number2Template
  },
  {
    name: 'promotion3_baht_ton',
    // label: 'บาท/ตัน(ตามเกรด)',
    width: 100,
    template: number2Template
  },
  {
    name: 'promotion4_area_contract',
    // label: 'จำนวนไร่(ต้นฝน)',
    width: 150,
    template: numberTemplate
  },
  {
    name: 'promotion4_ton_contract',
    // label: 'สัญญาตัน(ต้นฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion4_money',
    // label: 'เงินบำรุง(ต้นฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion4_factor_inputs',
    // label: 'ปัจจัยการผลิต(ต้นฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion4_budget_total',
    // label: 'งบประมาณรวม(ต้นฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion4_budget_approved',
    // label: 'อนุมัติแล้ว(ต้นฝน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion4_budget_use',
    // label: 'ขอครั้งนี้(ต้นฝน)',
    width: 150,
    template: number2Template
  },
  {
    name: 'promotion4_baht_ton',
    // label: 'บาท/ตัน(ต้นฝน)',
    width: 100,
    template: number2Template
  },
  {
    name: 'promotion5_area_contract',
    // label: 'จำนวนไร่(อ้อยอินทรีย์)',
    width: 150,
    template: number2Template
  },
  {
    name: 'promotion5_ton_contract',
    // label: 'สัญญาตัน(อ้อยอินทรีย์)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion5_money',
    // label: 'เงินบำรุง(อ้อยอินทรีย์)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion5_factor_inputs',
    // label: 'ปัจจัยการผลิต(อ้อยอินทรีย์)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion5_budget_total',
    // label: 'งบประมาณรวม(อ้อยอินทรีย์)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion5_budget_approved',
    // label: 'อนุมัติแล้ว(อ้อยอินทรีย์)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion5_budget_use',
    // label: 'ขอครั้งนี้(อ้อยอินทรีย์)',
    width: 150,
    template: number2Template
  },
  {
    name: 'promotion5_baht_ton',
    // label: 'บาท/ตัน(อ้อยอินทรีย์)',
    width: 100,
    template: number2Template
  },
  {
    name: 'promotion6_area_contract',
    // label: 'จำนวนไร่(รับคนงาน)',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'promotion6_ton_contract',
    // label: 'สัญญาตัน(รับคนงาน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion6_money',
    // label: 'เงินบำรุง(รับคนงาน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion6_factor_inputs',
    // label: 'ปัจจัยการผลิต(รับคนงาน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion6_budget_total',
    // label: 'งบประมาณรวม(รับคนงาน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion6_budget_approved',
    // label: 'อนุมัติแล้ว(รับคนงาน)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion6_budget_use',
    // label: 'ขอครั้งนี้(รับคนงาน)',
    width: 150,
    template: number2Template
  },
  {
    name: 'promotion6_baht_ton',
    // label: 'บาท/ตัน(รับคนงาน)',
    width: 100,
    template: number2Template
  },
  {
    name: 'promotion7_area_contract',
    // label: 'จำนวนไร่(โครงการ)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion7_ton_contract',
    // label: 'สัญญาตัน(โครงการ)',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'promotion7_money',
    // label: 'เงินบำรุง(โครงการ)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion7_factor_inputs',
    // label: 'ปัจจัยการผลิต(โครงการ)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion7_budget_total',
    // label: 'งบประมาณรวม(โครงการ)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion7_budget_approved',
    // label: 'อนุมัติแล้ว(โครงการ)',
    width: 120,
    template: number2Template
  },
  {
    name: 'promotion7_budget_use',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    template: number2Template
  },
  {
    name: 'promotion7_baht_ton',
    // label: 'บาท/ตัน(โครงการ)',
    width: 100,
    template: number2Template
  }
];

export const colNameImp = [
  'act',
  'cropYear',
  'quota',
  'zone',
  'subZone',
  'manager',
  'request_num',
  'ton_contract',
  'add_ton_contract',
  'total_ton_contract',
  'promotion0_area_contract',
  'promotion0_ton_contract',
  'promotion0_money',
  'promotion0_factor_inputs',
  'promotion0_budget_total',
  'promotion0_budget_approved',
  'promotion0_budget_use',
  'promotion0_baht_ton',
  'promotion1_area_contract',
  'promotion1_ton_contract',
  'promotion1_money',
  'promotion1_factor_inputs',
  'promotion1_budget_total',
  'promotion1_budget_approved',
  'promotion1_budget_use',
  'promotion1_baht_ton',
  'promotion2_area_contract',
  'promotion2_ton_contract',
  'promotion2_money',
  'promotion2_factor_inputs',
  'promotion2_budget_total',
  'promotion2_budget_approved',
  'promotion2_budget_use',
  'promotion2_baht_ton',
  'promotion3_area_contract',
  'promotion3_ton_contract',
  'promotion3_money',
  'promotion3_factor_inputs',
  'promotion3_budget_total',
  'promotion3_budget_approved',
  'promotion3_budget_use',
  'promotion3_baht_ton',
  'promotion4_area_contract',
  'promotion4_ton_contract',
  'promotion4_money',
  'promotion4_factor_inputs',
  'promotion4_budget_total',
  'promotion4_budget_approved',
  'promotion4_budget_use',
  'promotion4_baht_ton',
  'promotion5_area_contract',
  'promotion5_ton_contract',
  'promotion5_money',
  'promotion5_factor_inputs',
  'promotion5_budget_total',
  'promotion5_budget_approved',
  'promotion5_budget_use',
  'promotion5_baht_ton',
  'promotion6_area_contract',
  'promotion6_ton_contract',
  'promotion6_money',
  'promotion6_factor_inputs',
  'promotion6_budget_total',
  'promotion6_budget_approved',
  'promotion6_budget_use',
  'promotion6_baht_ton',
  'promotion7_area_contract',
  'promotion7_ton_contract',
  'promotion7_money',
  'promotion7_factor_inputs',
  'promotion7_budget_total',
  'promotion7_budget_approved',
  'promotion7_budget_use',
  'promotion7_baht_ton'
];
