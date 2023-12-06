// Import dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// react component for every Navbar Link
const NavbarLink = ({ links, main, hasDropDown }) => {
  // Set state for dropdown active flag
  const [isDropActive, setDropActive] = useState(false);

  // Function to toggle dropdown visibility
  const toggleMenu = () => setDropActive(prevState => !prevState);

  return (
    <div className='relative flex items-center justify-center cursor-pointer max-lg:py-5 h-6 max-lg:w-full text-center' role="menu">
      {/* Display the main link */}
      <a 
        href={main.link} 
        aria-label={main.title}
      >
        {main.title}
      </a>
      {/* Check and display dropdown if present */}
      {hasDropDown && (
        <>
          <button
            className="pt-[5px] pl-[2px]"
            onClick={toggleMenu} 
            aria-haspopup="true"
            aria-expanded={isDropActive} 
            aria-controls="dropdownMenu"
          >
            {/* SVG Arrow*/}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
              aria-hidden="true" 
              className={`transition-all ${!isDropActive?'rotate-0':'-rotate-180'}`}
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3977 15.6629C12.178 15.8826 11.8219 15.8826 11.6022 15.6629L5.86739 9.92804C5.64772 9.70837 5.64772 9.35227 5.86739 9.13259L6.13256 8.86739C6.35222 8.64772 6.70838 8.64772 6.92805 8.86739L12 13.9393L17.0719 8.86739C17.2916 8.64772 17.6477 8.64772 17.8674 8.86739L18.1326 9.13259C18.3522 9.35227 18.3522 9.70837 18.1326 9.92804L12.3977 15.6629Z" fill="black" />
            </svg>
          </button>
          <ul 
            id="dropdownMenu"
            role='menu'
            aria-hidden={!isDropActive}
            className={`absolute w-full top-8 left-0 max-lg:left-[calc(-100%-1rem)] max-lg:top-0 bg-gray-300 rounded-sm ${isDropActive ? `h-${links.length*6} pt-2 pb-4 translate-y-0` :'h-0 py-0 -translate-y-2'} transition-all flex flex-col overflow-hidden`}
          >
            {/* Display menu items */}
            {links.map((link, idx) => (
              <li key={idx} role="menuitem" className='transition-all hover:bg-white/40 bg-transparent w-full px-2'>
                <a href={link.link} aria-label={link.title} className="text-sm">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

NavbarLink.propTypes = {
  links: PropTypes.array.isRequired,
  main: PropTypes.object.isRequired,
  hasDropDown: PropTypes.bool.isRequired
};

export default NavbarLink;