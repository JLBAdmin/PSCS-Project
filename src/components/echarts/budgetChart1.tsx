/* eslint-disable tailwindcss/no-custom-classname */
import * as echarts from 'echarts';
import { useEffect } from 'react';

let chartDom: any;
let myChart: any;

const BudgetChart1 = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      clockPS();
    }
  }, []);

  const clockPS = () => {
    chartDom = document.getElementById('chart-container1');
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
      rotate: 50, // ปรับต้วอักษร ตรงหรือเอียง
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
      show: false, // แสดงชื่อบนแท่งกราฟ
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
    // eslint-disable-next-line prefer-const
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['เป้าหมายพื้นที่', 'จดแจ้ง', 'อนุมัติวงเงิน', 'ขาดเป้า']
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['เขต 1', 'เขต 2', 'เขต 3', 'เขต 4', 'เชต 5', 'เขต 6']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'เป้าหมายพื้นที่',
          type: 'bar',
          barGap: 0,
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 300]
        },
        {
          name: 'จดแจ้ง',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 200]
        },
        {
          name: 'อนุมัติวงเงิน',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 100]
        },
        {
          name: 'ขาดเป้า',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [98, 77, 101, 99, 40, 20]
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
        id='chart-container1'
        className='apexcharts-canvas apexcharts72w6mpmm apexcharts-theme-light'
        style={{ width: '100%', height: '100%' }}
      />
    </>
  );
};

export default BudgetChart1;
