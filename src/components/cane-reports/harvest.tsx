/* eslint-disable @typescript-eslint/naming-convention */
// import $ from 'jquery';
import 'free-jqgrid';
import 'free-jqgrid/dist/css/ui.jqgrid.min.css';

import * as React from 'react';
// import "free-jqgrid/dist/i18n/grid.locale-th.js";

declare const window: Window &
  typeof globalThis & {
    afterResize: any;
  };
declare let $: any;

export default function CaneHourly(): JSX.Element {
  React.useEffect(() => {
    const $grid = $('#list');
    $grid.jqGrid({
      autoWidth: true,
      height: 'auto',
      colModel: [
        {
          name: 'id',
          align: 'center',
          label: 'คันที่',
          width: 100,
          frozen: true
        },
        {
          name: 'cut_code',
          align: 'center',
          label: 'รหัสรถตัด',
          width: 100,
          frozen: true
        },
        {
          name: 'model',
          align: 'center',
          label: 'รุ่นของรถ',
          width: 100
          // frozen: true,
        },
        {
          name: 'zone',
          label: 'เขต(โซน)',
          align: 'center',
          width: 77,
          formatter: 'integer'
        },

        {
          name: 'notify',
          label: 'จดแจ้ง(ไร่)',
          width: 77,
          align: 'right',
          formatter: 'number',
          formatoptions: {
            decimalSeparator: '.',
            thousandsSeparator: ',',
            decimalPlaces: 2,
            defaultValue: '0.000'
          }
        },
        {
          name: 'cane_ton',
          label: 'ตันอ้อย',
          width: 120,
          align: 'right',
          formatter: 'number',
          formatoptions: {
            decimalSeparator: '.',
            thousandsSeparator: ',',
            decimalPlaces: 2,
            defaultValue: '0.000'
          }
        },
        {
          name: 'cane_harvest',
          label: 'ประสิทธิภาพ',
          width: 120,
          align: 'right',
          formatter: 'number',
          formatoptions: {
            decimalSeparator: '.',
            thousandsSeparator: ',',
            decimalPlaces: 2,
            defaultValue: '0.000'
          }
        },
        {
          name: 'cane_income',
          label: 'คาดการรายได้',
          width: 120,
          align: 'right',
          formatter: 'number',
          formatoptions: {
            decimalSeparator: '.',
            thousandsSeparator: ',',
            decimalPlaces: 2,
            defaultValue: '0.00'
          }
        },
        {
          name: 'last_year',
          label: 'อ้อยปีก่อน',
          align: 'right',
          width: 120,
          formatter: 'number',
          formatoptions: {
            decimalSeparator: '.',
            thousandsSeparator: ',',
            decimalPlaces: 2,
            defaultValue: '0.000'
          }
        },
        {
          name: 'current_year',
          label: 'อ้อยปีนี้',
          width: 120,
          align: 'right',
          formatter: 'number',
          formatoptions: {
            decimalSeparator: '.',
            thousandsSeparator: ',',
            decimalPlaces: 2,
            defaultValue: '0.000'
          }
        },
        {
          name: 'percent_cane',
          label: '% ตัดอ้อย',
          width: 77,
          align: 'right',
          formatter: 'number',
          formatoptions: {
            decimalSeparator: '.',
            thousandsSeparator: ',',
            decimalPlaces: 2,
            defaultValue: '0.00'
          }
        }
      ],
      data: [
        {
          id: '1',
          model: 'JDCH570',
          cut_code: 'MKU0001',
          cane_harvest: '8300',
          cane_income: 1660000
        },
        {
          id: '2',
          model: 'JDCH570',
          cut_code: 'MKU0002',
          cane_harvest: '8300',
          cane_income: 1660000
        },
        {
          id: '3',
          model: 'JD3520W',
          cut_code: 'MKU0003',
          cane_harvest: '8300',
          cane_income: 1660000
        },
        {
          id: '4',
          model: 'JDCH570',
          cut_code: 'MKU0004',
          cane_harvest: '8300',
          cane_income: 1660000
        },
        {
          id: '5',
          model: 'JD3520W',
          cut_code: 'MKU0005',
          cane_harvest: '8300',
          cane_income: 1660000
        },
        {
          id: '6',
          model: 'JD3520W',
          cut_code: 'MKU0006',
          cane_harvest: '8300',
          cane_income: 1660000
        },
        {
          id: '7',
          model: 'JD3520W(ล้อแท็ค)',
          cut_code: 'MKU0007',
          cane_harvest: '8300',
          cane_income: 1660000
        },
        {
          id: '8',
          model: 'JDCH570',
          cut_code: 'MKU0008',
          cane_harvest: '8300',
          cane_income: 1660000
        },
        {
          id: '9',
          model: 'JDCH570',
          cut_code: 'MKU0009',
          cane_harvest: '8300',
          cane_income: 1660000
        },
        {
          id: '10',
          model: 'JDCH570',
          cut_code: 'MKU0010',
          cane_harvest: '8300',
          cane_income: 1660000
        },
        {
          id: '11',
          model: 'JDCH570',
          cut_code: 'MKU0011',
          cane_harvest: '8300',
          cane_income: 1660000
        },
        {
          id: '12',
          model: 'JDCH570',
          cut_code: 'MKU0012',
          cane_harvest: '5000',
          cane_income: 1000000
        },
        {
          id: '13',
          model: 'Austoft4000/Csse IH',
          cut_code: 'MKU0013',
          cane_harvest: '5000',
          cane_income: 1000000
        },
        {
          id: '14',
          model: 'Austoft4000/Csse IH',
          cut_code: 'MKU0014',
          cane_harvest: '5000',
          cane_income: 1000000
        },
        {
          id: '15',
          model: 'Austoft4000/Csse IH',
          cut_code: 'MKU0015',
          cane_harvest: '5000',
          cane_income: 1000000
        },
        {
          id: '16',
          model: 'Austoft4000/Csse IH',
          cut_code: 'MKU0016',
          cane_harvest: '5000',
          cane_income: 1000000
        },
        {
          id: '17',
          model: 'Austoft4000/Csse IH',
          cut_code: 'MKU0017',
          cane_harvest: '5000',
          cane_income: 1000000
        }
      ],
      shrinkToFit: false,
      iconSet: 'fontAwesome',
      guiStyle: 'bootstrap',
      // rowNum: 10,
      caption: 'ข้อมูลการทำงานรถตัดอ้อย',
      footerrow: true,
      userDataOnFooter: true,
      loadComplete() {
        $grid.jqGrid('footerData', 'set', { cut_code: 'รวมทั้งหมด' });
        // จดแจ้ง
        const notify = $grid.jqGrid('getCol', 'notify', false, 'sum');
        $grid.jqGrid('footerData', 'set', { notify });
        // ตันอ้อย
        const cane_ton = $grid.jqGrid('getCol', 'cane_ton', false, 'avg');
        $grid.jqGrid('footerData', 'set', { cane_ton });

        // ประสิทธิภาพ
        const cane_harvest = $grid.jqGrid(
          'getCol',
          'cane_harvest',
          false,
          'sum'
        );
        $grid.jqGrid('footerData', 'set', { cane_harvest });
        // คาดการรายได้
        const cane_income = $grid.jqGrid('getCol', 'cane_income', false, 'sum');
        $grid.jqGrid('footerData', 'set', { cane_income });

        // อ้อยปีก่อน
        const last_year = $grid.jqGrid('getCol', 'last_year', false, 'avg');
        $grid.jqGrid('footerData', 'set', { last_year });

        // ประจำวัน
        const current_year = $grid.jqGrid(
          'getCol',
          'current_year',
          false,
          'sum'
        );
        $grid.jqGrid('footerData', 'set', { current_year });

        const percent_cane = $grid.jqGrid(
          'getCol',
          'percent_cane',
          false,
          'avg'
        );
        $grid.jqGrid('footerData', 'set', { percent_cane });
      }
    });
    $grid.jqGrid('setFrozenColumns');
    $grid.setGroupHeaders({
      useColSpanStyle: true,
      groupHeaders: [
        {
          startColumnName: 'zone',
          numberOfColumns: 4,
          titleText: 'เป้าหมายตัดอ้อย'
        },
        {
          startColumnName: 'cane_harvest',
          numberOfColumns: 4,
          titleText: 'ตัดอ้อยจริง'
        }
      ]
    });

    //    $grid.jqGrid("setGroupHeaders", {
    //     useColSpanStyle: true,
    //       groupHeaders: [
    //         {
    //           numberOfColumns: 2,
    //           titleText: "อ้อยสด",
    //           startColumnName: "truck0",
    //         },
    //         {
    //           numberOfColumns: 2,
    //           titleText: "ไฟไหม้",
    //           startColumnName: "truck1",
    //         },
    //         {
    //           numberOfColumns: 2,
    //           titleText: "รวมทั้งหมด",
    //           startColumnName: "truck_1",
    //         },
    //         {
    //           numberOfColumns: 2,
    //           titleText: "อ้อยสด",
    //           startColumnName: "truck00",
    //         },
    //         {
    //           numberOfColumns: 2,
    //           titleText: "ไฟไหม้",
    //           startColumnName: "truck11",
    //         },
    //         {
    //           numberOfColumns: 2,
    //           titleText: "รวมทั้งหมด",
    //           startColumnName: "truck_1",
    //         },
    //       ],
    //     });

    // On Resize
    $(window).resize(() => {
      if (window.afterResize) {
        clearTimeout(window.afterResize);
      }

      window.afterResize = setTimeout(() => {
        /**
          After Resize Code
          .................
      * */
        $('#list').jqGrid('setGridWidth', $('.ui-jqgrid').parent().width());
        // $('#list').jqGrid('setGridHeight',$(window).innerHeight());
        const winHeight = window.innerHeight;
        const wHeight = winHeight - 370;
        $('#list').jqGrid('setGridHeight', wHeight);
      }, 100);
    });
  }, []);
  return (
    <div>
      <div
        style={{
          margin: '5px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <table id='list' />
      </div>
    </div>
  );
}
