import React from 'react';
import logoImg from '../../assets/Images/image 7.png';
import PrimaryButton from '../Button/PrimaryButton';
import NavbarLink from './NavbarLink';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Define navigation links and their configurations as constants out of Navbar component for better performance
const LINKS = [
  { main: { link: '/', title: 'Home' }, hasDropDown: false },
  { main: { link: '/pricing', title: 'Pricing' }, hasDropDown: false },
  { main: { link: '/about', title: 'about' }, hasDropDown: false },
  {
    main: { link: '/', title: 'Link Four' },
    subLinks: [
      { link: '/', title: 'Link Six' },
      { link: '/', title: 'Link Seven' },
      { link: '/', title: 'Link Eight' },
      { link: '/', title: 'Link Nine' },
      { link: '/', title: 'Link Ten' }
    ],
    hasDropDown: true
  }
];

// Functional component for Navbar
const Navbar = () => {
  const [isSideBarActive, setSideBarActivate] = useState(false);

  const toggleSideBarActivate = () => { setSideBarActivate(!isSideBarActive) };

  return (
    // Main navigation wrapper with role value for better semantics and accessibility
    <nav
    style={{fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',  fontSize: '3.5rem', lineHeight: '120%'}}

      className="fixed top-0 w-screen bg-white h-[63px] z-50  flex justify-center"
      role="navigation"
    >
      <div className=' max-w-[1500px] w-screen h-full font-roboto flex justify-between items-center px-[1.5rem] max-sm:px-2'>

      
        <Link className='flex items-center gap-[1.5rem]' 
        style={{fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', fontWeight: 'bold', fontSize: '3.5rem', lineHeight: '120%'}}
        
        >
          <img src={logoImg} alt="Company Logo" className='aspect-square h-[40px] w-[40px] max-md:w-9 max-sm:w-7' />
          <span className='font-[600] 
        text-[#121212] max-md:text-[18px] max-sm:text-[16px] tracking-wide text-[24px]'>Neferdata</span>
        </Link>

        {/* Navigation Links and Action Button  */}
        <div className='hidden lg:flex gap-8'>
          {/* Navigation Links */}
          <div className='flex items-center gap-8 text-lg capitalize'>
            {LINKS.map((link, idx) => (
              <NavbarLink main={link.main} links={link.subLinks} key={idx} hasDropDown={link.hasDropDown} />
            ))}
          </div>

          {/* Call To Action (CTA) Button */}
          <PrimaryButton onClick={null} title='Sign Up' />
        </div>

        <button className={`max-lg:flex hidden flex-col w-6 justify-between h-5 max-md:h-4 max-md:w-5 overflow-hidden`} onClick={toggleSideBarActivate}>
          <span className={`h-[2.5px] w-full bg-black rounded-sm transition-all ${isSideBarActive ? 'rotate-45 translate-y-[8.5px] max-md:translate-y-[6.5px]' : 'rotate-0 translate-y-0'}`}></span>
          <span className={`h-[2.5px] w-full bg-black rounded-sm transition-all ${isSideBarActive ? 'translate-x-[105%]' : 'translate-x-0'}`}></span>
          <span className={`h-[2.5px] w-full bg-black rounded-sm transition-all ${isSideBarActive ? '-rotate-45 -translate-y-[8.5px] max-md:-translate-y-[6.5px]' : 'rotate-0 translate-y-0'}`}></span>
        </button>

        {/*
          The total hieght is 44px for btn and 16px for gap, 40px for link, padding top and buttom 32px 
          44 + 16 + 4 * 40 + 32 = 252px = 16rem = h-64
        */}
        <div className={`hidden max-lg:flex flex-col gap-4 rounded-lg max-sm:rounded-t-none absolute right-16 top-full bg-white shadow-custom-light max-sm:shadow-custom-bottom p-4 z-40 max-sm:w-full max-sm:right-0  ${isSideBarActive ? 'h-64 translate-y-0' : 'h-0 py-0 translate-y-32 max-sm:translate-y-0'} overflow-hidden transition-all`}>
          {/* Navigation Links */}
          <div className='flex items-center justify-start flex-col w-[15rem] max-sm:w-full text-lg capitalize'>
            {LINKS.map((link, idx) => (
              <NavbarLink main={link.main} links={link.subLinks} key={idx} hasDropDown={link.hasDropDown} />
            ))}
          </div>

          {/* Call To Action (CTA) Button */}
          <PrimaryButton onClick={null} title='Sign Up' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;