import { number2Template } from '../jquery-ui/formatTemplate';

export const colName = [
  // 'act',
  'รหัสบัญชี',
  'ชื่อบัญชี',
  'ainAccountType',
  'MainAccountCategory',
  'MainFS',
  'MainFSDigit1',
  'MainFSCapionDigit23',
  'MainFSCapionDigit34',
  'MainFSCapionDigit56',
  'Budgets1',
  'Budgets2',
  'Budgets3',
  'Budgets4',
  'GroupBudget'
];

export const colModel = [
  // {
  //   name: 'act',
  //   template: 'actions',
  //   width: 130,
  //   formatoptions: {
  //     keys: true, // we want use [Enter] key to save the row and [Esc] to cancel editing.
  //     delbutton: false, // ไม่แสดงปุ่มลบ
  //     editbutton: false // ไม่แสดงปุ่มแก้ไข
  //     // isDisplayButtons() {
  //     //   return {
  //     //     save: { display: true, hidden: true },
  //     //     cancel: { display: true }
  //     //   };
  //     // }
  //   },
  //   frozen: true
  // },
  {
    name: 'MainAccount',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false
    // frozen: true
  },
  {
    name: 'NameAccount',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false
    // frozen: true
  },
  {
    name: 'MainAccountType',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false
    // frozen: true
  },
  {
    name: 'MainAccountCategory',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false
    // frozen: true
  },
  {
    name: 'MainFS',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false
    // frozen: true
  },
  {
    name: 'MainFSDigit1',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false
    // frozen: true
  },
  {
    name: 'MainFSCapionDigit23',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false
    // frozen: true
  },
  {
    name: 'MainFSCapionDigit34',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false
    // frozen: true
  },
  {
    name: 'MainFSCapionDigit56',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false
    // frozen: true
  },
  {
    name: 'Budgets1',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false,
    template: number2Template
  },

  {
    name: 'Budgets2',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false,
    template: number2Template
  },

  {
    name: 'Budgets3',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false,
    template: number2Template
  },
  {
    name: 'Budgets4',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false,
    template: number2Template
  },
  {
    name: 'GroupBudget',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false
    // frozen: true
  }
];
