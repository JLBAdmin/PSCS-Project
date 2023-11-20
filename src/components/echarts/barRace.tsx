/* eslint-disable tailwindcss/no-custom-classname */
import * as echarts from 'echarts';
import * as $ from 'jquery';
import { useEffect } from 'react';

let chartDom: any;
let myChart: any;

const ROOT_PATH = 'http://pscane.com:8080';

const BarRace = ({ isCaption }: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      BarRaces();
    }
  }, []);
  // eslint-disable-next-line no-console

  const BarRaces = () => {
    chartDom = document.getElementById(isCaption);
    myChart = echarts.init(chartDom, undefined, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    let option: any;

    const updateFrequency = 2000;
    const dimension = 0;

    const countryColors: Record<string, string> = {
      Australia: '#00008b',
      นครเพชร: '#f00',
      China: '#ffde00',
      Cuba: '#002a8f',
      Finland: '#003580',
      France: '#ed2939',
      Germany: '#000',
      Iceland: '#003897',
      India: '#f93',
      Japan: '#bc002d',
      'North Korea': '#024fa2',
      'South Korea': '#000',
      'New Zealand': '#00247d',
      พิษณุโลก: '#ef2b2d',
      Poland: '#dc143c',
      Russia: '#d52b1e',
      Turkey: '#e30a17',
      มิตรเกษตรอุทัย: '#00247d',
      เกษตรไทยนครสวรรค์: '#b22234'
    };

    $.when(
      $.getJSON(`${ROOT_PATH}/js/data-bar.json`),
      $.getJSON(`${ROOT_PATH}/js/data-text.json`)
    ).done((res0, res1) => {
      interface Flag {
        name: string;
        emoji: string;
      }
      const flags: Flag[] = res0[0];
      const data = res1[0];
      const years: any = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < data.length; ++i) {
        if (years.length === 0 || years[years.length - 1] !== data[i][4]) {
          years.push(data[i][4]);
        }
      }

      function getFlag(countryName: string) {
        if (!countryName) {
          return '';
        }
        return (flags.find((item) => item.name === countryName) || {}).emoji;
      }
      const startIndex = 10;
      const startYear = years[startIndex];

      option = {
        grid: {
          top: 10,
          bottom: 30,
          left: 150,
          right: 80
        },
        xAxis: {
          max: 'dataMax',
          axisLabel: {
            formatter(n: number) {
              return `${Math.round(n)}`;
            }
          }
        },
        dataset: {
          source: data.slice(1).filter((d: string[]) => d[4] === startYear)
        },
        yAxis: {
          type: 'category',
          inverse: true,
          max: 10,
          axisLabel: {
            show: true,
            fontSize: 14,
            formatter(value: any) {
              return `${value}{flag|${getFlag(value)}}`;
            },
            rich: {
              flag: {
                fontSize: 25,
                padding: 5
              }
            }
          },
          animationDuration: 300,
          animationDurationUpdate: 300
        },
        series: [
          {
            realtimeSort: true,
            seriesLayoutBy: 'column',
            type: 'bar',
            itemStyle: {
              color(param: any): any {
                return countryColors[(param.value as any[])[3]] || '#5470c6';
              }
            },
            encode: {
              x: dimension,
              y: 3
            },
            label: {
              show: true,
              precision: 1,
              position: 'right',
              valueAnimation: true,
              fontFamily: 'monospace'
            }
          }
        ],
        // Disable init animation.
        animationDuration: 0,
        animationDurationUpdate: updateFrequency,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        graphic: {
          elements: [
            {
              type: 'text',
              right: 160,
              bottom: 60,
              style: {
                text: startYear,
                font: 'bolder 80px monospace',
                fill: 'rgba(100, 100, 100, 0.25)'
              },
              z: 100
            }
          ]
        }
      };

      if (option && typeof option === 'object') {
        myChart.setOption(option);
      }

      // eslint-disable-next-line no-plusplus
      for (let i: number = startIndex; i < years.length - 1; ++i) {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        ((i) => {
          setTimeout(
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            () => updateYear(years[i + 1]),
            (i - startIndex) * updateFrequency
          );
        })(i);
      }

      function updateYear(year: string) {
        const source = data.slice(1).filter((d: string[]) => d[4] === year);
        (option as any).series[0].data = source;
        (option as any).graphic.elements[0].style.text = year;
        myChart.setOption(option);
      }
    });

    window.addEventListener('resize', () => {
      myChart.resize();
    });
  };
  return (
    <>
      <div
        id={isCaption}
        // className='apexcharts-canvas apexcharts72w6mpmm apexcharts-theme-light'
        style={{ width: '100vw', height: '50vh' }}
      />
    </>
  );
};

export default BarRace;
