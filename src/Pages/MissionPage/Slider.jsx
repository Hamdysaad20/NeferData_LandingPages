import Dario_Lencina from "../../assets/Images/Founders/Dario.jpeg";
import Kamil_Litman from "../../assets/Images/Founders/Kamil.jpeg";
import NeferData from "../../assets/Images/logo.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const delay = 7000;

function Slider() {
  const [index, setIndex] = useState(0);

  const FoundersNotes = [
    {
      imgSrc: Dario_Lencina,
      name: "Dario Lencina",
      jobTitle: "CTO and Co-Founder @Neferdata",
      companyName: "NeferData",
      message:
        "At NeferData, we're revolutionizing SaaS by democratizing tech. We match companies based on size, stage, and category, bringing  efficiency to the industry.",
      classes: "Democratizing SaaS for Efficiency.",
      companyLogo: NeferData,
      link: "https://www.linkedin.com/in/darioalessandro",
    },
    {
      imgSrc: Kamil_Litman,
      name: "Kamil Litman",
      jobTitle: "CEO and Co-Founder @Neferdata",
      companyName: "May Mobility",
      message:
        "Data and transparency transform markets. Our hands-on experience with AI, big data, and knowledge graphs gives us a unique edge in bringing better SaaS data to the industry.",
      classes: "A Unique Edge in SaaS Evolution",
      companyLogo: NeferData,
      link: "https://www.linkedin.com/in/kamil-litman/",

    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % FoundersNotes.length);
    }, delay);

    return () => clearInterval(interval);
  }, [FoundersNotes.length]);

  const transition = {
    duration: 0.1,
    type: "spring",
    damping: 25,
    stiffness: 120,
  };

  const currentFoundersNotes = FoundersNotes[index];

  return (
    <div className='py-12 pt-0'>
      <AnimatePresence mode='wait'>
        <div className='flex flex-col gap-6 text-white text-center box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[890px]'>
          <div className="flex justify-center ">
          <div className="scale-150 p-2 rounded-2xl">
            <svg
              fill='none'
              height='28'
              viewBox='0 0 28 28'
              width='28'
              xmlns='http://www.w3.org/2000/svg'
              slot='icon'
              key='67_0'>
              <path
                d='M9.20898 13.9987H22.7923M6.20898 6.70703H12.7923M4.20898 21.2904H14.4173'
                stroke='#E2E8FF'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'></path>
            </svg>
          </div>
          </div>
          <h1
            style={{
              fontFamily:
                "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &apos;Segoe UI&apos;, Roboto, &apos;Helvetica Neue&apos;, Arial, &apos;Noto Sans&apos;, sans-serif",
              fontWeight: "bold",
              lineHeight: "120%",
            }}
            className='text-3xl md:text-7xl font-bold leading-120%'>
            {currentFoundersNotes.classes}
          </h1>
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className={`text-${currentFoundersNotes.message.length > 170 ? '2xl' : '2xl'} max-lg:text-[20px] font-medium pb-32 lg:pb-0 box-border  max-lg:px-28 max-md:px-0 leading-[150%] text-gray-100`}>
            {currentFoundersNotes.message}{" "}
          </motion.p>
        </div>
        <div className='absolute bottom-5  gap-4  left-12 text-center text-white flex justify-center'>
        <div className="bg-white text-left w-auto h-auto flex items-center justify-center">
          
         
        </div>
         
          <Link to={FoundersNotes[1].link} target='_blank' rel='noopener noreferrer'
            className={`w-12 ring-black cursor-pointer select-none relative h-12 rounded-full overflow-hidden bg-white ${
              currentFoundersNotes === FoundersNotes[1]
                ? "opacity-100 ring-2  scale-110 animate-pulse duration-1000"
                : "opacity-20"
            }`}>
            <img
              src={Kamil_Litman}
              alt=''
              className='w-full     h-full object-cover object-center'
            />
          </Link>
          <Link to={FoundersNotes[0].link} target='_blank' rel='noopener noreferrer'
            className={`relative  ring-black cursor-pointer select-none w-12 h-12 rounded-full overflow-hidden bg-white ${
              currentFoundersNotes === FoundersNotes[0]
                ? "opacity-100 ring-2  scale-110 animate-pulse duration-1000"
                : "opacity-20"
            }`}>
            <img
              src={Dario_Lencina}
              alt=''
              className='w-full h-full object-cover object-center'
            />
          </Link>
          <div className="ml-2 text-sm place-content-center place-items-start grid text-left">
            <p className="text-white font-bold">{currentFoundersNotes.name}</p>
            <p className="text-gray-300">{currentFoundersNotes.jobTitle}</p>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Slider;
