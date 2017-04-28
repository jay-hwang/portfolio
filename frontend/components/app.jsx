import React from 'react';
import Navbar from './navbar/navbar';
import Home from './home/home';
import About from './about/about';
import Skills from './skills/skills';
import PortfolioContainer from './portfolio/portfolio_container';

import Globe from './globe/globe';
import WorkContainer from './work/work_container';
import Contact from './contact/contact';

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
        <PortfolioContainer />
        <Contact />
      </div>
    );
  }
}

export default App;




// <WorkContainer />
// <Contact />
//
// <div className="app-container">
//   <div
//     onClick={this.showAbout}
//     className='border'>
//   </div>
//
//   <div className="app-content">
//     <Globe />
//     <div className='divider first'></div>
//     <About />
//     <div className='divider second'></div>
//     <Navbar />
//   </div>
//
//   <div
//     onClick={this.showAbout}
//     className='border'>
//   </div>
// </div>
