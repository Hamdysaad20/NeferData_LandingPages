import React from "react";
import Slider from "./Slider";
import Kamil_on_Stage from "../../assets/Images/Founders/KamilStage.png";

function TeamTestimonial() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-6'>
      <div className='w-full flex justify-center mb-0 p-2'>
        <div  className='w-full bg-[#3092DB] min-h-[900px] md:min-h-[700px] rounded-3xl overflow-hidden max-w-[1500px] '>
          <div className='w-full  relative h-full  flex-col lg:flex-row  px-2 flex overflow-hidden'>
            <div                className=' h-full  p-12 px-2  md:col-span-2  relative flex justify-center items-center'>
              <img
               style={{
                backgroundImage: `url(${"/hero@75.b2469a49.jpg"} )`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}  

src={Kamil_on_Stage}
alt=''
                className='w-full overflow-hidden h-full object-cover rounded-3xl object-center'
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
