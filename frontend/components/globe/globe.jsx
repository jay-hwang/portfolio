import React from 'react';

class Globe extends React.Component {
  constructor(props) {
    super(props);

    this.toggleImage = this.toggleImage.bind(this);
  }

  toggleImage() {
    $(".github-image").click(() => {
      $(".github-image").fadeOut();
    });
  }

  render() {
    return (
      <div className='globe-container'
           onClick={this.toggleImage}>
        <div className='profile-image display-none'></div>
        <div className='github-image display-none'></div>
        <div className='linkedin-image display-none'></div>
      </div>
    );
  }
}

export default Globe;
