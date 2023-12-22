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
    }
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
    <div className='w-[90%] m-auto my-96'>
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
