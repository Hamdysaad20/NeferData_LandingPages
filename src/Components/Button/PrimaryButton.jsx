// Import necessary dependencies
import React from 'react';
import PropTypes from 'prop-types';

// PrimaryButton component
const PrimaryButton = ({ title, onClick, classes }) => (
  <button
    onClick={onClick}
    className={`rounded-[8px] py-2 px-5 text-center text-lg font-bold bg-blue-1 transition-all hover:bg-blue-500 capitalize text-white ${classes}`}>
    {title}
  </button>
);

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.string
}

// Export the Button1 component
export default PrimaryButton;