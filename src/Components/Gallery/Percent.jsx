// Import necessary dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Percent component
const Percent = ({ percent, text }) => {
  return (
    <div className='flex flex-col gap-4 max-w-[200px] max-md:max-w-[140px]'>
      {/* Percent Value */}
      <span className='text-red-1 text-8xl max-md:text-7xl font-black py-4'>
        {percent}%
      </span>
      {/* Accompanying Text */}
      <span className='font-black text-[16px] max-md:text-sm'>
        {text}
      </span>
    </div>
  );
};

Percent.propTypes = {
  percent: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default Percent;