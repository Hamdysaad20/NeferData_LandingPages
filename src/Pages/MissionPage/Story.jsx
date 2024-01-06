import Lottie from "lottie-react";
import wave from "../../Lottie/story.json";

function Story() {
  return (
    <div className=' relative '>
      <header
        style={{
          backgroundImage: `url(${"/hero@75.b2469a49.jpg"} )`,
          boxShadow: "0 0 30px 12px white inset",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className='    flex flex-col items-center '>
        {/* Hero content wrapper */}
        <div className='w-[90%]  max-md:w-[95%] max-sm:w-full  box-border px-2 lg:px-16 py-28 mt-1 min-h-[482px] flex flex-col justify-center items-center gap-6'>
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
              className='text-3xl md:text-7xl font-bold leading-120%'>
              Our Story and Mission
            </h1>
            <p className='text-[24px] max-lg:text-[20px] font-medium  box-border  max-lg:px-28 max-md:px-0 leading-[150%] text-gray-700'>
              SaaS was envisioned to democratize access to technological
              innovation. With SaaS, there&apos;s{" "}
              <span className='underline decoration-4	decoration-wavy decoration-clone decoration-sky-400 underline-offset-4'>
                no requirement
              </span>{" "}
              for a sizable technology department to enhance productivity and
              automate workflows. Well, that&apos;s the underlying principle.
            </p>{" "}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Story;
