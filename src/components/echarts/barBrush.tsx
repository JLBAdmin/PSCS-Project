import * as echarts from 'echarts';
import React, { useEffect } from 'react';

let chartDom: any;

const BarBrush = ({ isCaption, isStyle, isText }: any) => {
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
    const xAxisData: string[] = [];
    const data1: number[] = [];
    const data2: number[] = [];
    const data3: number[] = [];
    const data4: number[] = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 13; i++) {
      xAxisData.push(`P${i}`);
      data1.push(+(Math.random() * 2).toFixed(2));
      data2.push(+(Math.random() - 5).toFixed(2));
      data3.push(+(Math.random() + 0.3).toFixed(2));
      data4.push(+Math.random().toFixed(2));
    }
    const emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
      },
      label: {
        show: true,
        transitionDuration: 0.2,
        textStyle: { fontSize: 14, fontWeight: 'bold' }
      }
    };

    // eslint-disable-next-line prefer-const
    option = {
      legend: {
        data: ['รายรับ', 'รายจ่าย', 'งบคงเหลือ', 'งบประจำปี'],
        left: '10%'
      },
      // brush: {
      //   toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
      //   xAxisIndex: 0
      // },
      toolbox: {
        feature: {
          dataView: { show: false, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      title: {
        text: isText,
        left: 'center',
        top: 'bottom'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        data: xAxisData,
        // name: 'X Axis',
        axisLine: { onZero: true },
        splitLine: { show: false },
        splitArea: { show: false }
      },
      yAxis: {
        axisLabel: {
          formatter: '{value} M'
        }
      },
      grid: {
        bottom: 120
      },
      series: [
        {
          name: 'รายรับ',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          itemStyle: {
            color: ' #65B581'
          },
          data: data1
        },
        {
          name: 'รายจ่าย',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          itemStyle: {
            color: '#FD665F'
          },
          data: data2
        },
        {
          name: 'งบคงเหลือ',
          type: 'line',
          stack: 'two',
          emphasis: emphasisStyle,
          data: data3
        },
        {
          name: 'งบประจำปี',
          type: 'line',
          stack: 'two',
          emphasis: emphasisStyle,
          data: data4
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

export default BarBrush;
