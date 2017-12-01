import React from 'react';

// Components
import Navbar from './navbar/navbar';
import Home from './home/home';
import About from './about/about';
import Skills from './skills/skills';
import ProjectsContainer from './projects/projects_container';
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
    <ProjectsContainer/>
    <Contact/>
    <Footer/>
  </div>
);

export default App;
