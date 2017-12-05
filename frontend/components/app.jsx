import React from 'react';

// Components
import Navbar from './navbar/navbar';
import Home from './home/home';
import About from './about/about';
import Skills from './skills/skills';
import Projects from './projects/projects';
import Contact from './contact/contact';
import Footer from './footer/footer';

const App = () => (
  <div className='root-container'>
    <div id='loadScreen'>
      <div className='loader'>
        <div id='largeBox'></div>
        <div id='smallBox'></div>
      </div>
    </div>

    <Navbar/>
    <Home/>
    {/* <About/> */}
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
);

export default App;
