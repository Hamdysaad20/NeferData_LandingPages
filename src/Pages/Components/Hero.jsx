// Import the necessary dependencies
import Video from './Video';
import Button2 from "./Button2";
import { FcGoogle } from "react-icons/fc";
import videoSrc from '../../assets/Videos/video1.mp4';

export default function Hero() {
  // Function to display the Google icon
  const googleIcon = () => (
    <span className='w-full h-full bg-white flex justify-center items-center text-[2rem] p-2'>
      <FcGoogle />
    </span>
  );

  // Function to display the Microsoft icon
  const microsoftIcon = () => (
    <span className='w-full h-full flex justify-center items-center text-[2rem] p-2'>
      <span className="bg-white flex justify-center items-center p-px">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32px" viewBox="0 0 23 23">
          <path fill="#F25022" d="M0 0h11v11H0z" /> {/* Red square */}
          <path fill="#7CBB00" d="M12 0h11v11H12z" /> {/* Blue square */}
          <path fill="#05A6F0" d="M0 12h11v11H0z" /> {/* Green square */}
          <path fill="#FFB900" d="M12 12h11v11H12z" /> {/* Yellow square */}
        </svg>
      </span>
    </span>
  );

  // Return the main component
  return (
    <header className="mt-[72px] bg-gradient-to-b from-[#3092DB] to-[#FBFCFF] flex flex-col items-center font-roboto">
      <div className="w-[90%] max-w-[1200px] box-border px-16 py-28 m-16 h-[482px] flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col gap-6 text-white text-center box-border px-16 max-w-[890px]">
          <h1 className="text-[56px] font-bold leading-[120%]">
            AI-powered tools for your SaaS purchasing journey
          </h1>
          <p className="text-[18px] box-border px-[76px] leading-[150%]">
            Our AI-powered discovery, evaluation, and reporting tools help your business get the most value out of your SaaS investment.
          </p>
        </div>
        <div>
          <div className='flex gap-4 py-4'>
            <Button2 onClick={() => { }} theme='dark' Icon={microsoftIcon} title='Sign in with Microsoft' />
            <Button2 onClick={() => { }} theme='primary' Icon={googleIcon} title='Sign in with Google' />
          </div>
          <p className='text-white text-[12px] text-center'>
            By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
          </p>
        </div>
      </div>
      <div className="w-[90%] box-border p-16 max-w-[1400px]">
        <Video src={videoSrc} /> {/* Video element */}
      </div>
    </header>
  );
}
