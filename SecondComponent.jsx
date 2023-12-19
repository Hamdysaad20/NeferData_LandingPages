const SecondComponent = ({numUsers,m,users,numCompanies,k,Companies,numCountries,plus,Countries,numPartner,Partners}) => (
           // Main container: using template
    <section className="secned  w-full sm:p-[2rem] p-[5px] grid md:flex justify-center bg-white ">
            {/* Text Content container */}    
                <div className="usres md:p-[8px] sm:p-[5px] p-[15px] border-solid md:border-r-2 border-indigo-600   ">
                    <h1 className="   p-[8px] font-bold text-[30px] sm:text-[40px] text-center text-blue-700 "> {numUsers} <span className=" text-blue-950"> {m} </span> </h1>
                    <p className=" p-[15px]  text-[15px] text-blue-900  text-center "> {users} </p>
                </div>
                <div className="usres  md:p-[8px] sm:p-[5px] p-[15px] border-solid md:border-r-2 border-indigo-600 ">
                    <h1  className="  p-[8px] font-bold  text-[30px] sm:text-[40px] text-center text-blue-700  "> {numCompanies} <span className=" text-blue-950"> {k} </span></h1>
                    <p className=" p-[15px]  text-[15px] text-blue-900  text-center  "> {Companies} </p>
                </div>
                <div className="usres  md:p-[8px] sm:p-[5px] p-[15px] border-solid md:border-r-2 border-indigo-600 ">
                    <h1  className="  p-[8px] font-bold  text-[30px] sm:text-[40px] text-center text-blue-700  "> {numCountries} <span className=" text-blue-950"> {plus} </span></h1>
                    <p className="p-[15px]  text-[15px] text-blue-900  text-center  "> {Countries} </p>
                </div>
                <div className="usress  md:p-[8px] sm:p-[5px] p-[15px]  ">
                    <h1  className=" p-[8px] font-bold  text-[30px] sm:text-[40px] text-center text-blue-700  "> {numPartner} <span className=" text-blue-950"> {plus} </span></h1>
                    <p className="p-[15px]  text-[15px] text-blue-900  text-center  "> {Partners} </p>
                </div>
            </section>
            );
    
    
export default SecondComponent;
