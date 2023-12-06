import React from 'react';
import logoImg from '../../assets/Images/image 7.png';
import PrimaryButton from '../Button/PrimaryButton';
import NavbarLink from './NavbarLink';
import { useState } from 'react';

// Define navigation links and their configurations as constants out of Navbar component for better performance
const LINKS = [
  { main: { link: '/', title: 'Link One' }, hasDropDown: false },
  { main: { link: '/', title: 'Link Two' }, hasDropDown: false },
  { main: { link: '/', title: 'Link Three' }, hasDropDown: false },
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

  const toggleSideBarActivate = () => {setSideBarActivate(!isSideBarActive)};

  return (
    // Main navigation wrapper with role value for better semantics and accessibility
    <nav
      className="fixed top-0 w-screen bg-white h-[72px] font-roboto z-50 flex justify-between items-center px-16 border-b border-gray-300"
      role="navigation"
    >
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <img src={logoImg} alt="Company Logo" className='aspect-square w-12' />
        <span className='font-bold text-2xl font-gabarito'>Neferdata</span>
      </div>

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

      <button className={`max-lg:flex hidden flex-col w-6 justify-between h-5 overflow-hidden`} onClick={toggleSideBarActivate}>
        <span className={`h-[3px] w-full bg-black rounded-sm transition-all ${isSideBarActive?'rotate-45 translate-y-[8px]':'rotate-0 translate-y-0'}`}></span>
        <span className={`h-[3px] w-full bg-black rounded-sm transition-all ${isSideBarActive?'translate-x-full':'translate-0-full'}`}></span>
        <span className={`h-[3px] w-full bg-black rounded-sm transition-all ${isSideBarActive?'-rotate-45 -translate-y-[8px]':'rotate-0 translate-y-0'}`}></span>
      </button>

      {/*
        The total hieght is 44px for btn and 16px for gap, 40px for link, padding top and buttom 32px 
        44 + 16 + 4 * 40 + 32 = 252px = 16rem = h-64
      */}
      <div className={`hidden max-lg:flex flex-col gap-4 rounded-lg absolute right-16 top-full bg-white shadow-custom-light p-4 z-40 ${isSideBarActive?'h-64 translate-y-0':'h-0 py-0 translate-y-32'} overflow-hidden transition-all`}>
        {/* Navigation Links */}
        <div className='flex items-center justify-start flex-col w-[15rem] text-lg capitalize'>
          {LINKS.map((link, idx) => (
            <NavbarLink main={link.main} links={link.subLinks} key={idx} hasDropDown={link.hasDropDown} />
          ))}
        </div>

        {/* Call To Action (CTA) Button */}
        <PrimaryButton onClick={null} title='Sign Up' />
      </div>
    </nav>
  );
}

export default Navbar;