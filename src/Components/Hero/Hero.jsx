// Import the necessary dependencies
import React from 'react';
import PropTypes from 'prop-types';
import SecondaryButton from "../Button/SecondaryButton";
import { FcGoogle } from "react-icons/fc";
import videoSrc from '../../assets/Videos/video1.mp4';
import Video from '../Video/Video';

// Function to display the Google icon
const GoogleIcon = () => (
  <span className='w-full h-full bg-white flex justify-center items-center text-[2rem] p-2'>
    <FcGoogle />
  </span>
);

// Function to display the Microsoft icon
const MicrosoftIcon = () => (
  <span className='w-full h-full flex justify-center items-center text-[2rem] p-2'>
    <span className="bg-white flex justify-center items-center p-px">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32px" viewBox="0 0 23 23">
        <path fill="#F25022" d="M0 0h11v11H0z" /> {/* Red square */}
        <path fill="#7CBB00" d="M12 0h11v11H12z" /> {/* Green square */}
        <path fill="#05A6F0" d="M0 12h11v11H0z" /> {/* Blue square */}
        <path fill="#FFB900" d="M12 12h11v11H12z" /> {/* Yellow square */}
      </svg>
    </span>
  </span>
);

// Main Hero component
const Hero = () => (
  <header className="mt-[72px] bg-gradient-to-b from-[#3092DB] to-[#FBFCFF] flex flex-col items-center font-roboto">
    {/* Hero content wrapper */}
    <div className="w-[90%] max-w-[1200px] box-border px-16 py-28 m-16 h-[482px] flex flex-col justify-center items-center gap-6">
      {/* Hero Texts */}
      <div className="flex flex-col gap-6 text-white text-center box-border px-16 max-w-[890px]">
        <h1 className="text-[56px] font-bold leading-[120%]">
          AI and ML tools for your purchasing journey
        </h1>
        <p className="text-[18px] box-border px-[76px] leading-[150%]">
          Our discovery and reporting tools help you get the most value out of your investments.
        </p>
      </div>
      {/* Sign In buttons */}
      <div>
        <div className='flex gap-4 py-4'>
          <SecondaryButton onClick={null} theme='dark' Icon={MicrosoftIcon} title='Sign in with Microsoft' />
          <SecondaryButton onClick={null} theme='primary' Icon={GoogleIcon} title='Sign in with Google' />
        </div>
        <p className='text-white text-[12px] text-center'>
          By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
        </p>
      </div>
    </div>
    {/* Video container */}
    <div className="w-[90%] box-border p-16 max-w-[1400px]">
      <Video src={videoSrc} />
    </div>
  </header>
);

Hero.propTypes = {
  onClick: PropTypes.func,
}

export default Hero;