import { integerTemplate, number2Template } from '../jquery-ui/formatTemplate';

export const colName = [
  'act',
  'โควตา',
  'วันที่',
  '(1A)ค้างเก่า-ค้างดิว(64/65)',
  '(1A)ดิวหัก(65/66)',
  '(1A)หนี้ค้างไม่ถึงดิว',
  '(1B)ค้างเก่า-ดิว(64/65)',
  '(1B)ดิวหัก(65/66)',
  '(1B)ดิวหัก 66/67-สิ้นสุด',
  '(1)หักหนี้ทั้งสิ้น',
  '(1)รวมหัก(64/65)',
  '(1)รวมหัก(65/66)',
  '(2A)ค้างเก่า-ค้างดิว(64/65)',
  '(2A)ดิวหัก(65/66)',
  '(2A)หนี้ค้างไม่ถึงดิว',
  '(2B)ค้างเก่า-ดิว(64/65)',
  '(2B)ดิวหัก(65/66)',
  '(2B)ดิวหัก 66/67-สิ้นสุด',
  '(2)หักหนี้ทั้งสิ้น',
  '(2)รวมหัก(64/65)',
  '(2)รวมหัก(65/66)',
  '(3A)ค้างเก่า-ค้างดิว(64/65)',
  '(3A)ดิวหัก(65/66)',
  '(3A)หนี้ค้างไม่ถึงดิว',
  '(3B)ค้างเก่า-ดิว(64/65)',
  '(3B)ดิวหัก(65/66)B',
  '(3B)ดิวหัก 66/67-สิ้นสุด',
  '(3)หักหนี้ทั้งสิ้น',
  '(3)รวมหัก(64/65)',
  '(3)รวมหัก(65/66)',
  '(4A)ค้างเก่า-ค้างดิว(64/65)',
  '(4A)ดิวหัก(65/66)',
  '(4A)หนี้ค้างไม่ถึงดิว',
  '(4B)ค้างเก่า-ดิว(64/65)',
  '(4B)ดิวหัก(65/66)',
  '(4B)ดิวหัก 66/67-สิ้นสุด',
  '(4)หักหนี้ทั้งสิ้น',
  '(4)รวมหัก(64/65)',
  '(4)รวมหัก(65/66)',
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
    name: 'dateDept',
    // label: 'หมายเลขบัตร',
    width: 70,
    align: 'center'
  },
  {
    name: 'debt1_crop_due',
    // label: 'ค้างเก่า-ค้างดิว(64/65)A',
    width: 120,
    template: number2Template
  },
  {
    name: 'deduct1_crop_due',
    // label: '(1)ดิวหัก(65/66)A',
    width: 120,
    template: number2Template
  },
  {
    name: 'debt1_overdue_due',
    // label: '(1)หนี้ค้างไม่ถึงดิวA',
    width: 120,
    template: number2Template
  },
  {
    name: 'project1_debt_crop_due',
    // label: '(1)ค้างเก่า-ดิว(64/65)B',
    width: 120,
    template: number2Template
  },
  {
    name: 'project1_deduct_crop_due',
    // label: '(1)ดิวหัก(65/66)B',
    width: 120,
    template: number2Template
  },
  {
    name: 'project1_deduct_end_due',
    // label: '(1)ดิวหัก 66/67-สิ้นสุด B',
    width: 120,
    template: number2Template
  },
  {
    name: 'deduct1_total',
    // label: '(1)หักหนี้ทั้งสิ้น',
    width: 100,
    template: number2Template
  },
  {
    name: 'deduct1_due_previous',
    // label: '(1)รวมหัก(64/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'deduct1_due_last',
    // label: '(1)รวมหัก(65/66)',
    width: 100,
    template: number2Template
  },
  {
    name: 'debt2_crop_due',
    // label: '(2)ค้างเก่า-ค้างดิว(64/65)A',
    width: 120,
    template: number2Template
  },
  {
    name: 'deduct2_crop_due',
    // label: '(2)ดิวหัก(65/66)A',
    width: 120,
    template: number2Template
  },
  {
    name: 'debt2_overdue_due',
    // label: '(2)หนี้ค้างไม่ถึงดิวA',
    width: 120,
    template: number2Template
  },
  {
    name: 'project2_debt_crop_due',
    // label: '(2)ค้างเก่า-ดิว(64/65)B',
    width: 120,
    template: number2Template
  },
  {
    name: 'project2_deduct_crop_due',
    // label: '(2)ดิวหัก(65/66)B',
    width: 120,
    template: number2Template
  },
  {
    name: 'project2_deduct_end_due',
    // label: '(2)ดิวหัก 66/67-สิ้นสุด B',
    width: 120,
    template: number2Template
  },
  {
    name: 'deduct2_total',
    // label: '(2)หักหนี้ทั้งสิ้น',
    width: 100,
    template: number2Template
  },
  {
    name: 'deduct2_due_previous',
    // label: '(2)รวมหัก(64/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'deduct2_due_last',
    // label: '(2)รวมหัก(65/66)',
    width: 100,
    template: number2Template
  },
  {
    name: 'debt3_crop_due',
    // label: '(3)ค้างเก่า-ค้างดิว(64/65)A',
    width: 120,
    template: number2Template
  },
  {
    name: 'deduct3_crop_due',
    // label: '(3)ดิวหัก(65/66)A',
    width: 120,
    template: number2Template
  },
  {
    name: 'debt3_overdue_due',
    // label: '(3)หนี้ค้างไม่ถึงดิวA',
    width: 120,
    template: number2Template
  },
  {
    name: 'project3_debt_crop_due',
    // label: '(3)ค้างเก่า-ดิว(64/65)B',
    width: 120,
    template: number2Template
  },
  {
    name: 'project3_deduct_crop_due',
    // label: '(3)ดิวหัก(65/66)B',
    width: 120,
    template: number2Template
  },
  {
    name: 'project3_deduct_end_due',
    // label: '(3)ดิวหัก 66/67-สิ้นสุด B',
    width: 120,
    template: number2Template
  },
  {
    name: 'deduct3_total',
    // label: '(3)หักหนี้ทั้งสิ้น',
    width: 100,
    template: number2Template
  },
  {
    name: 'deduct3_due_previous',
    // label: '(3)รวมหัก(64/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'deduct3_due_last',
    // label: '(3)รวมหัก(65/66)',
    width: 100,
    template: number2Template
  },
  {
    name: 'debt4_crop_due',
    // label: '(4)ค้างเก่า-ค้างดิว(64/65)A',
    width: 120,
    template: number2Template
  },
  {
    name: 'deduct4_crop_due',
    // label: '(4)ดิวหัก(65/66)A',
    width: 120,
    template: number2Template
  },
  {
    name: 'debt4_overdue_due',
    // label: '(4)หนี้ค้างไม่ถึงดิวA',
    width: 120,
    template: number2Template
  },
  {
    name: 'project4_debt_crop_due',
    // label: '(4)ค้างเก่า-ดิว(64/65)B',
    width: 120,
    template: number2Template
  },
  {
    name: 'project4_deduct_crop_due',
    // label: '(4)ดิวหัก(65/66)B',
    width: 120,
    template: number2Template
  },
  {
    name: 'project4_deduct_end_due',
    // label: '(4)ดิวหัก 66/67-สิ้นสุด B',
    width: 120,
    template: number2Template
  },
  {
    name: 'deduct4_total',
    // label: '(4)หักหนี้ทั้งสิ้น',
    width: 100,
    template: number2Template
  },
  {
    name: 'deduct4_due_previous',
    // label: '(4)รวมหัก(64/65)',
    width: 100,
    template: number2Template
  },
  {
    name: 'deduct4_due_last',
    // label: '(4)รวมหัก(65/66)',
    width: 100,
    template: number2Template
  },
  {
    name: 'cropYear',
    // label: 'ปีการส่งเสริม',
    width: 100
  }
];

export const colNameImp = [
  'act',
  'quota',
  'dateDept',
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
  'cropYear'
];
