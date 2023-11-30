import logoImg from '../../assets/image 7.png';
import Button1 from './Button1';
import NavLink from './NavLink';

export default function Navbar() {
  const links = [
    {
      main: { link: '/', title: 'Link One' },
      subLinks: [],
      dropDown: false
    },
    {
      main: { link: '/', title: 'Link Two' },
      subLinks: [],
      dropDown: false
    },
    {
      main: { link: '/', title: 'Link Three' },
      subLinks: [],
      dropDown: false
    },
    {
      main: { link: '/', title: 'Link Four' },
      subLinks: [
        { link: '/', title: 'link Six' },
        { link: '/', title: 'link Seven' },
        { link: '/', title: 'link 8' },
        { link: '/', title: 'link 9' },
        { link: '/', title: 'link 10' },
      ],
      dropDown: true
    }
  ];

  return (
    <nav className="fixed w-full bg-white h-[72px] flex justify-between items-center px-[64px] border-b border-b-[#E0E0E0]">
      {/* right side */}
      {/* logo */}
      <div className='flex justify-center items-center gap-2'>
        <img src={logoImg} alt="logo" className='aspect-square w-[48px]' />
        <span className='font-bold text-[24px]'>Neferdata</span>
      </div>

      {/* left side */}
      <div className='flex gap-[32px]'>
        {/* links */}
        <div className='flex items-center justify-center gap-[32px] text-[16px] h-[40px] capitalize'>
          {links.map((ele, idx) => (
            <NavLink main={ele.main} links={ele.subLinks} key={idx} dropDown={ele.dropDown} />
          ))}
        </div>
        {/* sign up button */}
        <Button1 onClickFuction={()=>{}} title='sign up'/>
      </div>
    </nav>
  );
}