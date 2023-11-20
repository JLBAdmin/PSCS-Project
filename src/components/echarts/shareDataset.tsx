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
  isStyle,
  isSubText,
  isToDay
}: any) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      shareChart();
    }
  }, [isCaption, isData, isFactory, isText, isStyle, isSubText, isToDay]);

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
          // data: isLegend
        },
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        title: {
          text: `${isText} ${isToDay}`,
          subtext: `${isSubText}`,
          left: 'center'
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
              // position: 'inner',
              formatter: `{b|{b}：}{@9}  {per|{d}%}`,
              rich: {
                a: {
                  color: '#6E7079',
                  lineHeight: 22,
                  align: 'center'
                },
                hr: {
                  borderColor: '#8C8D8E',
                  width: '100%',
                  borderWidth: 1,
                  height: 0
                },
                b: {
                  color: '#4C5058',
                  fontSize: 12,
                  fontWeight: 'bold',
                  lineHeight: 33
                },
                per: {
                  color: '#fff',
                  backgroundColor: '#4C5058',
                  padding: [3, 4],
                  borderRadius: 4
                }
              }
            },
            encode: {
              itemName: 'sugarcane',
              value: 9,
              tooltip: 9
            }
          }
        ]
      };

      myChart.on('updateAxisPointer', (event: any) => {
        const xAxisInfo = event.axesInfo[0];

        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1;
          // eslint-disable-next-line no-console
          myChart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: `{b|{b}：}{@[${dimension}]} {per|{d}%}`,
                rich: {
                  a: {
                    color: '#6E7079',
                    lineHeight: 22,
                    align: 'center'
                  },
                  hr: {
                    borderColor: '#8C8D8E',
                    width: '100%',
                    borderWidth: 1,
                    height: 0
                  },
                  b: {
                    color: '#4C5058',
                    fontSize: 12,
                    fontWeight: 'bold',
                    lineHeight: 33
                  },
                  per: {
                    color: '#fff',
                    backgroundColor: '#4C5058',
                    padding: [3, 4],
                    borderRadius: 4
                  }
                }
              },
              encode: {
                value: dimension.toLocaleString(),
                tooltip: dimension.toLocaleString()
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
