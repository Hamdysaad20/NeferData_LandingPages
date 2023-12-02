import React from 'react';
import PropTypes from 'prop-types';
import logoImg from '../../assets/Images/image 7.png';
import PrimaryButton from '../Button/PrimaryButton';
import NavbarLink from './NavbarLink';

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
  return (
    // Main navigation wrapper with role value for better semantics and accessibility
    <nav
      className="fixed top-0 w-full bg-white h-[72px] font-roboto flex justify-between items-center px-16 border-b border-gray-300"
      role="navigation"
    >
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <img src={logoImg} alt="Company Logo" className='aspect-square w-12' />
        <span className='font-bold text-2xl font-gabarito'>Neferdata</span>
      </div>

      {/* Navigation Links and Action Button  */}
      <div className='flex gap-8'>
        {/* Navigation Links */}
        <div className='flex items-center gap-8 text-lg capitalize'>
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

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
}

export default Navbar;