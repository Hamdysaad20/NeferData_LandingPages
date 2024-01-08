import PropTypes from "prop-types";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Lottie from "lottie-react";
import arert from "../../Lottie/alert.json";

import Sparkels from "../Spark/spark";

function FAQs({ questions, ...props }) {
  return (
    <div className='flex justify-center pb-6 p-2  text-2xl outline-none focus:outline-none'>
      <div
        aria-label='Frequently asked questions Section'
        className='w-full max-w-[1400px]'>
        <div className='w-full justify-center flex pt-12'>
          <div className='flex flex-col gap-6 text-[#121212] text-center  box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[890px]'>
            <div className='w-full flex justify-center'>
              <div className='bg-[#3092DB] w-[116px] p-2 shadow-2xl shadow-blue-700 rounded-[2rem] h-54'>
                <Lottie animationData={arert} />
              </div>{" "}
            </div>
            <div
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
                fontWeight: "bold",
                lineHeight: "120%",
              }}
              className='text-4xl md:text-7xl  font-bold relative leading-120%'>
              <span>{props.faqs}</span>
              <div className='absolute  h-20 w-20   right-5 md:right-20 -bottom-10 md:-bottom-2'>
                <Sparkels />
              </div>
            </div>
            <p className='text-[24px] pb-12 max-lg:text-[20px] max-mg:text-[18px] box-border px-[76px] max-lg:px-28 max-md:px-0 leading-[150%] text-gray-700'>
              {props.faqsP}
              <a
                className='text-[#3092DB] hover:text-[#3092DB] transition underline underline-offset-2 duration-500 ease-in-out'
                href='mailto:info@neferdata.com '>
                Contact us
              </a>
              .
            </p>
          </div>
        </div>

        <Accordion
          selectionMode='single'
          hideIndicator={true}
          fullWidth={true}
          className='bg-[#F7F7F7]   border border-[#E5E5E5] rounded-3xl pb-6 p-2 pl-6 text-2xl outline-none focus:outline-none '>
          {questions.map((question, idx) => (
            <AccordionItem key={idx} title={question.title} className=''>
              <p className='text-[#121212] pl-4  text-[18px] leading-[150%]'>
                {question.discription}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
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

  props: PropTypes.shape({
    faqs: PropTypes.string.isRequired,
    faqsP: PropTypes.string.isRequired,
  }).isRequired,
};

export default FAQs;
