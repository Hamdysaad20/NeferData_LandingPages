import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../Lottie/qkfCNGxSmo.json";
import Keith_Hadi_Avatar from "../../assets/Images/Keith_Hadi_Avatar.png";
import Mark_Walz_Avatar from "../../assets/Images/Mark_Walz_Avatar.png";
import maymobility from "/public/may-removebg-preview.png";
import spoton from "/public/spoton.png";
const delay = 7000;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const testimonialData = [
    {
      imgSrc: Mark_Walz_Avatar,
      name: "Mark Walz",
      jobTitle: "Chief Technology Officer",
      companyName: "SpotOn",
      message:
        "Neferdata has such a huge impact on my inbox. I don't have to filter through so much noise, and instead get personalized insights about potentially interesting companies. I wish I had access to the tool earlier.",
      classes: "",
      companyLogo: spoton,
    },
    {
      imgSrc: Keith_Hadi_Avatar,
      name: "Keith Hadi",
      jobTitle: "VP of Vehicle Engineering",
      companyName: "May Mobility",
      message:
        "Neferdata has completely transformed my email experience. It efficiently filters out unwanted emails, ensuring my inbox remains clutter-free. I no longer waste time sifting through irrelevant emails, and I can focus on what's truly important.",
      classes: "",
      companyLogo: maymobility,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, delay);

    return () => clearInterval(interval);
  }, [testimonialData.length]);

  const transition = {
    duration: 0.1,
    type: "spring",
    damping: 25,
    stiffness: 120,
  };

  const currentTestimonial = testimonialData[index];

  return (
    <div className=' w-full'>
 
      <div className='slideshowSlider'>
        <div className='slide'>
          <AnimatePresence mode='wait'>
            <motion.article
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              className={`w-full  text-white pb-[52px] mt-[30px]  flex justify-center items-center ${currentTestimonial.classes}`}>
              <div
                className={`w-[80%] max-w-[1200px] flex gap-5 justify-center items-center max-md:flex-col`}>
                <div className='relative hover:scale-95 w-[200px] h-[200px] md:h-[300px] md:w-[350px] duration-500 cursor-pointer select-none'>
                  <img
                    src={currentTestimonial.imgSrc}
                    alt={currentTestimonial.name}
                    className='rounded-full ring-2 border-4 border-[#121212] h-full w-full object-cover'
                  />
                  <span className='rounded-full p-2 bg-[#121212] w-12 aspect-square absolute right-[5%] top-[5%] flex justify-center items-center text-3xl'>
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                  </span>
                </div>
                <div className={`flex flex-col box-border lg:p-10 gap-5`}>
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={transition}>
                    <p className='md:text-2xl  text-lg font-semibold max-w-[900px]'>
                      {currentTestimonial.message}
                    </p>
                  </motion.blockquote>
                  <div className='flex gap-0 flex-col'>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={transition}
                      className='font-semibold text-white'>
                      {currentTestimonial.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={transition}
                      className='text-lg font-normal  text-gray-300 '>
                      {currentTestimonial.jobTitle}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={transition}
                      className='text-lg flex gap-2 font-light opacity-70'>
                      <div className='flex gap-2 text-2xl  place-items-center font-bold hover:bg-gray-900/20 p-2 -ml-2 rounded-full duration-300 cursor-pointer '>
                        <span>
                          <img
                            src={currentTestimonial.companyLogo}
                            alt={currentTestimonial.companyName}
                            className='w-[40px] rounded-full border-black h-[40px] object-contain'
                          />
                        </span>

                        <span> {currentTestimonial.companyName}</span>
                      </div>
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
