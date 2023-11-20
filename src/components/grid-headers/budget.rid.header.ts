import 'select2/dist/css/select2.css';
import 'select2';

import {
  integerTemplate,
  number2Template,
  numberTemplate
} from '../jquery-ui/formatTemplate';

declare let $: any;

export const colName = [
  'act',
  'อนุมัติเข้าระบบ',
  'ขอโครงการโดย',
  'ปีส่งเสริม',
  'โควตา',
  'วันที่เอกสาร',
  'กลุ่ม',
  'ครั้งที่ขอ',
  'เขตส่งเสริม',
  'นักส่งส่งเสริม',
  'รองฯอ้อย',
  'ประเภทโครงการ',
  'โครงการ(ขอครั้งนี้)',
  'ดอกเบี้ยโครงการ',
  'จำนวนหน่วย',
  'เลขที่เอกสาร',
  'ดิวโครงการ',
  'พื้นที่ไร่ล่าสุด',
  'สัญยาตันล่าสุด',
  'สัญญาตันปี 1',
  'ยอดหักเงิน 1',
  'สัญญาตันปี 2',
  'ยอดหักเงิน 2',
  'สัญญาตันปี 3',
  'ยอดหักเงิน 3',
  'สัญญาตันปี 4',
  'ยอดหักเงิน 4',
  'สัญญาตันปี 5',
  'ยอดหักเงิน 5',
  'สัญญาตันปี 6',
  'ยอดหักเงิน 6',
  'วันที่ปรับปรุง',
  'ผู้ปรับปรุง'
];

export const colModel = [
  {
    name: 'act',
    template: 'actions',
    width: 130,
    formatoptions: {
      keys: true, // we want use [Enter] key to save the row and [Esc] to cancel editing.
      delbutton: false, // ไม่แสดงปุ่มลบ
      editbutton: false // ไม่แสดงปุ่มแก้ไข
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
    name: 'budget_prove',
    // label: 'อนุมัติ',
    width: 90,
    editable: false,
    frozen: true,
    align: 'center',
    formatter: 'select',
    edittype: 'select',
    editoptions: {
      value: '00:รออนุมัติ;01:อนุมัติแล้ว;02:ไม่ผ่านพิจารณา',
      defaultValue: '00'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq', 'ne'],
      value: ':Any;00:รออนุมัติ;01:อนุมัติแล้ว;02:ไม่ผ่านพิจารณา'
    }
  },
  {
    name: 'budget_status',
    // label: 'อนุมัติ',
    width: 70,
    editable: false,
    frozen: false,
    align: 'center',
    formatter: 'select',
    // edittype: 'select',
    editoptions: {
      value: '11:ชลประทาน;00:รอยืนยัน;01:ยืนยันแล้ว;02:ผ่านธุรการฯ',
      defaultValue: '00'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq', 'ne'],
      value: ':Any;11:ชลประทาน;00:รอยืนยัน;01:ยืนยันแล้ว;02:ผ่านธุรการฯ'
    }
    // stype: 'select',
    //  searchoptions: { sopt: ['eq', 'ne'], value: ':Any;FE:FedEx;TN:TNT;IN:IN' }
  },
  {
    name: 'cropYear',
    // label: 'ปีส่งเสริม',
    width: 120,
    align: 'center',
    frozen: false,
    editable: false,
    editrules: { required: true },
    edittype: 'select',
    editoptions: {
      dataUrl: '/api/crop_years/get',
      datatype: 'json',
      aysnc: false,
      buildSelect(data: any) {
        const response = $.parseJSON(data);
        let select = '<select>';
        // s += '<option value="0">---Select Service Provider---</option>';

        // eslint-disable-next-line func-names
        $.each(response, function (this: any): void {
          select += `<option value="${this.cropYear}">${this.cropYear}</option>`;
        });

        return `${select}</select>`;
      }
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq', 'ne'],
      dataUrl: '/api/crop_years/get',
      datatype: 'json',
      aysnc: false,
      buildSelect(data: any) {
        const response = $.parseJSON(data);
        let select = '<select>';
        // s += '<option value="0">---Select Service Provider---</option>';

        // eslint-disable-next-line func-names
        $.each(response, function (this: any): void {
          select += `<option value="${this.cropYear}">${this.cropYear}</option>`;
        });

        return `${select}</select>`;
      }
    }
  },
  {
    name: 'quota',
    // label: 'โควตา',
    index: 'quota',
    width: 70,
    align: 'center',
    editable: false,
    editrules: { required: true }
  },
  {
    name: 'apporv_date',
    // label: 'ครั้งที่ขอ',
    width: 120,
    editable: false
    // frozen: true
  },

  {
    name: 'budget_grade',
    // label: 'ครั้งที่ขอ',
    width: 70,
    editable: false,
    editrules: { required: true },
    editoptions: {
      defaultValue: `${9}`
    },
    formatter(cellvalue: any): string {
      let color;
      const val = Number(cellvalue);
      let grade: any;
      if (val === 5) {
        color = 'Red';
        // eslint-disable-next-line unused-imports/no-unused-vars
        grade = 'RED';
      } else if (val === 4) {
        color = 'Orange';
        // eslint-disable-next-line unused-imports/no-unused-vars
        grade = 'ORANGE';
      } else if (val === 3) {
        color = 'Yellow';
        // eslint-disable-next-line unused-imports/no-unused-vars
        grade = 'YELLOW';
      } else if (val === 2) {
        color = 'Lime';
        // eslint-disable-next-line unused-imports/no-unused-vars
        grade = 'LIME';
      } else if (val === 1) {
        color = 'Green';
        // eslint-disable-next-line unused-imports/no-unused-vars
        grade = 'GREEN';
      } else if (val === 9) {
        color = 'blue';
        grade = 'None';
      }

      return `<span class="cellWithoutBackground" style="background-color:${color};">${grade}</span>`;
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq', 'ne'],
      // value: "FedEx:FedEx;TNT:TNT;DHL:DHL", defaultValue: "DHL",
      clearSearch: true,
      generateValue: true,
      noFilterText: 'Any',
      selectFilled(options: any) {
        setTimeout(() => {
          $(options.elem).select2({
            // debug: true,
            // dropdownParent: $("#outerDiv"),
            // dropdownCssClass: "ui-widget",
            width: '100%'
          });
        }, 0);
      }
    }
  },

  {
    name: 'request_num',
    // label: 'ครั้งที่ขอ',
    width: 70,
    editable: false
    // frozen: true
  },
  {
    name: 'zone',
    // label: 'นักส่งเสริม',
    width: 100,
    editable: false
    // template: numberTemplate
  },
  {
    name: 'subZone',
    // label: 'นักส่งเสริม',
    width: 100,
    editable: false,
    editrules: { required: true }
    // template: numberTemplate
  },
  {
    name: 'manager',
    // label: 'รองฯอ้อย',
    width: 100,
    editable: false,
    editrules: { required: true },
    template: numberTemplate
  },
  {
    name: 'promotion7_project_type',
    // label: 'ปีส่งเสริม',
    width: 120,
    align: 'center',
    frozen: false,
    editable: false,
    edittype: 'select',
    editoptions: {
      dataUrl: '/api/project/get',
      datatype: 'json',
      aysnc: false,
      buildSelect(data: any) {
        const response = $.parseJSON(data);
        let select = '<select>';
        select += '<option value="">เลือกโครงการ</option>';

        // eslint-disable-next-line func-names
        $.each(response, function (this: any): void {
          select += `<option value="${this.project_name}">${this.project_name}</option>`;
        });

        return `${select}</select>`;
      }
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq', 'ne'],
      dataUrl: '/api/project/get',
      datatype: 'json',
      aysnc: false,
      buildSelect(data: any) {
        const response = $.parseJSON(data);
        let select = '<select>';
        // s += '<option value="0">---Select Service Provider---</option>';

        // eslint-disable-next-line func-names
        $.each(response, function (this: any): void {
          select += `<option value="${this.project_name}">${this.project_name}</option>`;
        });

        return `${select}</select>`;
      }
    }
  },
  {
    name: 'promotion7_budget_use',
    // label: 'งบ(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'ProjectInterest',
    // label: 'ดอกเบี้ยโครงการ',
    width: 150,
    editable: true,
    template: number2Template
  },
  {
    name: 'projectAmount',
    // label: 'จำนวนหน่วย',
    width: 150,
    editable: true
    // template: number2Template
  },
  {
    name: 'projectDoc',
    // label: 'เลขที่เอกสาร(โครงการ)',
    width: 150,
    editable: false
    // template: number2Template
  },
  {
    name: 'DueNum',
    width: 150,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'DueRai',
    width: 150,
    editable: true,
    template: number2Template
  },
  {
    name: 'DueTon',
    width: 150,
    editable: true,
    template: number2Template
  },
  {
    name: 'ContractYear1',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'Due1',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'ContractYear2',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'Due2',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'ContractYear3',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'Due3',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'ContractYear4',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'Due4',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'ContractYear5',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'Due5',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'ContractYear6',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'Due6',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'updatedAt',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150
    // editable: true,
    // template: number2Template
  },
  {
    name: 'userUpdate',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150
    // editable: true,
    // template: number2Template
  }
];
