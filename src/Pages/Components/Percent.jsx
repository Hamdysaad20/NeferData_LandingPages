// Import required dependencies

// Percent Component
const Percent = ({percent, text}) => {

  // Render the component
  return (
    // Container for each Percent component    
    <div className='flex flex-col gap-4 max-w-[200px]'>

      {/* Display the percent value  */}
      <span className='text-red-1 text-8xl font-black py-4'>
        {percent}%
      </span>

      {/* Display the accompanying text */}
      <span className='font-black text-[16px]'>
        {text}
      </span>
    </div>
  );
}

// Export the Percent component
export default Percent;