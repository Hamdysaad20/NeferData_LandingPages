import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const Hero = lazy(() => import("../../Components/Hero/Hero"));
const Gallery2 = lazy(() => import("../../Components/Gallery/Gallery2"));
const Testimonials = lazy(() =>
  import("../../Components/Testimonials/Testimonials")
);
const PrivacyCertifications = lazy(() =>
  import("../../Components/PrivacyCertifications/PrivacyCertifications")
);
const FAQs = lazy(() => import("../../Components/FAQs/FAQs"));
const CTAProduct = lazy(() => import("../../Components/CTA/CTAProduct"));
const SVGbg = lazy(() => import("../../Components/Hero/SVGbg"));
import gridData from "./gridData.json";

import questions from "../../Data/questions.json";
const SelfHosted = lazy(() => import("../../Components/SelfHosted/SelfHosted"));
const AINeferData = lazy(() =>
  import("../../Components/SelfHosted/Scalability/Scalability")
);

const App = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='relative rounded-b-3xl overflow-hidden '>
          <div className='absolute h-full  w-full bg-[#3092DB] z-0'>
            <Suspense fallback={<div>Loading...</div>}>
              <SVGbg />
            </Suspense>
          </div>
          <motion.div initial='hidden' animate='visible' variants={variants}>
            <Hero />
          </motion.div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className='py-12 bg-white rounded-b-3xl'>
            <Gallery2 />
          </div>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <div className='pb-12 bg-[#3092DB] rounded-3xl'>
            <AINeferData
              title='Learn How to benefit from AI with Neferdata'
              description='With Neferdata you can experience the transformative power of AI & get inspired to identify other ways it can help your company.'
              buttonText='Get Started with Neferdata'
              buttonTextSecondary='Have a question? Contact us'
              bg='text-blue-500'
              gridData={gridData}
            />
          </div>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <div className='py-12 bg-white'>
            <PrivacyCertifications />
          </div>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <div className='py-12 bg-white'>
            <SelfHosted />
          </div>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <div className='py-12 mt-12 rounded-3xl bg-[#3092DB]'>
            <Testimonials />
          </div>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <div className='py-12 bg-white'>
            <FAQs
              faqs='FAQs'
              faqsP=' Here are some of the most common questions we get asked. If you have
      other questions, please'
              questions={questions}
              
            />
          </div>
        </Suspense>

        <div className='pb-12 bg-white '>
          {" "}
          <Suspense fallback={<div>Loading...</div>}>
            <div className='py-12'>
              <CTAProduct />
            </div>
          </Suspense>
        </div>
      </Suspense>
    </>
  );
};

export default App;
