import React from 'react';

const Navbar = () => {
  const wh = $(window).height();
  const showHamburgerMenu  = () => $('.hamburger-menu').fadeIn();
  const closeHamburgerMenu = () => $('.hamburger-menu').fadeOut();
  const homeClick = () => {
    closeHamburgerMenu();
    $("html, body").animate({ scrollTop: 0 }, 700);
  };
  const aboutClick = () => {
    closeHamburgerMenu();
    $("html, body").animate({ scrollTop: wh - 70 }, 700);
  };
  const skillsClick = () => {
    closeHamburgerMenu();
    let aboutHeight = $('.about').height() + 10;
    $("html, body").animate({ scrollTop: wh + aboutHeight }, 700);
  };
  const projectsClick = () => {
    closeHamburgerMenu();
    let aboutHeight = $('.about').height() + 10;
    let skillsHeight = $('.skills').height() + 50;
    $("html, body").animate({ scrollTop: wh + aboutHeight + skillsHeight }, 700);
  };
  const contactClick  = () => {
    closeHamburgerMenu();
    let about = $('.about').height() + 10;
    let skills = $('.skills').height() + 50;
    let projects = $('.projects').height();
    $("html, body").animate({ scrollTop: wh + about + skills + projects }, 700);
  };

  return (
    <nav className='navbar'>
      <div className='logo'>
        <span className='self-name'>Jay Hwang</span>
      </div>

      <ul className='navbar-links'>
        <li className='navbar-link' onClick={ homeClick } id='home-nav'>
          Home
        </li>

        <li className='navbar-link active' onClick={ aboutClick } id='about-nav'>
          About
        </li>

        <li className='navbar-link' onClick={ skillsClick } id='skills-nav'>
          Skills
        </li>

        <li className='navbar-link' onClick={ projectsClick } id='projects-nav'>
          Projects
        </li>

        <li className='navbar-link' onClick={ contactClick } id='contact-nav'>
          Contact
        </li>
      </ul>

      <div className='hamburger mobile' onClick={ showHamburgerMenu }>
        <span className='hel-hamburger-slab'></span>
        <span className='hel-hamburger-slab'></span>
        <span className='hel-hamburger-slab'></span>
      </div>

      <div className='mobile'>
        <ul className='hamburger-menu display-none'>
          <div className='exit' onClick={ closeHamburgerMenu }>x</div>

          <li className='navbar-link' onClick={ homeClick } id='home-nav'>
            Home
          </li>

          <li className='navbar-link active' onClick={ aboutClick } id='about-nav'>
            About
          </li>

          <li className='navbar-link' onClick={ skillsClick } id='skills-nav'>
            Skills
          </li>

          <li className='navbar-link' onClick={ projectsClick } id='projects-nav'>
            Projects
          </li>

          <li className='navbar-link' onClick={ contactClick } id='contact-nav'>
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
