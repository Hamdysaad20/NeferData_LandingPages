import PropTypes from "prop-types";
import { MdOutlineDone } from "react-icons/md";
import Button from "../Button/PrimaryButton";
import Sparkels from "../Spark/spark";

const PricingCard = ({
  className,
  textColor,
  title,
  price,
  renew,
  features,
  buttonText,
}) => {
  return (
    <div
      className={`bg-blue-100 w-[70%] sm:w-80 border-2  hover:scale-105 duration-500 cursor-pointer xl:w-96 rounded-3xl  px-5 pt-8 pb-8 ${
        title === "Managed Service"
          ? "border-yellow-500 border-4 shadow-lg duration-700 hover:shadow-yellow-400 "
          : ""
      } relative overflow-hidden ${className}`}>
      <svg
        className='absolute -top-20 -right-36 rotate-[300deg]'
        xmlns='http://www.w3.org/2000/svg'
        width={299}
        height={317}
        fill='none'>
        <path
          fill='url(#a)'
          d='m299 317-198.88-34.078C42.42 273.076 0 220.333 0 158.45 0 96.56 42.42 43.824 100.113 33.978L299 0v317Z'
        />
        <defs>
          <radialGradient
            id='a'
            cx={0}
            cy={0}
            r={1}
            gradientTransform='matrix(318.993 0 0 337.284 -17.549 158.468)'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#E2FF66' />
            <stop offset='.494' stopColor='#5ADAFF' stopOpacity='.61' />
            <stop offset={1} stopColor='#5ADAFF' stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
      {title === "Managed Service" && (
        <div className='absolute top-0 p-3 rounded-tr-3xl rounded-bl-3xl bg-black/20  right-0'>
          Let us Do the Work
          <span className='absolute top-0 right-0 w-10 h-10'>
            <Sparkels />
          </span>
        </div>
      )}
      <div className='z-20 relative'>
        <h2
          className={`${textColor} text-lg tracking-wider z-20  text-slate-600 mb-2`}>
          {title}
        </h2>
        <span className='text-6xl mb-2 tracking-wider text-bold inline-block '>
          {price}
        </span>{" "}
        {price !== "Free" && <span>/month</span>}
        <br />
        <span className='inline-block mb-4'>{renew}</span>
        <ul className='text-left grid gap-2'>
          {features.map((feature, index) => (
            <span className='flex relative  flex-row' key={index}>
              <MdOutlineDone
                className={`${textColor}  text-sky-500 p-0 absolute left-0 top-2 h-4 w-4`}
              />

              {feature.includes("administration") ? (
                <span className='px-3 pl-6  w-full'>
                  {feature.split("administration")[0]}
                  <br />
                  <p
                    className={`${textColor}  tracking-wide w-full  leading-6 text-gray-700  font-semibold`}>
                    administration{feature.split("administration")[1]}
                  </p>
                </span>
              ) : (
                <p
                  className={`${textColor}  tracking-wide leading-6 pl-6 text-gray-700 px-3 font-semibold`}>
                  {feature}
                </p>
              )}
            </span>
          ))}
        </ul>
        <div className='w-full grid place-items-center p-2'>
          <Button
            onClick={() =>
              (window.location.href =
                buttonText === "Create Account"
                  ? "https://neferdata.com/login"
                  : "https://neferdata.com/waitlist")
            }
            classes={`w-full max-w-[280px] py-4 ${
              buttonText === "See Documentation" ||
              buttonText === "Create Account"
                ? "!bg-transparent border-2 !text-black border-[#121212]/60 hover:!bg-sky-200 duration-500"
                : "hover:bg-black/70 duration-700 !bg-black"
            }`}
            title={buttonText}
          />
        </div>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  renew: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

PricingCard.defaultProps = {
  className: "",
};

export default PricingCard;
