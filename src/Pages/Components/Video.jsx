// React Video Component
function Video({src}) {
  
  // Return video component
  return (
      // Outer container with rounded border
      <div className='w-full bg-white rounded-2xl p-[22px] pt-[14px] flex flex-col shadow-custom-light'>
          
          {/* Dots decoration */}
          <div className="flex justify-start items-center gap-2 pb-[14px]">
              <span className='w-4 aspect-square rounded-full bg-red-1'></span> 
              <span className='w-4 aspect-square rounded-full bg-[#F4C245]'></span>
              <span className='w-4 aspect-square rounded-full bg-[#53B477]'></span>
          </div>
          
          {/* Video container */}
          <div className='w-full bg-slate-400 box-border'>
              {/* Video tag */}
              <video src={src} autoPlay loop={true} controls={false}></video>
          </div>
      </div>
  );
}

// Export Video component
export default Video;