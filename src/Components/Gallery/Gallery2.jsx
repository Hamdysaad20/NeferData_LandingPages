import { useEffect, useState } from "react";
import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";
import chartData from "../../Data/chartData.json";
import Chart from "../../Components/Chart/Chart";

export default function Gallery2() {
  const PERCENT_STATS = [
    {
      text: "55% of company apps are NOT used on a regular basis",
      color: "text-white",
    },
    {
      text: "70% of digital projects fail to deliver the expected biz value",
      color: "text-white",
    },
    {
      text: "56% of SaaS providers fail for internal, non-product reasons",
      color: "text-white",
    },
  ];

  const [statisticsIndex, setStatisticsIndex] = useState(0);
  const statistics = PERCENT_STATS[statisticsIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatisticsIndex((prevIndex) => (prevIndex + 1) % PERCENT_STATS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='w-[90%] max-md:w-full max-w-[1400px] flex justify-center flex-col items-center mx-auto py-32 px-16 max-lg:px-8 max-md:px-6 gap-12  box-border'>
      <div className='bg-[#3092DB] p-2 shadow-2xl shadow-blue-700 rounded-3xl h-54'>
        <UseAnimations animation={infinity} size={100} strokeColor='white' />
      </div>
    


            <div
                  style={{
                    fontFamily:
                      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
                    fontWeight: "bold",
                    lineHeight: "120%",
                  }}
                  className='text-4xl md:text-7xl text-black max-w-[1000px] pb-12 text-center font-bold relative leading-120%'>
                  <div className='flex flex-col capitalize justify-center md:flex-row place-items-center'>
                  Finding the right tool for your business is critical
                  </div>
                  <p className='text-lg pt-4 text-center '>
      you don&apos;t know what is the right one to solve your customer problem and which is cost less and more efficient for your business             
                            </p>
                </div>








      <div className='h-[400px] relative sm:h-[700px] bg-[#3092DB] text-black  overflow-hidden rounded-2xl p-2 py-12 pt-32 w-full  flex justify-center items-center gap-12  box-border'>
        <div className='absolute top-0 flex justify-center flex-col text-center  pt-4 left-0  w-full'>
          <div className='flex justify-center items-center gap-4'>
            <p
              className={`${statistics.color} font-bold  text-lg max-w-[90%]  md:text-4xl`}>
              {statistics.text}
            </p>
          </div>
          <p className='text-gray-400 font-bold text-lg md:text-2xl'></p>
        </div>
        <Chart className='' chartData={chartData} />
      </div>
    </section>
  );
}
