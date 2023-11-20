import * as echarts from 'echarts';
import React, { useEffect } from 'react';

let chartDom: any;

function format(data: any): any {
  // eslint-disable-next-line no-param-reassign
  data = parseFloat(data);
  return data.toLocaleString('th-TH', { style: 'currency', currency: 'THB' });
}

const BarReferer = ({ isCaption, isStyle, isText, isData }: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    BrushPS();
  }, []);
  const BrushPS = () => {
    chartDom = document.getElementById(isCaption);
    const myChart = echarts.init(chartDom, undefined, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    let option: any;

    // const emphasisStyle = {
    //   itemStyle: {
    //     shadowBlur: 10,
    //     shadowOffsetX: 0,
    //     shadowColor: 'rgba(0, 0, 0, 0.5)'
    //   }
    // };

    // eslint-disable-next-line prefer-const
    option = {
      title: {
        text: isText,
        // subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        showDelay: 3,
        transitionDuration: 0.2,
        formatter(params: any) {
          const val = `${params.name} ${format(params.value)}`;
          return val;
        }
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: false },
          dataView: { show: false, readOnly: false },
          magicType: { show: false, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'bottom'
      },
      series: [
        {
          // name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: isData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            label: {
              show: true,
              transitionDuration: 0.2,
              textStyle: { fontSize: 14, fontWeight: 'bold' },
              formatter(params: any) {
                const val = `${params.percent}% มูลค่า ${format(
                  params.value
                )} `;
                return val;
              }
            }
          },
          // itemStyle,
          label: {
            show: true,
            formatter(params: any) {
              const val = `${params.percent}% มูลค่า ${format(params.value)} `;
              return val;
            }
            // transitionDuration: 0.2,
            // textStyle: { fontSize: 10, fontWeight: 'bold' }
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

export default BarReferer;
