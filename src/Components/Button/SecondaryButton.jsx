// Import necessary dependencies
import React from 'react';
import PropTypes from 'prop-types';

// SecondaryButton component
const SecondaryButton = ({ title, onClick, Icon, theme }) => {
  
  // Determine button background base on 'theme' prop
  const backgroundColors = {
    dark: 'bg-dark-1',
    primary: 'bg-[#5383EC]',
    default: 'bg-white'
  };

  const bg = backgroundColors[theme] || backgroundColors.default;

  // Return button component
  return (
    <button
      onClick={onClick} 
      className={`text-center font-bold capitalize text-white flex gap-[26px] p-2 items-center text-[16px] w-[271px] box-border rounded-[4px] ${bg} hover:bg-opacity-80 bg-opacity-100 transition-all`}
    >
      <span className="aspect-square flex justify-center items-center">
        <Icon />
      </span>
      <span>{title}</span>
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