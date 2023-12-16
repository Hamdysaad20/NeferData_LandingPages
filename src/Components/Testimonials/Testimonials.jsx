import Slideshow from '../Slider/Slider';
import Sparkels from "../Spark/spark";

const Testimonials = () => {
 
  return (
  <div className='w-full flex justify-center'>
     <div className='w-full bg-[#3092DB] rounded-lg  max-w-[1500px] '>
<div className='w-full justify-center flex pt-12'>
<div className='flex flex-col gap-6  justify-center  text-center   box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[890px]'>
          <div
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
              fontWeight: "bold",
              lineHeight: "120%",
            }}
            className='text-4xl md:text-7xl  text-white font-bold relative leading-120%'>
            <span>
              What our customers are saying about us
            </span>
            <div className="absolute  h-20 w-20   right-5 md:right-20 -bottom-10 md:-bottom-2"><Sparkels/></div>

          </div>
          
        </div>
</div>
    <Slideshow
      
    />
    

   </div>
  </div>
   
    );
};



export default Testimonials;