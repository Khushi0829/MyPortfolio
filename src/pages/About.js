import React from 'react';
import './Home.css';


const About = () => {
  return (
    <div className="about">
      
      <h2>About Me</h2>
      <p>A passionate Frontent Developer, recently learning backend technologies to become a successfull Web Developer.
      </p>
      <h3>Successfully completed: </h3>
      <ul>
        <li> HTML, CSS, JavaScript.</li>
        <li>Currently working on : PHP, NodeJs.</li>
      <h3>Here are some certificates' links</h3>
      <li>
        <a href='https://unstop.com/certificate-preview/0c7567e7-f963-4d8f-8974-f7f71381cf9c' target='_blank' rel='noreferrer'>MCQ+Coding Assessment of Unstop Talent Park - Tech </a>
      </li>
      <li>
        <a href='https://unstop.com/certificate-preview/cdcad93a-7be8-4061-a6bb-f48d2fc1c135' target='_blank' rel='noreferrer'>Flipkart Runway: Season 4</a> 
      </li>
      </ul>
    </div>
  );
};

export default About;
