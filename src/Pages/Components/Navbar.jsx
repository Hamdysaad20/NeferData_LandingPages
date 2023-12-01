import logoImg from '../../assets/image 7.png';
import Button1 from './Button1';
import NavLink from './NavLink';

function Navbar() {
  // Define navigation links and their configurations
  const links = [
    { main: { link: '/', title: 'Link One' }, dropDown: false },
    { main: { link: '/', title: 'Link Two' }, dropDown: false },
    { main: { link: '/', title: 'Link Three' }, dropDown: false },
    { 
      main: { link: '/', title: 'Link Four' }, 
      subLinks: [
        { link: '/', title: 'Link Six' },
        { link: '/', title: 'Link Seven' },
        { link: '/', title: 'Link Eight' },
        { link: '/', title: 'Link Nine' },
        { link: '/', title: 'Link Ten' }    ], 
      dropDown: true 
    }
  ];

  return (
    // The primary navigation wrapper. Role set to navigation for better semantics
    <nav 
      className="fixed top-0 w-full bg-white h-[72px] font-roboto flex justify-between items-center px-16 border-b border-gray-300" 
      role="navigation"
    >
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <img src={logoImg} alt="Company Logo" className='aspect-square w-12' />
        <span className='font-bold text-2xl font-gabarito'>Neferdata</span>
      </div>

      {/* Navigation Links and CTA  */}
      <div className='flex gap-8'>
        {/* Navigation Links */}
        <div className='flex items-center gap-8 text-lg capitalize'>
          {links.map((ele, idx) => (
            <NavLink main={ele.main} links={ele.subLinks} key={idx} dropDown={ele.dropDown} />
          ))}
        </div>

        {/* CTA Button */}
        <Button1 onClick={()=>{}} title='Sign Up'/>
      </div>
    </nav>
  );
}

export default Navbar;