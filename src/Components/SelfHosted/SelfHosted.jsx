import Lottie from "lottie-react";
import SelfHostedCloud from "../../Lottie/AICloud.json";
import Products from "../Products/Products";
import { MdEmail, MdProductionQuantityLimits } from "react-icons/md";
import CTAsignIn from "../CTA/CTAsignIn";

function SelfHosted() {
  const products = [
    {
      title: "Email Assistant",
      description:
        "A smart AI-powered email assistant that helps you manage your inbox efficiently.",
      icon: <MdEmail />,
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
      title: "Product Name",
      description:
        "Brief description of the product. This can be a range of 50 to 150 letters.",
      icon: <MdProductionQuantityLimits />,
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
    {
      title: "Email Assistant",
      description:
        "A smart AI-powered email assistant that helps you manage your inbox efficiently.",
      icon: <MdEmail />,
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
      title: "Product Name",
      description:
        "Brief description of the product. This can be a range of 50 to 150 letters.",
      icon: <MdProductionQuantityLimits />,
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
    {
      title: "Email Assistant 2",
      description:
        "A smart AI-powered email assistant that helps you manage your inbox efficiently.",
      icon: <MdEmail />,
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
      title: "Product Name 2",
      description:
        "Brief description of the product. This can be a range of 50 to 150 letters.",
      icon: <MdProductionQuantityLimits />,
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
    <div
    
      className=''>
      <div className='bg-[#3092DB] pb-32'>
        <section className='w-[90%] max-md:w-full max-w-[1400px] flex justify-center flex-col items-center mx-auto py-32 pb-6 px-16 max-lg:px-8 max-md:px-6 gap-12  box-border'>
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
            <p className='text-lg pt-4 text-center '>
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
        <Products products={products} bg='bg-sky-900/20 backdrop-blur-2xl' />
      </div>
    </div>
  );
}

export default SelfHosted;
