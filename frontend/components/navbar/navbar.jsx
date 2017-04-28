import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <span className='self-name'>Jay Hwang</span>
      </div>

      <ul className='navbar-links'>
        <li className='navbar-link'>Home</li>
        <li className='navbar-link'>About</li>
        <li className='navbar-link'>Projects</li>
        <li className='navbar-link'>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
