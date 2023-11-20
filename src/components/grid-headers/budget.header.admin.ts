import 'select2/dist/css/select2.css';
import 'select2';

import { number2Template, numberTemplate } from '../jquery-ui/formatTemplate';

declare const $: any;

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
  'อ้อย PS Model(การรับเงิน)',
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
  'ผู้ปรับปรุง',
  ''
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
    name: 'budget_prove',
    // label: 'อนุมัติ',
    width: 90,
    editable: true,
    frozen: true,
    align: 'center',
    formatter: 'select',
    edittype: 'select',
    editoptions: {
      value: '00:รออนุมัติ;01:อนุมัติแล้ว;02:ไม่ผ่านพิจารณา;09:ยกเลิก',
      defaultValue: '00'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq', 'ne'],
      value: ':Any;00:รออนุมัติ;01:อนุมัติแล้ว;02:ไม่ผ่านพิจารณา;09:ยกเลิก'
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
      value: '01:ย้อนเอกสาร;02:ผ่านธุรการฯ',
      defaultValue: '00'
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq', 'ne'],
      value: ':Any;01:ย้อนเอกสาร;02:ผ่านธุรการฯ'
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
    editable: false,
    width: 120,
    align: 'center',
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
    // frozen: true
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
    // label: 'ขอเฉพาะปัจจัยการผลิต5',
    width: 150,
    editable: false,
    edittype: 'select',
    editoptions: {
      value: '01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต',
      defaultValue: `01`
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: ':All;01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต'
    },
    formatter: 'select'
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
    // label: 'ขอเฉพาะปัจจัยการผลิต5',
    width: 150,
    editable: false,
    edittype: 'select',
    editoptions: {
      value: '01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต',
      defaultValue: `01`
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: ':All;01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต'
    },
    formatter: 'select'
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
    width: 150,
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
    // label: 'ขอเฉพาะปัจจัยการผลิต5',
    width: 150,
    editable: false,
    edittype: 'select',
    editoptions: {
      value: '01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต',
      defaultValue: `01`
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: ':All;01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต'
    },
    formatter: 'select'
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
    width: 150,
    editable: false,
    template: numberTemplate
  },
  {
    name: 'promotion3_budget_use',
    // label: 'ขอครั้งนี้(ตามเกรด)',
    width: 150,
    editable: false,
    template: number2Template
  },
  {
    name: 'promotion3_factor_status',
    // label: 'ขอเฉพาะปัจจัยการผลิต5',
    width: 150,
    editable: false,
    edittype: 'select',
    editoptions: {
      value: '01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต',
      defaultValue: `01`
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: ':All;01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต'
    },
    formatter: 'select'
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
    editable: false,
    edittype: 'select',
    editoptions: {
      value: '01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต',
      defaultValue: `01`
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: ':All;01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต'
    },
    formatter: 'select'
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
    editable: false,
    edittype: 'select',
    editoptions: {
      value: '01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต',
      defaultValue: `01`
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: ':All;01:เงินบำรุง+ปัจจัยการผลิด;02:เงินบำรุง;03:ปัจจัยการผลิต'
    },
    formatter: 'select'
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
    width: 150,
    editable: false
    // template: number2Template
  },
  {
    name: 'userUpdate',
    // label: 'ขอครั้งนี้(โครงการ)',
    width: 150
    // editable: true,
    // template: number2Template
  },
  {
    name: 'budget_pass',
    // label: 'โควตา',
    width: 50,
    align: 'center',
    editable: false,
    // editoptions: {
    //   disabled: false
    // },
    template: 'booleanCheckbox'
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
