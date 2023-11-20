import { integerTemplate, numberTemplate } from '../jquery-ui/formatTemplate';

export const colName = [
  'act',
  'ปีส่งเสริม',
  'รองฯ',
  'เขตส่งเสริม',
  'นักส่งเสริม',
  'ชื่อ - สกุล',
  'เป้าส่งเสริม',
  'เป้าเข้าหีบ',
  'เป้าวันที่ 1',
  'สดเข้าหีบวันที่ 1',
  'ไหม้เข้าหีบวันที่ 1',
  'เป้าวันที่ 2',
  'สดเข้าหีบวันที่ 2',
  'ไหม้เข้าหีบวันที่ 2',
  'เป้าวันที่ 3',
  'สดเข้าหีบวันที่ 3',
  'ไหม้เข้าหีบวันที่ 3',
  'เป้าวันที่ 4',
  'สดเข้าหีบวันที่ 4',
  'ไหม้เข้าหีบวันที่ 4',
  'เป้าวันที่ 5',
  'สดเข้าหีบวันที่ 5',
  'ไหม้เข้าหีบวันที่ 5',
  'เป้าวันที่ 6',
  'สดเข้าหีบวันที่ 6',
  'ไหม้เข้าหีบวันที่ 6',
  'เป้าวันที่ 7',
  'สดเข้าหีบวันที่ 7',
  'ไหม้เข้าหีบวันที่ 7',
  'เป้าวันที่ 8',
  'สดเข้าหีบวันที่ 8',
  'ไหม้เข้าหีบวันที่ 8',
  'เป้าวันที่ 9',
  'สดเข้าหีบวันที่ 9',
  'ไหม้เข้าหีบวันที่ 9',
  'เป้าวันที่ 10',
  'สดเข้าหีบวันที่ 10',
  'ไหม้เข้าหีบวันที่ 10',
  'เป้าวันที่ 11',
  'สดเข้าหีบวันที่ 11',
  'ไหม้เข้าหีบวันที่ 11',
  'เป้าวันที่ 12',
  'สดเข้าหีบวันที่ 12',
  'ไหม้เข้าหีบวันที่ 12',
  'เป้าวันที่ 13',
  'สดเข้าหีบวันที่ 13',
  'ไหม้เข้าหีบวันที่ 13',
  'เป้าวันที่ 14',
  'สดเข้าหีบวันที่ 14',
  'ไหม้เข้าหีบวันที่ 14',
  'เป้าวันที่ 15',
  'สดเข้าหีบวันที่ 15',
  'ไหม้เข้าหีบวันที่ 15',
  'เป้าวันที่ 16',
  'สดเข้าหีบวันที่ 16',
  'ไหม้เข้าหีบวันที่ 16',
  'เป้าวันที่ 17',
  'สดเข้าหีบวันที่ 17',
  'ไหม้เข้าหีบวันที่ 17',
  'เป้าวันที่ 18',
  'สดเข้าหีบวันที่ 18',
  'ไหม้เข้าหีบวันที่ 18',
  'เป้าวันที่ 19',
  'สดเข้าหีบวันที่ 19',
  'ไหม้เข้าหีบวันที่ 19',
  'เป้าวันที่ 20',
  'สดเข้าหีบวันที่ 20',
  'ไหม้เข้าหีบวันที่ 20',
  'เป้าวันที่ 21',
  'สดเข้าหีบวันที่ 21',
  'ไหม้เข้าหีบวันที่ 21',
  'เป้าวันที่ 22',
  'สดเข้าหีบวันที่ 22',
  'ไหม้เข้าหีบวันที่ 22',
  'เป้าวันที่ 23',
  'สดเข้าหีบวันที่ 23',
  'ไหม้เข้าหีบวันที่ 23',
  'เป้าวันที่ 24',
  'สดเข้าหีบวันที่ 24',
  'ไหม้เข้าหีบวันที่ 24',
  'เป้าวันที่ 25',
  'สดเข้าหีบวันที่ 25',
  'ไหม้เข้าหีบวันที่ 25',
  'เป้าวันที่ 26',
  'สดเข้าหีบวันที่ 26',
  'ไหม้เข้าหีบวันที่ 26',
  'เป้าวันที่ 27',
  'สดเข้าหีบวันที่ 27',
  'ไหม้เข้าหีบวันที่ 27',
  'เป้าวันที่ 28',
  'สดเข้าหีบวันที่ 28',
  'ไหม้เข้าหีบวันที่ 28',
  'เป้าวันที่ 29',
  'สดเข้าหีบวันที่ 29',
  'ไหม้เข้าหีบวันที่ 29',
  'เป้าวันที่ 30',
  'สดเข้าหีบวันที่ 30',
  'ไหม้เข้าหีบวันที่ 30',
  'เป้าวันที่ 31',
  'สดเข้าหีบวันที่ 31',
  'ไหม้เข้าหีบวันที่ 31',
  'เป้าวันที่ 32',
  'สดเข้าหีบวันที่ 32',
  'ไหม้เข้าหีบวันที่ 32',
  'เป้าวันที่ 33',
  'สดเข้าหีบวันที่ 33',
  'ไหม้เข้าหีบวันที่ 33',
  'เป้าวันที่ 34',
  'สดเข้าหีบวันที่ 34',
  'ไหม้เข้าหีบวันที่ 34',
  'เป้าวันที่ 35',
  'สดเข้าหีบวันที่ 35',
  'ไหม้เข้าหีบวันที่ 35',
  'เป้าวันที่ 36',
  'สดเข้าหีบวันที่ 36',
  'ไหม้เข้าหีบวันที่ 36',
  'เป้าวันที่ 37',
  'สดเข้าหีบวันที่ 37',
  'ไหม้เข้าหีบวันที่ 37',
  'เป้าวันที่ 38',
  'สดเข้าหีบวันที่ 38',
  'ไหม้เข้าหีบวันที่ 38',
  'เป้าวันที่ 39',
  'สดเข้าหีบวันที่ 39',
  'ไหม้เข้าหีบวันที่ 39',
  'เป้าวันที่ 40',
  'สดเข้าหีบวันที่ 40',
  'ไหม้เข้าหีบวันที่ 40',
  'เป้าวันที่ 41',
  'สดเข้าหีบวันที่ 41',
  'ไหม้เข้าหีบวันที่ 41',
  'เป้าวันที่ 42',
  'สดเข้าหีบวันที่ 42',
  'ไหม้เข้าหีบวันที่ 42',
  'เป้าวันที่ 43',
  'สดเข้าหีบวันที่ 43',
  'ไหม้เข้าหีบวันที่ 43',
  'เป้าวันที่ 44',
  'สดเข้าหีบวันที่ 44',
  'ไหม้เข้าหีบวันที่ 44',
  'เป้าวันที่ 45',
  'สดเข้าหีบวันที่ 45',
  'ไหม้เข้าหีบวันที่ 45',
  'เป้าวันที่ 46',
  'สดเข้าหีบวันที่ 46',
  'ไหม้เข้าหีบวันที่ ภุ',
  'เป้าวันที่ 47',
  'สดเข้าหีบวันที่ 47',
  'ไหม้เข้าหีบวันที่ 47',
  'เป้าวันที่ 48',
  'สดเข้าหีบวันที่ 48',
  'ไหม้เข้าหีบวันที่ 48',
  'เป้าวันที่ 49',
  'สดเข้าหีบวันที่ 49',
  'ไหม้เข้าหีบวันที่ 49',
  'เป้าวันที่ 50',
  'สดเข้าหีบวันที่ 50',
  'ไหม้เข้าหีบวันที่ 50',
  'เป้าวันที่ 51',
  'สดเข้าหีบวันที่ 51',
  'ไหม้เข้าหีบวันที่ 51',
  'เป้าวันที่ 52',
  'สดเข้าหีบวันที่ 52',
  'ไหม้เข้าหีบวันที่ 52',
  'เป้าวันที่ 53',
  'สดเข้าหีบวันที่ 53',
  'ไหม้เข้าหีบวันที่ 53',
  'เป้าวันที่ 54',
  'สดเข้าหีบวันที่ 54',
  'ไหม้เข้าหีบวันที่ 54',
  'เป้าวันที่ 55',
  'สดเข้าหีบวันที่ 55',
  'ไหม้เข้าหีบวันที่ 55',
  'เป้าวันที่ 56',
  'สดเข้าหีบวันที่ 56',
  'ไหม้เข้าหีบวันที่ 56',
  'เป้าวันที่ 57',
  'สดเข้าหีบวันที่ 57',
  'ไหม้เข้าหีบวันที่ 57',
  'เป้าวันที่ 58',
  'สดเข้าหีบวันที่ 58',
  'ไหม้เข้าหีบวันที่ 58',
  'เป้าวันที่ 59',
  'สดเข้าหีบวันที่ 59',
  'ไหม้เข้าหีบวันที่ 59',
  'เป้าวันที่ 60',
  'สดเข้าหีบวันที่ 60',
  'ไหม้เข้าหีบวันที่ 60',
  'เป้าวันที่ 61',
  'สดเข้าหีบวันที่ 61',
  'ไหม้เข้าหีบวันที่ 61',
  'เป้าวันที่ 62',
  'สดเข้าหีบวันที่ 62',
  'ไหม้เข้าหีบวันที่ 62',
  'เป้าวันที่ 63',
  'สดเข้าหีบวันที่ 63',
  'ไหม้เข้าหีบวันที่ 63',
  'เป้าวันที่ 64',
  'สดเข้าหีบวันที่ 64',
  'ไหม้เข้าหีบวันที่ 64',
  'เป้าวันที่ 65',
  'สดเข้าหีบวันที่ 65',
  'ไหม้เข้าหีบวันที่ 65',
  'เป้าวันที่ 66',
  'สดเข้าหีบวันที่ 66',
  'ไหม้เข้าหีบวันที่ 66',
  'เป้าวันที่ 67',
  'สดเข้าหีบวันที่ 67',
  'ไหม้เข้าหีบวันที่ 67',
  'เป้าวันที่ 68',
  'สดเข้าหีบวันที่ 68',
  'ไหม้เข้าหีบวันที่ 68',
  'เป้าวันที่ 69',
  'สดเข้าหีบวันที่ 69',
  'ไหม้เข้าหีบวันที่ 69',
  'เป้าวันที่ 70',
  'สดเข้าหีบวันที่ 70',
  'ไหม้เข้าหีบวันที่ 70',
  'เป้าวันที่ 71',
  'สดเข้าหีบวันที่ 71',
  'ไหม้เข้าหีบวันที่ 71',
  'เป้าวันที่ 72',
  'สดเข้าหีบวันที่ 72',
  'ไหม้เข้าหีบวันที่ 72',
  'เป้าวันที่ 73',
  'สดเข้าหีบวันที่ 73',
  'ไหม้เข้าหีบวันที่ 73',
  'เป้าวันที่ 74',
  'สดเข้าหีบวันที่ 74',
  'ไหม้เข้าหีบวันที่ 74',
  'เป้าวันที่ 75',
  'สดเข้าหีบวันที่ 75',
  'ไหม้เข้าหีบวันที่ 75',
  'เป้าวันที่ 76',
  'สดเข้าหีบวันที่ 76',
  'ไหม้เข้าหีบวันที่ 76',
  'เป้าวันที่ 77',
  'สดเข้าหีบวันที่ 77',
  'ไหม้เข้าหีบวันที่ 77',
  'เป้าวันที่ 78',
  'สดเข้าหีบวันที่ 78',
  'ไหม้เข้าหีบวันที่ 78',
  'เป้าวันที่ 79',
  'สดเข้าหีบวันที่ 79',
  'ไหม้เข้าหีบวันที่ 79',
  'เป้าวันที่ 80',
  'สดเข้าหีบวันที่ 80',
  'ไหม้เข้าหีบวันที่ 80',
  'เป้าวันที่ 81',
  'สดเข้าหีบวันที่ 81',
  'ไหม้เข้าหีบวันที่ 81',
  'เป้าวันที่ 82',
  'สดเข้าหีบวันที่ 82',
  'ไหม้เข้าหีบวันที่ 82',
  'เป้าวันที่ 83',
  'สดเข้าหีบวันที่ 83',
  'ไหม้เข้าหีบวันที่ 83',
  'เป้าวันที่ 84',
  'สดเข้าหีบวันที่ 84',
  'ไหม้เข้าหีบวันที่ 84',
  'เป้าวันที่ 85',
  'สดเข้าหีบวันที่ 85',
  'ไหม้เข้าหีบวันที่ 85',
  'เป้าวันที่ 86',
  'สดเข้าหีบวันที่ 86',
  'ไหม้เข้าหีบวันที่ 86',
  'เป้าวันที่ 87',
  'สดเข้าหีบวันที่ 87',
  'ไหม้เข้าหีบวันที่ 87',
  'เป้าวันที่ 88',
  'สดเข้าหีบวันที่ 88',
  'ไหม้เข้าหีบวันที่ 88',
  'เป้าวันที่ 89',
  'สดเข้าหีบวันที่ 89',
  'ไหม้เข้าหีบวันที่ 89',
  'เป้าวันที่ 90',
  'สดเข้าหีบวันที่ 90',
  'ไหม้เข้าหีบวันที่ 90',
  'เป้าวันที่ 91',
  'สดเข้าหีบวันที่ 91',
  'ไหม้เข้าหีบวันที่ 91',
  'เป้าวันที่ 92',
  'สดเข้าหีบวันที่ 92',
  'ไหม้เข้าหีบวันที่ 92',
  'เป้าวันที่ 93',
  'สดเข้าหีบวันที่ 93',
  'ไหม้เข้าหีบวันที่ 93',
  'เป้าวันที่ 94',
  'สดเข้าหีบวันที่ 94',
  'ไหม้เข้าหีบวันที่ 94',
  'เป้าวันที่ 95',
  'สดเข้าหีบวันที่ 95',
  'ไหม้เข้าหีบวันที่ 95',
  'เป้าวันที่ 96',
  'สดเข้าหีบวันที่ 96',
  'ไหม้เข้าหีบวันที่ 96',
  'เป้าวันที่ 97',
  'สดเข้าหีบวันที่ 97',
  'ไหม้เข้าหีบวันที่ 97',
  'เป้าวันที่ 98',
  'สดเข้าหีบวันที่ 98',
  'ไหม้เข้าหีบวันที่ 98',
  'เป้าวันที่ 99',
  'สดเข้าหีบวันที่ 99',
  'ไหม้เข้าหีบวันที่ 99',
  'เป้าวันที่ 100',
  'สดเข้าหีบวันที่ 100',
  'ไหม้เข้าหีบวันที่ 100',
  'เป้าวันที่ 101',
  'สดเข้าหีบวันที่ 101',
  'ไหม้เข้าหีบวันที่ 101',
  'เป้าวันที่ 102',
  'สดเข้าหีบวันที่ 102',
  'ไหม้เข้าหีบวันที่ 102',
  'เป้าวันที่ 103',
  'สดเข้าหีบวันที่ 103',
  'ไหม้เข้าหีบวันที่ 103',
  'เป้าวันที่ 104',
  'สดเข้าหีบวันที่ 104',
  'ไหม้เข้าหีบวันที่ 104',
  'เป้าวันที่ 105',
  'สดเข้าหีบวันที่ 105',
  'ไหม้เข้าหีบวันที่ 105',
  'เป้าวันที่ 106',
  'สดเข้าหีบวันที่ 106',
  'ไหม้เข้าหีบวันที่ 106',
  'เป้าวันที่ 107',
  'สดเข้าหีบวันที่ 107',
  'ไหม้เข้าหีบวันที่ 107',
  'เป้าวันที่ 108',
  'สดเข้าหีบวันที่ 108',
  'ไหม้เข้าหีบวันที่ 108',
  'เป้าวันที่ 109',
  'สดเข้าหีบวันที่ 109',
  'ไหม้เข้าหีบวันที่ 109',
  'เป้าวันที่ 110',
  'สดเข้าหีบวันที่ 110',
  'ไหม้เข้าหีบวันที่ 110',
  'เป้าวันที่ 111',
  'สดเข้าหีบวันที่ 111',
  'ไหม้เข้าหีบวันที่ 111',
  'เป้าวันที่ 112',
  'สดเข้าหีบวันที่ 112',
  'ไหม้เข้าหีบวันที่ 112',
  'เป้าวันที่ 113',
  'สดเข้าหีบวันที่ 113',
  'ไหม้เข้าหีบวันที่ 113',
  'เป้าวันที่ 114',
  'สดเข้าหีบวันที่ 114',
  'ไหม้เข้าหีบวันที่ 114',
  'เป้าวันที่ 115',
  'สดเข้าหีบวันที่ 115',
  'ไหม้เข้าหีบวันที่ 115',
  'เป้าวันที่ 116',
  'สดเข้าหีบวันที่ 116',
  'ไหม้เข้าหีบวันที่ 116',
  'เป้าวันที่ 117',
  'สดเข้าหีบวันที่ 117',
  'ไหม้เข้าหีบวันที่ 117',
  'เป้าวันที่ 118',
  'สดเข้าหีบวันที่ 118',
  'ไหม้เข้าหีบวันที่ 118',
  'เป้าวันที่ 119',
  'สดเข้าหีบวันที่ 119',
  'ไหม้เข้าหีบวันที่ 119',
  'เป้าวันที่ 120',
  'สดเข้าหีบวันที่ 120',
  'ไหม้เข้าหีบวันที่ 120',
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
    editable: false,
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
    editable: false
  },
  {
    name: 'zone',
    width: 120,
    editable: false
  },
  {
    name: 'subZone',
    width: 120,
    editable: false
  },
  {
    name: 'surveyName',
    width: 170,
    editable: false
  },

  {
    name: 'targetCaneTon',
    width: 120,
    editable: true,
    template: numberTemplate
  },
  {
    name: 'sugarCaneCrushing',
    width: 120,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay1',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue1',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn1',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay2',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue2',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn2',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay3',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue3',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn3',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay4',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue4',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn4',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay5',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue5',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn5',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay6',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue6',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn6',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay7',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue7',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn7',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay8',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue8',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn8',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay9',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue9',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn9',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay10',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue10',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn10',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay11',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue11',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn11',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay12',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue12',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn12',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay13',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue13',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn13',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay14',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue14',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn14',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay15',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue15',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn15',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay16',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue16',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn16',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay17',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue17',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn17',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay18',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue18',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn18',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay19',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue19',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn19',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay20',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue20',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn20',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay21',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue21',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn21',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay22',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue22',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn22',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay23',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue23',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn23',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay24',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue24',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn24',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay25',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue25',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn25',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay26',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue26',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn26',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay27',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue27',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn27',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay28',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue28',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn28',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay29',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue29',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn29',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay30',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue30',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn30',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay31',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue31',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn31',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay32',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue32',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn32',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay33',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue33',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn33',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay34',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue34',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn34',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay35',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue35',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn35',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay36',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue36',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn36',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay37',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue37',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn37',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay38',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue38',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn38',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay39',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue39',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn39',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay40',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue40',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn40',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay41',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue41',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn41',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay42',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue42',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn42',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay43',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue43',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn43',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay44',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue44',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn44',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay45',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue45',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn45',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay46',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue46',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn46',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay47',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue47',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn47',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay48',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue48',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn48',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay49',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue49',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn49',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay50',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue50',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn50',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay51',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue51',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn51',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay52',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue52',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn52',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay53',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue53',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn53',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay54',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue54',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn54',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay55',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue55',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn55',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay56',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue56',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn56',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay57',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue57',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn57',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay58',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue58',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn58',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay59',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue59',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn59',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay60',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue60',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn60',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay61',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue61',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn61',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay62',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue62',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn62',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay63',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue63',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn63',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay64',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue64',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn64',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay65',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue65',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn65',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay66',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue66',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn66',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay67',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue67',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn67',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay68',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue68',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn68',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay69',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue69',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn69',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay70',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue70',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn70',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay71',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue71',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn71',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay72',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue72',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn72',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay73',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue73',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn73',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay74',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue74',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn74',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay75',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue75',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn75',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay76',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue76',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn76',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay77',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue77',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn77',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay78',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue78',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn78',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay79',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue79',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn79',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay80',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue80',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn80',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay81',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue81',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn81',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay82',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue82',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn82',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay83',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue83',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn83',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay84',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue84',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn84',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay85',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue85',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn85',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay86',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue86',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn86',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay87',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue87',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn87',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay88',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue88',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn88',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay89',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue89',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn89',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay90',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue90',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn90',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay91',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue91',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn91',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay92',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue92',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn92',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay93',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue93',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn93',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay94',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue94',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn94',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay95',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue95',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn95',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay96',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue96',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn96',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay97',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue97',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn97',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay98',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue98',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn98',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay99',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue99',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn99',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay100',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue100',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn100',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay101',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue101',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn101',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay102',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue102',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn102',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay103',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue103',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn103',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay104',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue104',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn104',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay105',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue105',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn105',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay106',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue106',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn106',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay107',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue107',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn107',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay108',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue108',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn108',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay109',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue109',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn109',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay110',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue110',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn110',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay111',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue111',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn111',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay112',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue112',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn112',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay113',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue113',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn113',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay114',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue114',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn114',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay115',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue115',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn115',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay116',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue116',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn116',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay117',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue117',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn117',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay118',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue118',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn118',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay119',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue119',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn119',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay120',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeTrue120',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ComeBurn120',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'updatedAt',
    width: 150
  }
  // {
  //   name: 'MCSS_AreaCont',
  //   width: 150,
  //   template: numberTemplate
  // }
];
