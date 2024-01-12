import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

const Hero = lazy(() => import('../../Components/Hero/Hero'));
const Gallery2 = lazy(() => import('../../Components/Gallery/Gallery2'));
const Testimonials = lazy(() => import('../../Components/Testimonials/Testimonials'));
const PrivacyCertifications = lazy(() => import('../../Components/PrivacyCertifications/PrivacyCertifications'));
const FAQs = lazy(() => import('../../Components/FAQs/FAQs'));
const CTAProduct = lazy(() => import('../../Components/CTA/CTAProduct'));
const SVGbg = lazy(() => import('../../Components/Hero/SVGbg'));
import gridData from "./gridData.json";

import questions from "../../Data/questions.json";
const SelfHosted = lazy(() => import('../../Components/SelfHosted/SelfHosted'));
const AINeferData = lazy(() => import('../../Components/SelfHosted/Scalability/Scalability'));

const App = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };




  return (
    <>
      <div className='relative rounded-3xl  overflow-hidden '>
        <div className='absolute h-full w-full  z-0'>
          <Suspense fallback={<div>Loading...</div>}>
            <SVGbg />
          </Suspense>
        </div>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
        >
          <Hero />
        </motion.div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
      
          <Gallery2 />
       
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
       
          <PrivacyCertifications />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
       
          <SelfHosted />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
       
          <AINeferData 
           title= "Lean How to benefit from AI with Neferdata"
           description="Using Neferdata's AI-powered tools and solutions, can open your eyes more on the opportunity that you can benifit from."
           buttonText= "Get Started with Neferdata"
           buttonTextSecondary="Have a question? Contact us"
           bg= "text-blue-500"
           gridData={gridData}
          /> 
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        
          <Testimonials />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
       
          <FAQs
            faqs='FAQs'
            faqsP=' Here are some of the most common questions we get asked. If you have
      other questions, please'
            questions={questions}
          />
      </Suspense>

      <div className='pb-12 '>
        {" "}
        <Suspense fallback={<div>Loading...</div>}>
         
            <CTAProduct />
        </Suspense>
      </div>
    </>
  );
};

export default App;
