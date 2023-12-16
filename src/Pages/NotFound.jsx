import Lottie from "lottie-react";
import groovyWalkAnimation from "../Lottie/notfound.json";



function NotFound() {
    return (
       <div className="w-full justify-center flex">
         <div className="flex flex-col items-center justify-center h-screen lg:w-2/3 xl:w-1/2">
            <div className='h-20 w-20 lg:h-40 lg:w-40'>
                <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
            <h1 className="text-4xl text-center font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-center">The requested page could not be found.</p>
        </div>
       </div>
    );  
}

export default NotFound;

