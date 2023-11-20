export const colName = [
  'act',
  'ปีส่งเสริม',
  'รหัสโรงงาน',
  'ชื่อโรงงาน',
  'กำลังการผลิต',
  'เป้าหมายหีบ',
  'ปรับปรุงเมื่อ'
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
    width: 70,
    editable: true
  },
  {
    name: 'companyCode',
    width: 70,
    editable: true
  },
  {
    name: 'companyName',
    width: 270,
    editable: true
  },
  {
    name: 'Capacity',
    width: 150,
    editable: true
  },
  {
    name: 'Targets',
    width: 150,
    editable: true
  },
  {
    name: 'updatedAt',
    width: 190
  }
];
