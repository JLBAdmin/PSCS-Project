import 'free-jqgrid';
import 'free-jqgrid/dist/css/ui.jqgrid.min.css';

// import 'free-jqgrid/dist/i18n/grid.locale-th.js';
import * as React from 'react';

// declare const window: Window &
//   typeof globalThis & {
//     afterResize: any;
//   };
declare const $: any;

export default function CaneHourly({ colModel, colNames }: any): JSX.Element {
  React.useEffect(() => {
    const $grid = $('#list');
    $grid.jqGrid({
      autowidth: true,
      // height: 'auto',
      colModel,
      colNames,
      datatype: 'json',
      url: '/api/hours/get-day',
      iconSet: 'fontAwesome',
      guiStyle: 'bootstrap',
      caption: `อ้อยเข้าหีบประจำวันรายชั่วโมง + รถลาน`,
      sortname: 'id',
      sortorder: 'desc',
      footerrow: true,
      userDataOnFooter: true,
      loadComplete() {
        // const hours = $grid.jqGrid('getCol', 'hours');
        $grid.jqGrid('footerData', 'set', { hours: 'รวม' });
        const hourCar = $grid.jqGrid('getCol', 'hourCar', false, 'sum');
        $grid.jqGrid('footerData', 'set', { hourCar });
        const hourTon = $grid.jqGrid('getCol', 'hourTon', false, 'sum');
        $grid.jqGrid('footerData', 'set', { hourTon });
        const hourCarBurn = $grid.jqGrid('getCol', 'hourCarBurn', false, 'sum');
        $grid.jqGrid('footerData', 'set', { hourCarBurn });
        const hourTonBurn = $grid.jqGrid('getCol', 'hourTonBurn', false, 'sum');
        $grid.jqGrid('footerData', 'set', { hourTonBurn });
        const SumCar = $grid.jqGrid('getCol', 'SumCar', false, 'sum');
        $grid.jqGrid('footerData', 'set', { SumCar });

        const SumTon = $grid.jqGrid('getCol', 'SumTon', false, 'sum');
        $grid.jqGrid('footerData', 'set', { SumTon });

        const hourCarOutside = $grid.jqGrid(
          'getCol',
          'hourCarOutside',
          false,
          'sum'
        );
        $grid.jqGrid('footerData', 'set', {
          hourCarOutside
        });

        // eslint-disable-next-line no-console
        // console.log(totalOutside);

        const hourCarIn = $grid.jqGrid('getCol', 'hourCarIn', false, 'sum');
        $grid.jqGrid('footerData', 'set', { hourCarIn });

        const SumCarAll = $grid.jqGrid('getCol', 'SumCarAll', false, 'sum');
        $grid.jqGrid('footerData', 'set', { SumCarAll });
      }
    });
    $grid.setGroupHeaders({
      useColSpanStyle: true,
      groupHeaders: [
        {
          numberOfColumns: 2,
          titleText: 'อ้อยสด',
          startColumnName: 'hourCar'
        },
        {
          numberOfColumns: 2,
          titleText: 'ไฟไหม้',
          startColumnName: 'hourCarBurn'
        },
        {
          numberOfColumns: 2,
          titleText: 'รถลาน',
          startColumnName: 'hourCarOutside'
        }
      ]
    });

    // On Resize
    // $(window).resize(() => {
    //   if (window.afterResize) {
    //     clearTimeout(window.afterResize);
    //   }

    //   window.afterResize = setTimeout(() => {
    //     /**
    //       After Resize Code
    //       .................
    //   * */
    //     $('#list').jqGrid('setGridWidth', $('.ui-jqgrid').parent().width());
    //     // $('#list').jqGrid('setGridHeight',$(window).innerHeight());
    //     const winHeight = window.innerHeight;
    //     const wHeight = winHeight - 370;
    //     $('#list').jqGrid('setGridHeight', wHeight);
    //   }, 100);
    // });
  }, []);
  return (
    <div>
      <div
        style={{
          margin: '5px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 'auto'
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <table id='list' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
