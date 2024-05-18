import React from 'react';
import './About.css'; // Import the CSS for About

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-text">
        Welcome to our website! We are a team dedicated to providing the best
        visual experiences through our gallery. Our collection showcases a wide
        range of photography, focusing on diverse themes and subjects.
      </p>
      <p className="about-text">
        Our mission is to connect people with art and culture through 
        visually stunning and thought-provoking imagery. We believe that 
        every picture tells a story and strive to bring those stories 
        to you.
      </p>
      <p className="about-text">
        Thank you for visiting, and we hope you enjoy exploring our gallery!
      </p>
    </div>
  );
};

export default About;
