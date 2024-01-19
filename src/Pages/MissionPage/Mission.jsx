import React, { lazy, Suspense } from 'react';
import Hero from '../../Components/MissionComponents/Hero';

const AIstory = lazy(() => import('./AIstory'));
const Story = lazy(() => import('./Story'));
const TeamTestimonial = lazy(() => import('./TeamTestimonial'));

function Mission() {
  return (
    <div className=''>
      <Hero />
      <div className='w-full h-12 divide-x-2 divide-blue-400/20 p-12'></div>
      <Suspense fallback={<div></div>}>
        <Story />      </Suspense>

        <Suspense fallback={<div></div>}> 
        <TeamTestimonial />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <AIstory />
      </Suspense>

    </div>
  );
}

export default Mission;
