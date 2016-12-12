import React from 'react';
import { withRouter } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleWork = this.toggleWork.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
    this.toggleResume = this.toggleResume.bind(this);
  }

  toggleAbout() {
    this.props.router.push('/');
    $(".app-container").removeClass("blur");
    $(".app-content").removeClass("hide");
    $(".about-me").removeClass("display-none");
    $(".modal").addClass("hide");
    $(".resume").addClass("display-none");
  }

  toggleWork() {
    this.props.router.push('/work');
    $(".app-container").addClass("blur");
    $(".app-content").addClass("hide");
    $(".work-container").removeClass("hide");
  }

  toggleContact() {
    this.props.router.push('/contact');
    $(".app-container").addClass("blur");
    $(".app-content").addClass("hide");
    $(".contact-container").removeClass("hide");
  }

  toggleResume() {
    // Show pdf resume and link to download
    // this.props.router.push('/resume');
    $(".about-me").addClass("display-none");
    $(".resume").removeClass("display-none");
  }

  render() {
    return (
      <div className='navbar'>
        <div
          onClick={this.toggleAbout}
          className='navbar-item'>
          <span>ABOUT</span>
        </div>
        <div
          onClick={this.toggleWork}
          className='navbar-item'>
          <span>WORK</span>
        </div>
        <div
          onClick={this.toggleContact}
          className='navbar-item'>
          <span>CONTACT</span>
        </div>
        <div
          onClick={this.toggleResume}
          className='navbar-item'>
          <span>RESUME</span>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
