import React, { useState } from 'react';
import PropTypes from 'prop-types';
import loading2 from 'react-useanimations/lib/loading2'
import UseAnimations from "react-useanimations";
// Destructure from props for a cleaner syntax
const Features = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  // Event handlers to switch tabs and features.
  const handleTabSwitch = index => {
    setActiveTab(index);
    setActiveFeature(0);
  };

  const handleFeatureSwitch = index => setActiveFeature(index);

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
        <div className='bg-black w-54 p-2 shadow-2xl shadow-blue-700 rounded-3xl h-54'>
          <UseAnimations
            animation={loading2}
            speed={0.5}
            size={100}
            strokeColor='blue'
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
              Neferdata is a suite of{" "}
              <span className='underline decoration-sky-500'>
                AI-powered tools
              </span>{" "}
              to help grow your business
            </span>
          </div>
        </div>
      </div>
      <section className='flex flex-col max-w-[1500px] w-[90%]  items-center justify-center m-auto gap-2 mb-48'>
        {/* Tab Generator */}
        <div className='flex gap-2  rounded-3xl  overflow-hidden overflow-x-auto scroll-ml-6 md:justify-center  w-full px-4'>
          {tabs.map((tab, index) => (
            <button
              key={index}
              // If activeTab matches index, then set higher opacity
              className={`flex select-none flex-col  hover:opacity-75 duration-500 active:scale-95 justify-start text-center items-center  rounded-3xl p-4  w-48  gap-3 font-semibold transition-all text-blue-1 ${
                activeTab === index
                  ? "opacity-100 hover:opacity-100"
                  : "opacity-50 hover:opacity-80"
              }`}
              onClick={() => handleTabSwitch(index)}>
              <div className='h-14 aspect-[4/3] flex justify-center items-center rounded-2xl border-2 border-black text-black'>
                <tab.Icon />
              </div>
              <div className='leading-[14px] text-black'>{tab.title}</div>
            </button>
          ))}
        </div>
        {/* Active Feature Data Display */}
        <div className='flex flex-col h-[700px] bg-[#3092DB] backdrop-blur-2xl w-full rounded-2xl p-4 divide-y-2'>
          <div className='flex overflow-hidden overflow-x-auto relative gap-4 pb-4'>
            {tabs[activeTab].features.map((feature, index) => (
              <button
                key={index}
                className={`grid ease-linear border-2 active:scale-95 duration-500 select-none place-content-center grid-cols-6 box-content relative h-12 w-54 text-center items-center rounded-2xl p-1 gap-3 font-semibold transition-all text-black ${
                  activeFeature === index
                    ? "opacity-100 hover:opacity-100 bg-gray-200 border border-black"
                    : "opacity-50 border-white/20 hover:opacity-80"
                }`}
                onClick={() => handleFeatureSwitch(index)}
                style={{ flex: "none" }}>
                <div className='flex justify-center items-center rounded-lg'>
                  <feature.Icon />
                </div>
                <div
                  className='grid col-span-5 place-items-center text-sm break-keep box-content '
                  style={{ width: "calc(100% - 15px)" }}>
                  {feature.title}
                </div>
              </button>
            ))}
          </div>
          {/* Active Feature Content */}
          <div className='pt-4   h-96'>
            {tabs[activeTab].features[activeFeature].content}
          </div>
        </div>
      </section>
    </div>
  );
};


Features.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      Icon: PropTypes.func.isRequired,
      features: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        Icon: PropTypes.func.isRequired,
        content: PropTypes.node.isRequired,
      })).isRequired,
    })).isRequired
};

export default Features;