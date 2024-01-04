import React from "react";
import Slider from "./Slider";

function TeamTestimonial() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-6'>
      <div className='w-full flex justify-center mb-0 p-2'>
        <div className='w-full bg-[#3092DB] min-h-[900px] md:min-h-[700px] rounded-3xl overflow-hidden max-w-[1500px] '>
          <div className='w-full  relative h-full  flex-col lg:flex-row  px-2 flex overflow-hidden'>
            <div className=' h-full  p-12 px-2  md:col-span-2  relative flex justify-center items-center'>
              <img
                src='https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='w-full h-full object-cover rounded-3xl object-center'
              />
            </div>

            <div className='w-full h-full    md:col-span-2  relative flex justify-center items-center'>
    <Slider/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamTestimonial;
