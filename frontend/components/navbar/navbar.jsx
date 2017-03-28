import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleWork = this.toggleWork.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
    this.toggleAboutDetail = this.toggleAboutDetail.bind(this);

    this.state = {
      showAboutDetail: false
    };
  }

  toggleAbout() {
    $(".app-container").removeClass("blur");
    $(".app-content").removeClass("hide");
    $(".about-me").removeClass("display-none");
    $(".modal").addClass("hide");
    $(".resume").addClass("display-none");
  }

  toggleAboutDetail() {
    if (this.state.showAboutDetail) {
      setTimeout(() => {
        $(".name").fadeIn();
        $(".intro").fadeIn();
      }, 400);

      $(".about-detail").slideUp();

      this.state.showAboutDetail = false;
    } else {
      $(".name").fadeOut();
      $(".intro").fadeOut();

      setTimeout(() => (
        $(".about-detail").slideDown()
      ), 400);

      this.state.showAboutDetail = true;
    }
  }

  toggleWork() {
    $(".app-container").addClass("blur");
    $(".app-content").addClass("hide");
    $(".work-container").removeClass("hide");
    $('.work-container').fadeIn();
  }

  toggleContact() {
    $(".app-container").addClass("blur");
    $(".app-content").addClass("hide");
    $(".contact-container").removeClass("hide");
  }

  render() {
    return (
      <div className='navbar'>
        <div
          onClick={this.toggleAboutDetail}
          className='navbar-item'>
          <span>ABOUT</span>
        </div>
        <div
          onClick={this.toggleWork}
          className='navbar-item'>
          <span>PROJECTS</span>
        </div>
        <div
          onClick={this.toggleContact}
          className='navbar-item'>
          <span>MESSAGE</span>
        </div>
        <a
          className='navbar-item resume-link'
          target="_blank"
          href="resume.pdf">RESUME
        </a>
      </div>
    );
  }
}

export default Navbar;
