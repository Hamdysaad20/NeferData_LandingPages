import PropTypes from "prop-types";
import SecondaryButton from "../Button/SecondaryButton";
import Products from "../Products/Products";
import products from "../../Data/NeferDataProducts";
import MicrosoftIcon from "./MicrosoftSVG";
import GoogleIcon from "./GoogleSVG";
import EmailLottie from "../../Lottie/Email.json";
import AILottie from "../../Lottie/ai.json";
import SaaSLottie from "../../Lottie/SaaS.json";
import Contract from "../../Lottie/Contract.json";
import AIBot from "../../Lottie/AIBot.json";
import ProductsCardData from "../../Data/ProductsCardData.json";


const componentData = {
  title: "Maximize Your SaaS Investments",
  description:
    "Our discovery and reporting tools help you get the most value out of your investments.",
  signInButtons: [
    {
      theme: "dark",
      Icon: MicrosoftIcon,
      title: "Sign in with Microsoft",
    },
    {
      theme: "primary",
      Icon: GoogleIcon,
      title: "Sign in with Google",
    },
  ],
  termsOfService: "Terms of Service",
  privacyPolicy: "Privacy Policy",
};
const LOTTIEanimationData = [
  EmailLottie,
  AILottie,
  SaaSLottie,
  Contract,
  AIBot,
];

function Hero() {
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
            <div className='flex gap-4 py-4 max-md:flex-col max-md:items-center'>
              {componentData.signInButtons.map((button, index) => (
                <SecondaryButton
                  key={index}
                  onClick={null}
                  theme={button.theme}
                  Icon={button.Icon}
                  title={button.title}
                />
              ))}
            </div>
            <p className='text-gray-50 text-[12px] max-lg:text-[10px] text-center'>
              By clicking Sign Up you&apos;re confirming that you agree with our{" "}
              <span className='underline select-none cursor-pointer'>
                {componentData.termsOfService}
              </span>{" "}
              and{" "}
              <span className='underline select-none cursor-pointer'>
                {componentData.privacyPolicy}
              </span>
              .
            </p>
          </div>
        </div>
        {/* Video container */}
        <div className='w-[99%]  max-md:w-full  max-w-[1500px]'>
          <Products products={products}
          LOTTIEanimationData = {LOTTIEanimationData}
          ProductsCardData = {ProductsCardData}

          
          
          bg='bg-[#3092DB]/20 border-4 border-gray-200/60 shadow-2xl' />
        </div>
      </header>
    </div>
  );
}

export default Hero;

Hero.propTypes = {
  onClick: PropTypes.func,
};
