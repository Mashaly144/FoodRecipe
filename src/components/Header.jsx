import React, { useState } from 'react';
import NavBar from './NavBar';
import NavMobile from './NavMobile';
import Hero from './Hero';

const Header = () => {
  // handle navmbile
  const [navMobile, setnavMobile] = useState(false);
  return (
    <header className='h-screen'>
      <div className='container mx-auto'>
        <NavBar setnavMobile={setnavMobile} />
        <Hero />
        {/* mobile nav */}
        <div
          className={`${
            navMobile ? 'right-0' : '-right-full'
          } fixed top-0 bottom-0 w-52 transition-all`}
        >
          <NavMobile setnavMobile={setnavMobile} />
        </div>
      </div>
    </header>
  );
};

export default Header;
