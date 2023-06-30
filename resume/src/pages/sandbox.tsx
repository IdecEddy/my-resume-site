
import dynamic from 'next/dynamic';
import { useState } from 'react';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Sandbox = () => {
  const [dataSample, setDataSample] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        }
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
        colors: ['#c4b5fd']
      },
      plugin: {
        legend: {
          display: false,
        },
        lable: {
          display: true,
        }
      },
    },
    series: [
      {
        name: "series-1",
        data: [10, 11, 12, 12, 13, 13, 14]
        
      },
    ],
  });
  const widthValue = "430";
  const heightValue = "150";
  return(
    <div className='flex justify-center'> 
      <Chart
        options={dataSample.options}
        series={dataSample.series}
        type="line"
        width={widthValue}
        height={heightValue}
      /> 
    </div>
  );
}

export default Sandbox;
