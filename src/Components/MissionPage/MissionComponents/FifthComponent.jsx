import Group from '../assets/images/Group_28572.webp'
const FifthComponent = () => {
    return(
        <>
        <section className="fifth xl:w-full lg:w-full md:w-[768px]  sm:w-[600px] bg-slate-100 flex p-[2rem] justify-center items-center">
        <div className=' w-[50%] text-center p-[2rem] '>
            <h1 className=' text-[40px] text-blue-900 mb-[40px] '>Calendly in the <span className=' text-blue-700'>news</span> </h1>
            <p className=' text-[27px] text-blue-800 mb-[30px] '>Get the latest Calendly news. Plus, a media kit and tools for journalists.</p>
            <a className=' text-white bg-blue-700 p-[15px] rounded-[10px] ' href="">Explore the newsroom</a>
        </div>
        <img className=' rounded-[10px] w-[40%] ' src={Group} alt="Description" />
    </section>
        </>
    );
};
export default FifthComponent;
