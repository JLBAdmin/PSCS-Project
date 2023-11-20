import * as echarts from 'echarts/core';
import * as $ from 'jquery';
import { useEffect } from 'react';

const ROOT_PATH = 'http://localhost:8080';

const LineRace1 = ({ isCaption, isData, zone, Text }: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      LineCharts1();
    }
  }, []);
  // eslint-disable-next-line no-console
  // console.log(isData);

  const LineCharts1 = () => {
    const chartDom: any = document.getElementById(isCaption);

    const myChart = echarts.init(chartDom, undefined, {
      renderer: 'canvas',
      useDirtyRect: false
    });

    let option: any;
    if (zone === true) {
      $.get(
        `/api/company/get-cometrue`,
        // eslint-disable-next-line @typescript-eslint/no-shadow
        (_rawData): void => {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          run({ _rawData });
        }
      );
    } else {
      $.get(
        `${ROOT_PATH}/js/data.json`,
        // eslint-disable-next-line @typescript-eslint/no-shadow
        (_rawData): void => {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          run({ _rawData });
        }
      );
    }

    function run({ _rawData }: { _rawData: any }): void {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const datasetWithFilters: any[] = [];
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const seriesList: any[] = [];
      echarts.util.each(isData, (country) => {
        const datasetId = `dataset_${country}`;
        datasetWithFilters.push({
          id: datasetId,
          fromDatasetId: 'dataset_raw',
          transform: {
            type: 'filter',
            config: {
              and: [
                { dimension: 'Day', gte: 0 },
                { dimension: 'Country', '=': country }
              ]
            }
          }
        });
        seriesList.push({
          type: 'line',
          datasetId,
          showSymbol: true,
          name: country,
          endLabel: {
            show: true,
            formatter(params: any) {
              return `${params.value[2]}: ${parseFloat(
                params.value[0]
              ).toLocaleString(undefined, { minimumFractionDigits: 0 })}`;
            }
          },
          labelLayout: {
            moveOverlap: 'shiftY'
          },
          emphasis: {
            focus: 'series'
          },
          encode: {
            x: 'Day',
            y: 'Cane',
            label: ['Country', 'Cane'],
            itemName: 'Day',
            tooltip: ['Cane']
          }
        });
      });

      option = {
        animationDuration: 10000,
        dataset: [
          {
            id: 'dataset_raw',
            source: _rawData
          },
          ...datasetWithFilters
        ],
        title: {
          text: Text
        },
        tooltip: {
          order: 'valueDesc',
          trigger: 'axis'
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
        xAxis: {
          type: 'category',
          nameLocation: 'middle'
        },
        yAxis: {
          name: 'Ton Cane'
        },
        grid: {
          right: 140
        },
        series: seriesList
      };

      myChart.setOption(option);
    }
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
        style={{ width: '100vw', height: '50vh' }}
      />
    </>
  );
};

export default LineRace1;
