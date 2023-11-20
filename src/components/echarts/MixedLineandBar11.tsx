/* eslint-disable tailwindcss/no-custom-classname */
import * as echarts from 'echarts';
import { useEffect } from 'react';

import { toDate } from '@/public/js/dashboard';

let chartDom: any;
let myChart: any;

const MixedLineBar1 = ({
  isCaption,
  isText,
  isData1,
  isData2,
  isData22,
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
      renderer: 'canvas',
      useDirtyRect: false
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
        data: ['เป้าสะสม', 'รวมส่งอ้อย', 'อ้อยไฟไหม้', 'อ้อยสด']
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
          name: 'แผนเข้าหีบสะสม',
          min: 0,
          max: isMax,
          interval: isInterval,
          axisLabel: {
            formatter: '{value} ตัน'
          }
        },
        {
          type: 'value',
          name: 'รวมส่งอ้อย',
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
          name: 'เป้าสะสม',
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
            color: '#6495ED'
          }
        },
        {
          name: 'รวมส่งอ้อย',
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
        },
        {
          name: 'อ้อยไฟไหม้',
          type: 'bar',
          stack: 'total',
          tooltip: {
            valueFormatter(value: string) {
              return `${parseFloat(value).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })} ตัน`;
            }
          },
          // label: {
          //   show: true
          // },
          emphasis: {
            focus: 'series'
          },
          data: isData2,
          itemStyle: {
            color: '#FD665F'
          }
        },
        {
          name: 'อ้อยสด',
          type: 'bar',
          stack: 'total',
          tooltip: {
            valueFormatter(value: string) {
              return `${parseFloat(value).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })} ตัน`;
            }
          },
          // label: {
          //   show: true
          // },
          emphasis: {
            focus: 'series'
          },
          data: isData22,
          itemStyle: {
            color: '#65B581'
          }
        }
      ]
    };

    if (option && typeof option === 'object') {
      myChart.setOption(option);
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  };
  return (
    <>
      <div
        id={isCaption}
        className='apexcharts-canvas apexcharts72w6mpmm apexcharts-theme-light'
        style={isStyle}
      />
    </>
  );
};

export default MixedLineBar1;
