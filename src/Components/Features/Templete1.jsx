import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from "../Button/PrimaryButton";

// Destructure props in the function signature for a cleaner syntax
const Templete1 = ({ title, subTitle, details, learnMoreLink, imgURL }) => (
  // Use template literals for string concatenation
  // Added alt text for the image
  <div className={`w-full h-full grid ${imgURL && 'lg:grid-cols-2'}`}>
    <div>
      <div className={`mx-auto ${imgURL ? 'max-w-md' : 'max-w-3xl'}  text-center pt-12 lg:py-32`}>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          {title}
          <br />
          {subTitle}
        </h2>
        <p className='mt-6 text-lg leading-8 text-gray-300'>
          {details}
        </p>
        <div className='mt-10 flex items-center justify-center gap-6 lg:justify-center'>
          <PrimaryButton onClick={"/signup"} title='Sign Up' />
          {learnMoreLink && (
            <a href={learnMoreLink} className='text-sm font-semibold leading-6 text-white'>
              Learn more <span aria-hidden='true'>→</span>
            </a>
          )}
        </div>
      </div>
    </div>
    {imgURL && (
      <div className='hidden lg:block'>
        <div className="relative mt-16 h-80 lg:mt-8">
          <img
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src={imgURL}
            alt="App screenshot"
            width={1824}
            height={1080}
          />
        </div>
      </div>
    )}
  </div>
);

// Defined propTypes for your component
Templete1.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  details: PropTypes.string,
  learnMoreLink: PropTypes.string,
  imgURL: PropTypes.string
};

export default Templete1;