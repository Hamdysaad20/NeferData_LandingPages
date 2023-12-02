// Import necessary dependencies
import React from 'react';
import PropTypes from 'prop-types';

// PrimaryButton component
const PrimaryButton = ({ title, onClick }) => (
  <button
    onClick={onClick}
    className="rounded-[8px] py-2 px-5 text-center text-lg font-bold bg-blue-1 transition-all hover:bg-blue-500 capitalize text-white">
    {title}
  </button>
);

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

// Export the Button1 component
export default PrimaryButton;