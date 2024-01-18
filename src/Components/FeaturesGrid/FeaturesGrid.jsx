import BGasset from "./BGasset";
import Smallasste from "./Smallasste";
import { DotLottiePlayer } from "@dotlottie/react-player";
// import ServersConnected from "../../Lottie/CloudYellow.json";
// import ServersConnected2 from "../../Lottie/ai.json";
// import ServersConnected3 from "../../Lottie/story.json";
import ServersConnected from "../../Lottie/dotlottie/CloudYellow.lottie";
import ServersConnected2 from "../../Lottie/dotlottie/ai.lottie";
import ServersConnected3 from "../../Lottie/dotlottie/SelfHosted.lottie";


import { useRef, useEffect } from "react";
import gridData from "../../Pages/LandingPage/gridData.json";


function FeaturesGrid() {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);
  return (
    <div className='flex justify-center  '>
      <section className='container  flex justify-center relative rounded-3xl'>
        <div className='section-icon overflow-hidden  flex justify-center'>
          <Smallasste />
        </div>
        <div className=' w-full'>
          <div className='flex justify-start     w-full'>
            <BGasset />
          </div>
        </div>

        <div className='div absolute pt-10 h-full w-full'>
          <div className='parent-div h-full w-full flex flex-col md:flex-row'>
            {/* Left Div */}
            <div className='left-div flex mb-8 w-full h-full flex-col'>
              {/* Top Div */}
              <div className='top-div h-full w-full  p-2'>
                {/* Content for Top Div */}
                <div
                  className={`bg-sky-900/30 hover:bg-sky-900/70 duration-500 cursor-pointer  overflow-hidden min-h-[250px] relative p-4 rounded-xl w-full h-full `}>
                  <div className='absolute top-0 pt-4 left-0 pl-4 flex-col flex justify-start w-full z-10 items-left'>
                    <h1 className='text-3xl md:text-4xl max-w-lg font-bold text-white'>
                     {gridData[0]?.title}
                    </h1>
                    <p className=' text-white text-sm font-medium mt-2 md:w-9/12'>
                    {gridData[0].discription}
                    </p>
                  </div>
                  <div
                    className='absolute md:-bottom-4 -bottom-10  -right-20  md:-right-28 flex justify-center items-center'
                    style={{ width: "70%", height: "100%" }}>
                    <DotLottiePlayer
                      src={ServersConnected2}
                      autoplay
                      loop
                      className='w-full h-full opacity-40 scale-125 absolute '
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>  
                </div>
              </div>
              {/* Bottom Div */}
              <div className='bottom-div h-full w-full  p-2 '>
                {/* Content for Bottom Div */}
                <div
                  className={`bg-sky-900/30  hover:bg-sky-900/70 duration-500 cursor-pointer  overflow-hidden min-h-[250px] relative p-4 rounded-xl w-full h-full `}>
                  <div className='absolute top-0 pt-4 left-0 pl-4 flex-col flex justify-start w-full z-10 items-left'>
                    <h1 className='text-3xl md:text-4xl max-w-lg font-bold text-white'>
                      {gridData[1].title}
                    </h1>
                    <p className=' text-white text-sm font-medium mt-2 md:w-9/12'>
                      {gridData[1].discription}
                    </p>
                  </div>
                  <div
                    className='absolute md:-bottom-4 -bottom-10  -right-20  md:-right-28 flex justify-center items-center'
                    style={{ width: "70%", height: "100%" }}>
                    <DotLottiePlayer
                      src={ServersConnected}
                      autoplay
                      loop
                      className='w-full h-full scale-110 absolute '
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Div */}
            <div className='right-div w-full h-full   p-2 flex-grow'>
              {/* Content for Right Div */}
              <div
                id='CntainerKubernetesICONSVG'
                className={`bg-sky-900/30 hover:bg-sky-900/70 duration-500 cursor-pointer   overflow-hidden min-h-[400px]  md:min-h-[516px] relative md:p-4 rounded-xl w-full h-full `}>
                <div className='absolute top-0 pt-4 left-0 pl-4 flex-col flex justify-start w-full z-10  backdrop-blur-md items-left'>
                  <h1 className='text-3xl md:text-4xl max-w-lg  font-bold text-white'>
                  {gridData[2].title}
                  </h1>
                  <p className=' text-white text-sm font-medium mt-2 md:w-9/12'>
                  {gridData[2].discription}

                  </p>
                </div>

                <div className='absolute md:-bottom-4 sm:-bottom-12 h-[60%]  -bottom-4   sm:h-[85%] lg:h-[70%] lg:w-[70%] xl:w-[70%] xl:h-[80%] md:h-[60%] md:w-[80%]  -right-4 flex justify-center items-center'>
                <DotLottiePlayer
                      src={ServersConnected3}
                      autoplay
                      loop
                      className='w-full h-full opacity-40 scale-100 absolute '
                      style={{ width: "100%", height: "100%" }}
                      useRef={lottieRef}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesGrid;
