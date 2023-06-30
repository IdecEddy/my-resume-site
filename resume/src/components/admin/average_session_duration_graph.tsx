import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const AverageSessionDurationGraph = () => {
  const [graphSize, setGraphSize] = useState({
    height: 0,
    width: 0,
  });
  useEffect(() => {
    const resizeGraph = () => {
      if (typeof window !== 'undefined') {
        const card = window.document.getElementById(
          'page-view-card'
        );
        const cardRect = card.getBoundingClientRect();
        setGraphSize({
          height: cardRect.height,
          width: cardRect.width,
        });
      }
    };
    resizeGraph();
    window.addEventListener('resize', resizeGraph);

    return () => {
      window.removeEventListener('resize', resizeGraph);
    };
  }, []);
  const [dataSample, setDataSample] = useState({
    options: {
      chart: {
        id: 'basic-bar',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      tooltip: {
        enabled: true,
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      fill: {
        colors: ['#c4b5fd'],
      },
      xaxis: {
        categories: [],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      stroke: {
        width: 2,
        colors: ['#c4b5fd'],
      },
      plugin: {
        legend: {
          display: false,
        },
        lable: {
          display: true,
        },
      },
    },
    series: [
      {
        name: 'series-1',
        data: [10, 11, 12, 12, 13, 13, 14],
      },
    ],
  });
  const widthValue = graphSize.width;
  const heightValue = graphSize.height;
  return (
    <>
      <div className="col-start-3 row-start-1">
        <Chart
          options={dataSample.options}
          series={dataSample.series}
          type="area"
          width={widthValue}
          height={heightValue}
        />
      </div>
    </>
  );
};

export default AverageSessionDurationGraph;
