import { integer, integerTemplate } from '../../jquery-ui/formatTemplate';

export const colName = [
  'act',
  'ปีส่งเสริม',
  'ชื่อโรงงาน',
  'กลุ่มโรงงาน',
  'สถานะ',
  'เป้าหีบอ้อย',
  'ประเมินอ้อย',
  'เป้าหมายพื้นที่',
  'พื้นที่เสียหาย',
  'วันเปิดหีบ',
  'วันปิดหีบ',
  'Day 1',
  'CCS 1',
  'Day 2',
  'CCS 2',
  'Day 3',
  'CCS 3',
  'Day 4',
  'CCS 4',
  'Day 5',
  'CCS 5',
  'Day 6',
  'CCS 6',
  'Day 7',
  'CCS 7',
  'Day 8',
  'CCS 8',
  'Day 9',
  'CCS 9',
  'Day 10',
  'CCS 10',
  'Day 11',
  'CCS 11',
  'Day 12',
  'CCS 12',
  'Day 13',
  'CCS 13',
  'Day 14',
  'CCS 14',
  'Day 15',
  'CCS 15',
  'Day 16',
  'CCS 16',
  'Day 17',
  'CCS 17',
  'Day 18',
  'CCS 18',
  'Day 19',
  'CCS 19',
  'Day 20',
  'CCS 20',
  'Day 21',
  'CCS 21',
  'Day 22',
  'CCS 22',
  'Day 23',
  'CCS 23',
  'Day 24',
  'CCS 24',
  'Day 25',
  'CCS 25',
  'Day 26',
  'CCS 26',
  'Day 27',
  'CCS 27',
  'Day 28',
  'CCS 28',
  'Day 29',
  'CCS 29',
  'Day 30',
  'CCS 30',
  'Day 31',
  'CCS 31',
  'Day 32',
  'CCS 32',
  'Day 33',
  'CCS 33',
  'Day 34',
  'CCS 34',
  'Day 35',
  'CCS 35',
  'Day 36',
  'CCS 36',
  'Day 37',
  'CCS 37',
  'Day 38',
  'CCS 38',
  'Day 39',
  'CCS 39',
  'Day 40',
  'CCS 40',
  'Day 41',
  'CCS 41',
  'Day 42',
  'CCS 42',
  'Day 43',
  'CCS 43',
  'Day 44',
  'CCS 44',
  'Day 45',
  'CCS 45',
  'Day 46',
  'CCS 46',
  'Day 47',
  'CCS 47',
  'Day 48',
  'CCS 48',
  'Day 49',
  'CCS 49',
  'Day 50',
  'CCS 50',
  'Day 51',
  'CCS 51',
  'Day 52',
  'CCS 52',
  'Day 53',
  'CCS 53',
  'Day 54',
  'CCS 54',
  'Day 55',
  'CCS 55',
  'Day 56',
  'CCS 56',
  'Day 57',
  'CCS 57',
  'Day 58',
  'CCS 58',
  'Day 59',
  'CCS 59',
  'Day 60',
  'CCS 60',
  'Day 61',
  'CCS 61',
  'Day 62',
  'CCS 62',
  'Day 63',
  'CCS 63',
  'Day 64',
  'CCS 64',
  'Day 65',
  'CCS 65',
  'Day 66',
  'CCS 66',
  'Day 67',
  'CCS 67',
  'Day 68',
  'CCS 68',
  'Day 69',
  'CCS 69',
  'Day 70',
  'CCS 70',
  'Day 71',
  'CCS 71',
  'Day 72',
  'CCS 72',
  'Day 73',
  'CCS 73',
  'Day 74',
  'CCS 74',
  'Day 75',
  'CCS 75',
  'Day 76',
  'CCS 76',
  'Day 77',
  'CCS 77',
  'Day 78',
  'CCS 78',
  'Day 79',
  'CCS 79',
  'Day 80',
  'CCS 80',
  'Day 81',
  'CCS 81',
  'Day 82',
  'CCS 82',
  'Day 83',
  'CCS 83',
  'Day 84',
  'CCS 84',
  'Day 85',
  'CCS 85',
  'Day 86',
  'CCS 86',
  'Day 87',
  'CCS 87',
  'Day 88',
  'CCS 88',
  'Day 89',
  'CCS 89',
  'Day 90',
  'CCS 90',
  'Day 91',
  'CCS 91',
  'Day 92',
  'CCS 92',
  'Day 93',
  'CCS 93',
  'Day 94',
  'CCS 94',
  'Day 95',
  'CCS 95',
  'Day 96',
  'CCS 96',
  'Day 97',
  'CCS 97',
  'Day 98',
  'CCS 98',
  'Day 99',
  'CCS 99',
  'Day 100',
  'CCS 100',
  'Day 101',
  'CCS 101',
  'Day 102',
  'CCS 102',
  'Day 103',
  'CCS 103',
  'Day 104',
  'CCS 104',
  'Day 105',
  'CCS 105',
  'Day 106',
  'CCS 106',
  'Day 107',
  'CCS 107',
  'Day 108',
  'CCS 108',
  'Day 109',
  'CCS 109',
  'Day 110',
  'CCS 110',
  'Day 111',
  'CCS 111',
  'Day 112',
  'CCS 112',
  'Day 113',
  'CCS 113',
  'Day 114',
  'CCS 114',
  'Day 115',
  'CCS 115',
  'Day 116',
  'CCS 116',
  'Day 117',
  'CCS 117',
  'Day 118',
  'CCS 118',
  'Day 119',
  'CCS 119',
  'Day 120',
  'CCS 120',
  'ปรับปรุงเมื่อ'
];

export const colModel = [
  {
    name: 'act',
    template: 'actions',
    width: 90,
    formatoptions: {
      keys: true // we want use [Enter] key to save the row and [Esc] to cancel editing.
    }
  },
  {
    name: 'cropYear',
    width: 100,
    editable: true
  },
  {
    name: 'factory',
    width: 150,
    editable: true
  },
  {
    name: 'factory_group',
    width: 70,
    editable: true,
    template: integer
  },
  {
    name: 'factory_status',
    width: 70,
    editable: true
  },
  {
    name: 'factory_target',
    width: 150,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'factory_rate',
    width: 150,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'factory_area',
    width: 150,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'factory_bad',
    width: 150,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'factory_start',
    width: 100,
    editable: true
  },
  {
    name: 'factory_stop',
    width: 100,
    editable: true
  },
  {
    name: 'day1',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs1',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day2',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs2',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day3',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs3',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day4',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs4',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day5',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs5',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day6',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs6',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day7',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs7',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day8',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs8',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day9',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs9',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day10',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs10',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day11',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs11',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day12',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs12',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day13',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs13',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day14',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs14',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day15',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs15',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day16',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs16',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day17',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs17',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day18',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs18',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day19',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs19',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day20',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs20',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day21',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs21',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day22',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs22',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day23',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs23',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day24',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs24',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day25',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs25',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day26',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs26',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day27',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs27',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day28',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs28',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day29',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs29',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day30',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs30',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day31',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs31',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day32',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs32',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day33',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs33',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day34',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs34',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day35',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs35',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day36',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs36',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day37',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs37',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day38',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs38',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day39',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs39',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day40',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs40',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day41',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs41',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day42',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs42',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day43',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs43',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day44',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs44',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day45',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs45',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day46',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs46',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day47',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs47',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day48',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs48',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day49',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs49',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day50',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs50',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day51',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs51',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day52',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs52',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day53',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs53',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day54',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs54',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day55',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs55',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day56',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs56',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day57',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs57',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day58',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs58',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day59',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs59',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day60',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs60',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day61',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs61',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day62',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs62',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day63',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs63',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day64',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs64',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day65',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs65',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day66',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs66',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day67',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs67',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day68',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs68',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day69',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs69',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day70',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs70',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day71',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs71',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day72',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs72',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day73',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs73',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day74',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs74',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day75',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs75',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day76',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs76',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day77',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs77',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day78',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs78',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day79',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs79',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day80',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs80',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day81',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs81',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day82',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs82',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day83',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs83',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day84',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs84',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day85',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs85',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day86',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs86',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day87',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs87',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day88',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs88',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day89',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs89',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day90',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs90',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day91',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs91',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day92',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs92',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day93',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs93',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day94',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs94',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day95',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs95',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day96',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs96',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day97',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs97',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day98',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs98',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day99',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs99',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day100',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs100',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day101',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs101',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day102',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs102',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day103',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs103',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day104',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs104',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day105',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs105',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day106',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs106',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day107',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs107',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day108',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs108',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day109',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs109',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day110',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs110',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day111',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs111',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day112',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs112',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day113',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs113',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day114',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs114',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day115',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs115',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day116',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs116',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day117',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs117',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day118',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs118',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day119',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs119',
    width: 70,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'day120',
    width: 90,
    editable: true,
    template: integerTemplate
  },
  {
    name: 'ccs120',
    width: 70,
    editable: true,
    template: integerTemplate
  },

  {
    name: 'updatedAt',
    width: 150
  }
];
