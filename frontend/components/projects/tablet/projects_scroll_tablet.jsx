import React from 'react';


const ProjectsScrollTablet = ({ projectLis }) => {
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
      let animatePx = $('.project-li').width();
      // let animatePx = $('.projects-window').width();
      $('.projects-ul').animate({ left: `-=${animatePx}` }, 200);
      $('.mobile-circle-box-left').fadeIn(); }
    if (scrollBalance.right <= 1) { $('.mobile-circle-box-right').fadeOut(); }
  };

  const scrollLeft = () => {
    if (!shouldFreeze.left && scrollBalance.left > 0) {
      toggleFreeze('left');
      shiftBalance('left');
      let animatePx = $('.project-li').width();
      // let animatePx = $('.projects-window').width();
      $('.projects-ul').animate({ left: `+=${animatePx}` }, 200);
      $('.mobile-circle-box-right').fadeIn(); }
    if (scrollBalance.left <= 0) { $('.mobile-circle-box-left').fadeOut(); }
  };

  return (
    <div className='tablet'>
    </div>
  );
};
// <ProjectsScroll
//   projectLis={ projectLis }
//   scrollRight={ scrollRight }
//   scrollLeft={ scrollLeft } />

export default ProjectsScrollTablet;
