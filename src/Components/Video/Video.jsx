// Import necessary dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Video component
const Video = ({ src }) => (
  // Video container with rounded border
  <div className='w-full bg-white rounded-2xl p-[22px] pt-[14px] flex flex-col shadow-custom-light'>

    {/* Decorative elements */}
    <div className="flex justify-start items-center gap-2 pb-[14px]">
      <span className='w-4 aspect-square rounded-full bg-red-1'></span>
      <span className='w-4 aspect-square rounded-full bg-[#F4C245]'></span>
      <span className='w-4 aspect-square rounded-full bg-[#53B477]'></span>
    </div>

    {/* Video player */}
    <div className='w-full bg-slate-400 box-border'>
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