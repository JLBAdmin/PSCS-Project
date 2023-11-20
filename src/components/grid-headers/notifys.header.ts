import { numberTemplate } from '../jquery-ui/formatTemplate';

// declare const $: any;

export const colName = [
  'act',
  'โควตา',
  'PlanId',
  'Comments',
  'สถานะงาน',
  'ประเภทจดแจ้ง',
  'พื้นที่จดแจ้ง',
  'พิกัด',
  'ปีส่งเสริม',
  'สร้างโดย',
  'วันที่สร้าง',
  'อนุมัติโดย',
  'วันที่อนุมัติ',
  'สถานะ',
  'ภาพถ่าย',
  'พิกัดถ่ายภาพ'
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
    editable: false,
    frozen: false,
    align: 'center'
  },
  {
    name: 'PlanId',
    // label: 'อนุมัติ',
    width: 90,
    editable: true,
    frozen: false,
    align: 'center'
  },
  {
    name: 'Comments',
    width: 150,
    editable: true,
    edittype: 'select',
    editoptions: {
      value:
        '0 ชาวไร่จัดการเอง:0 ชาวไร่จัดการเอง;1 รถไถโรงงาน:1 รถไถโรงงาน;2 ผู้รับเหมานอก:2 ผู้รับเหมานอก',
      defaultValue: '0 ชาวไร่จัดการเอง'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq', 'ne'],
      value:
        ':Any;0 ชาวไร่จัดการเอง:0 ชาวไร่จัดการเอง;1 รถไถโรงงาน:	1 รถไถโรงงาน;2 ผู้รับเหมานอก:2 ผู้รับเหมานอก'
    }
  },
  {
    name: 'StatusPlan',
    width: 150,
    editable: true,
    formatter: 'select',
    edittype: 'select',
    editoptions: {
      value: '00:จดแจ้ง;01:เตรียมดิน;02:ปลูกเสร็จ;09:ยกเลิก',
      defaultValue: '00'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq', 'ne'],
      value: ':Any;00:จดแจ้ง;01:เตรียมดิน;02:ปลูกเสร็จ;09:ยกเลิก'
    }
  },
  {
    name: 'WaterName',
    // label: 'อนุมัติ',
    width: 90,
    editable: false,
    frozen: false,
    align: 'center'
  },
  {
    name: 'ForecastRai',
    // label: 'จำนวนไร่(ตามเกรด)',
    width: 90,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'Location',
    // label: 'อนุมัติ',
    width: 100,
    editable: false,
    frozen: false,
    align: 'center'
  },
  {
    name: 'SeasonYear',
    // label: 'ปีส่งเสริม',
    width: 100,
    align: 'center',
    // frozen: true,
    editable: false
  },
  {
    name: 'FullName',
    // label: 'โควตา',
    width: 100,
    align: 'center',
    editable: false,
    // template: integerTemplate,
    frozen: true
  },
  {
    name: 'CreatedDate',
    // label: 'ครั้งที่ขอ',
    width: 100,
    editable: false
  },
  {
    name: 'ApprovedBy',
    // label: 'ครั้งที่ขอ',
    width: 100,
    editable: false
    // frozen: true
  },
  {
    name: 'ApprovedDate',
    // label: 'นักส่งเสริม',
    width: 100,
    editable: false
    // template: numberTemplate
  },
  {
    name: 'Status',
    // label: 'นักส่งเสริม',
    width: 100,
    editable: false
    // template: numberTemplate
  },

  {
    name: 'ImageName',
    // label: 'จำนวนไร่(รื้อตอ)',
    editable: false,
    width: 150,
    fixed: true,
    formatter(cellvalue: any): string {
      return `<img src='/images/Water/${cellvalue}' alt='my image' />`;
    }
  },
  {
    name: 'ImageGps',
    // label: 'ขอครั้งนี้(รื้อตอ)',
    width: 150,
    editable: false
    // template: number2Template
  }
];
