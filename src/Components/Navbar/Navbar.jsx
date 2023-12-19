import React from "react";
import logoImg from "../../assets/Images/image 7.png";
import PrimaryButton from "../Button/PrimaryButton";
import NavbarLink from "./NavbarLink";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
// Define navigation links and their configurations as constants out of Navbar component for better performance
const LINKS = [
  { main: { link: "/", title: "Home" }, hasDropDown: false },
  { main: { link: "/pricing", title: "Pricing" }, hasDropDown: false },
  { main: { link: "/mission", title: "Mission" }, hasDropDown: false },
  
];

// Functional component for Navbar
const Navbar = () => {
  const [isSideBarActive, setSideBarActivate] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSideBarActivate = () => {
    setSideBarActivate(!isSideBarActive);
  };
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < prevScrollY) {
        setIsScrolled(false); // Scroll up detected
      } else {
        setIsScrolled(true);
      }
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        fontSize: "3.5rem",
        lineHeight: "120%",
      }}
      className={`fixed  top-0 w-screen bg-white h-[63px] lg:h-[80px] z-50 flex justify-center ${
        isScrolled ? "text-transparent" : ""
      }`}
      role='navigation'>
      <div className='max-w-[1500px] px-[1.8rem] w-screen h-full font-roboto flex justify-between items-center lg:px-[1.5rem] max-sm:px-2'>
        <Link
          className={`flex items-center gap-[1.5rem] ${
            isScrolled ? "justify-center" : ""
          }`}
          style={{
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            fontWeight: "bold",
            fontSize: isScrolled ? "4rem" : "3.5rem",
            lineHeight: "120%",
          }}
          to='/'
          >
          <img
            src={logoImg}
            alt='Company Logo'
            className={`select-none aspect-square duration-300  max-md:w-9 max-sm:w-7 ${
              isScrolled
                ? "max-h-[50px] max-w-[50px] scale-110  max-md:w-12 max-sm:w-10"
                : ""
            }`}
          />
          <div className='logo-container'>
            {!isScrolled && (
              <span
                className={`logo-text font-semibold relative overflow-hidden text-[#121212] max-md:text-[18px] max-sm:text-[20px] select-none tracking-wide text-[24px] transition-all transform ${
                  isScrolled
                    ? "-translate-x-full duration-500 animate-slide-out"
                    : "translate-x-0 duration-500 animate-slide-in"
                }`}>
                Neferdata
              </span>
            )}
          </div>
        </Link>
       {/* Navigation Links and Action Button  */}
<div className='md:flex hidden gap-8'>
  {/* Navigation Links */}
  <div
    style={{
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      lineHeight: "120%",
    }}
    className=' items-center flex gap-8 text-[#121212] text-lg capitalize'>
    {LINKS.map((link, idx) => (
      <NavbarLink
        main={link.main}
        links={link.subLinks}
        key={idx}
        hasDropDown={link.hasDropDown}
      />
    ))}
  </div>

  {/* Call To Action (CTA) Button */}
  <PrimaryButton onClick={null} title='Sign Up' />
</div>

        <button
          className={`max-lg:flex hidden flex-col w-6 justify-between h-5 max-md:h-4 max-md:w-5 overflow-hidden`}
          onClick={toggleSideBarActivate}>
          <span
            className={`h-[2.5px] w-full bg-black rounded-sm transition-all ${
              isSideBarActive
                ? "rotate-45 translate-y-[8.5px] max-md:translate-y-[6.5px]"
                : "rotate-0 translate-y-0"
            }`}></span>
          <span
            className={`h-[2.5px] w-full bg-black rounded-sm transition-all ${
              isSideBarActive ? "translate-x-[105%]" : "translate-x-0"
            }`}></span>
          <span
            className={`h-[2.5px] w-full bg-black rounded-sm transition-all ${
              isSideBarActive
                ? "-rotate-45 -translate-y-[8.5px] max-md:-translate-y-[6.5px]"
                : "rotate-0 translate-y-0"
            }`}></span>
        </button>

        {/*
          The total hieght is 44px for btn and 16px for gap, 40px for link, padding top and buttom 32px 
          44 + 16 + 4 * 40 + 32 = 252px = 16rem = h-64
        */}
        <div
          className={`hidden max-lg:flex flex-col gap-4 rounded-lg max-sm:rounded-t-none absolute right-16 top-full bg-white shadow-custom-light max-sm:shadow-custom-bottom p-4 z-40 max-sm:w-full max-sm:right-0  ${
            isSideBarActive
              ? "h-64 translate-y-0"
              : "h-0 py-0 translate-y-32 max-sm:translate-y-0"
          } overflow-hidden transition-all`}>
          {/* Navigation Links */}
          <div className='flex items-center text-[#121212] text-bold justify-start flex-col w-[15rem] max-sm:w-full text-lg capitalize'>
            {LINKS.map((link, idx) => (
              <NavbarLink
                main={link.main}
                links={link.subLinks}
                key={idx}
                hasDropDown={link.hasDropDown}
              />
            ))}
          </div>

          {/* Call To Action (CTA) Button */}
          <PrimaryButton onClick={null} title='Sign Up' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
