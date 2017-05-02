import React from 'react';

const Navbar = () => {
  const wh = $(window).height();
  const homeClick     = () => $("body").animate({ scrollTop: 0         }, 700);
  const aboutClick    = () => $("body").animate({ scrollTop: wh - 70   }, 700);
  const skillsClick   = () => $("body").animate({ scrollTop: wh + 500  }, 700);
  const projectsClick = () => $("body").animate({ scrollTop: wh + 1198 }, 700);
  const contactClick  = () => $("body").animate({ scrollTop: wh + 1930 }, 700);

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
    </nav>
  );
};

export default Navbar;
