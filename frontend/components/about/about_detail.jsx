import React from 'react';

const AboutDetail = () => {
  const toggleContact = () => {
    $(".app-container").addClass("blur");
    $(".app-content").addClass("hide");
    $(".contact-container").removeClass("hide");
  };

  return (
    <div className='about-detail'>
      <div>
        Software engineer by day, musician by night, Jay is an innovative individual who enjoys creating things that make life more simple whether it be by building practical software or through playing music.

        <br/><br/>

        You can usually find him fiddling with different instruments or cruising around the city on two wheels when he's not telling computers what to do.

        <br/><br/>

        <section className='about-contact'>

          <span className='contact-item'>
            <a target="_blank" href="https://github.com/jay-hwang/">
              GitHub
            </a>
          </span>

          <span className='contact-item'>
            <a target="_blank" href="https://www.linkedin.com/in/jay-hwang">
              LinkedIn
            </a>
          </span>

          <span onClick={toggleContact} className='contact-item'>
            Message
          </span>

        </section>
      </div>
    </div>
  );
};

export default AboutDetail;
