import React from 'react';

const Percent = ({percent, text}) => {
  return (
    <div className='flex flex-col gap-4 max-w-[200px]'>
      <span className='text-red-1 text-8xl font-black py-4'>
        {percent}%
      </span>
      <span className='font-black text-[16px]'>
        {text}
      </span>
    </div>
  );
}

export default Percent;
