

import{ MdOutlineDone} from 'react-icons/md'



function Pricing() {
  

  return (
    <div className="h-screen w-screen bg-sky-400 box-border ">
        <div className="h-full  w-full p-2 flex flex-wrap  lg:flex-nowrap justify-center items-center gap-3 lg:gap-9  ">
            
            <div className="bg-white w-80 lg:w-1/4 h-5/6 rounded-3xl shadow-2xl px-5 pt-8 pb-8 relative overflow-hidden">
                <svg className="  translate-x-44 translate-y-[-120px]  rotate-[300deg]" xmlns="http://www.w3.org/2000/svg" width={299} height={317} fill="none"><path fill="url(#a)" d="m299 317-198.88-34.078C42.42 273.076 0 220.333 0 158.45 0 96.56 42.42 43.824 100.113 33.978L299 0v317Z" /><defs><radialGradient id="a" cx={0} cy={0} r={1} gradientTransform="matrix(318.993 0 0 337.284 -17.549 158.468)" gradientUnits="userSpaceOnUse"><stop stopColor="#E2FF66" />
                    <stop offset=".494" stopColor="#5ADAFF" stopOpacity=".61" />
                    <stop offset={1} stopColor="#5ADAFF" stopOpacity={0} />
                    </radialGradient></defs>
                </svg>
                <div className="absolute z-10 top-10 bottom-0">
                    <h2 className="text-lg tracking-wider  text-slate-600 mb-2 text-center">Standerd</h2>
                        <span className="text-6xl mb-2 tracking-wider text-bold inline-block ">Free</span>
                        <br/><span className=" inline-block mb-4">always</span>    
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-sm text-bold">AI-powered email filter</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-sm text-bold">Snack-sized company insights
                        </p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-sm text-bold">SaaS product discovery</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className="tracking-wide text-gray-700 text-sm text-bold">Vendor assessment checklist</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-sm text-bold">Customizable 'My Company' page</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-sm text-bold">No adds or paid placement</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className="text-lg tracking-wide text-gray-700 text-sm text-bold ">Hustle-free hosting in global instance</p>
                    </div>    <br/>
                    <button className="bg-sky-500 text-xl  absolute bottom-3 right-5  left-5 py-2 w-10/12 text-white rounded-l-full border-2 border-solid border-sky-500 hover:bg-white hover:text-black duration-500">Create Account</button>
                </div>
            </div>



            <div className="bg-sky-100 w-80 lg:w-1/4 h-5/6 lg:h-5/6 rounded-3xl shadow-2xl px-5 pt-8 pb-8 relative overflow-hidden">
                <svg className="  translate-x-44 translate-y-[-120px]  rotate-[300deg]" xmlns="http://www.w3.org/2000/svg" width={299} height={317} fill="none"><path fill="url(#a)" d="m299 317-198.88-34.078C42.42 273.076 0 220.333 0 158.45 0 96.56 42.42 43.824 100.113 33.978L299 0v317Z" style={{mixBlendMode: 'screen'}} /><defs><radialGradient id="a" cx={0} cy={0} r={1} gradientTransform="matrix(318.993 0 0 337.284 -17.549 158.468)" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#009BCB" /><stop offset={1} stopColor="#009BCB" stopOpacity={0} /></radialGradient>
                    </defs>
                </svg>
                <div className="absolute z-10 top-10 bottom-0">       
                <h2 className="text-lg tracking-wider  text-slate-600 mb-3">Self-hosted</h2>
                    <span className="text-6xl mb-4 tracking-wider text-bold inline-block">Free</span> <br/> <span className="mb-4 inline-block">always</span>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-sm text-bold">All features of Standard plus:</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-sm text-bold">Full data protection of your environment</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-sm text-bold">Compatible with on-prem, private & public cloud</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-sm text-bold">Step-by-step documentation & instructions</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className="tracking-wide text-gray-700 text-sm text-bold">Integration with your existing OpenAI account</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-sm text-bold">Audit log & reports of extracted insights</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-sm text-bold">Access to upgrades & new features at your timeline</p>
                    </div>
                    
                    <br/>
                    <button className="bg-sky-500 text-xl absolute bottom-3 right-5  left-5  py-2 w-10/12 text-white rounded-l-full border-2 border-solid border-sky-500 hover:bg-white hover:text-black duration-500">Try Now</button>
                </div>
            </div>


            
            <div className="bg-sky-200 w-80 lg:w-1/4 h-5/6 lg:h-5/6 rounded-3xl shadow-2xl px-5 pt-8 pb-8 relative overflow-hidden">
                <svg className="  translate-x-44 translate-y-[-120px]  rotate-[300deg]" xmlns="http://www.w3.org/2000/svg" width={299} height={317} fill="none"><path fill="url(#a)" d="m299 317-198.88-34.078C42.42 273.076 0 220.333 0 158.45 0 96.56 42.42 43.824 100.113 33.978L299 0v317Z" style={{mixBlendMode: 'screen'}} /><defs><radialGradient id="a"
                    cx={0} cy={0} r={1} gradientTransform="matrix(318.993 0 0 337.284 -17.549 158.468)" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0025FF" /><stop offset={1} stopColor="#003DFF" stopOpacity={0} />
                    </radialGradient></defs>
                </svg>
                <div className="absolute z-10 top-10 bottom-0">
                <h2 className="text-lg tracking-wider  text-slate-600 mb-3">Enterprise</h2>
                <span className="text-6xl mb-4 tracking-wider text-bold inline-block">$ 5.99</span> <br/><span className="mb-4 inline-block">per user per month</span>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-sm text-bold">All features of Standard plus:</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-sm text-bold">Full data protection & privacy</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-sm text-bold">Dedicated & isolated instance in our cloud</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-sm text-bold">All-in solution with no overhead</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className="tracking-wide text-gray-700 text-sm text-bold">Access to 24/7 product support</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-sm text-bold">Audit log & reports of extracted insights</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-sm text-bold">Immediate access to latest features</p>
                </div>
                
                <br/>
                <button className="bg-sky-500 text-xl absolute bottom-3 right-5  left-5 py-2 w-10/12 text-white rounded-l-full border-2 border-solid border-sky-500 hover:bg-white hover:text-black duration-500">Purchase Now</button>
                </div>
            </div>
       
        </div>
    </div>
  )
}

export default Pricing
