import PropTypes from "prop-types";
import SecondaryButton from "../Button/SecondaryButton";
import Products from "../Products/Products";
import products from "../../Data/NeferDataProducts";
import MicrosoftIcon from "./MicrosoftSVG";
import GoogleIcon from "./GoogleSVG";
import ProductsCardData from "../../Data/ProductsCardData.json";


// import EmailLottie from "../../Lottie/Email.json";
// import AILottie from "../../Lottie/ai.json";
// import SaaSLottie from "../../Lottie/SaaS.json";
// import Contract from "../../Lottie/Contract.json";
// import AIBot from "../../Lottie/AIBot.json";
// import future from "../../Lottie/WKQf1nhdyB.json";

import EmailLottie from "../../Lottie/dotlottie/Email.lottie";
import AILottie from "../../Lottie/dotlottie/ai.lottie";
import SaaSLottie from "../../Lottie/dotlottie/SaaS.lottie";
import Contract from "../../Lottie/dotlottie/Contract.lottie";
import AIBot from "../../Lottie/dotlottie/AIBot.lottie";
import future from "../../Lottie/dotlottie/WKQf1nhdyB.lottie";

import { Link } from "react-router-dom";


const componentData = {
  title: "Maximize Your SaaS Investments",
  description:
    "Our AI-powered discovery and reporting tools help you get the most value from your subscriptions.",
  signInButtons: [
    {
      theme: "dark",
      Icon: MicrosoftIcon,
      title: "Sign in with Microsoft",
      link: () => {
        window.location.href = import.meta.env.VITE_MICROSOFT_LOGIN_URL;
      },
    },
    {
      theme: "primary", 
      Icon: GoogleIcon,
      title: `Sign in with Google`,
      link: () => {
        window.location.href = import.meta.env.VITE_LOGIN_RUL;
      },
    },
  ],
  termsOfService: "Terms of Service",
  privacyPolicy: "Privacy Policy",
};
const LOTTIEanimationData = [
  AILottie,       
  Contract, 
  AIBot,         
  SaaSLottie,     
  EmailLottie,    
  future,

];

function Hero() {

  // print all env vars
  return (
    <div className=' relative  '>
      <header className='pt-20   flex flex-col items-center '>
        {/* Hero content wrapper */}
        <div className='w-[90%]  max-md:w-[95%] max-sm:w-full  box-border px-2 lg:px-16 py-28 m-16 h-[482px] flex flex-col justify-center items-center gap-6'>
          {/* Hero Texts */}
          <div className='flex flex-col gap-6 text-white text-center box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[890px]'>
            <h1
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
                fontWeight: "bold",
                lineHeight: "120%",
              }}
              className='text-4xl md:text-7xl  font-bold leading-140%'>
              {componentData.title}
            </h1>
            <p className='text-[24px] max-lg:text-[20px] max-mg:text-[18px] box-border px-[76px] max-lg:px-28 max-md:px-0 leading-[150%] text-gray-50'>
              {componentData.description}
            </p>
          </div>
          {/* Sign In buttons */}
          <div>
            <div className='flex gap-4 pb-0 py-4 max-md:flex-col max-md:items-center'>
              {componentData.signInButtons.map((button, index) => (
                <SecondaryButton
                  key={index}
                  onClick={button.link}
                  theme={button.theme}
                  Icon={button.Icon}
                  title={button.title}
                />
              ))}
            </div>
         
          </div>
          <p className='text-gray-50 text-[18px] max-lg:text-[10px] text-center'>
              By clicking Sign Up you&apos;re confirming that you agree with our{" "}
              <a  href={import.meta.env.VITE_TOS} className='underline select-none cursor-pointer'>
                {componentData.termsOfService}
              </a>{" "}
              and{" "}
              <a href={import.meta.env.VITE_PRIVACY_POLICY}              
              className='underline select-none cursor-pointer'>
                {componentData.privacyPolicy}
              </a>
              .
            </p>
        </div>
        {/* Video container */}
        <div className='w-[99%]  max-md:w-full  max-w-[1500px]'>
          <Products products={products}
          LOTTIEanimationData = {LOTTIEanimationData}
          ProductsCardData = {ProductsCardData}
          bg='bg-[#023459b3] border-4 border-gray-50/60 shadow-2xl'
          />
        </div>
      </header>
    </div>
  );
}

export default Hero;

Hero.propTypes = {
  onClick: PropTypes.func,
};
