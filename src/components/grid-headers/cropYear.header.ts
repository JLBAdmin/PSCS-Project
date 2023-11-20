export const colName = [
  'act',
  'ปีส่งเสริม',
  'สถานะ'
  // 'ประเภท'
  // 'โควตาค้ำประกัน',
  // 'รายละเอียด',
  // 'มูลค่าหลักทรัพย์',
  // 'ราคาประเมิน',
  // 'กรรมสิทธิื',
  // 'เลขบัตรประชาชน',
  // 'ทีอยู่'
];

export const colModel = [
  {
    name: 'act',
    template: 'actions',
    width: 100,
    formatoptions: {
      keys: true // we want use [Enter] key to save the row and [Esc] to cancel editing.
    }
  },
  {
    name: 'cropYear',
    width: 100,
    editable: true
  },
  {
    name: 'cropStatus',
    width: 100,
    editable: true,
    // formatter: 'select',
    // edittype: 'select',
    template: 'booleanCheckbox'
  }
];
