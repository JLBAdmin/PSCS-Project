import { integerTemplate, numberTemplate } from '../jquery-ui/formatTemplate';

export const colName = [
  'act',
  'ปีส่งเสริม',
  'โควตา',
  'พื้นที่ใหม่',
  'พื้นที่รื้นตอ',
  'อ้อยใหม่ 46-0-0',
  'อ้อยใหม่ 16-20-0',
  'อ้อยใหม่ 18-46-0',
  'อ้อยใหม่ 20-8-20',
  'อ้อยใหม่ 16-8-8',
  'อ้อยใหม่ 20-10-10 ',
  'อ้อยใหม่ 21-7-18',
  'พื้นที่ตอ',
  'อ้อยตอ 46-0-0',
  'อ้อยตอ 16-20-0',
  'อ้อยตอ 18-46-0',
  'อ้อยตอ 20-8-20',
  'อ้อยตอ 16-8-8',
  'อ้อยตอ 20-10-10 ',
  'อ้อยตอ 21-7-18',
  'อ้อยปลายฝนรื้อตอ(จำนวนไร่)',
  'อ้อยปลายฝนรื้อตอ(สัญญาตัน)',
  'อ้อยปลายฝนรื้อตอ(ขอเงินครั้งนี้)',
  'อ้อยปลายฝนรื้อตอ(การรับเงิน)',
  'อ้อยตอตามเกรด(จำนวนไร่)',
  'อ้อยตอตามเกรด(สัญญาตัน)',
  'อ้อยตอตามเกรด(ขอครั้งนี้)',
  'อ้อยตอตามเกรด(การรับเงิน)',
  'อ้อยต้นฝน(จำนวนไร่)',
  'อ้อยต้นฝน(สัญญาตัน)',
  'อ้อยต้นฝน(ขอครั้งนี้)',
  'อ้อยต้นฝน(การรับเงิน)',
  'อ้อยอินทรีย์(จำนวนไร่)',
  'อ้อยอินทรีย์(สัญญาตัน)',
  'อ้อยอินทรีย์(ขอครั้งนี้)',
  'อ้อยอินทรีย์(การรับเงิน)',
  'รับคนงาน(ขอครั้งนี้)',
  'ประเภทโครงการ',
  'โครงการ(ขอครั้งนี้)',
  'วันที่ปรับปรุง',
  'ผู้ปรับปรุง'
];

export const colModel = [
  {
    name: 'act',
    template: 'actions',
    width: 120,
    formatoptions: {
      keys: true // we want use [Enter] key to save the row and [Esc] to cancel editing.
    }
  },
  {
    name: 'cropYear',
    label: 'ปีส่งเสริม',
    width: 50,
    frozen: true
    // template: numberTemplate
  },
  {
    name: 'quotaId',
    label: 'โควตา',
    width: 70,
    align: 'center',
    frozen: true,
    template: integerTemplate
  },
  {
    name: 'area_new_cane',
    label: 'พื้นที่อ้อยใหม่',
    width: 70,
    template: numberTemplate
  },
  {
    name: 'area_demolish_cane',
    label: 'พื้นที่รื้อตอ',
    width: 50,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_new_cane_46_0_0',
    label: 'ปุ๋ยอ้อยใหม่ 46-0-0',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_new_cane_16_20_0',
    label: 'ปุ๋ยอ้อยใหม่ 16-20-0',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_new_cane_18_46_0',
    label: 'ปุ๋ยอ้อยใหม่ 18-46-0',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_new_cane_20_8_20',
    label: 'ปุ๋ยอ้อยใหม่ 20-8-20',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_new_cane_16_8_8',
    label: 'ปุ๋ยอ้อยใหม่ 16-8-8',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_new_cane_20_10_10',
    label: 'ปุ๋ยอ้อยใหม่ 20-10-10',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_new_cane_21_7_18',
    label: 'ปุ๋ยอ้อยใหม่ 21-7-18',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'area_stump_cane',
    label: 'พื้นที่อ้อยตอ',
    width: 70,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_stump_cane_46_0_0',
    label: 'ปุ๋ยอ้อยตอ 46-0-0',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_stump_cane_16_20_0',
    label: 'ปุ๋ยอ้อยตอ 16-20-0',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_stump_cane_18_46_0',
    label: 'ปุ๋ยอ้อยตอ 18-46-0',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_stump_cane_20_8_20',
    label: 'ปุ๋ยอ้อยตอ 20-8-20',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_stump_cane_16_8_8',
    label: 'ปุ๋ยอ้อยตอ 16-8-8',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_stump_cane_20_10_10',
    label: 'ปุ๋ยอ้อยตอ 20-10-10',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'fertilizer_recipes_stump_cane_21_7_18',
    label: 'ปุ๋ยอ้อยตอ 21-7-18',
    width: 120,
    template: numberTemplate
  },
  {
    name: 'plow_marks_3',
    label: 'ผาน 3',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'oil_plow_marks_3',
    label: 'น้ำมันผาน 3',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'plow_marks_4',
    label: 'ผาน 4',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'oil_plow_marks_4',
    label: 'น้ำมันผาน 4',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'plow_marks_7',
    label: 'ผาน 7',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'oil_plow_marks_7',
    label: 'น้ำมันผาน 7',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'plow_marks_ripper',
    label: 'ริปเปอร์',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'oil_plow_marks_ripper',
    label: 'น้ำมัน ริปเปอร์',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'plow_marks_22',
    label: 'ผาน 22',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'oil_plow_marks_22',
    label: 'น้ำมันผาน 22',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'plow_marks_rotary',
    label: 'โรตารี่',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'oil_plow_marks_rotary',
    label: 'น้ำมันโรตารี่',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'plow_marks_mini_comby',
    label: 'มินิคอมบาย',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'oil_plow_marks_mini_comby',
    label: 'น้ำมันมินิคอมบาย',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'planting_machine',
    label: 'เครื่องปลูกอ้อย',
    width: 100,
    template: numberTemplate
  },
  {
    name: 'oil_planting_machine',
    label: 'น้ำมันเครื่องปลูก',
    width: 100,
    template: numberTemplate
  }
];
