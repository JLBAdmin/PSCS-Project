/* eslint-disable tailwindcss/no-custom-classname */
import * as echarts from 'echarts';
import { useEffect } from 'react';

let chartDom: any;
let myChart: any;

const PieChart = ({
  isCaption,
  isData,
  isLegend,
  iaRadius,
  Text,
  subText,
  isStyle,
  isCenter
}: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      clockPS();
    }
  }, []);
  // eslint-disable-next-line no-console
  // console.log(isLegend);
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
        text: Text,
        subtext: subText,
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        left: 'center',
        top: 'bottom',
        data: isLegend
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: false },
          dataView: { show: false, readOnly: false },
          restore: { show: false },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: Text,
          // name: 'Area Mode',
          type: 'pie',
          radius: iaRadius,
          center: isCenter,
          roseType: 'area',
          itemStyle: {
            borderRadius: 3
          },
          label: {
            show: true
          },
          emphasis: {
            label: {
              show: true
            }
          },
          data: isData
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
        // className='apexcharts-canvas apexcharts72w6mpmm apexcharts-theme-light'
        style={isStyle}
      />
    </>
  );
};

export default PieChart;
