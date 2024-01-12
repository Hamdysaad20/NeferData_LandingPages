import { MdEmail, MdMarkEmailUnread, MdProductionQuantityLimits } from "react-icons/md";
import Products from "../../Components/Products/Products";
import Lottie from "lottie-react";
import wave from "../../Lottie/story.json";
import Sparkels from "../../Components/Spark/spark";
import { SiGoogleanalytics } from "react-icons/si";
import { FaFileContract } from "react-icons/fa6";
import { BsHandIndexThumbFill } from "react-icons/bs";
import { RiCompassDiscoverFill } from "react-icons/ri";
import EmailLottie from "../../Lottie/Email.json";
import AILottie from "../../Lottie/ai.json";
import SaaSLottie from "../../Lottie/SaaS.json";
import Contract from "../../Lottie/Contract.json";
import AIBot from "../../Lottie/AIBot.json";


function AIstory() {
  const products = [
    {
      title: "AI-Powered Email Assistant Efficiency",
      description:
        "A smart AI-powered email assistant that helps you manage your inbox efficiently.",
      icon: <MdMarkEmailUnread />,
      data: (
      <div className='absolute w-full h-full'>
          <div className='bg-[#3092DB] duration-700 hover:scale-[.97] cursor-pointer  p-4 relative rounded-3xl  h-full'>
          <div
            className="w-full text-center place-items-center absolute bottom-10  justify-center flex  p-4  rounded  h-full"
            >
              <Lottie
                animationData={EmailLottie}
                className='w-full h-full'
              />
            </div>

          <div className='absolute bottom-5 text-center left-0 right-0 w-full '>
           <div
           className="w-full text-center justify-center flex relative p-4  rounded  h-full"
           >
           <div className='max-w-lg '>
              <p className='lg:text-4xl text-2xl capitalize text-white font-bold mb-2'>
              Supercharge Your Email Efficiency
              
              </p>
              <p className='text-white/80 text-sm md:text-md'>
              Experience the power of our AI-Powered Email Assistant and streamline
                        your inbox management like never before.
              </p>
            </div>
           </div>
          </div>
        </div>
      </div>
      ),
    },
    {
      title: "Products Discovery",
      description:
        "AI powers your search for perfect SaaS tools, helping you make informed business choices.",
      icon: <RiCompassDiscoverFill />,
      data: (
        <div className='absolute w-full h-full'>
            <div className='bg-[#3092DB] duration-700 hover:scale-[.97] cursor-pointer  p-4 relative rounded-3xl  h-full'>
            <div
            className="w-full text-center place-items-center absolute bottom-10  justify-center flex  p-4  rounded  h-full"
            >
              <Lottie
                animationData={AILottie}
                className='w-full h-full'
              />
            </div>
  
            <div className='absolute bottom-5 text-center left-0 right-0 w-full '>
             <div
             className="w-full text-center justify-center flex relative p-4  rounded  h-full"
             >
             <div className='md:max-w-lg relative '>
                <p className='lg:text-4xl text-xl capitalize text-white font-bold mb-2'>
                SaaS Discovery made Easy with AI
                
                </p>
                <p className='text-white/80 text-sm md:text-md'>
                Our AI-powered discovery tools help you find the best SaaS products for your business.

                </p>
              </div>
             </div>
            </div>
          </div>
        </div>
        ),
    },
    {
      title: "SaaS Picks",
      description:
        "Smart SaaS picks with AI. No more Excel hassles. No more manual work. Just get Suggestion, Fill, get Score.",
      icon: <BsHandIndexThumbFill />,
      data: (
        <div className='absolute w-full h-full'>
            <div className='bg-[#3092DB] duration-700 hover:scale-[.97] cursor-pointer  p-4 relative rounded-3xl  h-full'>
            <div
            className="w-full text-center place-items-center absolute bottom-10  justify-center flex  p-4  rounded  h-full"
            >
              <Lottie
                animationData={SaaSLottie}
                className='w-full scale-[0.6] h-full'
              />
            </div>
  
  
            <div className='absolute bottom-5 text-center left-0 right-0 w-full '>
             <div
             className="w-full text-center justify-center flex relative p-4  rounded  h-full"
             >
             <div className='md:max-w-lg relative '>
                <p className='lg:text-4xl text-xl capitalize text-white font-bold mb-2'>
                  Discovery SaaS Products & Boost Your Business
                
                </p>
                <p className='text-white/80 text-sm md:text-md'>
                Our AI-powered discovery tools help you find the best SaaS products for your business.                
                </p>
              </div>
             </div>
            </div>
          </div>
        </div>
        ),
    },
    {
      title: (
        <span className='flex relative w-full justify-between items-center gap-2'>
          <span className='w-[70%]'>Contract Manager</span>

          <span className='text-white absolute top-0 right-0 px-4 py-[6px]     text-sm bg-gray-700/40 animate-pulse grid place-items-center w-20 rounded-full '>
            soon
            <span className='absolute h-12 w-12 -top-5 right-0'>
              <Sparkels />
            </span>
          </span>
        </span>
      ),

      description:
        " Never miss a deadline. AI tracks & optimizes your SaaS agreements. Easy automation, boosted compliance. ",
      icon: <FaFileContract />,
      data: (
        <div className='absolute w-full h-full'>
            <div className='bg-[#3092DB] duration-700 hover:scale-[.97] cursor-pointer  p-4 relative rounded-3xl  h-full'>
            <div
            className="w-full text-center place-items-center absolute bottom-10  justify-center flex  p-4  rounded  h-full"
            >
              <Lottie
                animationData={Contract}
                className='w-full scale-[0.6] h-full'
              />
            </div>
  
            <div className='absolute bottom-5 text-center left-0 right-0 w-full '>
             <div
             className="w-full text-center justify-center flex relative p-4  rounded  h-full"
             >
             <div className='md:max-w-lg relative '>
                <p className='lg:text-4xl text-xl capitalize text-white font-bold mb-2'>
                  No More Missed Deadlines with AI
                
                </p>
                <p className='text-white/80 text-sm md:text-md'>
                Never miss a deadline. AI tracks & optimizes your SaaS agreements. Easy automation, boosted compliance.
                </p>
              </div>
             </div>
            </div>
          </div>
        </div>
        ),
    },
    {
      title: (
        <span className='flex  relative w-full justify-between items-center gap-2'>
          <span className='w-[70%] '>AI Usage Analytics</span>

          <span className='text-white px-4 absolute top-0 right-0 py-[6px]    text-sm bg-gray-700/40 animate-pulse grid place-items-center w-20 rounded-full '>
            soon
            <span className='absolute h-12 w-12 -top-5 right-0'>
              <Sparkels />
            </span>
          </span>
        </span>
      ),
      description:
        "A smart AI-powered email assistant that helps you manage your inbox efficiently.",
      icon: <SiGoogleanalytics />,
      data: (
        <div className='absolute w-full h-full'>
            <div className='bg-[#3092DB] duration-700 hover:scale-[.97] cursor-pointer  p-4 relative rounded-3xl  h-full'>
            <div
            className="w-full text-center place-items-center absolute bottom-10  justify-center flex  p-12  rounded  h-full"
            >
              <Lottie
                animationData={AIBot}
                className='w-full h-full scale-75'
              />
            </div>
  
            <div className='absolute bottom-5 text-center left-0 right-0 w-full '>
             <div
             className="w-full text-center justify-center flex relative p-2  rounded  h-full"
             >
             <div className='md:max-w-lg relative '>
                <p className='lg:text-4xl text-xl capitalize text-white font-bold mb-2'>
                AI Usage Analytics                </p>
                <p className='text-white/80 text-sm md:text-md'>
                A smart AI-powered Analytics that helps you manage your SaaS efficiently.
                </p>
              </div>
             </div>
            </div>
          </div>
        </div>
        ),
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${"/hero@75.b2469a49.jpg"} )`,
        boxShadow: "0 0 30px 12px white inset",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <header className='    flex flex-col items-center '>
        {/* Hero content wrapper */}
        <div className='w-[90%]  max-md:w-[95%] max-sm:w-full  box-border px-2 lg:px-16 py-28  mt-1 min-h-[482px] flex flex-col justify-center items-center gap-6'>
          {/* Hero Texts */}
          <div className='bg-[#3092DB] aspect-square  w-[116px] h-[116px] p-2  relative shadow-2xl shadow-blue-700 rounded-[2rem] '>
            <Lottie
              animationData={wave}
              autoplay
              loop
              style={{ width: "100%", height: "100%" }}
            />
          </div>{" "}
          <div className='flex flex-col gap-6 text-black text-center box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[1290px]'>
            <h1
              style={{
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &apos;Segoe UI&apos;, Roboto, &apos;Helvetica Neue&apos;, Arial, &apos;Noto Sans&apos;, sans-serif",
                fontWeight: "bold",
                lineHeight: "120%",
              }}
              className='text-3xl capitalize md:text-7xl font-bold leading-120%'>
              Embrace The AI Advantage
            </h1>
            <p className='text-[24px] max-lg:text-[20px] font-medium  box-border  max-lg:px-28 max-md:px-0 leading-[150%] text-gray-700'>
              Neferdata is your{" "}
              <span className='underline decoration-4	decoration-wavy decoration-clone decoration-sky-400 underline-offset-[6px]'>
                {" "}
                trusted partner on Artificial Intelligence{" "}
              </span>{" "}
              adoption journey to help you achieve your business goals. We
              provide AI-powered tools tailored for you to help you succeed.
            </p>{" "}
          </div>
        </div>
      </header>

      <Products products={products} bg='bg-[#3092DB]' />
    </div>
  );
}

export default AIstory;
