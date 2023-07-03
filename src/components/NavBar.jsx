import React from 'react';
import logo from '../assets/logo.svg';
import { navLinks } from '../constant/data';
import { HiMenu } from 'react-icons/hi';
import Button from '../Ui/Button';

const NavBar = ({ setnavMobile }) => {
  return (
    <div className='bg-navBg container mx-auto p-5 rounded-[40px] mt-5 '>
      <div className=' flex  justify-around lg:justify-between items-center'>
        {/* logo */}
        <img src={logo} className='cursor-pointer' alt='logo' />
        {/* nav link */}
        <nav className='hidden lg:flex '>
          <ul className='flex justify-between items-center space-x-5'>
            {navLinks.map((link, index) => (
              <li key={index} className=' text-xl p-3 font-semibold navLink '>
                {link.title}
              </li>
            ))}
          </ul>
        </nav>
        {/* nav mobile */}
        <HiMenu
          onClick={(e) => {
            setnavMobile(true);
          }}
          className='lg:hidden text-3xl cursor-pointer '
        />
        {/* button */}
        <Button name='Order Now' />
      </div>
    </div>
  );
};

export default NavBar;
