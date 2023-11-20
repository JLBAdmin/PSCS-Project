import 'select2/dist/css/select2.css';
import 'select2/dist/js/select2';

import { number2Template } from '../jquery-ui/formatTemplate';

export const colName = [
  'ปีงบ',
  'รหัสบัญชี',
  'ชื่อบัญชี',
  'มูลค่า',
  'จำนวนหน่วย',
  'วันที่',
  'บันทึุก',
  'ยืนยัน',
  'ปิดบัญชี',
  'กลุ่มงาน',
  'ปรับปรุงล่าสุด',
  'สร้างเมื่อ'
];

export const colModel = [
  {
    name: 'CropYear',
    // label: 'ปีส่งเสริม',
    width: 70,
    align: 'center',
    frozen: false,
    editrules: { required: false },
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
    width: 70,
    editable: false
  },
  {
    name: 'NameAccount',
    // label: 'ชื่องบประมาณ',
    width: 255,
    editable: false
  },
  {
    name: 'TotalAmount',
    // label: 'มูลค่า',
    width: 120,
    editable: false,
    template: number2Template
  },
  {
    name: 'TotalQTY',
    // label: 'จำนวนหน่วย',
    width: 90,
    editable: false,
    template: number2Template
  },
  {
    name: 'TranDate',
    // label: 'จำนวนหน่วยปีก่อน',
    width: 120,
    editable: false,
    formatter: 'date',
    formatoptions: { srcformat: 'ISO8601Long', newformat: 'd/m/Y' }
  },
  {
    name: 'Remark',
    // label: 'บันทึก',
    width: 120,
    editable: false
  },
  {
    name: 'StatusAccount',
    // label: 'ยืนยัน',
    width: 50,
    editable: false,
    template: 'booleanCheckbox'
  },
  {
    name: 'CloseAccount',
    // label: 'ปิดงบ',
    width: 50,
    editable: false,
    template: 'booleanCheckbox'
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
      // defaultValue: '1'
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
    width: 130,
    editable: false
  },
  {
    name: 'createdAt',
    // label: 'ปรับปรุง',
    width: 130,
    editable: false
  }
];
