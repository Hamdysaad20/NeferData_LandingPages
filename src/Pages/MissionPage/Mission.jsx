

import CTAsignIn from "../../Components/CTA/CTAsignIn";
import Hero from "../../Components/MissionComponents/Hero";
// import FeatureArea from "./Features";
import Story from "./Story";
import TeamTestimonial from "./TeamTestimonial";
function  Mission (){
  return (
    <div className=' '>
      <Hero/>
      <div className=" w-full h-12 divide-x-2 divide-blue-400/20 p-12"></div>
      <Story/>
    <TeamTestimonial/>
    {/* <FeatureArea
    /> */}
    <CTAsignIn/>
    </div>
  )
}

export default Mission