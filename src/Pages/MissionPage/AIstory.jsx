import { MdEmail, MdProductionQuantityLimits } from "react-icons/md";
import Products from "../../Components/Products/Products";
import Lottie from "lottie-react";
import wave from "../../Lottie/story.json";
import Sparkels from "../../Components/Spark/spark";

function AIstory() {
  const products = [
    {
      title: "AI-Powered Email Assistant Efficiency",
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
      title: "Smart SaaS Product Discovery",
      description:
        "AI powers your search for perfect SaaS tools, helping you make informed business choices.",
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
      title: "AI-Powered SaaS Picks",
      description:
        "Smart SaaS picks with AI. No more Excel hassles. No more manual work. Just get Suggestion, Fill, get Score.",
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
      title: (
        <span className='flex relative w-full justify-between items-center gap-2'>
          <span className='w-[70%]'>SaaS Contract Manager</span>

          <span className='text-white absolute top-0 right-0 px-4 py-[6px]     text-sm bg-gray-700/40 animate-pulse grid place-items-center w-20 rounded-full '>
            soon
            <span className='absolute h-12 w-12 -top-5 right-0'>
              <Sparkels />
            </span>
          </span>
        </span>
      ),

      description:
        " Never miss a deadline. AI tracks & optimizes your SaaS agreements. Easy automation, boosted compliance. ",
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
      title: (
        <span className='flex  relative w-full justify-between items-center gap-2'>
          <span className='w-[70%] '>AI Usage Analytics</span>

          <span className='text-white px-4 absolute top-0 right-0 py-[6px]    text-sm bg-gray-700/40 animate-pulse grid place-items-center w-20 rounded-full '>
            soon
            <span className='absolute h-12 w-12 -top-5 right-0'>
              <Sparkels />
            </span>
          </span>
        </span>
      ),
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
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${"/hero@75.b2469a49.jpg"} )`,
        boxShadow: "0 0 30px 12px white inset",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <header className='    flex flex-col items-center '>
        {/* Hero content wrapper */}
        <div className='w-[90%]  max-md:w-[95%] max-sm:w-full  box-border px-2 lg:px-16 py-28  mt-1 min-h-[482px] flex flex-col justify-center items-center gap-6'>
          {/* Hero Texts */}
          <div className='bg-[#3092DB] aspect-square  w-[116px] h-[116px] p-2  relative shadow-2xl shadow-blue-700 rounded-[2rem] '>
            <Lottie
              animationData={wave}
              autoplay
              loop
              style={{ width: "100%", height: "100%" }}
            />
          </div>{" "}
          <div className='flex flex-col gap-6 text-black text-center box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[1290px]'>
            <h1
              style={{
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &apos;Segoe UI&apos;, Roboto, &apos;Helvetica Neue&apos;, Arial, &apos;Noto Sans&apos;, sans-serif",
                fontWeight: "bold",
                lineHeight: "120%",
              }}
              className='text-3xl capitalize md:text-7xl font-bold leading-120%'>
              Embrace The AI Advantage
            </h1>
            <p className='text-[24px] max-lg:text-[20px] font-medium  box-border  max-lg:px-28 max-md:px-0 leading-[150%] text-gray-700'>
              Neferdata is your{" "}
              <span className='underline decoration-4	decoration-wavy decoration-clone decoration-sky-400 underline-offset-[6px]'>
                {" "}
                trusted partner on Artificial Intelligence{" "}
              </span>{" "}
              adoption journey to help you achieve your business goals. We
              provide AI-powered tools tailored for you to help you succeed.
            </p>{" "}
          </div>
        </div>
      </header>

      <Products products={products} bg='bg-[#3092DB]' />
    </div>
  );
}

export default AIstory;
