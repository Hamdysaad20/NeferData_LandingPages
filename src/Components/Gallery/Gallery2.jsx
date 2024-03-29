
import { DotLottiePlayer } from "@dotlottie/react-player";
import lighting from "../../Lottie/dotlottie/lighting.lottie";
import { RiAppsFill } from "react-icons/ri";
import { BsBuildingFillDown } from "react-icons/bs";
import { FaTools } from "react-icons/fa";


export default function Gallery2() {
  const NumbersAnalysis = [
    {
      persentage: "55%",
      text: "of company applications are not used on a regular basis",
      color: "text-white",
      icon:<RiAppsFill/>
    },
    {
      persentage: "70%",

      text: "of digital projects fail to deliver the expected business value",
      color: "text-white",
      icon:<BsBuildingFillDown/>

    },
    {
      persentage: "56%",

      text: "of SaaS providers fail for internal, non-product reasons",
      color: "text-white",
      icon:<FaTools/>

    },
  ];

  return (
    <section className='w-[90%]  max-md:w-full max-w-[1500px] flex justify-center flex-col items-center mx-auto'>

      <div className='bg-[#3092DB] my-12 p-2 shadow-2xl shadow-blue-700 rounded-3xl h-54'>
        <DotLottiePlayer
          aria-label='icon by lordicon  - thanks lordicon! you saved me https://lordicon.com/'
          src={lighting}
          style={{ width: 100, height: 100 }}
          className='scale-[0.8] animate-pulse'          
          loop
          autoplay
          speed={1}
        >
          </DotLottiePlayer>
      </div>

      <div
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
          fontWeight: "bold",
          lineHeight: "120%",
        }}
        className='text-4xl md:text-7xl px-6 text-black max-w-[1000px] pb-12 text-center font-bold relative leading-120%'>
        <div className='flex flex-col capitalize justify-center md:flex-row place-items-center'>
        The right tools can unlock productivity & speed
        </div>
        <p className='md:text-2xl text-base   font-normal pt-4  text-ctenter '>
        With Neferdata you can avoid common mistakes & take advantage of innovation
        </p>
      </div>

      <div className='relative   text-white  overflow-hidden rounded-2xl p-2   w-full  flex justify-center items-center   box-border'>
        <div className='w-full h-full flex flex-wrap justify-center items-center gap-6'>
          {NumbersAnalysis.map((item, index) => (
            <div
              key={index}
              className='max-w-[400px] hover:scale-95 cursor-pointer duration-500 select-none ease-in-out delay-[40ms] relative rounded-3xl  w-full min-w-[200px] h-[300px] bg-sky-600'>
              <div
              className="p-4 h-full"
              >
                <div
                className="text-8xl font-extrabold " 
                >
                {item.persentage}
                </div>
                <p className='text-left text-2xl break-words absolute bottom-6 px-4 '>{item.text}</p>
             
                <div
className="absolute h-12 w-12 grid place-items-center bg-yellow-400/40 animate-pulse rounded-full top-6 right-4"
>
<div className="relative  scale-150">
{item.icon}
</div>
  </div>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
