import { integerTemplate, number2Template } from '../jquery-ui/formatTemplate';

export const colName = [
  'act',
  'ปีการผลิต',
  'โควตา',
  'ประเภท',
  'โควตาค้ำประกัน',
  'รายละเอียด',
  'มูลค่าหลักทรัพย์',
  'ราคาประเมิน',
  'กรรมสิทธิ์',
  'เลขบัตรประชาชน 1',
  'ชื่อกรรมสิทธิ์ 1',
  'ที่อยู่ 1',
  'เลขบัตรประชาชน 2',
  'ชื่อกรรมสิทธิ์ 2',
  'ที่อยู่ 2',
  'เลขบัตรประชาชน 3',
  'ชื่อกรรมสิทธิ์ 3',
  'ที่อยู่ 3',
  'ชื่อกรรมสิทธิ์ 4',
  'เลขบัตรประชาชน 4',
  'ที่อยู่ 4'
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
    // label: 'ปีส่งเสริม',
    width: 120,
    align: 'center',
    frozen: true,
    editable: true,
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
    editrules: { required: true },
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
          select += `<option value="${this.cropYear}">${this.cropYear}</option>`;
        });

        return `${select}</select>`;
      }
    }
  },
  {
    name: 'quota',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'securitieType',
    width: 150,
    editable: true,
    edittype: 'select',
    editoptions: {
      value: `โฉนด:โฉนด;นค 1:นค 1;นค 3:นค 3;นส 3:นส 3;นส 3 ก:นส 3 ก;นส 2:นส 2;ภบท 5:ภบท 5;ภบท 6:ภบท 6;สทก-1:สทก-1;สปก4-01ก:สปก4-01ก;สปก4-01ข:สปก4-01ข;ทะเบียนรถ 10 ล้อ:ทะเบียนรถ 10 ล้อ;ทะเบียนรถ 12 ล้อ:ทะเบียนรถ 12 ล้อ;ทะเบียนรถ 4 ล้อ:ทะเบียนรถ 4 ล้อ;ทะเบียนรถ 6 ล้อ:ทะเบียนรถ 6 ล้อ;ทะเบียนรถ 8 ล้อ:ทะเบียนรถ 8 ล้อ;ผู้ค้ำประกันแบบมีเลขโควตา:ผู้ค้ำประกันแบบมีเลขโควตา;ผู้ค้ำประกันแบบบุคคลอื่น:ผู้ค้ำประกันแบบบุคคลอื่น;รถเพื่อการเกษตร:รถเพื่อการเกษตร;รถแทรกเตอร์:รถแทรกเตอร์;รถไถ:รถไถ;รถตัดอ้อย:รถตัดอ้อย;รถคีบอ้อย:รถคีบอ้อย;รถจักรยานยนต์:รถจักรยานยนต์`,
      defaultValue: ``
    },
    stype: 'select',
    searchoptions: {
      sopt: ['eq'],
      value: `:All;โฉนด:โฉนด;นค 1:นค 1;นค 3:นค 3;นส 3:นส 3;นส 3 ก:นส 3 ก;นส 2:นส 2;ภบท 5:ภบท 5;ภบท 6:ภบท 6;สทก-1:สทก-1;สปก4-01ก:สปก4-01ก;สปก4-01ข:สปก4-01ข;ทะเบียนรถ 10 ล้อ:ทะเบียนรถ 10 ล้อ;ทะเบียนรถ 12 ล้อ:ทะเบียนรถ 12 ล้อ;ทะเบียนรถ 4 ล้อ:ทะเบียนรถ 4 ล้อ;ทะเบียนรถ 6 ล้อ:ทะเบียนรถ 6 ล้อ;ทะเบียนรถ 8 ล้อ:ทะเบียนรถ 8 ล้อ;ผู้ค้ำประกันแบบมีเลขโควตา:ผู้ค้ำประกันแบบมีเลขโควตา;ผู้ค้ำประกันแบบบุคคลอื่น:ผู้ค้ำประกันแบบบุคคลอื่น;รถเพื่อการเกษตร:รถเพื่อการเกษตร;รถแทรกเตอร์:รถแทรกเตอร์;รถไถ:รถไถ;รถตัดอ้อย:รถตัดอ้อย;รถคีบอ้อย:รถคีบอ้อย;รถจักรยานยนต์:รถจักรยานยนต์`
    }
  },
  {
    name: 'quotaGuarantor',
    width: 150,
    editable: true
  },
  {
    name: 'securitieDetail',
    width: 320,
    editable: true
  },
  {
    name: 'securitieValue',
    width: 150,
    editable: true,
    template: number2Template
  },
  {
    name: 'appraisalPrice',
    width: 150,
    editable: true,
    template: number2Template
  },
  {
    name: 'ownership',
    width: 150,
    editable: true
  },
  {
    name: 'ownerCardId',
    width: 150,
    editable: true
    // template: number2Template
  },
  {
    name: 'ownershipName',
    width: 150,
    editable: true
  },
  {
    name: 'ownerAddress',
    width: 250,
    editable: true
  },
  {
    name: 'ownerCardId1',
    width: 150,
    editable: true
    // template: number2Template
  },
  {
    name: 'ownershipName1',
    width: 150,
    editable: true
  },
  {
    name: 'ownerAddress1',
    width: 250,
    editable: true
  },
  {
    name: 'ownerCardId2',
    width: 150,
    editable: true
    // template: number2Template
  },
  {
    name: 'ownershipName2',
    width: 150,
    editable: true
  },
  {
    name: 'ownerAddress2',
    width: 250,
    editable: true
  },
  {
    name: 'ownerCardId3',
    width: 150,
    editable: true
    // template: number2Template
  },
  {
    name: 'ownershipName3',
    width: 150,
    editable: true
  },
  {
    name: 'ownerAddress3',
    width: 250,
    editable: true
  }
];

export const colNameImp = [
  'act',
  'cropYear',
  'quota',
  'securitieType',
  'quotaGuarantor',
  'securitieDetail',
  'securitieValue',
  'appraisalPrice',
  'ownership',
  'ownershipName',
  'ownerCardId',
  'ownerAddress',
  'ownershipName1',
  'ownerCardId1',
  'ownerAddress1',
  'ownershipName2',
  'ownerCardId2',
  'ownerAddress2',
  'ownershipName3',
  'ownerCardId3',
  'ownerAddress3'
];
