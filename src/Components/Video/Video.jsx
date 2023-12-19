// Import necessary dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Video component
const Video = ({ src }) => (
  // Video container with rounded border
  <div className='w-full bg-white   border-[1px] border-[#121212] rounded-3xl overflow-hidden relative  pt-[14px]  flex flex-col shadow-xl'>

    {/* Decorative elements */}
    <div className="flex pl-3  justify-start items-center gap-2 pb-[14px] max-md:pb-3">
      <span className='w-4 max-md:w-3 aspect-square rounded-full bg-red-1'></span>
      <span className='w-4 max-md:w-3 aspect-square rounded-full bg-[#F4C245]'></span>
      <span className='w-4 max-md:w-3 aspect-square rounded-full bg-[#53B477]'></span>
    </div>

    {/* Video player */}
    <div className='w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden box-border'>
      <video
        src={src}
        autoPlay
        loop
        controls={false}
        muted
        title="Video Player"
        aria-label="Video Player">
      </video>
    </div>
  </div>
);

Video.propTypes = {
  src: PropTypes.string.isRequired
};

export default Video; 