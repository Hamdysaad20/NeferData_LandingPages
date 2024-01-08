import Kubernetes from "./Kubernetes";
import BGasset from "./BGasset";
import Smallasste from "./Smallasste";
import Lottie from "lottie-react";
import ServersConnected from "../../Lottie/ServersIntegration.json";

function FeaturesGrid() {
  return (
    <div className='flex justify-center  '>
      <section className='container  flex justify-center relative rounded-3xl'>
        <div className='section-icon overflow-hidden  flex justify-center'>
          <Smallasste />
        </div>
        <div className=' w-full'>
          <div className='flex justify-start     w-full'>
            <BGasset />
          </div>
        </div>

        <div className='div absolute pt-10 h-full w-full'>
          <div className='parent-div h-full w-full flex flex-col md:flex-row'>
            {/* Left Div */}
            <div className='left-div flex mb-8 w-full h-full flex-col'>
              {/* Top Div */}
              <div className='top-div h-full w-full  p-2'>
                {/* Content for Top Div */}
                <div
                  className={`bg-[#3092DB] hover:bg-[#3092DB]/70 duration-500 cursor-pointer  overflow-hidden min-h-[250px] relative p-4 rounded-xl w-full h-full `}>
                  <div className='absolute top-0 pt-4 left-0 pl-4 flex-col flex justify-start w-full z-10 items-left'>
                    <h1 className='text-3xl font-bold text-white'>
                      Automated Setup &amp; Configuration
                    </h1>
                    <p className=' text-white text-sm font-medium mt-2 md:w-9/12'>
                      Automate Neferdata setup using Terraform and Helm, with
                      support via mail and phone.{" "}
                    </p>
                  </div>
                  <div
                    className='absolute md:-bottom-4 -bottom-10  -right-20  md:-right-28 flex justify-center items-center'
                    style={{ width: "70%", height: "100%" }}>
                    <Lottie
                      animationData={ServersConnected}
                      autoplay
                      loop
                      className='w-full h-full scale-110 absolute '
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
              {/* Bottom Div */}
              <div className='bottom-div h-full w-full  p-2 '>
                {/* Content for Bottom Div */}
                <div
                  className={`bg-[#3092DB] hover:bg-[#3092DB]/70 duration-500 cursor-pointer  overflow-hidden min-h-[250px] relative p-4 rounded-xl w-full h-full `}>
                  <div className='absolute top-0 pt-4 left-0 pl-4 flex-col flex justify-start w-full z-10 items-left'>
                    <h1 className='text-3xl font-bold text-white'>
                      Automated Setup &amp; Configuration
                    </h1>
                    <p className=' text-white text-sm font-medium mt-2 md:w-9/12'>
                      Automate Neferdata setup using Terraform and Helm, with
                      support via mail and phone.{" "}
                    </p>
                  </div>
                  <div
                    className='absolute md:-bottom-4 -bottom-10  -right-20  md:-right-28 flex justify-center items-center'
                    style={{ width: "70%", height: "100%" }}>
                    <Lottie
                      animationData={ServersConnected}
                      autoplay
                      loop
                      className='w-full h-full scale-110 absolute '
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Div */}
            <div className='right-div w-full h-full   p-2 flex-grow'>
              {/* Content for Right Div */}
              <div
                id='CntainerKubernetesICONSVG'
                className={`bg-[#3092DB]  hover:opacity-70 duration-500 cursor-pointer   overflow-hidden min-h-[400px]  md:min-h-[516px] relative md:p-4 rounded-xl w-full h-full `}>
                <div className='absolute top-0 pt-4 left-0 pl-4 flex-col flex justify-start w-full z-10  backdrop-blur-md items-left'>
                  <h1 className='text-3xl font-bold text-white'>
                    Set Up Your Kubernetes Cluster
                  </h1>
                  <p className=' text-white text-sm font-medium mt-2 md:w-9/12'>
                    For Neferdata deployment, a scalable Kubernetes cluster is
                    essential, adapting seamlessly to your business growth and
                    changes.
                  </p>
                </div>

                <div className='absolute md:-bottom-4 sm:-bottom-12 h-[60%]  -bottom-4   sm:h-[85%] lg:h-[70%] lg:w-[70%] xl:w-[70%] xl:h-[80%] md:h-[60%] md:w-[80%]  -right-4 flex justify-center items-center'>
                  <Kubernetes />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesGrid;
