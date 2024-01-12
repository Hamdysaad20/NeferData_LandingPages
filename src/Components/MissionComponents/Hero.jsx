import React from "react";
import logo from "../../assets/Images/logo.png";

function Hero() {
  return (
    <div className=' relative '>
      <header
        style={{
          backgroundImage: `url(${"/hero@75.b2469a49.jpg"} )`,
          boxShadow: "0 0 30px 12px white inset",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className='    flex flex-col items-center '>
        {/* Hero content wrapper */}
        <div className='w-[90%]  max-md:w-[95%] max-sm:w-full  box-border px-2 lg:px-16 py-28 mt-16 min-h-[482px] flex flex-col justify-center items-center gap-6'>
          {/* Hero Texts */}
          <div className='bg-[#3092DB] aspect-square  w-[116px] h-[116px] p-6   relative shadow-2xl shadow-blue-700 rounded-[2rem] '>
            <img
              src={logo}
              className='h-full w-full aspect-square duration-300 grid place-content-center font-bold object-cover object-center'
              alt='Neferdata'
            />
          </div>{" "}
          <div className='flex flex-col gap-6 text-black text-center box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[890px]'>
            <h1
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
                fontWeight: "bold",
                lineHeight: "120%",
              }}
              className='text-3xl md:text-7xl font-bold leading-120%'>
              Neferdata: AI Tools Customized for Your Success{" "}
            </h1>
            <p className='text-[24px] max-lg:text-[20px] font-medium  box-border  max-lg:px-28 max-md:px-0 leading-[150%] text-gray-700'>
              AI-Powered Tools Tailored for You - Right, Personalized, and
              Specifically Designed for Your Success
            </p>{" "}
          </div>
        </div>
      </header>

      <div className='   w-full flex justify-center'>
        <div className='w-[90%]  h-full  justify-center flex max-md:w-full box-border p-16 max-sm:p-1 max-md:p-10 max-w-[1400px]'>
          <div className='w-full bg-white   border-[1px] border-[#121212] rounded-3xl overflow-hidden relative  pt-[14px]  flex flex-col shadow-xl'>
            {/* Decorative elements */}
            <div className='flex pl-3  justify-start items-center gap-2 pb-[14px] max-md:pb-3'>
              <span className='w-4 max-md:w-3 aspect-square rounded-full bg-red-1'></span>
              <span className='w-4 max-md:w-3 aspect-square rounded-full bg-[#F4C245]'></span>
              <span className='w-4 max-md:w-3 aspect-square rounded-full bg-[#53B477]'></span>
            </div>

            {/* Video player */}
            <div className='w-full aspect-video h-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden box-border'>
              <iframe
                width='100%'
                height='100%'
                className='aspect-video scale-125 '
                src='https://www.youtube.com/embed/rnkIFg07HYI?si=38kdTqyhtqe5GEjm&amp;controls=0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;'></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
