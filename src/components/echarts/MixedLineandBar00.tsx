/* eslint-disable tailwindcss/no-custom-classname */
import * as echarts from 'echarts';
import { useEffect } from 'react';

import { toDate } from '@/public/js/dashboard';

let chartDom: any;
let myChart: any;

const MixedLineBar = ({
  isCaption,
  isText,
  isData1,
  isData2,
  isData3,
  isData4,
  isMax,
  isInterval,
  isStyle
}: any) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      Mixeds();
    }
  }, []);

  // eslint-disable-next-line no-console
  // console.log(isData);

  const Mixeds = () => {
    chartDom = document.getElementById(isCaption);
    myChart = echarts.init(chartDom, undefined, {
      // width: window.innerWidth - 100,
      renderer: 'canvas',
      useDirtyRect: false
      // ssr: true
    });

    let option: object;

    // eslint-disable-next-line prefer-const
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      title: {
        text: `${isText} ${toDate}`,
        // subtext: `${isSubText}`,
        left: 'center'
      },
      toolbox: {
        feature: {
          dataView: { show: false, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        left: 'right',
        top: 'bottom',
        data: ['เป้าส่งเสริม', 'แผนเข้าหีบ', 'เกิดจริง']
      },
      xAxis: [
        {
          type: 'category',
          axisLabel: { interval: 0, rotate: 30 }, // ให้แสดงทุกชื่อ และเอียง 30 องศา
          data: isData1,
          splitLine: { show: false },
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'แผนเข้าหีบ',
          min: 0,
          max: isMax,
          interval: isInterval,
          axisLabel: {
            formatter: '{value} ตัน'
          }
        },
        {
          type: 'value',
          name: 'เกิดจริง',
          min: 0,
          max: isMax,
          interval: isInterval
          // axisLabel: {
          //   formatter: '{value} Ton'
          // }
        }
      ],
      series: [
        {
          name: 'เป้าส่งเสริม',
          type: 'bar',
          tooltip: {
            valueFormatter(value: string) {
              return `${parseFloat(value).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })} ตัน`;
            }
          },
          data: isData2,
          itemStyle: {
            color: '#FD665F'
          }
        },
        {
          name: 'แผนเข้าหีบ',
          type: 'bar',
          tooltip: {
            valueFormatter(value: string) {
              return `${parseFloat(value).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })} ตัน`;
            }
          },
          data: isData3,
          itemStyle: {
            color: ' #65B581'
          }
        },
        {
          name: 'เกิดจริง',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter(value: string) {
              return `${parseFloat(value).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })} ตัน`;
            }
          },
          data: isData4,
          itemStyle: {
            color: '#FFCE34'
          }
        }
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
        style={isStyle}
      />
    </>
  );
};

export default MixedLineBar;
