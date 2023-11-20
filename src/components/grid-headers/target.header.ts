import { number2Template } from '../jquery-ui/formatTemplate';

export const colName = [
  'act',
  'ปีส่งเสริม',
  'รองฯ',
  'เขตส่งเสริม',
  'นักส่งเสริม',
  'ชื่อ - สกุล',
  'พื้นที่รวม',
  'พื้นที่ใหม่',
  'พื้นที่อ้อยตอ',
  'พื้นที่รื้อตอ',
  'เป้าหมายตัน',
  'ปรับปรุงเมื่อ'
];

export const colModel = [
  {
    name: 'act',
    template: 'actions',
    width: 150,
    formatoptions: {
      keys: true // we want use [Enter] key to save the row and [Esc] to cancel editing.
    },
    frozen: false
  },
  {
    name: 'cropYear',
    // label: 'ปีส่งเสริม',
    width: 120,
    align: 'center',
    frozen: true,
    editable: true,
    edittype: 'select',
    editoptions: {
      dataUrl: 'http://pscane.com:8080/api/crop/get',
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
    editrules: { required: true },
    stype: 'select',
    searchoptions: {
      sopt: ['eq', 'ne'],
      dataUrl: 'http://pscane.com:8080/api/crop/get',
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
    name: 'targetManager',
    width: 120,
    editable: true
  },
  {
    name: 'zone',
    width: 120,
    editable: true
  },
  {
    name: 'subZone',
    width: 120,
    editable: true
  },
  {
    name: 'surveyName',
    width: 170,
    editable: true
  },
  {
    name: 'targetAll',
    width: 120,
    editable: true,
    template: number2Template
  },
  {
    name: 'targetNewArea',
    width: 120,
    editable: true,
    template: number2Template
  },
  {
    name: 'targetCaneStump',
    width: 120,
    editable: true,
    template: number2Template
  },
  {
    name: 'targetDemolishStump',
    width: 120,
    editable: true,
    template: number2Template
  },
  {
    name: 'targetCaneTon',
    width: 120,
    editable: true,
    template: number2Template
  },
  {
    name: 'updatedAt',
    width: 150
  }
  // {
  //   name: 'MCSS_AreaCont',
  //   width: 150,
  //   template: number2Template
  // }
];
