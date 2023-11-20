export const colNames = [
  'ช่วงเวลา',
  'จำนวนรถ',
  'นน.อ้อย',
  'จำนวนรถ',
  'นน.ไฟไหม้',
  'รวมรถ',
  'รวม นน.',
  'ลานนอก',
  'ลานใน',
  'รวมรถลาน'
];

export const colModel1 = [
  {
    name: 'hours',
    align: 'center',
    // label: 'ช่วงเวลา',
    width: 150,
    editable: false,
    sorttype: 'interger'
  },
  {
    name: 'hourCar',
    sorttype: 'interger',
    align: 'center',
    label: 'จำนวนรถ',
    width: 100,
    editable: false,
    formatter: 'integer'
  },
  {
    name: 'hourTon',
    // label: 'นน.อ้อยสด',
    width: 120,
    align: 'right',
    editable: true,
    formatter: 'number',
    formatoptions: {
      decimalSeparator: '.',
      thousandsSeparator: ',',
      decimalPlaces: 2,
      defaultValue: '0.000'
    }
  },
  {
    name: 'hourCarBurn',
    label: 'จำนวนรถ',
    align: 'center',
    width: 100,
    editable: false,
    formatter: 'integer'
  },
  {
    name: 'hourTonBurn',
    // label: 'นน.อ้อยไฟไหม้',
    width: 120,
    align: 'right',
    editable: false,
    formatter: 'number',
    formatoptions: {
      decimalSeparator: '.',
      thousandsSeparator: ',',
      decimalPlaces: 2,
      defaultValue: '0.000'
    }
  },
  {
    name: 'SumCar',
    label: 'คันรถ',
    align: 'center',
    width: 100,
    editable: false,
    formatter: 'integer'
    // รวมไปทางขวา
    // formatter: (_cellvalue: any, options: any, _rowObject: any) => {
    //   const hourCar = parseFloat(options.rowData.hourCar || 0);
    //   const hourCarBurn = parseFloat(options.rowData.hourCarBurn || 0);
    //   return (hourCar + hourCarBurn).toFixed(2);
    // }
  },
  {
    name: 'SumTon',
    label: 'นน.อ้อย',
    width: 120,
    align: 'right',
    editable: false,
    formatter: 'number',
    formatoptions: {
      decimalSeparator: '.',
      thousandsSeparator: ',',
      decimalPlaces: 2,
      defaultValue: '0.000'
    }
    // รวมไปทางขวา
    // formatter: (_cellvalue: any, options: any, _rowObject: any) => {
    //   const hourTon = parseFloat(options.rowData.hourTon || 0);
    //   const hourTonBurn = parseFloat(options.rowData.hourTonBurn || 0);
    //   return (hourTon + hourTonBurn).toFixed(2);
    // }
  },
  {
    name: 'hourCarOutside',
    label: 'รถลานนอก',
    align: 'center',
    width: 100,
    editable: false,
    formatter: 'integer'
  },
  {
    name: 'hourCarIn',
    label: 'รถลานใน',
    align: 'center',
    width: 100,
    editable: false,
    formatter: 'integer'
  },
  {
    name: 'SumCarAll',
    label: 'รวมรถลาน',
    align: 'center',
    width: 100,
    editable: false,
    formatter: 'integer'
    // รวมไปทางขวา
    // formatter: (_cellvalue: any, options: any, _rowObject: any) => {
    //   const hourCar = parseFloat(options.rowData.hourCarOutside || 0);
    //   const hourCarIn = parseFloat(options.rowData.hourCarIn || 0);
    //   return (hourCar + hourCarIn).toFixed(2);
    // }
  }
];

export const colModels = [
  {
    name: 'days',
    align: 'center',
    label: 'วันที่หีบ',
    width: 150,
    editable: false
  },
  {
    name: 'hourNum',
    align: 'center',
    label: 'ชั่วโมงที่',
    width: 150,
    editable: false
  },
  {
    name: 'hours',
    align: 'center',
    label: 'ช่วงเวลา',
    width: 150,
    editable: false
  },
  {
    name: 'hourCar',
    align: 'center',
    label: 'จำนวนรถ อ้อยสด',
    width: 150,
    editable: true,
    formatter: 'integer'
  },
  {
    name: 'hourTon',
    label: 'นน.อ้อยสด',
    width: 150,
    align: 'right',
    editable: true,
    formatter: 'number',
    formatoptions: {
      decimalSeparator: '.',
      thousandsSeparator: ',',
      decimalPlaces: 2,
      defaultValue: '0.000'
    }
  },
  {
    name: 'hourCarBurn',
    label: 'จำนวนรถ ไฟไหม้',
    align: 'center',
    width: 150,
    editable: true,
    formatter: 'integer'
  },
  {
    name: 'hourTonBurn',
    label: 'นน.อ้อยไฟไหม้',
    width: 150,
    align: 'right',
    editable: true,
    formatter: 'number',
    formatoptions: {
      decimalSeparator: '.',
      thousandsSeparator: ',',
      decimalPlaces: 2,
      defaultValue: '0.000'
    }
  },
  {
    name: 'hourCarOutside',
    label: 'รถลานนอก',
    align: 'center',
    width: 150,
    editable: true,
    formatter: 'integer'
  },
  {
    name: 'hourCarIn',
    label: 'รถลานใน',
    align: 'center',
    width: 150,
    editable: true,
    formatter: 'integer'
  }
];
