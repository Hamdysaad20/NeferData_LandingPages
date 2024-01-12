// import components
import Hero from "../../Components/Hero/Hero";
import Gallery2 from "../../Components/Gallery/Gallery2";
import Testimonials from "../../Components/Testimonials/Testimonials";
import PrivacyCertifications from "../../Components/PrivacyCertifications/PrivacyCertifications";
import FAQs from "../../Components/FAQs/FAQs";
import Features from "../../Components/Features/Features";
import CTAProduct from "../../Components/CTA/CTAProduct";
import SVGbg from "../../Components/Hero/SVGbg";

import questions from "../../Data/questions.json";
import tabs from "../../Data/featuresData";

import { MdEmail, MdProductionQuantityLimits } from "react-icons/md";
import SelfHosted from "../../Components/SelfHosted/SelfHosted";
import Scalability from "../../Components/SelfHosted/Scalability/Scalability";


const App = () => {
  return (
    <>
     <div
     className="relative rounded-3xl  overflow-hidden "
     >
     <div className="absolute h-full w-full  z-0">
     <SVGbg/>
     </div>
     <Hero />
     </div>
      <Gallery2 />
      {/* <Features tabs={tabs} /> */}

      <PrivacyCertifications />
      <SelfHosted />
      <Scalability />
      <Testimonials />

      <FAQs
        faqs='FAQs'
        faqsP=' Here are some of the most common questions we get asked. If you have
      other questions, please'
        questions={questions}
      />

      <div className='pb-12 '>
        {" "}
        <CTAProduct />
      </div>
    </>
  );
};

export default App;
