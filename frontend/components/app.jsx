import React from 'react';
import Navbar from './navbar/navbar';
import Home from './home/home';
import About from './about/about';
import Skills from './skills/skills';
import ProjectsContainer from './projects/projects_container';
import InstaProjectsContainer from './insta_projects/insta_projects_container';

import Contact from './contact/contact';
import Footer from './footer/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='root-container'>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <ProjectsContainer />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
