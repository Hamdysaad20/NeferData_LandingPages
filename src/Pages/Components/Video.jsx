function Video({src}) {
  return (
    <div className='w-full bg-white rounded-2xl p-[22px] pt-[14px] flex flex-col shadow-[0px,4px,16px,2px,rgba(0,0,0,0.25)]'>
      <div className="flex justify-start items-center gap-2 pb-[14px]">
        <span className='w-4 aspect-square rounded-full bg-red-1'></span>
        <span className='w-4 aspect-square rounded-full bg-[#F4C245]'></span>
        <span className='w-4 aspect-square rounded-full bg-[#53B477]'></span>
      </div>
      <div className='w-full bg-slate-400 box-border'>
        <video src={src} autoPlay loop={true} controls={false}></video>
      </div>
    </div>
  );
}

export default Video;