import React from 'react';
import './Home.css';
import githubLogo from '../assets/github.png';
import linkedInLogo from '../assets/linkedin.png';
import twitterlogo from '../assets/x.jpg';

const Contact = () => {

  return (
    <div className="contact">
      <h2>Contacts</h2>
      <p>
        Name: Khushi Bhatnagar <br/>
        Email: khushibhatnagar29@gmail.com </p>
        <h3>Social Media</h3>
        <ul>
          <li><a href='https://github.com/Khushi0829' target="_blank" rel="noreferrer">
          <img src= {githubLogo} alt='Github'/>
          GitHub</a></li>

            <li><a href='https://www.linkedin.com/in/khushi-bhatnagar-a934a327b/' target="_blank" rel="noreferrer">
            <img src={linkedInLogo} alt='linkedin' />
             linkedIn</a> </li>

            <li><a href='https://x.com/Khushii_0811' target="_blank" rel="noreferrer">
            <img src= {twitterlogo} alt='twitter'/> 
            TwitterX</a></li>
        </ul>
      

    </div>
  );
};

export default Contact;
