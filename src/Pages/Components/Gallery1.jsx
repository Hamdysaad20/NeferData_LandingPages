import Percent from './Percent';

const Gallery1 = () => {
  return (
    <section className="w-[90%] max-w-[1200px] flex justify-center flex-col items-center mx-auto py-32 px-16 gap-8 box-border">
      <h1 className="text-5xl font-bold text-center">Finding the right tool for your business is critical</h1>
      <div className="flex gap-[220px] justify-center items-center">
        <Percent percent={70} text={'of digital projects fail to deliver the expected business value'} />
        <Percent percent={55} text={'of company apps are NOT used on a regular basis'} />
        <Percent percent={56} text={'of SaaS providers fail for internal, non-product reasons'} />
      </div>
    </section>    
  );
}

export default Gallery1;
