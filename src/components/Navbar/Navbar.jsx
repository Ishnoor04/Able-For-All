import { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./Navlinks";
import { Logo } from "../../assets";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=' z-10 bg-prime'>
      <div className='flex items-center font-medium justify-around'>
        <div className='z-50 p-4 md:w-auto w-full flex justify-between items-center'>
          <Link to='/'>
            <img
              src={Logo}
              alt='logo'
              className='md:cursor-pointer ss:h-[5rem] h-[3rem]'
            />
          </Link>
          <div
            className='text-3xl md:hidden text-black'
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className='md:flex hidden uppercase items-center gap-8 font-roboto text-black '>
          <li>
            <Link to='/' className='py-4 px-3 inline-block hover:font-bold'>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='py-4 px-3 inline-block hover:font-bold'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/services'
              className='py-4 px-3 inline-block hover:font-bold'
            >
              Services
            </Link>
          </li>
          {/* <NavLinks /> */}
          <li>
            <Link
              to='/contact'
              className='py-4 px-3 inline-block hover:font-bold'
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-[#ece5fb] text-black fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"} z-30
        `}
        >
          <li>
            <Link
              to='/'
              className='py-4 px-3 inline-block'
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='py-4 px-3 inline-block'
              onClick={() => setOpen(!open)}
            >
              About
            </Link>
          </li>
            
          <li>
            <Link
              to='/services'
              className='py-4 px-3 inline-block'
              onClick={() => setOpen(!open)}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to='/contact'
              className='py-4 px-3 inline-block'
              onClick={() => setOpen(!open)}
            >
              Contact
            </Link>
          </li>
          <div className='py-5'>{/* <Button /> */}</div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
