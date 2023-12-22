import PropTypes from 'prop-types';
import SecondaryButton from "../Button/SecondaryButton";
import videoSrc from '../../assets/Videos/video1.mp4';
import Video from '../Video/Video';

const GoogleIcon = () => (
   <svg
  className="w-[30px] rounded-sm"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid"
  viewBox="0 0 256 262"
  id="google"
>
  <path
    fill="#4285F4"
    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
  />
  <path
    fill="#34A853"
    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
  />
  <path
    fill="#FBBC05"
    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
  />
  <path
    fill="#EB4335"
    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
  />
</svg>

);

// Function to display the Microsoft icon
const MicrosoftIcon = () => (

<svg
 className="w-[30px] rounded-sm"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="microsoft">
  <path fill="#4CAF50" d="M8.5 7.5H16v-7a.5.5 0 0 0-.5-.5h-7v7.5z" />
  <path fill="#F44336" d="M7.5 7.5V0h-7a.5.5 0 0 0-.5.5v7h7.5z" />
  <path fill="#2196F3" d="M7.5 8.5H0v7a.5.5 0 0 0 .5.5h7V8.5z" />
  <path fill="#FFC107" d="M8.5 8.5V16h7a.5.5 0 0 0 .5-.5v-7H8.5z" />
</svg>
 
);

// Main Hero component
const Hero = () => (
 <div className=' relative '>
   <header 
  style={{ 
    backgroundImage: `url(${'/public/hero@75.b2469a49.jpg'} )`,
    boxShadow: "0 0 30px 12px white inset",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
   
  }}
  
  className="pt-20   flex flex-col items-center ">
    {/* Hero content wrapper */}
    <div className="w-[90%]  max-md:w-[95%] max-sm:w-full  box-border px-2 lg:px-16 py-28 m-16 h-[482px] flex flex-col justify-center items-center gap-6">
      {/* Hero Texts */}
      <div className="flex flex-col gap-6 text-black text-center box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[890px]">
        <h1
        style={{fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', fontWeight: 'bold', lineHeight: '120%'}}
        className="text-4xl md:text-7xl font-bold leading-120%">
          AI and ML tools for your purchasing journey
        </h1>
        <p className="text-[24px] max-lg:text-[20px] max-mg:text-[18px] box-border px-[76px] max-lg:px-28 max-md:px-0 leading-[150%] text-gray-700">
          Our discovery and reporting tools help you get the most value out of your investments.
       
        </p>
      </div>
      {/* Sign In buttons */}
      <div>
        <div className='flex gap-4 py-4 max-md:flex-col max-md:items-center'>
          <SecondaryButton onClick={null} theme='dark' Icon={MicrosoftIcon} title='Sign in with Microsoft' />
          <SecondaryButton onClick={null} theme='primary' Icon={GoogleIcon} title='Sign in with Google' />
        </div>
        <p className='text-gray-500 text-[12px] max-lg:text-[10px] text-center'>
          By clicking Sign Up you&apos;re confirming that you agree with our <span className='underline select-none cursor-pointer'>Terms of Service</span> and <span  className='underline select-none cursor-pointer'>Privacy Policy</span>.
        </p>
      </div>
    </div>
    {/* Video container */}
    <div className="w-[90%] max-md:w-full box-border p-16 max-sm:p-1 max-md:p-10 max-w-[1400px]">
      <Video 
        src={videoSrc}
        
      />
    </div>
  </header>
 </div>
);

Hero.propTypes = {
  onClick: PropTypes.func,
}

export default Hero;