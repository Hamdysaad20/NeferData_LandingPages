import Lottie from "lottie-react";
import SelfHostedCloud from "../../Lottie/AICloud.json";
import Products from "../Products/Products";
import { MdEmail, MdProductionQuantityLimits } from "react-icons/md";
import CTAsignIn from "../CTA/CTAsignIn";
import { FaDatabase } from "react-icons/fa6";
import { GrHostMaintenance } from "react-icons/gr";
import { BiSolidCustomize } from "react-icons/bi";

function SelfHosted() {
  const products = [
    {
      title: " Self-Hosted Option for Enhanced Privacy",
      description: (
        <span>
          Explore a heightened level of security and privacy with our
          self-hosted solution. Gain complete control over your data and
          customize your environment for a personalized and secure user
          experience.
        </span>
      ),
      icon: <GrHostMaintenance />,
      data: (
        <div className='bg-white/10 duration-700 hover:scale-[.97] cursor-pointer  p-4 relative rounded-3xl shadow h-full'>
          <div
          className="w-full text-center justify-center flex relative p-4  rounded  h-full"
          >
            <img
              src='../../assets/Images/Keith_Hadi_Avatar.png'
              alt='Neferdata Image'
              className='w-[70%] h-[70%] p-2 rounded-2xl bg-black/10'
            />
          </div>

          <div className='absolute bottom-5 text-center left-0 right-0 w-full '>
           <div
           className="w-full text-center justify-center flex relative p-4  rounded  h-full"
           >
           <div className='max-w-lg '>
              <p className='lg:text-4xl text-2xl capitalize text-white font-bold mb-2'>
                Self-Hosted Option for Enhanced Privacy
              </p>
              <p className='text-white '>
                Explore a heightened level of security and privacy with our
                self-hosted solution. Gain complete control over your data and
                customize your environment for a personalized and secure user
                experience.
              </p>
            </div>
           </div>
          </div>
        </div>
      ),
    },
    {
      title: "Total Control Over Your Data",
      description:
        "Neferdata's dedication to empowering users with complete authority and oversight of their data within the platform, ensuring transparency, privacy, and personalized control over their information.",
      icon: <FaDatabase />,
      data: (
        <div className='bg-white p-4 rounded shadow h-full'>
          <p className='text-lg font-bold mb-2'>Email Assistant</p>
          <p className='text-gray-700'>
            A smart AI-powered email assistant that helps you manage your inbox
            efficiently. This is a more detailed description of the Email
            Assistant product, fully styled with Tailwind CSS based on the
            Neferdata identity.
          </p>
        </div>
      ),
    },
    {
      title: "Customization for a Tailored Environment",
      description:
        "Neferdata's focus on providing personalized and adaptable solutions that cater to each user's specific needs and preferences, including AI-generated recommendations and deployment options for a customized experience.",
      icon: <BiSolidCustomize />,
      data: (
        <div className='bg-white p-4 rounded shadow h-full'>
          <p className='text-lg font-bold mb-2'>Product Name</p>
          <p className='text-gray-700'>
            Brief description of the product. This can be a range of 50 to 150
            letters. This is a more detailed description of the product, fully
            styled with Tailwind CSS based on the Neferdata identity.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className=' bg-[#3092DB] rounded-[40px] lg:rounded-b-3xl '>
      <div className=' pb-0 lg:pb-32'>
        <section className='w-[90%]  max-md:w-full max-w-[1400px] flex justify-center flex-col items-center mx-auto py-32 pb-6 px-16 max-lg:px-8 max-md:px-6 gap-12  box-border'>
          <div className='bg-white p-2 shadow-2xl shadow-blue-700 rounded-3xl h-54'>
            <Lottie
              animationData={SelfHostedCloud}
              style={{ width: 100, height: 100 }}
              className='scale-[3]'
            />
          </div>

          <div
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
              fontWeight: "bold",
              lineHeight: "120%",
            }}
            className='text-4xl md:text-7xl text-white max-w-[1000px] pb-12 text-center font-bold relative leading-120%'>
            <div className='flex flex-col capitalize justify-center md:flex-row place-items-center'>
              More Privacy? Choose self-Hosted
            </div>
            <p className='md:text-2xl text-base  font-normal pt-4 text-center '>
              Experience even greater levels of security and privacy with our
              self-hosted option. With full control over your data and the
              ability to customize your environment.
            </p>
            <CTAsignIn
              buttonText='Start With Self-Hosted'
              buttonTextSecondary='See Other Options'
              bg='bg-white'
            />
          </div>
        </section>
        <div className='relative pb-1'>
          <Products products={products} bg='bg-sky-900/20  backdrop-blur-2xl' />
        </div>
      </div>
    </div>
  );
}

export default SelfHosted;
