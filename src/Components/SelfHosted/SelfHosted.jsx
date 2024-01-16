import { useRef, useEffect } from 'react';
import Lottie from "lottie-react";
import SelfHostedCloud from "../../Lottie/whitecloud.json";
import Products from "../Products/Products";
import CTAsignIn from "../CTA/CTAsignIn";
import { FaDatabase } from "react-icons/fa6";
import { GrHostMaintenance } from "react-icons/gr";
import { BiSolidCustomize } from "react-icons/bi";
import ProductsCardData from "../../Data/SelfHostedCardsData.json";


import story from "../../Lottie/story.json";
import ServersConnected from "../../Lottie/ServersIntegration.json";
import ServersConnected2 from "../../Lottie/CloudYellow.json";

function SelfHosted() {
  const products = [
    {
      title: "Contribute to SaaS Market Transparency",
      description: (
        <span>
          Neferdata provides insights about SaaS marketplace. The insights are anonymized & can’t be traced back to individual businesses. Your data is never used to target ads or sold to vendors.
        </span>
      ),
      icon: <GrHostMaintenance />,
    },
    {
      title: "Total Control Of Your Data",
      description:
        "Neferdata's dedicated to empower users with complete authority and oversight of their data within the platform, ensuring transparency, privacy, and personalized control over their information.",
      icon: <FaDatabase />,
    },
    {
      title: "Enhanced Privacy with Dedicated Hosting",
      description:
        "Companies with increased security requirements can take advantage of privacy of a dedicated Neferdata instance in the 'Managed Service' or 'Self-Hosted' options.",
      icon: <BiSolidCustomize />,
    },
  ];
  const LOTTIEanimationData = [ServersConnected, ServersConnected2, story];
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);
  return (
    <div className='  rounded-[40px] lg:rounded-b-3xl '>
      <div className=' pb-0 lg:pb-32'>
        <section className='w-[90%]  max-md:w-full max-w-[1400px] flex justify-center flex-col items-center mx-auto py-32 pb-6 px-16 max-lg:px-8 max-md:px-6 gap-12  box-border'>
          <div className='bg-[#3092DB]  p-2 shadow-2xl shadow-blue-700 rounded-3xl h-54'>
            <Lottie
              animationData={SelfHostedCloud}
              style={{ width: 100, height: 100 }}
              className='scale-[3]'
              useRef={lottieRef}
              
            />
          </div>

          <div
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
              fontWeight: "bold",
              lineHeight: "120%",
            }}
            className='text-4xl md:text-7xl text-black max-w-[1000px] pb-12 text-center font-bold relative leading-120%'>
            <div className='flex flex-col capitalize justify-center md:flex-row place-items-center'>
            Commitment that goes beyond Certification
            </div>
            <p className='md:text-2xl text-base  font-normal pt-4 text-center '>
            Neferdata comes pre-packaged with world-class security features & commitment to privacy. For companies seeking more control we offer additional options.
            </p>
            <CTAsignIn
              buttonText='Get a Secure Instance'
              buttonTextSecondary='See Other Options'
              bg='bg-black'
              textColor='text-black'
              mainLink='/pricing'
              secondaryLink='/pricing'
              
            />
          </div>
        </section>
        <div className='relative pb-1'>
          <Products
            products={products}
            LOTTIEanimationData={LOTTIEanimationData}
            ProductsCardData={ProductsCardData}

            bg='bg-[#023459b3] border-4 border-gray-50/60 shadow-2xl'
          />
        </div>
      </div>
    </div>
  );
}

export default SelfHosted;
