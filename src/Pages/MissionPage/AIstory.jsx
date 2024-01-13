import Products from "../../Components/Products/Products";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import products  from "../../Data/NeferDataProducts";
import ProductsCardData from "../../Data/ProductsCardData.json";
import EmailLottie from "../../Lottie/Email.json";
import AILottie from "../../Lottie/ai.json";
import SaaSLottie from "../../Lottie/SaaS.json";
import Contract from "../../Lottie/Contract.json";
import AIBot from "../../Lottie/AIBot.json";
import wave from "../../Lottie/AICloud.json";


function AIstory() {


  const LOTTIEanimationData = [
    EmailLottie,
    AILottie,
    SaaSLottie,
    Contract,
    AIBot,
  ];
  const [isInView, setIsInView] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const animationRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !animationPlayed) {
      setIsInView(true);
      setAnimationPlayed(true);
    }
  }, [inView, animationPlayed]);

  return (
    <div
      
      className="relative bg-[#3092DB] pb-12 -mb-7 rounded-t-3xl mt-12 "
    >
      <header className="flex flex-col  items-center">
        {/* Hero content wrapper */}
        <div
          className="w-[90%] max-md:w-[95%] max-sm:w-full box-border px-2 lg:px-16 py-28 mt-1 min-h-[482px] flex flex-col justify-center items-center gap-6"
          ref={ref}
        >
          {/* Hero Texts */}
          <div className="bg-white aspect-square w-[116px] h-[116px] p-2 relative shadow-2xl shadow-blue-700 rounded-[2rem]">
            {isInView && (
              <Lottie
                animationData={wave}
                autoplay
                loop
                style={{ width: "100%", height: "100%" }}
                ref={animationRef}
                className="scale-[3]"

              />
            )}
          </div>{" "}
          <div className="flex flex-col gap-6 text-white text-center box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[1290px]">
            <h1
              style={{
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
                fontWeight: "bold",
                lineHeight: "120%",
              }}
              className="text-3xl capitalize md:text-7xl font-bold leading-120%"
            >
              Embrace The AI Advantage
            </h1>
            <p className="text-[24px] max-lg:text-[20px] font-medium box-border max-lg:px-28 max-md:px-0 leading-[150%] text-gray-200">
              Neferdata is your{" "}
              <span className="">
                {" "}
                trusted partner on Artificial Intelligence{" "}
              </span>{" "}
              adoption journey to help you achieve your business goals. We
              provide AI-powered tools tailored for you to help you succeed.
            </p>{" "}
          </div>
        </div>
      </header>

      <Products
            products={products}
        LOTTIEanimationData={LOTTIEanimationData}
            ProductsCardData={ProductsCardData}
            bg='bg-[#023459b3] border-4 border-gray-50/60 shadow-2xl'
          />
    </div>
  );
}

export default AIstory;
