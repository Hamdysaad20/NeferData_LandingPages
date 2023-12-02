// Import necessary component
import Percent from './Percent';

// Main Gallery1 component
const Gallery1 = () => {

  // Return the main component
  return (
    // Section container
    <section className="w-[90%] max-w-[1200px] flex justify-center flex-col items-center mx-auto py-32 px-16 gap-8 font-roboto box-border">

        {/* Title */}
        <h1 className="text-5xl font-bold text-center">
          Finding the right tool for your business is critical
        </h1>
        
        {/* Percent component display */}
        <div className="flex gap-[220px] justify-center items-center">
          
          {/* Each percent component represents a different statistic */}
          <Percent percent={70} text={'of digital projects fail to deliver the expected business value'} />
          <Percent percent={55} text={'of company apps are NOT used on a regular basis'} />
          <Percent percent={56} text={'of SaaS providers fail for internal, non-product reasons'} />
        </div>
    </section>    
  );
}

// Export the main component
export default Gallery1;