import Slideshow from "../Slider/Slider";
import Sparkels from "../Spark/spark";
import Lottie from "lottie-react";
import Voice from "../../Lottie/Voice.json";
import CTAsignIn from "../CTA/CTAsignIn";

const Testimonials = () => {
  return (
    <div className="py-12">






<div className='bg-[#3092DB] rounded-b-3xl pb-32'>
        <section className='w-[90%] max-md:w-full max-w-[1400px] flex justify-center flex-col items-center mx-auto py-32 pb-6 px-16 max-lg:px-8 max-md:px-6 gap-12  box-border'>
          <div className='bg-white p-2 shadow-2xl shadow-blue-700 rounded-3xl h-54'>
            <Lottie
              animationData={Voice}
              style={{ width: 100, height: 100 }}
              className='scale-[0.5]'
            />
          </div>

          <div
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
              fontWeight: "bold",
              lineHeight: "120%",
            }}
            className='text-4xl md:text-7xl text-white max-w-[1000px] text-center font-bold relative leading-120%'>
            <div className='flex flex-col capitalize justify-center md:flex-row place-items-center'>
            <span>What our customers are saying about us</span>
            </div>
            <p className='text-lg pt-4 text-center '>
              Experience even greater levels of security and privacy with our
              self-hosted option. With full control over your data and the
              ability to customize your environment.
            </p>
            <CTAsignIn
              buttonText='
              Get Started with Neferdata
              '
              buttonTextSecondary='
                Have a question? Contact us
              '
              bg='bg-white'

            />
          </div>
        </section>







        <div className='w-full flex justify-center mb-0 '>
        <div className='w-full   h-[900px] md:h-[700px]  '>
          <div className='w-full justify-center flex pt-12'>
            <div className='flex flex-col gap-6 justify-center text-center box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[890px]'>
              <div
                style={{
                  fontFamily:
                    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
                  fontWeight: "bold",
                  lineHeight: "120%",
                }}
                className='text-4xl md:text-7xl text-white font-bold relative leading-120%'>
                <div className='flex flex-col md:flex-row place-items-center'>
                </div>
                <div className='absolute   h-20 w-20 right-5 md:right-20 -top-10'>
                  <Sparkels />
                </div>
              </div>
            </div>
          </div>
         <div 
         className="w-full py-12  max-w-[1400px] m-auto rounded-3xl h-auto"
         >
       <div
       className="p-2  "
       >
<div
className="bg-black/20 pt-4 rounded-3xl "
>
<Slideshow />

  </div>       </div>
         </div>
        </div>
      </div>





      </div>






    </div>
  );
};

export default Testimonials;
