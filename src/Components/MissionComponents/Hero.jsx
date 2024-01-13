import logo from "../../assets/Images/logo.png";
import WeareNeferdata from "../../assets/Images/Founders/WeareNeferdata.gif";
import WeareNeferdataIMG from "../../assets/Images/Founders/WeareNeferdata.jpeg";

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
        <div className='w-[90%]  h-full  justify-center flex max-md:w-full box-border  max-sm:p-1 max-md:p-10 max-w-[1400px]'>
          <div className='w-full bg-white   border-[1px] border-[#121212] rounded-3xl overflow-hidden relative  pt-[14px]  flex flex-col shadow-xl'>
            {/* Decorative elements */}
            <div className='flex pl-3  justify-start items-center gap-2 pb-[14px] max-md:pb-3'>
              <span className='w-4 max-md:w-3 aspect-square rounded-full bg-red-1'></span>
              <span className='w-4 max-md:w-3 aspect-square rounded-full bg-[#F4C245]'></span>
              <span className='w-4 max-md:w-3 aspect-square rounded-full bg-[#53B477]'></span>
            </div>

            {/* Video player */}
            <div className='w-full md:aspect-video aspect-[0.9] relative h-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden box-border'>
              <img
                src={WeareNeferdata}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = WeareNeferdataIMG;
                }}
                alt=''
                className='w-full  overflow-hidden h-full object-cover rounded-3xl object-center'
              />

              <a
                href='https://www.youtube.com/watch?v=rnkIFg07HYI&t'
                target='_blank'
                rel='noopener noreferrer'
                className='absolute hover:bg-[#3092DB]/20 duration-500 top-0 left-0  w-full h-full rounded-3xl   bg-opacity-50 flex justify-center items-center gap-2'>
                <div
                  style={{
                    backgroundImage: `url(${"/hero@75.b2469a49.jpg"} )`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className='h-32 w-32 p-6 animate-pulse duration-1000 bg-[#3092DB] cursor-pointer select-none hover:scale-95  rounded-full relative'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='#3092DB  '
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fill='#3092DB  '
                      d='M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z'
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
