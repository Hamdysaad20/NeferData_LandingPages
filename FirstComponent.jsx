
// First Component Company data
const FirstComponent = ({title,subTitle,pragraph,button}) => (
      // Main container: using template literal for dynamic styling
      <section className="first  w-full p-[2rem] bg-slate-100">
        {/* Text Content container */}
            <h1 className=" text-[30px] lg:w-[800px] sm:w-[600px] m-auto md:text-[60px]  p-[10px]   font-bold text-center  text-blue-700 "> {title}
              
                <span className=" text-blue-900"> {subTitle}</span>  
            </h1>
            <p className=" sm:text-[20px]  md:w-[600px] sm:w-[550px] m-auto text-[16px] text-center text-blue-800 ">{pragraph}</p>
            <button className=" m-auto  text-center flex mt-[20px] p-[10px] rounded-[5px] bg-blue-700 text-white ">{button}</button>
      </section>

    
  );


export default FirstComponent;
