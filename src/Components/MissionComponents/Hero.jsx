import React from 'react'

function Hero() {
  return (
    <div className=' relative '>
    <header 
   style={{ 
     backgroundImage: `url(${'/hero@75.b2469a49.jpg'} )`,
     boxShadow: "0 0 30px 12px white inset",
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
    
   }}
   
   className="    flex flex-col items-center ">
     
     {/* Hero content wrapper */}
     <div className="w-[90%]  max-md:w-[95%] max-sm:w-full  box-border px-2 lg:px-16 py-28 mt-16 min-h-[482px] flex flex-col justify-center items-center gap-6">
       {/* Hero Texts */}
       <div className='bg-[#3092DB] aspect-square  w-[116px] h-[116px] p-6   relative shadow-2xl shadow-blue-700 rounded-[2rem] '>
          <img src='src/assets/Images/logo.png'
           className='h-full w-full aspect-square duration-300 grid place-content-center font-bold object-cover object-center'
 alt ='Neferdata'
          
          />
         </div>{" "}
 
       <div className="flex flex-col gap-6 text-black text-center box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[890px]">
         <h1
         style={{fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', fontWeight: 'bold', lineHeight: '120%'}}
         className="text-3xl md:text-7xl font-bold leading-120%">
 Neferdata: AI Tools Customized for Your Success        </h1>
         <p className="text-[24px] max-lg:text-[20px] font-medium  box-border  max-lg:px-28 max-md:px-0 leading-[150%] text-gray-700">
         AI-Powered Tools Tailored for You - Right, Personalized, and Specifically Designed for Your Success
 
 </p>      </div>
      
     </div>
    
   
   </header>
  </div>
  )
}

export default Hero