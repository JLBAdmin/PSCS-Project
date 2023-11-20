import { number2Template, numberTemplate } from '../jquery-ui/formatTemplate';

// declare const $: any;

export const colName = [
  'act',
  'โควตา',
  'คำหน้าชื่อ',
  'ชื่อ',
  'สกุล',
  'หมายเลขบัตรประชาชน',
  'หมายเลขโควตา สอน.',
  'เบอร์ติดต่อ',
  'บ้านเลขที่',
  'หมู่ที่',
  'ตำบล',
  'อำเภอ',
  'จังหวัด',
  'รหัสไปรษณีย์',
  'พิกัดที่อยู่',
  'หักภาษี',
  'รับเงินส่งเสริม',
  'สถานะโควตา',
  'ประเภทโควตา',
  'เป็นหัวหน้าโควตา',
  'เลขหัวหน้าโควตา',
  'เลขหัวหน้าโควตาของโควตาปกติ',
  'สถานะข้อมูล',
  'รหัสนักสำรวจ',
  'วันที่ปรับปรุง'
];

export const colModel = [
  {
    name: 'act',
    template: 'actions',
    width: 150,
    formatoptions: {
      keys: true // we want use [Enter] key to save the row and [Esc] to cancel editing.
    },
    frozen: true
  },
  {
    name: 'Code',
    // label: 'อนุมัติ',
    width: 90,
    editable: true,
    frozen: true,
    align: 'center',
    formatter: 'select'
    // edittype: 'select',
    // editoptions: {
    //   value: '1:นาย;2:นาง;3:นางสาว',
    //   defaultValue: '1'
    // }
    // stype: 'select',
    // searchoptions: {
    //   sopt: ['eq', 'ne'],
    //   value: ':Any;00:รออนุมัติ;01:อนุมัติแล้ว'
    // }
  },
  {
    name: 'TitleId',
    width: 90,
    editable: true,
    frozen: true,
    align: 'center',
    formatter: 'select',
    edittype: 'select',
    editoptions: {
      value: '1:นาย;2:นาง;3:นางสาว',
      defaultValue: '1'
    }
    // stype: 'select',
    //  searchoptions: { sopt: ['eq', 'ne'], value: ':Any;FE:FedEx;TN:TNT;IN:IN' }
  },
  {
    name: 'FirstNameTH',
    // label: 'ปีส่งเสริม',
    width: 100,
    align: 'center',
    frozen: true,
    editable: false
    // edittype: 'select',
    // editoptions: {
    //   value: `${cropYear5}:${cropYear5};${cropYear4}:${cropYear4}`,
    //   defaultValue: `${cropYear5}`
    // }
    // stype: 'select',
    // searchoptions: {
    //   sopt: ['eq'],
    //   value: `${cropYear5}:${cropYear5};${cropYear4}:${cropYear4};${cropYear3}:${cropYear3}`
    // }
  },
  {
    name: 'LastNameTH',
    // label: 'โควตา',
    index: 'LastNameTH',
    width: 100,
    align: 'center',
    editable: false,
    // template: integerTemplate,
    frozen: true
  },
  {
    name: 'IDCard',
    // label: 'ครั้งที่ขอ',
    width: 100,
    editable: false
  },
  {
    name: 'IDFarm',
    // label: 'ครั้งที่ขอ',
    width: 100,
    editable: false
    // frozen: true
  },
  {
    name: 'Tel',
    // label: 'นักส่งเสริม',
    width: 100,
    editable: false
    // template: numberTemplate
  },
  {
    name: 'RegAddressNo',
    // label: 'นักส่งเสริม',
    width: 100,
    editable: false
    // template: numberTemplate
  },
  {
    name: 'RegMoo',
    // label: 'รองฯอ้อย',
    width: 100,
    editable: false
    // template: numberTemplate
  },
  {
    name: 'RegTambonName',
    // label: 'จำนวนไร่(ปลายฝน)',
    width: 150,
    editable: false
    // template: numberTemplate
  },
  {
    name: 'RegAmphurName',
    // label: 'ขอครั้งนี้(ปลายฝน)',
    width: 150,
    editable: false
    // template: number2Template
  },
  {
    name: 'RegProvinceName',
    // label: 'จำนวนไร่(ปลายฝน)',
    width: 150,
    editable: false
    // template: numberTemplate
  },
  {
    name: 'RegAddressZipcode',
    // label: 'ขอครั้งนี้(ปลายฝน)',
    width: 150,
    editable: false
    // template: number2Template
  },
  {
    name: 'AddressGPS',
    // label: 'จำนวนไร่(รื้อตอ)',
    width: 150,
    editable: false
    // template: numberTemplate
  },
  {
    name: 'IsTaxAccept',
    // label: 'ขอครั้งนี้(รื้อตอ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'IsQuotaLoans',
    // label: 'จำนวนไร่(ตามเกรด)',
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'Status',
    // label: 'ขอครั้งนี้(ตามเกรด)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'TypeQuota',
    // label: 'จำนวนไร่(ต้นฝน)',
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'IsLeaderQuota',
    // label: 'ขอครั้งนี้(ต้นฝน)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'LeaderNo',
    // label: 'จำนวนไร่(อ้อยอินทรีย์)',
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'LeaderQuotaNo',
    // label: 'ขอครั้งนี้(อ้อยอินทรีย์)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'IsEnable',
    // label: 'ขอครั้งนี้(รับคนงาน)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'SurveyUserCode',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'Changed',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150
    // editable: true,
    // template: number2Template
  }
];

export const colNameImp = [
  'act',
  'budget_approve',
  'budget_status',
  'cropYear',
  'quota',
  'zone',
  'subZone',
  'manager',
  'outside',
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
  'promotion7_baht_ton',
  'debt1_crop_due',
  'deduct1_crop_due',
  'debt1_overdue_due',
  'project1_debt_crop_due',
  'project1_deduct_crop_due',
  'project1_deduct_end_due',
  'deduct1_total',
  'deduct1_due_previous',
  'deduct1_due_last',
  'debt2_crop_due',
  'deduct2_crop_due',
  'debt2_overdue_due',
  'project2_debt_crop_due',
  'project2_deduct_crop_due',
  'project2_deduct_end_due',
  'deduct2_total',
  'deduct2_due_previous',
  'deduct2_due_last',
  'debt3_crop_due',
  'deduct3_crop_due',
  'debt3_overdue_due',
  'project3_debt_crop_due',
  'project3_deduct_crop_due',
  'project3_deduct_end_due',
  'deduct3_total',
  'deduct3_due_previous',
  'deduct3_due_last',
  'debt4_crop_due',
  'deduct4_crop_due',
  'debt4_overdue_due',
  'project4_debt_crop_due',
  'project4_deduct_crop_due',
  'project4_deduct_end_due',
  'deduct4_total',
  'deduct4_due_previous',
  'deduct4_due_last',
  'avg_baht_area',
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
  'history4_canetype06'
];
