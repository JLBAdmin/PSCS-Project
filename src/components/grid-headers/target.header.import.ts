import { integerTemplate, number } from '../jquery-ui/formatTemplate';

export const colName = [
  'act',
  'ปีส่งเสริม',
  'นักส่งเสริม',
  'ชื่อ - สกุล',
  'เป้าเข้าหีบ',
  'เป้าวันที่ 1',
  'เข้าหีบวันที่ 1',
  'C.C.S วันที่ 1',
  'เป้าวันที่ 2',
  'เข้าหีบวันที่ 2',
  'C.C.S วันที่ 2',
  'เป้าวันที่ 3',
  'เข้าหีบวันที่ 3',
  'C.C.S วันที่ 3',
  'เป้าวันที่ 4',
  'เข้าหีบวันที่ 4',
  'C.C.S วันที่ 4',
  'เป้าวันที่ 5',
  'เข้าหีบวันที่ 5',
  'C.C.S วันที่ 5',
  'เป้าวันที่ 6',
  'เข้าหีบวันที่ 6',
  'C.C.S วันที่ 6',
  'เป้าวันที่ 7',
  'เข้าหีบวันที่ 7',
  'C.C.S วันที่ 7',
  'เป้าวันที่ 8',
  'เข้าหีบวันที่ 8',
  'C.C.S วันที่ 8',
  'เป้าวันที่ 9',
  'เข้าหีบวันที่ 9',
  'C.C.S วันที่ 9',
  'เป้าวันที่ 10',
  'เข้าหีบวันที่ 10',
  'C.C.S วันที่ 10',
  'เป้าวันที่ 11',
  'เข้าหีบวันที่ 11',
  'C.C.S วันที่ 11',
  'เป้าวันที่ 12',
  'เข้าหีบวันที่ 12',
  'C.C.S วันที่ 12',
  'เป้าวันที่ 13',
  'เข้าหีบวันที่ 13',
  'C.C.S วันที่ 13',
  'เป้าวันที่ 14',
  'เข้าหีบวันที่ 14',
  'C.C.S วันที่ 14',
  'เป้าวันที่ 15',
  'เข้าหีบวันที่ 15',
  'C.C.S วันที่ 15',
  'เป้าวันที่ 16',
  'เข้าหีบวันที่ 16',
  'C.C.S วันที่ 16',
  'เป้าวันที่ 17',
  'เข้าหีบวันที่ 17',
  'C.C.S วันที่ 17',
  'เป้าวันที่ 18',
  'เข้าหีบวันที่ 18',
  'C.C.S วันที่ 18',
  'เป้าวันที่ 19',
  'เข้าหีบวันที่ 19',
  'C.C.S วันที่ 19',
  'เป้าวันที่ 20',
  'เข้าหีบวันที่ 20',
  'C.C.S วันที่ 20',
  'เป้าวันที่ 21',
  'เข้าหีบวันที่ 21',
  'C.C.S วันที่ 21',
  'เป้าวันที่ 22',
  'เข้าหีบวันที่ 22',
  'C.C.S วันที่ 22',
  'เป้าวันที่ 23',
  'เข้าหีบวันที่ 23',
  'C.C.S วันที่ 23',
  'เป้าวันที่ 24',
  'เข้าหีบวันที่ 24',
  'C.C.S วันที่ 24',
  'เป้าวันที่ 25',
  'เข้าหีบวันที่ 25',
  'C.C.S วันที่ 25',
  'เป้าวันที่ 26',
  'เข้าหีบวันที่ 26',
  'C.C.S วันที่ 26',
  'เป้าวันที่ 27',
  'เข้าหีบวันที่ 27',
  'C.C.S วันที่ 27',
  'เป้าวันที่ 28',
  'เข้าหีบวันที่ 28',
  'C.C.S วันที่ 28',
  'เป้าวันที่ 29',
  'เข้าหีบวันที่ 29',
  'C.C.S วันที่ 29',
  'เป้าวันที่ 30',
  'เข้าหีบวันที่ 30',
  'C.C.S วันที่ 30',
  'เป้าวันที่ 31',
  'เข้าหีบวันที่ 31',
  'C.C.S วันที่ 31',
  'เป้าวันที่ 32',
  'เข้าหีบวันที่ 32',
  'C.C.S วันที่ 32',
  'เป้าวันที่ 33',
  'เข้าหีบวันที่ 33',
  'C.C.S วันที่ 33',
  'เป้าวันที่ 34',
  'เข้าหีบวันที่ 34',
  'C.C.S วันที่ 34',
  'เป้าวันที่ 35',
  'เข้าหีบวันที่ 35',
  'C.C.S วันที่ 35',
  'เป้าวันที่ 36',
  'เข้าหีบวันที่ 36',
  'C.C.S วันที่ 36',
  'เป้าวันที่ 37',
  'เข้าหีบวันที่ 37',
  'C.C.S วันที่ 37',
  'เป้าวันที่ 38',
  'เข้าหีบวันที่ 38',
  'C.C.S วันที่ 38',
  'เป้าวันที่ 39',
  'เข้าหีบวันที่ 39',
  'C.C.S วันที่ 39',
  'เป้าวันที่ 40',
  'เข้าหีบวันที่ 40',
  'C.C.S วันที่ 40',
  'เป้าวันที่ 41',
  'เข้าหีบวันที่ 41',
  'C.C.S วันที่ 41',
  'เป้าวันที่ 42',
  'เข้าหีบวันที่ 42',
  'C.C.S วันที่ 42',
  'เป้าวันที่ 43',
  'เข้าหีบวันที่ 43',
  'C.C.S วันที่ 43',
  'เป้าวันที่ 44',
  'เข้าหีบวันที่ 44',
  'C.C.S วันที่ 44',
  'เป้าวันที่ 45',
  'เข้าหีบวันที่ 45',
  'C.C.S วันที่ 45',
  'เป้าวันที่ 46',
  'เข้าหีบวันที่ 46',
  'C.C.S วันที่ 46',
  'เป้าวันที่ 47',
  'เข้าหีบวันที่ 47',
  'C.C.S วันที่ 47',
  'เป้าวันที่ 48',
  'เข้าหีบวันที่ 48',
  'C.C.S วันที่ 48',
  'เป้าวันที่ 49',
  'เข้าหีบวันที่ 49',
  'C.C.S วันที่ 49',
  'เป้าวันที่ 50',
  'เข้าหีบวันที่ 50',
  'C.C.S วันที่ 50',
  'เป้าวันที่ 51',
  'เข้าหีบวันที่ 51',
  'C.C.S วันที่ 51',
  'เป้าวันที่ 52',
  'เข้าหีบวันที่ 52',
  'C.C.S วันที่ 52',
  'เป้าวันที่ 53',
  'เข้าหีบวันที่ 53',
  'C.C.S วันที่ 53',
  'เป้าวันที่ 54',
  'เข้าหีบวันที่ 54',
  'C.C.S วันที่ 54',
  'เป้าวันที่ 55',
  'เข้าหีบวันที่ 55',
  'C.C.S วันที่ 55',
  'เป้าวันที่ 56',
  'เข้าหีบวันที่ 56',
  'C.C.S วันที่ 56',
  'เป้าวันที่ 57',
  'เข้าหีบวันที่ 57',
  'C.C.S วันที่ 57',
  'เป้าวันที่ 58',
  'เข้าหีบวันที่ 58',
  'C.C.S วันที่ 58',
  'เป้าวันที่ 59',
  'เข้าหีบวันที่ 59',
  'C.C.S วันที่ 59',
  'เป้าวันที่ 60',
  'เข้าหีบวันที่ 60',
  'C.C.S วันที่ 60',
  'เป้าวันที่ 61',
  'เข้าหีบวันที่ 61',
  'C.C.S วันที่ 61',
  'เป้าวันที่ 62',
  'เข้าหีบวันที่ 62',
  'C.C.S วันที่ 62',
  'เป้าวันที่ 63',
  'เข้าหีบวันที่ 63',
  'C.C.S วันที่ 63',
  'เป้าวันที่ 64',
  'เข้าหีบวันที่ 64',
  'C.C.S วันที่ 64',
  'เป้าวันที่ 65',
  'เข้าหีบวันที่ 65',
  'C.C.S วันที่ 65',
  'เป้าวันที่ 66',
  'เข้าหีบวันที่ 66',
  'C.C.S วันที่ 66',
  'เป้าวันที่ 67',
  'เข้าหีบวันที่ 67',
  'C.C.S วันที่ 67',
  'เป้าวันที่ 68',
  'เข้าหีบวันที่ 68',
  'C.C.S วันที่ 68',
  'เป้าวันที่ 69',
  'เข้าหีบวันที่ 69',
  'C.C.S วันที่ 69',
  'เป้าวันที่ 70',
  'เข้าหีบวันที่ 70',
  'C.C.S วันที่ 70',
  'เป้าวันที่ 71',
  'เข้าหีบวันที่ 71',
  'C.C.S วันที่ 71',
  'เป้าวันที่ 72',
  'เข้าหีบวันที่ 72',
  'C.C.S วันที่ 72',
  'เป้าวันที่ 73',
  'เข้าหีบวันที่ 73',
  'C.C.S วันที่ 73',
  'เป้าวันที่ 74',
  'เข้าหีบวันที่ 74',
  'C.C.S วันที่ 74',
  'เป้าวันที่ 75',
  'เข้าหีบวันที่ 75',
  'C.C.S วันที่ 75',
  'เป้าวันที่ 76',
  'เข้าหีบวันที่ 76',
  'C.C.S วันที่ 76',
  'เป้าวันที่ 77',
  'เข้าหีบวันที่ 77',
  'C.C.S วันที่ 77',
  'เป้าวันที่ 78',
  'เข้าหีบวันที่ 78',
  'C.C.S วันที่ 78',
  'เป้าวันที่ 79',
  'เข้าหีบวันที่ 79',
  'C.C.S วันที่ 79',
  'เป้าวันที่ 80',
  'เข้าหีบวันที่ 80',
  'C.C.S วันที่ 80',
  'เป้าวันที่ 81',
  'เข้าหีบวันที่ 81',
  'C.C.S วันที่ 81',
  'เป้าวันที่ 82',
  'เข้าหีบวันที่ 82',
  'C.C.S วันที่ 82',
  'เป้าวันที่ 83',
  'เข้าหีบวันที่ 83',
  'C.C.S วันที่ 83',
  'เป้าวันที่ 84',
  'เข้าหีบวันที่ 84',
  'C.C.S วันที่ 84',
  'เป้าวันที่ 85',
  'เข้าหีบวันที่ 85',
  'C.C.S วันที่ 85',
  'เป้าวันที่ 86',
  'เข้าหีบวันที่ 86',
  'C.C.S วันที่ 86',
  'เป้าวันที่ 87',
  'เข้าหีบวันที่ 87',
  'C.C.S วันที่ 87',
  'เป้าวันที่ 88',
  'เข้าหีบวันที่ 88',
  'C.C.S วันที่ 88',
  'เป้าวันที่ 89',
  'เข้าหีบวันที่ 89',
  'C.C.S วันที่ 89',
  'เป้าวันที่ 90',
  'เข้าหีบวันที่ 90',
  'C.C.S วันที่ 90',
  'เป้าวันที่ 91',
  'เข้าหีบวันที่ 91',
  'C.C.S วันที่ 91',
  'เป้าวันที่ 92',
  'เข้าหีบวันที่ 92',
  'C.C.S วันที่ 92',
  'เป้าวันที่ 93',
  'เข้าหีบวันที่ 93',
  'C.C.S วันที่ 93',
  'เป้าวันที่ 94',
  'เข้าหีบวันที่ 94',
  'C.C.S วันที่ 94',
  'เป้าวันที่ 95',
  'เข้าหีบวันที่ 95',
  'C.C.S วันที่ 95',
  'เป้าวันที่ 96',
  'เข้าหีบวันที่ 96',
  'C.C.S วันที่ 96',
  'เป้าวันที่ 97',
  'เข้าหีบวันที่ 97',
  'C.C.S วันที่ 97',
  'เป้าวันที่ 98',
  'เข้าหีบวันที่ 98',
  'C.C.S วันที่ 98',
  'เป้าวันที่ 99',
  'เข้าหีบวันที่ 99',
  'C.C.S วันที่ 99',
  'เป้าวันที่ 100',
  'เข้าหีบวันที่ 100',
  'C.C.S วันที่ 100',
  'เป้าวันที่ 101',
  'เข้าหีบวันที่ 101',
  'C.C.S วันที่ 101',
  'เป้าวันที่ 102',
  'เข้าหีบวันที่ 102',
  'C.C.S วันที่ 102',
  'เป้าวันที่ 103',
  'เข้าหีบวันที่ 103',
  'C.C.S วันที่ 103',
  'เป้าวันที่ 104',
  'เข้าหีบวันที่ 104',
  'C.C.S วันที่ 104',
  'เป้าวันที่ 105',
  'เข้าหีบวันที่ 105',
  'C.C.S วันที่ 105',
  'เป้าวันที่ 106',
  'เข้าหีบวันที่ 106',
  'C.C.S วันที่ 106',
  'เป้าวันที่ 107',
  'เข้าหีบวันที่ 107',
  'C.C.S วันที่ 107',
  'เป้าวันที่ 108',
  'เข้าหีบวันที่ 108',
  'C.C.S วันที่ 108',
  'เป้าวันที่ 109',
  'เข้าหีบวันที่ 109',
  'C.C.S วันที่ 109',
  'เป้าวันที่ 110',
  'เข้าหีบวันที่ 110',
  'C.C.S วันที่ 110',
  'เป้าวันที่ 111',
  'เข้าหีบวันที่ 111',
  'C.C.S วันที่ 111',
  'เป้าวันที่ 112',
  'เข้าหีบวันที่ 112',
  'C.C.S วันที่ 112',
  'เป้าวันที่ 113',
  'เข้าหีบวันที่ 113',
  'C.C.S วันที่ 113',
  'เป้าวันที่ 114',
  'เข้าหีบวันที่ 114',
  'C.C.S วันที่ 114',
  'เป้าวันที่ 115',
  'เข้าหีบวันที่ 115',
  'C.C.S วันที่ 115',
  'เป้าวันที่ 116',
  'เข้าหีบวันที่ 116',
  'C.C.S วันที่ 116',
  'เป้าวันที่ 117',
  'เข้าหีบวันที่ 117',
  'C.C.S วันที่ 117',
  'เป้าวันที่ 118',
  'เข้าหีบวันที่ 118',
  'C.C.S วันที่ 118',
  'เป้าวันที่ 119',
  'เข้าหีบวันที่ 119',
  'C.C.S วันที่ 119',
  'เป้าวันที่ 120',
  'เข้าหีบวันที่ 120',
  'C.C.S วันที่ 120',
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
    name: 'sugarCaneCrushing',
    width: 120,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'targetDay1',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'ComeTrue1',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'ccs1',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'targetDay2',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'ComeTrue2',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'ccs2',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'targetDay3',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'ComeTrue3',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'ccs3',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'targetDay4',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'ComeTrue4',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'ccs4',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'targetDay5',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'ComeTrue5',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'ccs5',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'targetDay6',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'ComeTrue6',
    width: 100,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs6',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs7',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs8',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs9',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs10',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs11',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs12',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs13',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs14',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs15',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs16',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs17',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs18',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs19',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs20',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs21',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs22',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs23',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs24',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs25',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs26',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs27',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs28',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs29',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs30',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs31',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs32',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs33',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs34',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs35',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs36',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs37',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs38',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs39',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs40',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs41',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs42',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs43',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs44',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs45',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs46',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs47',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs48',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs49',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs50',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs51',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs52',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs53',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs54',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs55',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs56',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs57',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs58',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs59',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs60',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs61',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs62',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs63',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs64',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs65',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs66',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs67',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs68',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs69',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs70',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs71',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs72',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs73',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs74',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs75',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs76',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs77',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs78',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs79',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs80',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs81',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs82',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs83',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs84',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs85',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs86',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs87',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs88',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs89',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs90',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs91',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs92',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs93',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs94',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs95',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs96',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs97',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs98',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs99',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs100',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs101',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs102',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs103',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs104',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs105',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs106',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs107',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs108',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs109',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs110',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs111',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs112',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs113',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs114',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs115',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs116',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs117',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs118',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs119',
    width: 100,
    editable: true,
    template: number
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
    name: 'ccs120',
    width: 100,
    editable: true,
    template: number
  },
  {
    name: 'updatedAt',
    width: 150
  }
];
