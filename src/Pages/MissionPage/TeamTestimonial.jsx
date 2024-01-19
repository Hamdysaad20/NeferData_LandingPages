import Slider from "./Slider";
import KamilGift from "../../assets/Images/Founders/kamil.gif";
import kamilIMGstage from "../../assets/Images/Founders/kamilIMGstage.png";
import { useState } from "react";

function TeamTestimonial() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className='w-full flex flex-col justify-center items-center gap-6'>
      <div className='w-full flex justify-center mb-0 p-2'>
        <div className='w-full bg-[#3092DB] min-h-[1100px] md:min-h-[700px] rounded-3xl overflow-hidden max-w-[1500px] '>
          <div className='w-full  relative h-full  flex-col lg:flex-row  px-2 flex overflow-hidden'>
           {/* // option lg:w-1/2  for the a size   */}
            <a
              href='https://www.youtube.com/watch?v=KU6ePY3vwDk'
              target='_blank'
              rel='noopener noreferrer'
              className=' h-full w-full cursor-pointer hover:opacity-80 duration-1000 hover:contrast-150  p-4 px-2  md:col-span-2  relative flex justify-center items-center'>
               
               
                {!isImageLoaded && (
                <img
                  src={kamilIMGstage}
                  alt=''
                  className='w-full  overflow-hidden h-full object-cover rounded-3xl object-center'
                />
              )}
               

              <img
               alt=''
                className={` w-full  overflow-hidden h-full object-cover rounded-3xl object-center  ${!isImageLoaded && "hidden"}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = kamilIMGstage;
                }}
                src={KamilGift}
                onLoad={() => setIsImageLoaded(true)}
               
              />




              <div className='absolute top-0 left-0 w-full h-full rounded-3xl   bg-opacity-50 flex justify-center items-center gap-2'>
                <div                     style={{
                      backgroundImage: `url(${"/hero@75.b2469a49.jpg"} )`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }} className='h-32 w-32 p-6 animate-pulse duration-1000 bg-[#3092DB] cursor-pointer select-none hover:scale-95  rounded-full relative'>
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
              </div>
            </a>

            <div className='w-full h-full    md:col-span-2  relative flex justify-center items-center'>
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamTestimonial;
