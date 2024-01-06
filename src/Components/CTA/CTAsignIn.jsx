import React from 'react'
import { Link } from 'react-router-dom'

function CTAsignIn() {
  return (
<div >
  <div className="mx-auto max-w-4xl rounded-3xl  p-20 text-center">
    <h2 className="text-5xl font-bold leading-tight text-black">
      Grow rapidly 
        <br />
        with our Tools &amp; AI Solutions
    </h2>
    <p className="mt-5 text-xl leading-8 text-black">
        We help you grow your business by providing you with the tools you need to
        grow your business.
    </p>
    <div className="mt-6 flex items-center justify-center gap-4">
      <button className="flex items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-lg font-medium text-white hover:opacity-75 duration-700">
        <span> 
            Get Started for Free
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
              fill="white"
            />
          </svg>
        </span>
      </button>
      <Link to="/pricing"
      
      className="flex items-center justify-center gap-2 rounded-full border border-white/50 px-5 py-3 text-lg font-medium text-black">
        <span> See Pricing</span>
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
  )
}

export default CTAsignIn