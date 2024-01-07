import CTAsignIn from "../../Components/CTA/CTAsignIn";
import Hero from "../../Components/MissionComponents/Hero";
import AIstory from "./AIstory";
import Story from "./Story";
import TeamTestimonial from "./TeamTestimonial";

function Mission() {
  return (
    <div className=' '>
      <Hero />
      <div className=' w-full h-12 divide-x-2 divide-blue-400/20 p-12'></div>
      <Story />
      <TeamTestimonial />
      <CTAsignIn 
        title={<span> Grow rapidly <br /> with our Tools &amp; AI Solutions </span>}
        subtitle="
        Neferdata is a suite of AI-powered tools and solutions that help you grow your business and achieve your goals.
        "
        buttonText="Get Started"
        buttonTextSecondary="see pricing"
        bg="bg-[#3092DB]"

      />
      <AIstory />
    </div>
  );
}

export default Mission;
