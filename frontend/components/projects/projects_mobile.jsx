import React from 'react';

const ProjectsScrollMobile = ({ projectLis }) => {
  const scrollBalance = { left: 0, right: 10 };
  const shouldFreeze = { left: false, right: false };
  const toggleFreeze = dir => {
    shouldFreeze[dir] = true;
    setTimeout(() => { shouldFreeze[dir] = false; }, 350);
  };
  const shiftBalance = dir => {
    if (dir === 'right') {
      scrollBalance.right--;
      scrollBalance.left++;
    }
    else {
      scrollBalance.right++;
      scrollBalance.left--;
    }
  };

  const scrollRight = () => {
    if (!shouldFreeze.right) {
      toggleFreeze('right');
      shiftBalance('right');
      $('.projects-ul').animate({ left: '-=295' }, 200);
      $('.mobile-circle-box-left').fadeIn(); }
    if (scrollBalance.right <= 1) { $('.mobile-circle-box-right').fadeOut(); }
  };

  const scrollLeft = () => {
    if (!shouldFreeze.left) {
      toggleFreeze('left');
      shiftBalance('left');
      $('.projects-ul').animate({ left: '+=295' }, 200);
      $('.mobile-circle-box-right').fadeIn(); }
    if (scrollBalance.left <= 0) { $('.mobile-circle-box-left').fadeOut(); }
  };

  return (
    <div className='projects-scroll mobile'>
      <div className='mobile-circle-box mobile-circle-box-left display-none'>
        <div className='left-circle-mobile mobile-circle' onClick={ scrollLeft }>
          <img className='arrow-img-mobile'
            src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493512202/left-arrow_sbunnt.png' />
        </div>
      </div>

      <div className='projects-window'>
        <ul className='projects-ul'>
          { projectLis }
        </ul>
      </div>

      <div className='mobile-circle-box mobile-circle-box-right'>
        <div className='right-circle-mobile mobile-circle' onClick={ scrollRight }>
          <img className='arrow-img-mobile'
            src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493511005/arrow_r5mjhk.png' />
        </div>
      </div>
    </div>
  );
};

export default ProjectsScrollMobile;
