import { useState } from "react";

export default function NavLink({links, main, dropDown}) {
  const [isDorpActive, setDorpActivate] = useState(false);

  const toggleMenu = () => setDorpActivate(!isDorpActive);

  return (
    <div className='relative flex items-center cursor-pointer h-6' role="menu">
      {/* Main Link */}
      <a 
        href={main.link} 
        className='relative'
        aria-label={main.title}
      >
        {main.title}
      </a>
      {/* Drop Down Menu */}
      {dropDown && (
        <>
          <button
            className="pt-[5px] pl-[2px]"
            onClick={toggleMenu} 
            aria-haspopup="true" //Indicates the button will show a dropdown on click
            aria-expanded={isDorpActive} //Whether the dropdown is currently visible 
            aria-controls="dropdownMenu" //The id of the dropdown this button controls
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
              aria-hidden="true" //Make sure screen readers ignore this decorative svg
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3977 15.6629C12.178 15.8826 11.8219 15.8826 11.6022 15.6629L5.86739 9.92804C5.64772 9.70837 5.64772 9.35227 5.86739 9.13259L6.13256 8.86739C6.35222 8.64772 6.70838 8.64772 6.92805 8.86739L12 13.9393L17.0719 8.86739C17.2916 8.64772 17.6477 8.64772 17.8674 8.86739L18.1326 9.13259C18.3522 9.35227 18.3522 9.70837 18.1326 9.92804L12.3977 15.6629Z" fill="black" />
            </svg>
          </button>
          <ul 
            id="dropdownMenu"
            className={`absolute w-full top-8 left-0 bg-gray-300 rounded-sm px-2 ${(isDorpActive ? `h-${links.length*6} pt-2 pb-4 translate-y-0` : 'h-0 py-0 -translate-y-2')} transition-all flex flex-col overflow-hidden`}
            role='menu'
            aria-hidden={!isDorpActive} //Only visible when isDorpActive is true
          >
            {/* Menu items */}
            {links.map((ele, idx) => (
              <li key={idx} role="menuitem">
                <a href={ele.link} aria-label={ele.title} className="text-sm">
                  {ele.title}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}