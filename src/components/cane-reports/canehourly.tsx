import 'free-jqgrid';
import 'free-jqgrid/dist/css/ui.jqgrid.min.css';

// import 'free-jqgrid/dist/i18n/grid.locale-th.js';
import * as React from 'react';

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
      height: 'auto',
      colModel: [
        { name: 'name', align: 'center', label: 'ช่วงเวลา', width: 100 },
        {
          name: 'truck0',
          label: 'คันรถ',
          align: 'center',
          width: 77,
          formatter: 'integer'
        },
        {
          name: 'cane0',
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
          name: 'truck1',
          label: 'ค้นรถ',
          align: 'center',
          width: 77,
          formatter: 'integer'
        },
        {
          name: 'cane1',
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
          name: 'truck',
          label: 'คันรถ',
          align: 'center',
          width: 77,
          formatter: 'integer'
        },
        {
          name: 'cane',
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
        }
      ],
      data: [
        {
          id: '10',
          name: '15:00 - 15.59',
          truck0: 1,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '20',
          name: '16:00 - 16.59',
          truck0: 2,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '30',
          name: '17:00 - 17.59',
          truck0: 3,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '40',
          name: '18:00 - 18.59',
          truck0: 4,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '50',
          name: '19:00 - 19.59',
          truck0: 5,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '60',
          name: '20:00 - 20.59',
          truck0: 6,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '70',
          name: '21:00 - 21.59',
          truck0: 7,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '80',
          name: '22:00 - 22.59',
          truck0: 8,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '90',
          name: '23:00 - 23.59',
          truck0: 9,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '100',
          name: '00:00 - 00.59',
          truck0: 10,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '110',
          name: '01:00 - 01.59',
          truck0: 11,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '120',
          name: '02:00 - 02.59',
          truck0: 12,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '10',
          name: '03:00 - 03.59',
          truck0: 13,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '20',
          name: '04:00 - 04.59',
          truck0: 14,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '30',
          name: '05:00 - 05.59',
          truck0: 15,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '40',
          name: '06:00 - 06.59',
          truck0: 16,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '50',
          name: '07:00 - 07.59',
          truck0: 17,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '60',
          name: '08:00 - 08.59',
          truck0: 18,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '70',
          name: '09:00 - 09.59',
          truck0: 19,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '80',
          name: '10:00 - 10.59',
          truck0: 20,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '90',
          name: '11:00 - 11.59',
          truck0: 21,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '100',
          name: '12:00 - 12.59',
          truck0: 22,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '110',
          name: '13:00 - 13.59',
          truck0: 23,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        },
        {
          id: '120',
          name: '14:00 - 14.59',
          truck0: 24,
          cane0: 4,
          truck1: 55,
          cane1: 60,
          truck: 33,
          cane: 34
        }
      ],
      iconSet: 'fontAwesome',
      guiStyle: 'bootstrap',
      // caption: `อ้อยเข้าหีบรายชั่วโมงประจำวันที่ ${Date()}`,
      footerrow: true,
      userDataOnFooter: true,
      loadComplete() {
        $grid.jqGrid('footerData', 'set', { name: 'รวมทั้งหมด' });
        const truck0 = $grid.jqGrid('getCol', 'truck0', false, 'sum');
        $grid.jqGrid('footerData', 'set', { truck0 });

        const cane0 = $grid.jqGrid('getCol', 'cane0', false, 'sum');
        $grid.jqGrid('footerData', 'set', { cane0 });

        const truck1 = $grid.jqGrid('getCol', 'truck1', false, 'sum');
        $grid.jqGrid('footerData', 'set', { truck1 });

        const cane1 = $grid.jqGrid('getCol', 'cane1', false, 'sum');
        $grid.jqGrid('footerData', 'set', { cane1 });

        const truck = $grid.jqGrid('getCol', 'truck', false, 'sum');
        $grid.jqGrid('footerData', 'set', { truck });

        const cane = $grid.jqGrid('getCol', 'cane', false, 'sum');
        $grid.jqGrid('footerData', 'set', { cane });
      }
    });
    $grid.setGroupHeaders({
      useColSpanStyle: true,
      groupHeaders: [
        { numberOfColumns: 2, titleText: 'อ้อยสด', startColumnName: 'truck0' },
        { numberOfColumns: 2, titleText: 'ไฟไหม้', startColumnName: 'truck1' },
        {
          numberOfColumns: 2,
          titleText: 'รวมทั้งหมด',
          startColumnName: 'truck'
        }
      ]
    });

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
          alignItems: 'center',
          width: '100%',
          height: '62vh'
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              {' '}
              <table id='list' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
