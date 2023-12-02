// Import the necessary components
import Button1 from './Button1';
import Video from './Video';

// ProductCard1 Component
const ProductCard1 = ({ title, subTitle, list, videoSrc, onClick, isReverse }) => {

  // Render the component
  return (
    
    // Main container
    <div className={`font-roboto flex justify-center items-center w-[90%] py-[112px] max-w-[1400px] m-auto gap-20 ${isReverse && 'flex-row-reverse'}`}>
      
      {/* Left-side content container */}
      <div className="flex flex-col gap-4 items-start w-1/2">
        
        {/* Subtitle */}
        <h3 className='text-blue-2 text-[16px]'>
          {subTitle}
        </h3>

        {/* Main Title */}
        <h1 className='font-semibold text-5xl'>
          {title}
        </h1>

        {/* List items */}
        <ul className='pt-4 pb-2 flex flex-col gap-4 pl-5 box-border'>
          {list.map((ele, idx) => (
            <li key={idx} className='text-[16px] list-disc'>
              {ele}
            </li>
          ))}
        </ul>

        {/* Button */}
        <Button1 title='get started' onClick={onClick}/>
      </div>
      
      {/* Video container */}
      <div className='w-1/2'>
        <Video src={videoSrc}/>
      </div>
    </div>
  );
}

// Export the ProductCard Component
export default ProductCard1;