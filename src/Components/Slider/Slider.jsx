import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../Lottie/qkfCNGxSmo.json";
import Keith_Hadi_Avatar from '../../assets/Images/Keith_Hadi_Avatar.png';
import Mark_Walz_Avatar from '../../assets/Images/Mark_Walz_Avatar.png';
const delay = 4000;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const testimonialData = [
    {
      imgSrc: Mark_Walz_Avatar,
      name: 'Mark Walz',
      jobTitle: 'Chief Technology Officer',
      companyName: 'SpotOn',
      message: "Neferdata has completely transformed my email experience. It efficiently filters out unwanted emails, ensuring my inbox remains clutter-free. I no longer waste time sifting through irrelevant emails, and I can focus on what's truly important.",
      classes: '',
    },
    {
      imgSrc: Keith_Hadi_Avatar,
      name: 'Keith Hadi',
      jobTitle: 'VP of Vehicle Engineering',
      companyName: 'May Mobility',
      message: "Neferdata has completely transformed my email experience. It efficiently filters out unwanted emails, ensuring my inbox remains clutter-free. I no longer waste time sifting through irrelevant emails, and I can focus on what's truly important.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, delay);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonialData[index];

  return (
    <div className='slideshow w-full'>
      <div className='slideshowDots'>
        {testimonialData.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}></div>
        ))}
      </div>
      <div className='slideshowSlider'>
        <div className='slide'>
          <article
            className={`w-full bg-[#3092DB] text-white py-[112px] my-[112px] flex justify-center items-center ${currentTestimonial.classes}`}>
            <div className={`w-[80%] max-w-[1200px] flex gap-5 justify-center items-center max-md:flex-col`}>
              <div className='relative hover:scale-95 duration-500 cursor-pointer select-none'>
                <img
                  src={currentTestimonial.imgSrc}
                  alt={currentTestimonial.name}
                  className='rounded-full  w-[300px]'
                />
                <span className='rounded-full p-2 bg-[#121212] w-12 aspect-square absolute right-[5%] top-[5%] flex justify-center items-center text-3xl'>
                  <Lottie animationData={groovyWalkAnimation} loop={true} />
                </span>
              </div>
              <div className={`flex flex-col box-border lg:p-10 gap-5`}>
                <blockquote>
                  <p className='text-2xl font-semibold max-w-[900px]'>
                    {currentTestimonial.message}
                  </p>
                </blockquote>
                <div className='flex flex-col'>
                  <h3 className='text-2xl font-semibold text-[#efff55]'>
                    {currentTestimonial.name}
                  </h3>
                  <p className='text-lg font-normal  opacity-70'>
                    {currentTestimonial.jobTitle}
                  </p>
                  <p className='text-lg font-light opacity-70'>
                    {currentTestimonial.companyName}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;

