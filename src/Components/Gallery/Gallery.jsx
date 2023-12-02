// Import necessary dependencies
import React from 'react';
import Percent from '../Percent/Percent';

// Constant data for percent component,
// represents different statistics.
const PERCENT_STATS = [
  { percent: 70, text: 'of digital projects fail to deliver the expected business value' },
  { percent: 55, text: 'of company apps are NOT used on a regular basis' },
  { percent: 56, text: 'of SaaS providers fail for internal, non-product reasons' }
];

// Main Gallery component
const Gallery = () => (
  // Section container
  <section className="w-[90%] max-w-[1200px] flex justify-center flex-col items-center mx-auto py-32 px-16 gap-8 font-roboto box-border">
    {/* Title */}
    <h2 className="text-5xl font-bold text-center">
      Finding the right tool for your business is critical
    </h2>

    {/* Percent component display */}
    <div className="flex gap-[220px] justify-center items-center">
      {/* Loop PERCENT_STATS data to render Percent components */}
      {PERCENT_STATS.map((stat, index) => (
        <Percent key={index} percent={stat.percent} text={stat.text} />
      ))}
    </div>
  </section>
);

// Export the main component
export default Gallery;