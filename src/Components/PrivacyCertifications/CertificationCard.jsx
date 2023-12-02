import React from 'react';
import PropTypes from 'prop-types';

/**
 * Certification Card Function Component
 *
 * Renders a certification card with given Icon and Description
 * @param {Object} props - The properties object, containing Icon and Description 
 */
const CertificationCard = ({Icon, Description}) => {
  
  /**
   * Renders the description based on its type
   *
   * If the Description is a string, it is rendered as text
   * If the Description is a function, it is rendered as a React component
   *
   * @returns {ReactElement | string} The rendered description
   */
  const renderDescription = () => {
    if (typeof Description === 'string') {
      return (
        <span>{Description}</span>
      );
    }

    const DescriptionComponent = Description;
    return (
      <DescriptionComponent />
    );
  };

  return (
    <div className='w-[300px] font-semibold mx-8 bg-white aspect-square rounded-lg flex flex-col justify-center items-center gap-4 text-center'>
      <span className='w-16 aspect-square'>
        <Icon aria-label="Certification Icon"/>
      </span>
      {renderDescription()}
    </div>
  );
}

CertificationCard.propTypes = {
  Icon: PropTypes.func.isRequired,
  Description: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]).isRequired
}

export default CertificationCard;