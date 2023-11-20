/* eslint-disable no-param-reassign */
import * as echarts from 'echarts';
import { useEffect } from 'react';

let chartDom: any;
let myChart: any;

const ShareDataset = ({
  isCaption,
  isData,
  isFactory,
  isText,
  isStyle
}: any) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      shareChart();
    }
  }, [isCaption, isData, isFactory, isText, isStyle]);

  const caneSugar: any = [];
  const source: any = [];
  if (isFactory === true) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= 100; i++) {
      if (i === 0) {
        caneSugar.push('sugarcane');
      } else {
        caneSugar.push(`${i}`);
      }
    }
  }

  if (isData) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < isData.length; i++) {
      if (i === 0) {
        source.push(caneSugar);
      }
      source.push(Object.values(isData[i]));
    }
  } else {
    isData = [];
  }

  const shareChart = () => {
    chartDom = document.getElementById(isCaption);
    myChart = echarts.init(chartDom, undefined, {
      renderer: 'canvas',
      useDirtyRect: false
    });

    let option: any;

    // eslint-disable-next-line prefer-const
    setTimeout(() => {
      option = {
        legend: {
          left: 'center',
          top: 'bottom'
        },
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        title: {
          text: `${isText}`
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
        dataset: {
          source
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '35%',
            center: ['50%', '30%'],
            emphasis: {
              focus: 'self'
            },
            label: {
              formatter: '{b}: {@1} ({d}%)'
            },
            encode: {
              itemName: 'sugarcane',
              value: 10,
              tooltip: 10
            }
          }
        ]
      };
      myChart.on('updateAxisPointer', (event: any) => {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1;
          myChart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: `{b}: {@[${dimension}]} ({d}%)`
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });
      if (option && typeof option === 'object') {
        myChart.setOption(option);
        window.addEventListener('resize', () => {
          myChart.resize();
        });
      }
    });
  };

  return <div id={isCaption} style={isStyle} />;
};

export default ShareDataset;
