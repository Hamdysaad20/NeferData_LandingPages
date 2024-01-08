
import Kubernetes from './Kubernetes';
import BGasset from './BGasset';
import Smallasste from './Smallasste';
function FeaturesGrid() {
 

  return (
    <div className='flex justify-center  '>
      
      <section className='container  flex justify-center relative rounded-3xl'>
        
      <div className='section-icon  flex justify-center'>
      <Smallasste/>

           </div>
        <div className=' w-full'>
         
          <div className='flex justify-start     w-full'>
<BGasset/>
          </div>
        </div>

        <div className='div absolute pt-10 h-full w-full'>
          <div className='parent-div h-full w-full flex flex-col md:flex-row'>
            {/* Left Div */}
            <div className='left-div flex w-full h-full flex-col'>
              {/* Top Div */}
              <div className='top-div h-full w-full  p-2'>
                {/* Content for Top Div */}
                <div className='bg-[#3092DB] p-4 rounded-xl w-full h-full'>
                  <h1 className='text-3xl font-bold text-white'>
                    Flexible Deployment Options
                  </h1>
                  <p className=' text-white text-sm font-medium mt-2 md:w-9/12'>
                    Neferdata provides deployment options: free Global Instance,
                    Managed Service, and Self-Hosted control.{" "}
                  </p>
                </div>
              </div>
              {/* Bottom Div */}
              <div className='bottom-div h-full w-full  p-2 '>
                {/* Content for Bottom Div */}
                <div className='bg-[#3092DB] p-4 rounded-xl w-full h-full'>
                  <h1 className='text-3xl font-bold text-white'>
                    Automated Setup &amp; Configuration
                  </h1>
                  <p className=' text-white text-sm font-medium mt-2 md:w-9/12'>
                    Automate Neferdata setup using Terraform and Helm, with
                    support via mail and phone.{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Div */}
            <div className='right-div w-full h-full  p-2 flex-grow'>
              {/* Content for Right Div */}
              <div      
          
              
              id="CntainerKubernetesICONSVG" className={`bg-[#3092DB] overflow-hidden relative p-4 rounded-xl w-full h-full `}>
                <h1 className='text-3xl font-bold text-white'>
                  Set Up Your Kubernetes Cluster
                </h1>
                <p className=' text-white text-sm font-medium mt-2 md:w-9/12'>
                  For Neferdata deployment, a scalable Kubernetes cluster is
                  essential, adapting seamlessly to your business growth and
                  changes.
                </p>

               <div
                  
               
                  className='absolute bottom-0  right-0 flex justify-center items-center'
                  style={{ width: "70%", height: "70%" }}>
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
