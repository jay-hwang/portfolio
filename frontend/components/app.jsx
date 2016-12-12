import React from 'react';
import Navbar from './navbar/navbar';
import About from './about/about';
import Globe from './globe/globe';
import Work from './work/work';
import Contact from './contact/contact';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.showAbout = this.showAbout.bind(this);
  }

  showAbout() {
    this.props.router.push('/');
    $(".app-container").removeClass("blur");
    $(".app-content").removeClass("hide");
    $(".about-me").removeClass("display-none");
    $(".modal").addClass("hide");
    $(".resume").addClass("display-none");
  }

  render() {
    return (
      <div className='root-container'>
        <Work />
        <Contact />
        <div className="app-container">
          <div
            onClick={this.showAbout}
            className='border'>
          </div>

          <div className="app-content">
            <Globe />
            <div className='divider first'></div>
            <About />
            <div className='divider second'></div>
            <Navbar />
          </div>

          <div
            onClick={this.showAbout}
            className='border'>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
