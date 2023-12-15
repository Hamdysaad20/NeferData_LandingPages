// Import necessary dependencies
import React from 'react';
import PropTypes from 'prop-types';

// SecondaryButton component
const SecondaryButton = ({ title, onClick, Icon, theme }) => {
  
  // Determine button background base on 'theme' prop
  const backgroundColors = {
    dark: 'bg-[#121212]',
    primary: 'bg-[#121212]',
    default: 'bg-white'
  };

  const bg = backgroundColors[theme] || backgroundColors.default;

  // Return button component
  return (
    <button
      onClick={onClick} 
      className={`text-center font-bold capitalize py-4 text-white grid place-items-center  max-lg:gap-[20px] p-2 items-center text-[16px] max-lg:text-[14px] w-[271px] max-lg:w-[261px] box-border rounded-full ${bg} hover:bg-opacity-80 bg-opacity-100 transition-all`}
    >
      <span className="grid grid-cols-4 gap-2 place-items-center">
        <Icon />
        <span className='col-span-3'>{title}</span>
      </span>

    </button>
  );
};

SecondaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  theme: PropTypes.oneOf(['dark', 'primary', 'default'])
};

export default SecondaryButton;