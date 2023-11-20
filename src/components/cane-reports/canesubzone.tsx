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
declare const $: any;

export default function CaneHourly(): JSX.Element {
  React.useEffect(() => {
    const $grid = $('#list');
    $grid.jqGrid({
      autowidth: true,
      height: '100%',
      colModel: [
        {
          name: 'subzone',
          align: 'center',
          label: 'รหัส',
          width: 30,
          frozen: true
        },
        {
          name: 'name',
          align: 'center',
          label: 'นักส่งเสริม',
          width: 100,
          frozen: true
        },
        {
          name: 'contract',
          align: 'right',
          label: 'สัญญาตัน',
          width: 70,
          frozen: true
        },
        { name: 'percent_contract', align: 'right', label: '% ตัน', width: 50 },
        {
          name: 'truck_day',
          label: 'คันรถ',
          align: 'center',
          width: 77,
          formatter: 'integer'
        },
        {
          name: 'cane_day',
          label: 'สด',
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
          name: 'cane_fire_day',
          label: 'ไฟไหม้',
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
          name: 'cane_sum_day',
          label: 'นน.อ้อย',
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
          name: 'truck_due',
          label: 'คันรถ',
          align: 'center',
          width: 77,
          formatter: 'integer'
        },
        {
          name: 'cane_due',
          label: 'สด',
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
          name: 'cane_fire_due',
          label: 'ไฟไหม้',
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
          name: 'cane_sum_due',
          label: 'รวม นน.อ้อย',
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
          name: 'truck_total',
          label: 'คันรถ',
          align: 'center',
          width: 77,
          formatter: 'integer'
        },
        {
          name: 'cane_total',
          label: 'สด',
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
          name: 'cane_fire_total',
          label: 'ไฟไหม้',
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
          name: 'cane_sum_total',
          label: 'รวม นน.อ้อย',
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
        { name: 'estimate', align: 'right', label: 'ประเมินอ้อย', width: 90 },
        { name: 'percent_estimate', align: 'right', label: '% ตัน', width: 50 }
      ],
      data: [
        { id: '1', subzone: '101', name: 'นักส่งเสริม 101' },
        { id: '2', subzone: '102', name: 'นักส่งเสริม 102' },
        { id: '3', subzone: '103', name: 'นักส่งเสริม 103' },
        { id: '4', subzone: '104', name: 'นักส่งเสริม 104' },
        { id: '5', subzone: '105', name: 'นักส่งเสริม 105' },
        { id: '6', subzone: '106', name: 'นักส่งเสริม 106' },
        { id: '7', subzone: '107', name: 'นักส่งเสริม 107' },
        { id: '8', subzone: '108', name: 'นักส่งเสริม 108' },
        { id: '9', subzone: '109', name: 'นักส่งเสริม 109' },
        { id: '10', subzone: '110', name: 'นักส่งเสริม 110' },
        { id: '11', subzone: '111', name: 'นักส่งเสริม 111' },
        { id: '12', subzone: '112', name: 'นักส่งเสริม 112' },
        { id: '12', subzone: '112', name: 'นักส่งเสริม 112' }
      ],
      shrinkToFit: false,
      iconSet: 'fontAwesome',
      guiStyle: 'bootstrap',
      rowNum: 10,
      caption: 'ส่งอ้อยเข้าหีบแยกตามเขตส่งเสริม',
      footerrow: true,
      userDataOnFooter: true,
      loadComplete() {
        $grid.jqGrid('footerData', 'set', { name: 'รวมทั้งหมด' });
        // ประจำวัน
        const truck_day = $grid.jqGrid('getCol', 'truck_day', false, 'sum');
        $grid.jqGrid('footerData', 'set', { truck_day });

        const cane_day = $grid.jqGrid('getCol', 'cane_day', false, 'sum');
        $grid.jqGrid('footerData', 'set', { cane_day });

        const cane_fire_day = $grid.jqGrid(
          'getCol',
          ' cane_fire_day',
          false,
          'sum'
        );
        $grid.jqGrid('footerData', 'set', { cane_fire_day });

        const cane_sum_day = $grid.jqGrid(
          'getCol',
          'cane_sum_day',
          false,
          'sum'
        );
        $grid.jqGrid('footerData', 'set', { cane_sum_day });

        // ประจำงวด
        const truck_due = $grid.jqGrid('getCol', 'truck_due', false, 'sum');
        $grid.jqGrid('footerData', 'set', { truck_due });

        const cane_due = $grid.jqGrid('getCol', 'cane_due', false, 'sum');
        $grid.jqGrid('footerData', 'set', { cane_due });

        const cane_fire_due = $grid.jqGrid(
          'getCol',
          'cane_fire_due',
          false,
          'sum'
        );
        $grid.jqGrid('footerData', 'set', { cane_fire_due });

        const cane_sum_due = $grid.jqGrid(
          'getCol',
          'cane_sum_due',
          false,
          'sum'
        );
        $grid.jqGrid('footerData', 'set', { cane_sum_due });

        // สะสม
        const truck_total = $grid.jqGrid('getCol', 'truck_total', false, 'sum');
        $grid.jqGrid('footerData', 'set', { truck_total });

        const cane_total = $grid.jqGrid('getCol', 'cane_total', false, 'sum');
        $grid.jqGrid('footerData', 'set', { cane_total });

        const cane_fire_total = $grid.jqGrid(
          'getCol',
          'cane_fire_total',
          false,
          'sum'
        );
        $grid.jqGrid('footerData', 'set', { cane_fire_total });

        const cane_sum_total = $grid.jqGrid(
          'getCol',
          'cane_sum_total',
          false,
          'sum'
        );
        $grid.jqGrid('footerData', 'set', { cane_sum_total });
      }
    });
    $grid.jqGrid('setFrozenColumns');
    $grid
      .setGroupHeaders({
        useColSpanStyle: true,
        groupHeaders: [
          {
            startColumnName: 'truck_day',
            numberOfColumns: 4,
            titleText: 'เข้าหีบประจำวันที่'
          },
          {
            startColumnName: 'truck_due',
            numberOfColumns: 4,
            titleText: 'เข้าหีบประจำงวดที่'
          },
          {
            startColumnName: 'truck_total',
            numberOfColumns: 4,
            titleText: 'เข้าหีบสะสมถึงวันนี้'
          }
        ]
      })
      .jqGrid('filterToolbar', {
        autosearch: true,
        stringResult: false,
        searchOnEnter: true,
        defaultSearch: 'cn'
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

    // const winHeight = window.innerHeight;
    // const wHeight = winHeight - 370;
    // $('#list').jqGrid('setGridHeight', wHeight);

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
