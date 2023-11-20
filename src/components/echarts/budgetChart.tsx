/* eslint-disable tailwindcss/no-custom-classname */
import * as echarts from 'echarts';
import { useEffect } from 'react';

let chartDom: any;
let myChart: any;

const BudgetChart = ({
  isCaption,
  isManag,
  isStyle,
  isLegend,
  isData,
  isText,
  isLable,
  isRotate
}: any) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      clockPS();
    }
  }, [isCaption, isManag, isStyle, isLegend, isText, isLable, isRotate]);

  const clockPS = () => {
    chartDom = document.getElementById(isCaption);
    myChart = echarts.init(chartDom, undefined, {
      renderer: 'canvas',
      useDirtyRect: false
    });

    const app: any = {};

    let option;

    const posList = [
      'left',
      'right',
      'top',
      'bottom',
      'inside',
      'insideTop',
      'insideLeft',
      'insideRight',
      'insideBottom',
      'insideTopLeft',
      'insideTopRight',
      'insideBottomLeft',
      'insideBottomRight'
    ];

    app.configParameters = {
      rotate: {
        min: -90,
        max: 90
      },
      align: {
        options: {
          left: 'left',
          center: 'center',
          right: 'right'
        }
      },
      verticalAlign: {
        options: {
          top: 'top',
          middle: 'middle',
          bottom: 'bottom'
        }
      },
      position: {
        options: posList.reduce((map: any, pos) => {
          // eslint-disable-next-line no-param-reassign
          map[pos] = pos;
          return map;
        }, {})
      },
      distance: {
        min: 0,
        max: 100
      }
    };
    app.config = {
      rotate: isRotate, // ปรับต้วอักษร ตรงหรือเอียง
      align: 'left',
      verticalAlign: 'middle',
      position: 'insideBottom',
      distance: 15,
      onChange() {
        const labelOption = {
          rotate: app.config.rotate,
          align: app.config.align,
          verticalAlign: app.config.verticalAlign,
          position: app.config.position,
          distance: app.config.distance
        };
        myChart.setOption({
          series: [
            {
              label: labelOption
            },
            {
              label: labelOption
            },
            {
              label: labelOption
            },
            {
              label: labelOption
            }
          ]
        });
      }
    };
    const labelOption = {
      show: isLable, // แสดงชื่อบนแท่งกราฟ
      position: app.config.position,
      distance: app.config.distance,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      rotate: app.config.rotate,
      formatter: '{c}  {name|{a}}',
      fontSize: 12,
      rich: {
        name: {}
      }
    };

    const series: any = [];
    if (isData) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < isLegend.length; i++) {
        series.push({
          name: isLegend[i],
          type: 'bar',
          barGap: 0,
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: isData[i]
        });
      }
    }

    // eslint-disable-next-line prefer-const
    option = {
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
      legend: {
        left: 'center',
        // top: 'bottom',
        data: isLegend
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
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: isManag,
          axisLabel: { interval: 0, rotate: 30 } // ให้แสดงทุกชื่อ และเอียง 30 องศา
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series
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

export default BudgetChart;
