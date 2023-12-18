import thirdImage from '../assets/images/images (4).jpeg'
// Fourth Component aboutData
const FourthComponent = ({hed,det}) => (  
    // Main container: using template literal for dynamic styling
    <>   
    
            <section className="forth w-full  grid md:gap-20 bg-slate-100 p-[2rem] py-20 md:flex justify-center items-center">
            
               {/* Text Content container */}
                <img className='  object-cover h-96 sm:h-[200px] w-11/12  md:w-[40%]  rounded-[10px] ' src={thirdImage} alt="Description" />
                <div className=' md:w-[40%]   text-center p-[2rem] '>
                    <h1 className=' md:text-center text-[40px] text-blue-900 '> {hed} <span className=' text-blue-700'> Mission</span></h1>
                    <p className='  text-[14px] md:text-center sm:text-center  text-blue-800 leading-[25px] '> {det} </p>
                </div>
            </section>
            </>
            )

export default FourthComponent;
