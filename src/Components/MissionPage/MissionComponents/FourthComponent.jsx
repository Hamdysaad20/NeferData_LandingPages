import thirdImage from '../assets/images/images (4).jpeg'
const FourthComponent = () => {
    return(
        <>
            <section className="forth xl:w-full lg:w-full md:w-[768px]  sm:w-full  sm:justify-center bg-slate-100 p-[2rem] flex justify-center ">
                <img className=' md:object-cover  sm:object-cover sm:h-[200px] sm:text-center  md:w-[40%] w-auto rounded-[10px] ' src={thirdImage} alt="Description" />
                <div className=' md:w-[40%] w-[50%] sm:text-center text-center p-[2rem] '>
                    <h1 className='sm:text-[20px] md:text-center text-[40px] text-blue-900 '>Our <span className=' text-blue-700'> Mission</span></h1>
                    <p className=' sm:w-[200px] sm:text-[14px] md:text-center sm:text-center text-[20px] text-blue-800 leading-[25px] '>What started as a simple, time-saving scheduling link has grown into an omni-channel scheduling platform for teams and businesses around the world. Our belief is that a scheduling automation platform should provide broad and deep support for various meeting scenarios — especially for teams that schedule meetings with external parties at scale.</p>
                </div>
            </section>
        </>
    );
};
export default FourthComponent;
