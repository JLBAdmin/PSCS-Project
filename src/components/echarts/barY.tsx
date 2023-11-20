import * as echarts from 'echarts';
import React, { useEffect } from 'react';

let chartDom: any;

function format(data: any): any {
  // eslint-disable-next-line no-param-reassign
  data = parseFloat(data.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 2
  });
  return data;
}

const BarY = ({ isCaption, isStyle, isData }: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    BarPS();
  }, [isData]);

  const BarPS = () => {
    chartDom = document.getElementById(isCaption);
    const myChart = echarts.init(chartDom, undefined, {
      renderer: 'canvas',
      useDirtyRect: false
    });

    const seriesList: any[] = [];

    let option: any;
    let n: any = 0;
    isData[0].forEach((data: any) => {
      seriesList.push({
        name: data,
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series',
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          label: {
            show: true,
            transitionDuration: 0.2,
            textStyle: { fontSize: 18, fontWeight: 'bold' }
          }
        },
        label: {
          show: true,
          formatter(params: any) {
            const val = format(params.value);
            return `${val}M`;
          },
          transitionDuration: 0.2,
          textStyle: { fontSize: 10, fontWeight: 'bold' }
        },
        data: isData[1][n]
      });
      n += 1;
    });

    // eslint-disable-next-line prefer-const
    option = {
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        formatter(params: any) {
          const val = `${params.name} ${params.seriesName} ${format(
            params.value
          )} M`;
          // eslint-disable-next-line no-console
          // console.log(params.seriesName);
          return val;
        },
        // formatter: '{b} {a} {c}M',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'line' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {},
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
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
        // axisLabel: {
        //   formatter: '{value}'
        // }
      },
      yAxis: {
        type: 'category',
        data: [
          'P1',
          'P2',
          'P3',
          'P4',
          'P5',
          'P6',
          'P7',
          'P8',
          'P9',
          'P10',
          'P11',
          'P12'
        ]
      },
      series: seriesList
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

export default BarY;
