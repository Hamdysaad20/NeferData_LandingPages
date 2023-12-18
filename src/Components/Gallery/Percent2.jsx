// Import necessary dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


// Percent component
const Percent2 = ({ percent, text }) => {
  const progressStyle = buildStyles({
    textColor: '#FF5E5E',
    textSize: '1.6em',
    pathColor: '#FF5E5E'
  });

  return (
    <div className='flex flex-col gap-4 max-w-[200px] max-md:max-w-[140px]'>
      {/* Percent Value */}
      <CircularProgressbar
        value={percent}
        text={`${percent}%`}
        styles={progressStyle}
        className='font-semibold' 
      />
      
      {/* Accompanying Text */}
      <span className='font-black text-[20px] max-md:text-sm text-center'>
        {text}
      </span>
    </div>
  );
};

Percent2.propTypes = {
  percent: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default Percent2;