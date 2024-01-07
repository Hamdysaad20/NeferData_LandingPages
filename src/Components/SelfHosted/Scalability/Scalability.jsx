import Lottie from "lottie-react";
import lighting from "../../../Lottie/lighting.json";
import CTAsignIn from "../../CTA/CTAsignIn";
import FeaturesGrid from '../../../Components/FeaturesGrid/FeaturesGrid';


const Scalability = () => {
  return (
    <div className='py-12'>
      <div className=' rounded-b-3xl pb-32'>
        <section className='w-[90%] max-md:w-full max-w-[1400px] flex justify-center flex-col items-center mx-auto py-32 pb-6 px-16 max-lg:px-8 max-md:px-6 gap-12  box-border'>
          <div className='bg-[#3092DB] p-2 shadow-2xl shadow-blue-700 rounded-3xl h-54'>
            <Lottie
              aria-label='icon by lordicon - thanks lordicon! you saved me https://lordicon.com/'
              animationData={lighting}
              style={{ width: 100, height: 100 }}
              className='scale-[0.8]'
              setSpeed={1}
              loop={true}
              autoplay={true}
            />
          </div>

          <div
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
              fontWeight: "bold",
              lineHeight: "120%",
            }}
            className='text-4xl md:text-7xl text-black max-w-[1000px] text-center font-bold relative leading-120%'>
            <div className='flex flex-col capitalize justify-center md:flex-row place-items-center'>
              Scalable as you grow
            </div>
            <p className='text-lg pt-4 text-center '>
              Scale your business with ease and automate your SaaS utilization
              with Neferdata's AI-powered productivity tools for data-driven
              decisions.
            </p>
            <CTAsignIn
              buttonText='
              Get Started with Neferdata
              '
              buttonTextSecondary='
                Have a question? Contact us
              '
              bg='text-blue-500'
            />
          </div>
        </section>

        <div className='w-full flex justify-center mb-0 '>
          <div className='w-full   min-h-[900px] md:min-h-[700px]  '>
            <div className='w-full justify-center flex '>
              <div className='flex flex-col gap-6 justify-start max-w-[1400px]  h-full relative text-left w-full box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 '>
              <FeaturesGrid />

              </div>
            </div>
            
          </div>
        </div>
      </div>
       
    </div>
  );
};

export default Scalability;
