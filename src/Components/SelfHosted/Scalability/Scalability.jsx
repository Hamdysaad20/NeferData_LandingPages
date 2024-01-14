import CTAsignIn from "../../CTA/CTAsignIn";
import FeaturesGrid from "../../../Components/FeaturesGrid/FeaturesGrid";
import gridData from "../../../Pages/LandingPage/gridData.json";
import infinity from "react-useanimations/lib/infinity";
import UseAnimations from "react-useanimations";

const Scalability = ({
  title,
  description,
  buttonText,
  buttonTextSecondary,
  bg,
}) => {
  return (
    <div className='md:py-12 pt-32   pb-80 '>
      <div className=' rounded-b-3xl pb-32'>
        <section className='w-[90%] max-md:w-full max-w-[1400px] flex justify-center flex-col items-center mx-auto  pb-6 px-16 max-lg:px-8 max-md:px-6 gap-12  box-border'>
          <div className='bg-white p-2 shadow-2xl shadow-blue-700 rounded-3xl h-54'>
            <UseAnimations
              animation={infinity}
              size={100}
              strokeColor='#3092DB'
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
              {title}
            </div>
            <p className='md:text-2xl text-base font-normal  pt-4 text-center '>
              {description}
            </p>
            <CTAsignIn
              buttonText={buttonText}
              buttonTextSecondary={buttonTextSecondary}
              bg={bg}
              mainLink='/pricing'
              secondaryLink='/pricing'
            />
          </div>
        </section>

        <div className='w-full flex justify-center mb-0 '>
          <div className='w-full    '>
            <FeaturesGrid gridData={gridData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scalability;
