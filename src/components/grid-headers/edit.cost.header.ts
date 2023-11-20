import 'select2/dist/css/select2.css';
import 'select2/dist/js/select2';

import { number2Template } from '../jquery-ui/formatTemplate';

export const colName = [
  'act',
  'ปีงบประมาณ',
  'รหัสบัญชี',
  'ชื่อบัญชี',
  'มูลค่า',
  'จำนวนหน่วย',
  'วันที่',
  'บันทึุก',
  'กลุ่มงาน',
  'ปรับปรุงล่าสุด'
];

export const colModel = [
  {
    name: 'act',
    template: 'actions',
    width: 100,
    formatoptions: {
      keys: true, // we want use [Enter] key to save the row and [Esc] to cancel editing.
      delbutton: true, // ไม่แสดงปุ่มลบ
      editbutton: true // ไม่แสดงปุ่มแก้ไข
      // isDisplayButtons() {
      //   return {
      //     save: { display: true, hidden: true },
      //     cancel: { display: true }
      //   };
      // }
    },
    frozen: true
  },
  {
    name: 'CropYear',
    // label: 'ปีส่งเสริม',
    width: 120,
    align: 'center',
    frozen: false,
    editable: true,
    editrules: { required: true },
    edittype: 'select',
    editoptions: {
      dataUrl: '/api/crop_years/get',
      datatype: 'json',
      aysnc: false,
      buildSelect(data: any) {
        const response = $.parseJSON(data);
        let select = '<select>';
        // select += '<option value="">---เลือกโครงการ---</option>';

        // eslint-disable-next-line func-names
        $.each(response, function (this: any): void {
          select += `<option value="${this.cropCurrent}">${this.cropCurrent}</option>`;
        });

        return `${select}</select>`;
      }
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq', 'ne'],
      dataUrl: '/api/crop/get',
      datatype: 'json',
      aysnc: false,
      buildSelect(data: any) {
        const response = $.parseJSON(data);
        let select = '<select>';
        // s += '<option value="0">---Select Service Provider---</option>';

        // eslint-disable-next-line func-names
        $.each(response, function (this: any): void {
          select += `<option value="${this.cropCurrent}">${this.cropCurrent}</option>`;
        });

        return `${select}</select>`;
      }
    }
  },
  {
    name: 'MainAccount',
    // label: 'รหัสงบประมาณ',
    width: 120,
    editable: true,
    editrules: { required: true }
  },
  {
    name: 'NameAccount',
    // label: 'ชื่องบประมาณ',
    width: 320,
    editable: false
  },
  {
    name: 'TotalAmount',
    // label: 'มูลค่า',
    width: 120,
    editable: true,
    editrules: { required: true },
    template: number2Template
  },
  {
    name: 'TotalQTY',
    // label: 'จำนวนหน่วย',
    width: 120,
    editable: true,
    template: number2Template
  },
  {
    name: 'TranDate',
    // label: 'จำนวนหน่วยปีก่อน',
    width: 120,
    editable: true,
    formatter: 'date',
    formatoptions: { srcformat: 'ISO8601Long', newformat: 'd/m/Y' }
  },
  {
    name: 'Remark',
    // label: 'บันทึก',
    width: 220,
    editable: true
  },
  {
    name: 'UserId',
    // label: 'ผู้ใช้งาน',
    width: 120,
    editable: false,
    formatter: 'select',
    edittype: 'select',
    editoptions: {
      value:
        '1:คลังสินค้า;2:จักรกลการเกษตร;3:พัสดุ(oil);4:พัสดุ(ทั่วไป);5:การเงิน;6:บัญชี;7:บุคคล;8:PEG'
      // defaultValue: '00'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq', 'ne'],
      value:
        ':Any;1:คลังสินค้า;2:จักรกลการเกษตร;3:พัสดุ(oil);4:พัสดุ(ทั่วไป);5:การเงิน;6:บัญชี;7:บุคคล;8:PEG'
    }
  },
  {
    name: 'updatedAt',
    // label: 'ปรับปรุง',
    width: 120,
    editable: false
  }
];
