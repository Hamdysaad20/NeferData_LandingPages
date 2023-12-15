import React from 'react';
import PropTypes from 'prop-types';
import { FaQuoteRight } from "react-icons/fa";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../Lottie/qkfCNGxSmo.json";

const Testimonials = ({ imgSrc, name, jobTitle, companyName, message, classes }) => {
  // Sufficient and descriptive alternative text for image    
  const altText = `${name} from ${companyName}`;

  return (
    <article className={`w-full bg-[#3092DB] text-white py-[112px] my-[112px] flex justify-center items-center ${classes}`}>
      <div className={`w-[80%] max-w-[1200px] flex gap-5 justify-center items-center max-md:flex-col`}>
        <div className="relative hover:scale-95 duration-500 cursor-pointer select-none">
          {/* Proper alternative text for the image */}
          <img src={imgSrc} alt={altText} className='rounded-full  w-[300px]' />
          {/* FaQuoteRight icon is set as aria-hidden for accessibility purposes because it's decorative */}
          <span className="rounded-full p-2 bg-[#121212] w-12 aspect-square absolute right-[5%] top-[5%] flex justify-center items-center text-3xl">
            {/* <FaQuoteRight aria-hidden="true" /> */}
            <Lottie animationData={groovyWalkAnimation} loop={true} />
          </span>
        </div>
        <div className={`flex flex-col box-border lg:p-10 gap-5`}>
          <blockquote>
            <p className="text-2xl font-semibold max-w-[900px]">{message}</p>
          </blockquote>
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-[#efff55]">{name}</h3>
            <p className="text-lg font-normal  opacity-70">{jobTitle}</p>
            <p className="text-lg font-light opacity-70">{companyName}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

Testimonials.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default Testimonials;