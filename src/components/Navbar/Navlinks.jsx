import { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

// Separate components for better organization
const ChevronIcon = ({ isUp, isMobile }) => (
  <span className={`text-xl ${isMobile ? 'md:hidden inline' : 'md:mt-1 md:ml-2 md:block hidden'}`}>
    <ion-icon name={isUp ? "chevron-up" : "chevron-down"}></ion-icon>
  </span>
);

const SubMenuItem = ({ slink, onClick }) => (
  <li className='text-sm text-black my-2.5 hover:text-[#5a2f7e]'>
    <Link to={slink.link} onClick={onClick}>
      {slink.name}
    </Link>
  </li>
);

const DesktopSubmenu = ({ link }) => (
  <div className='absolute top-16 hidden group-hover:md:block hover:md:block'>
    <div className='py-3'>
      <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
    </div>
    <div className='bg-white p-5 grid gap-10'>
      {link.sublinks.map((sublink) => (
        <div key={sublink.Head}>
          <h1 className='text-lg font-semibold'>{sublink.Head}</h1>
          {sublink.sublink.map((slink) => (
            <SubMenuItem key={slink.name} slink={slink} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

const MobileSubmenu = ({ link, isOpen, setOpen }) => (
  <div className={`${isOpen ? "md:hidden" : "hidden"} z-20`}>
    {link.sublinks.map((sublink) => (
      <div key={sublink.Head}>
        {sublink.sublink.map((slink) => (
          <SubMenuItem 
            key={slink.name} 
            slink={slink} 
            onClick={() => setOpen(false)}
            className='py-3 pl-14'
          />
        ))}
      </div>
    ))}
  </div>
);

const NavLinks = ({ setOpen }) => {
  const [activeHeading, setActiveHeading] = useState("");

  const toggleHeading = (linkName) => {
    setActiveHeading(activeHeading !== linkName ? linkName : "");
  };

  return (
    <>
      {links.map((link) => (
        <div key={link.name} className='z-30'>
          <div className='px-3 text-left md:cursor-pointer group z-30'>
            <h1
              className='py-7 flex justify-between items-center md:pr-0 pr-5 group'
              onClick={() => toggleHeading(link.name)}
            >
              {link.name}
              <ChevronIcon isUp={activeHeading === link.name} isMobile={true} />
              <ChevronIcon isUp={false} isMobile={false} />
            </h1>
            
            {link.submenu && (
              <div className='z-30'>
                <DesktopSubmenu link={link} />
              </div>
            )}
          </div>
          
          <MobileSubmenu 
            link={link} 
            isOpen={activeHeading === link.name}
            setOpen={setOpen}
          />
        </div>
      ))}
    </>
  );
};

export default NavLinks;