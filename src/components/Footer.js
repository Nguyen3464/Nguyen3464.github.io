import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';





const Footer = () => {
  return (
    <div className='footer-portfolio'>
      <div className='links'>
        <div>
          <FontAwesomeIcon icon={faHouse} />
          <h5>Robbinsdale, Minnesota</h5>
          <FontAwesomeIcon icon={faPhone} />
          <h5>Available upon request</h5>
          <FontAwesomeIcon icon={faEnvelope} />
          <h5>N.nguyen3464@gmail.com</h5>
        </div>
        <div className='links2'>
          <h3>©️ Created by Nguyen Nguyen</h3>
          <a href="https://github.com/Nguyen3464" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className='brand-icon'/>

          </a>
          <a href="https://www.linkedin.com/in/nguyen-nguyen3464/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='brand-icon'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;






