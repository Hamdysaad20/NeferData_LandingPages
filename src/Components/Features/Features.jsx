import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <section className='flex flex-col w-[90%] max-w-screen-2xl items-center justify-center m-auto gap-8 my-48'>
      {/* Tab Generator */}
      <div className='flex gap-2 justify-start w-full p-4'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            // If activeTab matches index, then set higher opacity
            className={`flex flex-col justify-start text-center items-center  w-20 gap-3 font-semibold transition-all text-blue-1 ${activeTab === index ? 'opacity-100 hover:opacity-100' : 'opacity-50 hover:opacity-80'}`}
            onClick={() => handleTabSwitch(index)}
          >
            <div className='h-14 aspect-[4/3] flex justify-center items-center rounded-lg border border-blue-1'>
              <tab.Icon />
            </div>
            <div className='leading-[14px]'>{tab.title}</div>
          </button>
        ))}
      </div>
      {/* Active Feature Data Display */}
      <div className='flex flex-col bg-gray-100 w-full rounded-lg p-4 divide-y-2'>
        <div className='flex gap-4 pb-4'>
          {tabs[activeTab].features.map((feature, index) => (
            <button
              key={index}
              className={`flex justify-center text-center items-center p-1 px-2 rounded-md gap-3 font-semibold transition-all text-blue-1 border border-blue-1 ${activeFeature === index ? 'opacity-100 hover:opacity-100 bg-gray-200' : 'opacity-50 hover:opacity-80'}`}
              onClick={() => handleFeatureSwitch(index)}
            >
              <div className='flex justify-center items-center rounded-lg'>
                <feature.Icon />
              </div>
              <div>{feature.title}</div>
            </button>
          ))}
        </div>
        {/* Active Feature Content */}
        <div className='pt-4'>
          {tabs[activeTab].features[activeFeature].content}
        </div>
      </div>
    </section>
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