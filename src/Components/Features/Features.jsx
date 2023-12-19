import React, { useState } from "react";
import PropTypes from "prop-types";
import loading2 from "react-useanimations/lib/loading2";
import UseAnimations from "react-useanimations";
import PrimaryButton from "../Button/PrimaryButton";
// Destructure from props for a cleaner syntax
const Features = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  // Event handlers to switch tabs and features.
  const handleTabSwitch = (index) => {
    setActiveTab(index);
    setActiveFeature(0);
  };

  const handleFeatureSwitch = (index) => setActiveFeature(index);

  // Implementing the JSX
  return (
    <div
      style={{
        backgroundImage: `url(${"/docs@30.8b9a76a2.avif"})`,
        boxShadow: "0 0 30px 12px white inset",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className='w-full overflow-hidden pt-32  '>
      <div className='w-full flex justify-center'>
        <div className='bg-[#3092DB] w-54 p-2 shadow-2xl shadow-blue-700 rounded-[2rem] h-54'>
          <UseAnimations
            animation={loading2}
            speed={0.5}
            size={100}
            strokeColor='white'
          />
        </div>{" "}
      </div>
      <div className='w-full justify-center pb-12 pt-6 flex'>
        <div
          style={{
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            fontWeight: "bold",
            lineHeight: "120%",
          }}
          className='text-4xl md:text-7xl text-[#121212] max-w-[1000px] text-center font-bold relative leading-120%'>
          <div className='flex flex-col md:flex-row place-items-center'>
            <span>
              Neferdata:{" "}
              <span className='underline decoration-sky-500'>AI tools </span>for{" "}
              <span className='underline decoration-sky-500'>
                business growth
              </span>{" "}
              .
            </span>
          </div>
        </div>
      </div>
      <section className='flex flex-col max-w-[1500px] w-[90%]  items-center justify-center m-auto gap-2 mb-48'>
        {/* Tab Generator */}
        <div className='flex gap-2 pb-6  rounded-3xl  overflow-hidden overflow-x-auto scroll-ml-6 md:justify-center  w-full px-4'>
          {tabs.map((tab, index) => (
            <button
              key={index}
              // If activeTab matches index, then set higher opacity
              className={`flex select-none flex-col  hover:opacity-75 duration-500 active:scale-95 justify-start text-center items-center  rounded-3xl p-2  gap-3 font-semibold transition-all text-blue-1 ${
                activeTab === index
                  ? "opacity-100 shadow-sky-500/40 shadow-inner   hover:opacity-100"
                  : "opacity-50 hover:opacity-80"
              }`}
              onClick={() => handleTabSwitch(index)}>
              <div className='h-12   w-full  flex justify-center gap-2 px-4 items-center  rounded-2xl border-2 border-black text-black'>
                <tab.Icon />
                <div className='leading-[16px] font-medium text-[0.875rem] text-black'>
                  {tab.title}
                </div>
              </div>
            </button>
          ))}
        </div>
        {/* Active Feature Data Display */}
        <div className='flex flex-col h-[500px] lg:h-[700px] bg-[#3092DB] backdrop-blur-2xl w-full rounded-2xl p-4 divide-white/20 divide-y-2'>
          <div className='flex overflow-hidden overflow-x-auto relative gap-4 pb-4'>
            {tabs[activeTab].features.map((feature, index) => (
              <button
                key={index}
                className={`grid place-items-center  select-none flex-col  hover:opacity-75 duration-500 active:scale-95 justify-start text-center items-center  rounded-2xl p-2 h-12   font-bold transition-all text-black ${
                  activeFeature === index
                    ? "opacity-100 hover:opacity-100 bg-gray-200 "
                    : "opacity-50 border-white/20 hover:opacity-80"
                }`}
                onClick={() => handleFeatureSwitch(index)}
                style={{ flex: "none" }}>
                <div className='flex gap-2 px-2 justify-center items-center rounded-2xl'>
                  <feature.Icon />{" "}
                  <div className='grid col-span-5 place-items-center text-sm break-keep box-content '>
                    {feature.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
          {/* Active Feature Content */}
          <div className='pt-4 overflow-hidden   h-full w-full'>
            {/* {tabs[activeTab].features[activeFeature].content} */}
            <div className='w-full grid   lg:grid-cols-2  h-full '>
              <div className='divone  '>
                <div className='mx-auto max-w-md text-center pt-12 lg:py-32  '>
                  <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                    Boost your productivity
                    <br />
                    Let AI work for you .
                  </h2>
                  <p className='mt-6 text-lg leading-8 text-gray-300'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet numquam facilis eum atque deserunt mollitia
                    asperiores eaque libero
                  </p>
                  <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-center'>
                    <PrimaryButton onClick={"/signup"} title='Sign Up' />

                    <a
                      href='#'
                      className='text-sm font-semibold leading-6 text-white'>
                      Learn more <span aria-hidden='true'>→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className='divtwo hidden lg:block'>
              <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Features.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      Icon: PropTypes.func.isRequired,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          Icon: PropTypes.func.isRequired,
          content: PropTypes.node.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Features;
