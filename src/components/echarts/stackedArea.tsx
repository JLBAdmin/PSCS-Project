/* eslint-disable tailwindcss/no-custom-classname */
import * as echarts from 'echarts';
import { useEffect } from 'react';

let chartDom: any;
let myChart: any;

const StackedArea = ({
  isCaption,
  Text,
  isData,
  isCapacity,
  isCapaLable,
  isPlan,
  isTrue
}: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      clockPS();
    }
  }, []);
  // eslint-disable-next-line no-console

  const clockPS = () => {
    chartDom = document.getElementById(isCaption);
    myChart = echarts.init(chartDom, undefined, {
      renderer: 'canvas',
      useDirtyRect: false
    });

    let option;

    // eslint-disable-next-line prefer-const
    option = {
      title: {
        text: Text
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: isCapaLable
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: isData
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'ประสิทธิภาพ',
          type: 'line',
          // stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: isCapacity
        },
        // {
        //   name: 'Union Ads',
        //   type: 'line',
        //   stack: 'Total',
        //   areaStyle: {},
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   data: [220, 182, 191, 234, 290, 330, 310]
        // },
        {
          name: 'แผนเข้าหีบ',
          type: 'line',
          // stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: isPlan
        },
        {
          name: 'เข้าหีบจริง',
          type: 'line',
          // stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: isTrue
        }
        // {
        //   name: 'Search Engine',
        //   type: 'line',
        //   // stack: 'Total',
        //   label: {
        //     show: false,
        //     position: 'top'
        //   },
        //   areaStyle: {},
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   data: isCapacity
        // }
      ]
    };

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
    window.addEventListener('resize', () => {
      myChart.resize();
    });
  };
  return (
    <>
      <div
        id={isCaption}
        // className='apexcharts-canvas apexcharts72w6mpmm apexcharts-theme-light'
        style={{ width: '100vw', height: '50vh' }}
      />
    </>
  );
};

export default StackedArea;
