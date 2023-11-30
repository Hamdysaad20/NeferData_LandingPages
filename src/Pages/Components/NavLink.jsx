import { useState } from "react";

export default function DropDownNavLink(props) {
  const main = props.main;
  const links = props.links;
  const [isDorpActive, setDorpActivate] = useState(false);

  return (
    <span className='relative flex gap-[4px] cursor-pointer h-[24px]'>
      <a href={main.link} className='relative'>{main.title}</a>
      {(props.dropDown &&
        <>
          <span onClick={() => { setDorpActivate(!isDorpActive) }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3977 15.6629C12.178 15.8826 11.8219 15.8826 11.6022 15.6629L5.86739 9.92804C5.64772 9.70837 5.64772 9.35227 5.86739 9.13259L6.13256 8.86739C6.35222 8.64772 6.70838 8.64772 6.92805 8.86739L12 13.9393L17.0719 8.86739C17.2916 8.64772 17.6477 8.64772 17.8674 8.86739L18.1326 9.13259C18.3522 9.35227 18.3522 9.70837 18.1326 9.92804L12.3977 15.6629Z" fill="black" />
            </svg>
          </span>
          <div className={`absolute w-full top-[calc(100%+7px)] left-0 bg-[#E0E0E0] rounded-sm px-2  ${(isDorpActive ? `h-[${links.length*24}px] pt-2 pb-4 translate-y-0` : 'h-0 py-0 -translate-y-2')} transition-all flex flex-col overflow-hidden`}>
            {links.map((ele, idx) => (
              <a href={ele.link} key={idx}>
                {ele.title}
              </a>
            ))}
          </div>
        </>
      )}
    </span>
  );
}
