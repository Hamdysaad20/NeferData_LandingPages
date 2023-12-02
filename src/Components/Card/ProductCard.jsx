// Import necessary dependencies
import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../Button/PrimaryButton';
import Video from '../Video/Video';

// ProductCard1 Component
const ProductCard1 = ({ title, subTitle, list, videoSrc, onClick, isReverse }) => (
  // Main container: using template literal for dynamic styling
  <div className={`font-roboto flex justify-center items-center w-[90%] py-[112px] max-w-[1400px] m-auto gap-20 ${isReverse ? 'flex-row-reverse' : ''}`}>

    {/* Text Content container */}
    <div className="flex flex-col gap-4 items-start w-1/2">
      <h3 className='text-blue-2 text-[16px]'>{subTitle}</h3>
      <h2 className='font-semibold text-5xl'>{title}</h2>

      {/* List of texts */}
      <ul className='pt-4 pb-2 flex flex-col gap-4 pl-5 box-border'>
        {list.map((listItem, index) => (
          <li key={index} className='text-[16px] list-disc'>{listItem}</li>
        ))}
      </ul>

      {/* Actions */}
      <PrimaryButton title='get started' onClick={onClick} />
    </div>

    {/* Video Content */}
    <div className='w-1/2'>
      <Video src={videoSrc} />
    </div>
  </div>
);

ProductCard1.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  videoSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isReverse: PropTypes.bool
}

// Export the main component
export default ProductCard1;