import React from 'react';
import PropTypes from 'prop-types';
import {Accordion, AccordionItem} from "@nextui-org/react";
import Sparkels from "../Spark/spark";


function FAQs({ questions }) {
  return (
    <div>
      <div className='w-full justify-center flex pt-0 pb-12 '>
        <div className='flex flex-col gap-6 text-[#121212] text-center  box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[890px]'>
          <div
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
              fontWeight: "bold",
              lineHeight: "120%",
            }}
            className='text-4xl md:text-7xl  font-bold relative leading-120%'>
            <span>Frequently Asked Questions</span>
            <div className="absolute  h-20 w-20   right-5 md:right-20 -bottom-10 md:-bottom-2"><Sparkels/></div>

          </div>
          <p className='text-[24px] max-lg:text-[20px] max-mg:text-[18px] box-border px-[76px] max-lg:px-28 max-md:px-0 leading-[150%] text-gray-700'>
            Here are some of the most common questions we get asked. If you have
            other questions, please{" "}
            <a
            className='text-[#3092DB] hover:text-[#3092DB] transition underline underline-offset-2 duration-500 ease-in-out'
              href='mailto:info@neferdata.com ' 
              >Contact us</a>
                .
            
          </p>
        </div>
      </div>
      
      <div className="flex gap-4 m-0  pb-12 justify-center" radius="md">
      <div className='w-full max-w-[1000px] px-4  '>
      <Accordion  
       selectionMode="multiple"
        className='bg-[#F7F7F7]  border border-[#E5E5E5] rounded-lg outline-none focus:outline-none '
        
      >
        {questions.map((question, idx) => (
          <AccordionItem key={idx} aria-label={question.title}
          
          
          title={question.title}>
            {question.discription}
          </AccordionItem>
        ))}
      </Accordion>
      </div>
    
    </div>
    </div>
  );
}

FAQs.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      discription: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FAQs;