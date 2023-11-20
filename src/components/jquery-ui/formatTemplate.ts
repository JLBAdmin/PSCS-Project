// numberTemplate = {formatter: 'number', align: 'right', sorttype: 'number', editable: true/*,
//         searchoptions: { sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge', 'nu', 'nn', 'in', 'ni'] }*/},
//     dateTemplate = {width: 80, align: 'center', sorttype: 'date',
//             formatter: 'date', formatoptions: { newformat: 'd-M-Y' }, editable: true, datefmt: 'd-M-Y',
//             editoptions: { dataInit: initDate },
//             searchoptions: { sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge'], dataInit: initDate }},
//     yesNoTemplate = {align: 'center', editable: true, formatter: 'checkbox',
//             edittype: 'checkbox', editoptions: {value: 'Yes:No', defaultValue: 'No'},
//             stype: 'select', searchoptions: { sopt: ['eq', 'ne'], value: ':Any;true:Yes;false:No' }},

import { initDatepicker } from './datepicker';

//     myDefaultSearch = 'cn',
export const dateInspection = {
  // type: 'date',
  formatter: 'date',
  formatoptions: { srcformat: 'ISO8601Long', newformat: 'd/m/Y' },
  // datefmt: 'd/m/Y',
  editoptions: { dataInit: initDatepicker },
  searchoptions: {
    sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge'],
    dataInit: initDatepicker
  }
};
export const integer = {
  thousandsSeparator: ',',
  defaultValue: '0'
};

export const number = {
  decimalSeparator: '.',
  thousandsSeparator: ' ',
  decimalPlaces: 2,
  defaultValue: '0.00'
};

export const currency = {
  decimalSeparator: '.',
  thousandsSeparator: ',',
  decimalPlaces: 2,
  prefix: '฿',
  suffix: '-',
  defaultValue: '0.00'
};

export const decimal2 = {
  decimalSeparator: '.',
  thousandsSeparator: ',',
  decimalPlaces: 2,
  defaultValue: '0.00'
};

export const decimal3 = {
  decimalSeparator: '.',
  thousandsSeparator: ',',
  decimalPlaces: 3,
  defaultValue: '0.000'
};

export const decimal4 = {
  decimalSeparator: '.',
  thousandsSeparator: ',',
  decimalPlaces: 4,
  defaultValue: '0.0000'
};

export const showlinkID = {
  formatter: 'showlink',
  formatoptions: {
    baseLinkUrl: 'someurl.php',
    addParam: '&action=edit'
  }
};

export const showlinkMID = {
  formatter: 'showlink',
  formatoptions: {
    baseLinkUrl: 'someurl.php',
    addParam: '&action=edit',
    idName: 'myid'
  }
};

export const integerTemplate = {
  formatter: 'string',
  align: 'right',
  // formatoptions: integer,
  // thousandsSeparator: '',
  editoptions: {
    type: 'number',
    // step: '1',
    // min: '0',
    // max: '100000',
    pattern: '[0-9]+([.|,][0-9]+)?'
    // title: 'This should be a number with up to 2 decimal places.',
  },
  sorttype: 'integer',
  // editrules: { number: true, required: true },
  searchoptions: {
    sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge', 'nu', 'nn', 'in', 'ni']
  }
};

export const numberTemplate = {
  formatter: 'integer',
  align: 'right',
  formatoptions: integer,
  editoptions: {
    type: 'number',
    // step: '1',
    // min: '0',
    // max: '100000',
    pattern: '[0-9]+([.|,][0-9]+)?'
    // title: 'This should be a number with up to 2 decimal places.',
  },
  sorttype: 'integer',
  editrules: { number: true, required: true },
  searchoptions: {
    sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge', 'nu', 'nn', 'in', 'ni']
  }
};

export const number2Template = {
  formatter: 'currency',
  align: 'right',
  formatoptions: decimal2,
  thousandsSeparator: ',',
  editoptions: {
    type: 'number',
    step: '1.0000',
    // min: '0',
    // max: '100000',
    pattern: '[0-9]+([.|,][0-9]+)?'
    // title: 'This should be a number with up to 2 decimal places.',
  },
  sorttype: 'integer',
  editrules: { number: true, required: true },
  searchoptions: {
    sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge', 'nu', 'nn', 'in', 'ni']
  }
};

export const currencyTemplate = {
  formatter: 'currency',
  align: 'right',
  formatoptions: currency,
  editoptions: {
    type: 'number',
    // step: '1',
    // min: '0',
    // max: '100000',
    pattern: '[0-9]+([.|,][0-9]+)?'
    // title: 'This should be a number with up to 2 decimal places.',
  },
  sorttype: 'currency',
  editrules: { number: true, required: true },
  searchoptions: {
    sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge', 'nu', 'nn', 'in', 'ni']
  }
};

export const number3Template = {
  formatter: 'number',
  formatoptions: {
    decimalSeparator: '.',
    thousandsSeparator: ',',
    decimalPlaces: 3,
    defaultValue: '0.000'
  },
  align: 'right',
  sorttype: 'number',
  editrules: { number: true, required: true },
  editOption: {
    type: 'number',
    step: '1.000',
    min: '0.000',
    max: '100000',
    pattern: '[0-9]+([.|,][0-9]+)?',
    title: 'number with up to 3 decimal places.'
  },
  searchoptions: {
    sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge', 'nu', 'nn', 'in', 'ni']
  }
};

export const number4Template = {
  formatter: 'number',
  formatoptions: {
    decimalSeparator: '.',
    thousandsSeparator: ',',
    decimalPlaces: 4,
    defaultValue: '0.0000'
  },
  align: 'right',
  sorttype: 'number',
  editrules: { number: true, required: true },
  editOption: {
    type: 'number',
    // step: '1.000',
    // min: '0.000',
    // max: '100000',
    pattern: '[0-9]+([.|,][0-9]+)?',
    title: 'number with up to 4 decimal places.'
  },
  searchoptions: {
    sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge', 'nu', 'nn', 'in', 'ni']
  }
};

export const numberOnTemplate = {
  formatter: 'number',
  formatoptions: {
    decimalSeparator: '.',
    thousandsSeparator: ',',
    decimalPlaces: 2,
    defaultValue: '0.00'
  },
  align: 'right',
  sorttype: 'number',
  editrules: { number: true, required: true },
  editOption: {
    type: 'number',
    // step: '1.000',
    min: '-10000.00',
    max: '100000',
    // pattern: '[0-9]+([.|,][0-9]+)?',
    title: 'number with up to 4 decimal places.'
  },
  searchoptions: {
    sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge', 'nu', 'nn', 'in', 'ni']
  }
};

// numberTemplate = {formatter: 'number', align: 'right', sorttype: 'number', editable: true/*,
// searchoptions: { sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge', 'nu', 'nn', 'in', 'ni'] }*/},
// dateTemplate = {width: 80, align: 'center', sorttype: 'date',
//     formatter: 'date', formatoptions: { newformat: 'd-M-Y' }, editable: true, datefmt: 'd-M-Y',
//     editoptions: { dataInit: initDate },
//     searchoptions: { sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge'], dataInit: initDate }},
// yesNoTemplate = {align: 'center', editable: true, formatter: 'checkbox',
//     edittype: 'checkbox', editoptions: {value: 'Yes:No', defaultValue: 'No'},
//     stype: 'select', searchoptions: { sopt: ['eq', 'ne'], value: ':Any;true:Yes;false:No' }},
// myDefaultSearch = 'cn',
