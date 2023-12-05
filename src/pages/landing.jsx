// LandingScreen.jsx

import React from 'react';
import './LandingScreen.css'; // Import custom CSS

const LandingScreen = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to Your App</h1>
      <p>
        Thank you for logging in! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam vel ullamcorper libero, a laoreet justo.
      </p>
      <img
        src="https://cd-e.com/assets/uploads/easygenerator-box.jpg" // Replace this with the URL of your own image
        alt="Landing Image"
        className="landing-image"
      />
    </div>
  );
};

export default LandingScreen;
