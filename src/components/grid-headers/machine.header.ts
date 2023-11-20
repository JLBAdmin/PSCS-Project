import { numberTemplate } from '../jquery-ui/formatTemplate';

export const colName = [
  'act',
  'โควตา',
  'รถไถล็ก',
  'รถเพลาเดียว < 90hp',
  'รถเพลาเดียว 90 - 120hp',
  'รถเพลาเดียว > 120hp',
  'รถสองเพลา < 90hp',
  'รถสองเพลา 90 - 120hp',
  'รถสองเพลา > 120hp',
  'ผานไถบุก 3 จาน',
  'ผานไถบุก 4 จาน',
  'Land plane',
  'ริปเปอร์ 3 ขา',
  'ริปเปอร์ 5 ขา',
  'ริปเปอร์ 7 ขา',
  'ผานไถพรวน 7 จาน',
  'ผานไถพรวน 10 จาน',
  'ผานไถพรวน 18 จาน',
  'ผานไถพรวน 20 จาน',
  'ผานไถพรวน 24 จาน',
  'มินิคอมบาย',
  'พาวเวอร์แฮโร่',
  'โรตารี',
  'เครืองปลูก ร่องเดี่ยว',
  'เครืองปลูก ร่องคู่',
  'เครืองปลูก อ้อยท่อน',
  'บูมสเปรย์(รถเล็ก)',
  'บูมสเปรย์(รถใหญ๋)',
  'ผานพรวนคลุกใบ',
  'คัทอะเวย์',
  'คราดสปริง(SRT6)',
  'จานพรวนเล็ก',
  'จอบหมุนเล็ก',
  'จอบหมุนใหญ่',
  'เครื่องใส่ปุ๋ยกลางร่อง',
  'สาลี่รถไถลาก',
  'รถหกล้อ',
  'รถสิบล้อ',
  'รถสิบล้อพ่วง',
  'เครื่องสางใบอ้อย',
  'เครื่องตัดวางกอง',
  'รถไถคีบ',
  'รถคีบสามล้อ',
  'รถตัดอ้อยเล็ก < 300hp',
  'รถตัดอ้อยใหญ่ > 300hp'
];

export const colModel = [
  {
    name: 'act',
    template: 'actions',
    width: 70,
    formatoptions: {
      keys: true // we want use [Enter] key to save the row and [Esc] to cancel editing.
    }
  },

  {
    name: 'quotaId',
    label: 'โควตา',
    width: 70,
    align: 'center',
    frozen: true,
    // template: integerTemplate,
    editable: true
  },
  {
    name: 'mini_tractor',
    label: 'รถไถล็ก',
    width: 70,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'mini_tractor1_under_90',
    label: 'รถเพลาเดียว < 90hp',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'mini_tractor1_under_120',
    label: 'รถเพลาเดียว 90 - 120hp',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'mini_tractor1_over_120',
    label: 'รถเพลาเดียว > 120hp',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'mini_tractor2_under_90',
    label: 'รถสองเพลา < 90hp',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'mini_tractor2_under_120',
    label: 'รถสองเพลา 90 - 120hp',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'mini_tractor2_over_120',
    label: 'รถสองเพลา > 120hp',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'pioneer_plow_3',
    label: 'ผานไถบุก 3 จาน',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'pioneer_plow_4',
    label: 'ผานไถบุก 4 จาน',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'land_plane',
    label: 'Land plane',
    width: 120,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'ripper_3',
    label: 'ริปเปอร์ 3 ขา',
    width: 120,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'ripper_5',
    label: 'ริปเปอร์ 5 ขา',
    width: 120,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'ripper_7',
    label: 'ริปเปอร์ 7 ขา',
    width: 120,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'plow_7',
    label: 'ผานไถพรวน 7 จาน',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'plow_10',
    label: 'ผานไถพรวน 10 จาน',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'plow_18',
    label: 'ผานไถพรวน 18 จาน',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'plow_20',
    label: 'ผานไถพรวน 20 จาน',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'plow_24',
    label: 'ผานไถพรวน 24 จาน',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'mini_combo',
    label: 'มินิคอมบาย',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'haro_power',
    label: 'พาวเวอร์แฮโร่',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'rotary',
    label: 'โรตารี',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'planting_tools_1',
    label: 'เครืองปลูก ร่องเดี่ยว',
    width: 120,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'planting_tools_2',
    label: 'เครืองปลูก ร่องคู่',
    width: 120,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'planting_tools_billet',
    label: 'เครืองปลูก อ้อยท่อน',
    width: 120,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'mini_boom_spray',
    label: 'บูมสเปรย์(รถเล็ก)',
    width: 120,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'big_boom_spray',
    label: 'บูมสเปรย์(รถใหญ๋)',
    width: 120,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'plow_mix',
    label: 'ผานพรวนคลุกใบ',
    width: 120,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'cutaway',
    label: 'คัทอะเวย์',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'spring_rake',
    label: 'คราดสปริง(SRT6)',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'small_plate',
    label: 'จานพรวนเล็ก',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'small_rotary_hoe',
    label: 'จอบหมุนเล็ก',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'big_rotary_hoe',
    label: 'จอบหมุนใหญ่',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'middle_groove_fertilizer',
    label: 'เครื่องใส่ปุ๋ยกลางร่อง',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'wheelbarrow',
    label: 'สาลี่รถไถลาก',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'wheels_6',
    label: 'รถหกล้อ',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'wheeler_10_Single',
    label: 'รถสิบล้อ',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'wheeler_10_trailer',
    label: 'รถสิบล้อพ่วง',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'carding_machine',
    label: 'เครื่องสางใบอ้อย',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'cutting_machine_layingPiles',
    label: 'เครื่องตัดวางกอง',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'fork_over_tractor',
    label: 'รถไถคีบ',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'fork_over_wheeler_3',
    label: 'รถคีบสามล้อ',
    width: 100,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'cutter_under_300',
    label: 'รถตัดอ้อยเล็ก < 300hp',
    width: 150,
    template: numberTemplate,
    editable: true
  },
  {
    name: 'cutter_over_300',
    label: 'รถตัดอ้อยใหญ่ > 300hp',
    width: 150,
    template: numberTemplate,
    editable: true
  }
];

// export const colModel = [
//   // { name: 'id', label: 'ลำดับ', width: 50, align: 'center' },
//   { name: 'Id', label: 'ID', width: 70, align: 'center' },
//   { name: 'QuotaId', label: 'โควตา', width: 70, align: 'center' },
//   { name: 'Year', label: 'ปีการผลิต', width: 120 },
//   { name: 'AmountMachine1', label: 'ชื่อ', width: 120 },
//   { name: 'AmountMachine2', label: 'นามสกุล', width: 50 },
//   { name: 'AmountMachine3', label: 'รถไถ', width: 70 },
//   { name: 'AmountMachine4', label: '< 90hp', width: 50 },
//   { name: 'AmountMachine5', label: '90 - 120hp', width: 150 },
//   { name: 'AmountMachine6', label: '> 120hp', width: 120 },
//   { name: 'AmountMachine7', label: '< 90hp', width: 50 },
//   { name: 'AmountMachine8', label: '90 - 120hp', width: 150 },
//   { name: 'AmountMachine9', label: '> 120hp', width: 120 },
//   { name: 'AmountMachine10', label: 'ผาน 3', width: 50 },
//   { name: 'AmountMachine11', label: 'ผาน 4', width: 50 },
//   { name: 'AmountMachine12', label: 'Land plane', width: 120 },
//   { name: 'AmountMachine13', label: '3 ขา', width: 50 },
//   { name: 'AmountMachine14', label: '5 ขา', width: 50 },
//   { name: 'AmountMachine15', label: '7 ขา', width: 50 },
//   { name: 'AmountMachine16', label: '7 จาน', width: 100 },
//   { name: 'AmountMachine17', label: '10 จาน', width: 100 },
//   { name: 'AmountMachine18', label: '18 จาน', width: 100 },
//   { name: 'AmountMachine19', label: '20 จาน', width: 100 },
//   { name: 'AmountMachine20', label: '24 จาน', width: 100 },
//   { name: 'AmountMachine21', label: 'มินิคอมบาย', width: 100 },
//   { name: 'AmountMachine22', label: 'พาวเวอร์แฮโร่', width: 100 },
//   { name: 'AmountMachine23', label: 'โรตารี', width: 100 }
// ];
// import {
//   number2Template,
//   numberTemplate,
// } from '../jquery-ui/formatTemplate';
