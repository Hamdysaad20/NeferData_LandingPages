import React from 'react';
import { Link } from 'react-router-dom';

function CTAsignIn({ title, subtitle, buttonText, buttonTextSecondary, bg }) {
  return (
    <div>
      <div className={`mx-auto max-w-4xl rounded-3xl text-center `}>
        <h2 className="text-5xl font-bold leading-tight text-black">
          {title}
        </h2>
        <p className="mt-5 text-xl leading-8 text-black">
          {subtitle}
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            to="/selfhosted"
            className={`flex items-center justify-center gap-2 rounded-full px-5 py-3 text-lg font-medium hover:opacity-75 duration-700 ${bg === 'bg-white' ? 'text-black bg-white ' : 'text-white bg-black  '}`}
          >
            <span>
              {buttonText}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.00156 13.4016L4.60156 12.0016L8.60156 8.00156L4.60156 4.00156L6.00156 2.60156L11.4016 8.00156L6.00156 13.4016Z"
                  fill={bg === 'bg-white' ? 'black' : 'white'}
                />
              </svg>
            </span>
          </Link>
          <Link
            to="/pricing"
            className={`flex items-center justify-center gap-2 rounded-full px-5 py-3 text-lg font-medium mt-0 md:mt-0`}
          >
            <span>{buttonTextSecondary}</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.00156 13.4016L4.60156 12.0016L8.60156 8.00156L4.60156 4.00156L6.00156 2.60156L11.4016 8.00156L6.00156 13.4016Z"
                  fill="white"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CTAsignIn;
