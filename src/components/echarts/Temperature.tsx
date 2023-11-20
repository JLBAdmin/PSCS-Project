/* eslint-disable tailwindcss/no-custom-classname */
import * as echarts from 'echarts';
import { useEffect } from 'react';

let chartDom: any;
let myChart: any;

const Temperature = ({ isCaption, isStyle, isDay, isData, isText }: any) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      Temperatures();
    }
  }, [isCaption, isStyle, isDay, isData, isText]);

  // eslint-disable-next-line no-console
  // console.log(isData);

  const Temperatures = () => {
    chartDom = document.getElementById(isCaption);
    myChart = echarts.init(chartDom, undefined, {
      renderer: 'canvas',
      useDirtyRect: false
    });

    let option;

    // eslint-disable-next-line prefer-const
    option = {
      title: {
        text: `${isText}`
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          // dataZoom: {
          //   yAxisIndex: 'none'
          // }
          dataView: { show: false, readOnly: false },
          mark: { show: false },
          // magicType: { type: ['line', 'bar'] },
          restore: { show: false },
          saveAsImage: { show: true }
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: isDay
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}'
        }
      },
      series: isData
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
        // className='apexcharts-canvas apexcharts72w6mpmm apexcharts-theme-light'
        style={isStyle}
      />
    </>
  );
};

export default Temperature;
