import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import logoImg from '../../assets/Images/image 7.png';

const Footer = () => {
  const socialIcons = [
    { Icon: FaFacebook, url: '/' },
    { Icon: FaInstagram, url: '/' },
    { Icon: FaTwitter, url: '/' },
    { Icon: FaLinkedin, url: '/' },
    { Icon: FaYoutube, url: '/' }
  ];

  const listOfLinks1 = [
    { title: 'link one', url: '/' },
    { title: 'link two', url: '/' },
    { title: 'link three', url: '/' },
    { title: 'link four', url: '/' },
    { title: 'link five', url: '/' },
  ];

  const listOfLinks2 = [
    { title: 'link six', url: '/' },
    { title: 'link seven', url: '/' },
    { title: 'link eight', url: '/' },
    { title: 'link nine', url: '/' },
    { title: 'link ten', url: '/' },
  ];

  // Functions that maps over list of link objects to render link elements
  const renderLinks = (links) =>
    links.map((link, idx) => (
      <a href={link.url} key={idx} className='py-1 w-[180px] text-white'>{link.title}</a>
    ));

  // Functions that maps over list of icons to render icon elements
  const renderIcons = () =>
    socialIcons.map((social, idx) => (
      <a className="text-white text-xl" key={idx} href={social.url}>
        <social.Icon aria-hidden="true" />
      </a>
    ));

  return (
    <footer className="flex flex-col text-white w-full justify-center items-center bg-black">
      <div className="w-11/12 max-w-[1200px] flex justify-between">
        <div className="flex flex-col gap-8 py-8 text-white">
          <div className='flex items-center gap-2'>
            <img src={logoImg} alt="Neferdata Company Logo" className='aspect-square w-12' />
            <span className='font-bold text-2xl font-gabarito'>Neferdata</span>
          </div>
          <div className="flex flex-col gap-6 text-sm">
            <div>
              <h4>Address:</h4>
              <p>Level 1, 12 Sample St, Ann Arbor MI 2000</p>
            </div>
            <div className='flex flex-col'>
              <h4>Contact:</h4>
              <a href="tel:1800 123 4567" className="underline"
                aria-label="Call Us at 1800 123 4567">1800 123 4567</a>
              <a href="mailto:info@neferdata.com" className="underline"
                aria-label="Email us at info@neferdata.com">info@neferdata.com</a>
            </div>
            <div className="flex gap-3 mb-6">
              {renderIcons()}
            </div>
          </div>
        </div>
        <div className="flex capitalize text-white py-8">
          <div className='flex flex-col'>{renderLinks(listOfLinks1)}</div>
          <div className='flex flex-col'>{renderLinks(listOfLinks2)}</div>
        </div>
      </div>

      <div className="flex justify-between py-8 border-t border-t-white text-sm w-11/12 max-w-[1200px]">
        <div><p>© 2023 Neferdata. All rights reserved.</p></div>
        <div className='flex gap-6'>
          <a href="/" className='underline'>Privacy Policy</a>
          <a href="/" className='underline'>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;