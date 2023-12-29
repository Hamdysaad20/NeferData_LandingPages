// Import necessary dependencies
import React from 'react';
import Percent2 from './Percent2';
import chartData from '../../Data/chartData.json';
import Chart from '../../Components/Chart/Chart';

import UseAnimations from "react-useanimations";
import infinity from 'react-useanimations/lib/infinity'


// Main Gallery component
const Gallery2 = () => (
  // Section container
  <section  className="w-[90%] max-md:w-full max-w-[1200px] flex justify-center flex-col items-center mx-auto py-32 px-16 max-lg:px-8 max-md:px-6 gap-12  box-border">
    {/* Title */}
<div className='bg-[#3092DB] w-54 p-2 shadow-2xl shadow-blue-700 rounded-3xl h-54'>
< UseAnimations animation={infinity} size={100} strokeColor='white' />

</div>
    <h2 className="font-black text-8xl  md:text-7xl max-md:text-sm text-center">
      Finding the right tool for your business is critical
    </h2>

    {/* Percent component display */}
    <div className="
     h-[400px] sm:h-[600px] bg-[#3092DB] text-black rounded-2xl p-2 py-12 w-full max-w-[1200px] flex justify-center items-center gap-12  box-border
    ">
      {/* Loop PERCENT_STATS data to render Percent components */}
      <Chart chartData={chartData} />
    </div>
  </section>
);

// Export the main component
export default Gallery2;