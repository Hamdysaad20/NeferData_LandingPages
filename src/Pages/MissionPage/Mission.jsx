

import Hero from "../../Components/MissionComponents/Hero";
import Story from "./Story";
import TeamTestimonial from "./TeamTestimonial";
function  Mission (){
  return (
    <div className=' '>
      <Hero/>
      <div className=" w-full h-12 divide-x-2 divide-blue-400/20 p-12"></div>
      <Story/>
    <TeamTestimonial/>
    </div>
  )
}

export default Mission