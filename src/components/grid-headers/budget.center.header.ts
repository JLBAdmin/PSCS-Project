import 'select2/dist/css/select2.css';
import 'select2';

import { number2Template, numberTemplate } from '../jquery-ui/formatTemplate';

declare let $: any;

export const colName = [
  'act',
  'อนุมัติเข้าระบบ',
  'เขตยืนยัน',
  'ปีส่งเสริม',
  'โควตา',
  'วันที่เอกสาร',
  'กลุ่ม',
  'ครั้งที่ขอ',
  'เขตส่งเสริม',
  'นักส่งส่งเสริม',
  'รองฯอ้อย',
  'อ้อย PS Model(จำนวนไร่)',
  'อ้อย PS Model(สัญญาตัน)',
  'อ้อย PS Model(ขอเงินครั้งนี้)',
  'PS Model(การรับเงิน)',
  'อ้อยปลายฝน(จำนวนไร่)',
  'อ้อยปลายฝน(สัญญาตัน)',
  'อ้อยปลายฝน(ขอเงินครั้งนี้)',
  'อ้อยปลายฝน(การรับเงิน)',
  'อ้อยปลายฝนรื้อตอ(จำนวนไร่)',
  'อ้อยปลายฝนรื้อตอ(สัญญาตัน)',
  'อ้อยปลายฝนรื้อตอ(ขอเงินครั้งนี้)',
  'อ้อยปลายฝนรื้อตอ(การรับเงิน)',
  'อ้อยตอตามเกรด(จำนวนไร่)',
  'อ้อยตอตามเกรด(สัญญาตัน)',
  'อ้อยตอตามเกรด(ขอครั้งนี้)',
  'อ้อยตอตามเกรด(การรับเงิน)',
  'อ้อยต้นฝน(จำนวนไร่)',
  'อ้อยต้นฝน(สัญญาตัน)',
  'อ้อยต้นฝน(ขอครั้งนี้)',
  'อ้อยต้นฝน(การรับเงิน)',
  'อ้อยอินทรีย์(จำนวนไร่)',
  'อ้อยอินทรีย์(สัญญาตัน)',
  'อ้อยอินทรีย์(ขอครั้งนี้)',
  'อ้อยอินทรีย์(การรับเงิน)',
  'รับคนงาน(ขอครั้งนี้)',
  'ประเภทโครงการ',
  'โครงการ(ขอครั้งนี้)',
  'วันที่ปรับปรุง',
  'ผู้ปรับปรุง'
];

export const colModel = [
  {
    name: 'act',
    template: 'actions',
    width: 130,
    formatoptions: {
      keys: true // we want use [Enter] key to save the row and [Esc] to cancel editing.
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
    editable: true,
    frozen: false,
    align: 'center',
    formatter: 'select',
    edittype: 'select',
    editoptions: {
      value: '00:รอยืนยัน;01:ยืนยันแล้ว;02:ผ่านธุรการฯ',
      defaultValue: '00'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq', 'ne'],
      value: ':Any;00:รอยืนยัน;01:ยืนยันแล้ว;02:ผ่านธุรการฯ'
    }
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
    // editoptions: {
    //   dataUrl: 'http://pscane.com:8080/api/crop/get',
    //   datatype: 'json',
    //   aysnc: false,
    //   buildSelect(data: any) {
    //     const response = $.parseJSON(data);
    //     let select = '<select>';
    //     // s += '<option value="0">---Select Service Provider---</option>';

    //     // eslint-disable-next-line func-names
    //     $.each(response, function (this: any): void {
    //       select += `<option value="${this.cropYear}">${this.cropYear}</option>`;
    //     });

    //     return `${select}</select>`;
    //   }
    // },
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
    editable: false
    // template: integerTemplate
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
    name: 'promotion0_area_contract',
    // label: 'จำนวนไร่(ปลายฝน)',
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'promotion0_ton_contract',
    // label: 'ตันประเมิน',
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'promotion0_budget_use',
    // label: 'ขอครั้งนี้(ปลายฝน)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'promotion0_factor_status',
    // label: 'ขอเฉพาะปัจจัยการผลิต0',
    width: 150,
    formatter: 'select',
    editable: false,
    edittype: 'select',
    editoptions: {
      value: '01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต',
      defaultValue: '01'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: ':All;01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต'
    }

    // template: 'select'
    // template: 'booleanCheckbox'
  },
  {
    name: 'promotion1_area_contract',
    // label: 'จำนวนไร่(ปลายฝน)',
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'promotion1_ton_contract',
    // label: 'ตันประเมิน',
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'promotion1_budget_use',
    // label: 'ขอครั้งนี้(ปลายฝน)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'promotion1_factor_status',
    // label: 'ขอเฉพาะปัจจัยการผลิต1',
    width: 150,
    formatter: 'select',
    editable: false,
    edittype: 'select',
    editoptions: {
      value: '01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต',
      defaultValue: '01'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: ':All;01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต'
    }
  },
  {
    name: 'promotion2_area_contract',
    // label: 'จำนวนไร่(รื้อตอ)',
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'promotion2_ton_contract',
    // label: 'ตันประเมิน',
    width: 170,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'promotion2_budget_use',
    // label: 'ขอครั้งนี้(รื้อตอ)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'promotion2_factor_status',
    // label: 'ขอเฉพาะปัจจัยการผลิต2',
    width: 150,
    formatter: 'select',
    editable: false,
    edittype: 'select',
    editoptions: {
      value: '01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต',
      defaultValue: '01'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: ':All;01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต'
    }
  },
  {
    name: 'promotion3_area_contract',
    // label: 'จำนวนไร่(ตามเกรด)',
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'promotion3_ton_contract',
    // label: 'ตันประเมิน',
    width: 170,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'promotion3_budget_use',
    // label: 'ขอครั้งนี้(ตามเกรด)',
    width: 170,
    editable: false,
    template: number2Template
  },
  {
    name: 'promotion3_factor_status',
    // label: 'ขอเฉพาะปัจจัยการผลิต3,
    width: 150,
    formatter: 'select',
    editable: false,
    edittype: 'select',
    editoptions: {
      value: '01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต',
      defaultValue: '01'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: ':All;01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต'
    }
  },
  {
    name: 'promotion4_area_contract',
    // label: 'จำนวนไร่(ต้นฝน)',
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'promotion4_ton_contract',
    // label: 'ตันประเมิน',
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'promotion4_budget_use',
    // label: 'ขอครั้งนี้(ต้นฝน)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'promotion4_factor_status',
    // label: 'ขอเฉพาะปัจจัยการผลิต5',
    width: 150,
    formatter: 'select',
    editable: false,
    edittype: 'select',
    editoptions: {
      value: '01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต',
      defaultValue: '01'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: ':All;01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต'
    }
  },
  {
    name: 'promotion5_area_contract',
    // label: 'จำนวนไร่(อ้อยอินทรีย์)',
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'promotion5_ton_contract',
    // label: 'ตันประเมิน',
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'promotion5_budget_use',
    // label: 'ขอครั้งนี้(อ้อยอินทรีย์)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'promotion5_factor_status',
    // label: 'ขอเฉพาะปัจจัยการผลิต5',
    width: 150,
    formatter: 'select',
    editable: false,
    edittype: 'select',
    editoptions: {
      value: '01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต',
      defaultValue: '01'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: ':All;01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต'
    }
  },
  {
    name: 'promotion6_budget_use',
    // label: 'ขอครั้งนี้(รับคนงาน)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'promotion7_project_type',
    // label: 'ปีส่งเสริม',
    width: 120,
    align: 'center',
    frozen: false,
    editable: false,
    formatter: 'select',
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
      sopt: ['eq'],
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
    }
  },
  {
    name: 'promotion7_budget_use',
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
