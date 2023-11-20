import 'free-jqgrid';
import 'free-jqgrid/dist/css/ui.jqgrid.min.css';
// import 'free-jqgrid/dist/i18n/grid.locale-th';
import 'jquery-ui-dist/jquery-ui';

import { useEffect } from 'react';

declare const window: Window &
  typeof globalThis & {
    afterResize: any;
  };
// eslint-disable-next-line unused-imports/no-unused-vars
declare const $: any;

const mydata = [
  {
    id: '1',
    invdate: '2007-10-01',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00'
  },
  {
    id: '2',
    invdate: '2007-10-02',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00'
  },
  {
    id: '3',
    invdate: '2007-09-01',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00'
  },
  {
    id: '4',
    invdate: '2007-10-04',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00'
  },
  {
    id: '5',
    invdate: '2007-10-05',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00'
  },
  {
    id: '6',
    invdate: '2007-09-06',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00'
  },
  {
    id: '7',
    invdate: '2007-10-04',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00'
  },
  {
    id: '8',
    invdate: '2007-10-03',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00'
  },
  {
    id: '9',
    invdate: '2007-09-01',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00'
  },
  {
    id: '10',
    invdate: '2007-10-01',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00'
  },
  {
    id: '11',
    invdate: '2007-10-02',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00'
  },
  {
    id: '12',
    invdate: '2007-09-01',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00'
  },
  {
    id: '13',
    invdate: '2007-10-04',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00'
  },
  {
    id: '14',
    invdate: '2007-10-05',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00'
  },
  {
    id: '15',
    invdate: '2007-09-06',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00'
  },
  {
    id: '16',
    invdate: '2007-10-04',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00'
  },
  {
    id: '17',
    invdate: '2007-10-03',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00'
  },
  {
    id: '18',
    invdate: '2007-09-01',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00'
  }
];

const reports = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (mydata) {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        masterGrid();
      }
    }
  }, []);

  const masterGrid = () => {
    /* jslint devel: true, browser: true, plusplus: true */
    // $.jgrid.formatter.integer.thousandsSeparator = ',';
    // $.jgrid.formatter.number.thousandsSeparator = ',';
    // $.jgrid.formatter.currency.thousandsSeparator = ',';
    const grid = $('#list');
    // const gradientNumberFormat = (
    //   cellvalue: any,
    //   gradientClass: string,
    //   minDataValue: number,
    //   maxDataValue: number,
    //   minDisplayValue: number,
    //   maxDisplayValue: number,
    //   formatter: string
    // ) => {
    //   let dataAsNumber = parseFloat(cellvalue); /* parseInt(cellvalue, 10); */
    //   if (dataAsNumber > maxDataValue) {
    //     dataAsNumber = maxDataValue;
    //   }
    //   if (dataAsNumber < minDataValue) {
    //     dataAsNumber = minDataValue;
    //   }
    //   const prozentVal =
    //     minDisplayValue +
    //     ((dataAsNumber - minDataValue) * (maxDisplayValue - minDisplayValue)) /
    //       (maxDataValue - minDataValue);
    //   return `<div class="cellDiv"><div class="${gradientClass}" style="width:${prozentVal}%;"></div><div class="cellTextRight">${$.fmatter.util.NumberFormat(
    //     cellvalue,
    //     $.jgrid.formatter[formatter]
    //   )}</div></div>`;
    // };
    grid.jqGrid({
      autowidth: true,
      height: '100%',
      data: mydata,
      datatype: 'local',
      colNames: ['Inv No', 'Date', 'Client', 'Amount', 'Tax', 'Total', 'Notes'],
      colModel: [
        {
          name: 'id',
          index: 'id',
          key: true,
          width: 70,
          align: 'right',
          sorttype: 'int'
          // formatter(cellvalue: any) {
          //   // the number 1  will be mapped to no color bar
          //   // the number 18 will be mapped to the color bar with 100% filled
          //   return gradientNumberFormat(
          //     cellvalue,
          //     'gradient1',
          //     1,
          //     18,
          //     0,
          //     100,
          //     'integer'
          //   );
          // }
        },
        { name: 'invdate', index: 'invdate', width: 90, sorttype: 'date' },
        { name: 'name', index: 'name', width: 100 },
        {
          name: 'amount',
          index: 'amount',
          width: 80,
          align: 'right',
          sorttype: 'float'
          // formatter(cellvalue: any) {
          //   // the number 200 will be mapped to the 10% filled color bar
          //   // the number 400 will be mapped to the 90% filled color bar
          //   return gradientNumberFormat(
          //     cellvalue,
          //     'gradient2',
          //     200,
          //     400,
          //     10,
          //     90,
          //     'currency'
          //   );
          // }
        },
        {
          name: 'tax',
          index: 'tax',
          width: 80,
          align: 'right',
          sorttype: 'float'
        },
        {
          name: 'total',
          index: 'total',
          width: 80,
          align: 'right',
          sorttype: 'float'
        },
        { name: 'note', index: 'note', width: 150, sortable: false }
      ],
      guiStyle: 'bootstrap',
      iconSet: 'fontAwesome',
      loadtext: 'Loading...',
      // ฝฝ rowNum: 100,
      // rowList: [100, 500, 700],
      autoencode: true,
      // toppager: true,
      rownumbers: true,
      viewrecords: true,
      // pager: '#pager',
      shrinkToFit: false,

      caption: 'Numbers with gradient color'
    });
    grid.jqGrid('gridResize');

    let newWidth = grid.closest('.ui-jqgrid').parent().width();
    grid.jqGrid('setGridWidth', newWidth, true);
    $(window).on('resize', (): void => {
      newWidth = grid.closest('.ui-jqgrid').parent().width();
      grid.jqGrid('setGridWidth', newWidth, true);
    });
  };
  return (
    <>
      <table id='list' />
      <div id='pager' />
    </>
  );
};

export default reports;
