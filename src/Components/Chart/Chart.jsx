import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      max: 100, 
      min: 0,
      ticks: {
        stepSize: 20,
        color: 'white', // Change text color to white
        font: {
          weight: 'bold', // Make the text bold
          size: 16 // Increase the text size
        }
      }
    },
    x: {
      ticks: {
        stepSize: 1,
        color: 'white', // Change text color to white
        font: {
          weight: 'bold', // Make the text bold
          size: 16 // Increase the text size
        }
      }
    }
  },
  plugins: {
    title: {
      display: false,
      text: 'Chart.js Line Chart - Multi Axis',
    },
    legend: {
      display: true,
      position: 'top',
      align: 'end',


      labels: {
        color: 'white', // Change text color to white
        font: {
          weight: 'extrabold', // Make the text bold
          size: 10 // Increase the text size
        }
      }
    },
    tooltip: {
      displayColors: true,
      callbacks: {
        label: function (context) {
          var label = context.dataset.label || '';

          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += context.parsed.y + '%';
          }
          return label;
        },
      },
      backgroundColor: '#121212', // Change tooltip background color to white
      color: 'white', // Change tooltip text color to black
      titleColor: 'white', // Change tooltip title color to black
      titleFont: {
        weight: 'bold' // Make tooltip title bold
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};
const Chart = ({chartData}) => {
  const data = {
    labels: chartData.labels,
    datasets: chartData.data.map(ele => {
      return {
        label: ele.cat,
        data: ele.values,
        borderColor: ele.borderColor,
        backgroundColor: ele.backgroundColor,
        yAxisID: 'y'
      }
    }),
    
  };

  return (
    <div className='w-[95%] relative h-full  m-auto my-96'>
    
      <Line options={options} data={data} />
    </div>
  );
};


Chart.propTypes = {
  chartData: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      cat: PropTypes.string.isRequired,
      values: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      borderColor: PropTypes.string,
      backgroundColor: PropTypes.string
    })).isRequired
  }).isRequired
};


export default Chart;
