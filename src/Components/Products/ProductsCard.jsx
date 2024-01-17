// import Lottie from "lottie-react";
import '@dotlottie/player-component';

import PropTypes from "prop-types";

import { useEffect, useState } from "react";

function ProductsCard({ title, discription, LOTTIEanimationData }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute w-full h-full">
      <div className="bg-[#3092DB] duration-700 hover:scale-[.97] cursor-pointer p-4 relative rounded-3xl h-full">
        <div className="w-full text-center place-items-center absolute bottom-10 justify-center flex p-12 rounded h-full">
          <lottie-player
            animationData={LOTTIEanimationData}
            className={`w-full h-full scale-75 ${isMobile ? "paused" : ""}`}
            loop={1}
            autoplay={!isMobile}
            
          />
        </div>

        <div className="absolute bottom-5 text-center left-0 right-0 w-full">
          <div className="w-full text-center justify-center flex relative p-2 rounded h-full">
            <div className="md:max-w-lg relative">
              <p className="lg:text-4xl text-xl capitalize text-white font-bold mb-2">
                {title}{" "}
              </p>
              <p className="text-white/80 text-sm md:text-md">{discription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ProductsCard.propTypes = {
  title: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
  LOTTIEanimationData: PropTypes.string.isRequired,
};

export default ProductsCard;
