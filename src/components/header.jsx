import React from 'react';
import './header.css'; 

const Header = ({ userName, onLogout }) => {
  return (
    <header className="app-header">
      <div className="logo">
      <img
          src="https://cd-e.com/assets/uploads/easygenerator-box.jpg" // Replace this with the URL of your own image
          alt="logo-image"
          className="logo-image"
        />
        </div>
      <div className="user-info">
        <span>Welcome, {userName}</span>
        <button onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;

