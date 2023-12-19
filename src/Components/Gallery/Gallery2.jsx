// Import necessary dependencies
import React from 'react';
import Percent2 from './Percent2';
import UseAnimations from "react-useanimations";
import infinity from 'react-useanimations/lib/infinity'
// Constant data for percent component,
// represents different statistics.
const PERCENT_STATS = [
  { percent: 70, text: 'of digital projects fail to deliver the expected business value' },
  { percent: 55, text: 'of company apps are NOT used on a regular basis' },
  { percent: 56, text: 'of SaaS providers fail for internal, non-product reasons' }
];

// Main Gallery component
const Gallery2 = () => (
  // Section container
  <section  className="w-[90%] max-md:w-full max-w-[1200px] flex justify-center flex-col items-center mx-auto py-32 px-16 max-lg:px-8 max-md:px-6 gap-12  box-border">
    {/* Title */}
<div className='bg-black w-54 p-2 shadow-2xl shadow-blue-700 rounded-3xl h-54'>
< UseAnimations animation={infinity} size={100} strokeColor='blue' />

</div>
    <h2 className="font-black text-8xl  md:text-7xl max-md:text-sm text-center">
      Finding the right tool for your business is critical
    </h2>

    {/* Percent component display */}
    <div className="flex gap-x-[220px] gap-y-10 justify-center items-center flex-wrap">
      {/* Loop PERCENT_STATS data to render Percent components */}
      {PERCENT_STATS.map((stat, index) => (
        <Percent2 key={index} percent={stat.percent} text={stat.text} />
      ))}
    </div>
  </section>
);

// Export the main component
export default Gallery2;