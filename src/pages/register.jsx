// Register.jsx

import React, { useState } from 'react';
import PasswordInput from '../components/password';
import EmailInput from '../components/email-input';
import NameInput from '../components/NameInput'; // Import the reusable name input component
import './Register.css'; // Import custom CSS
import { Link } from 'react-router-dom';

const Register = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [registered, setRegistered] = useState(false);

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

  const handleRegister = (e) => {
    e.preventDefault();

    // Simulate registration (replace with actual registration logic)
    if (userData.name && userData.email && userData.password) {
      setRegistered(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="container">
      <div className="register-container">
        <div className="register-form">
          <h2 className="register-title">Register</h2>
          <form onSubmit={handleRegister}>
            <NameInput
              label="Name"
              value={name}
              onChange={(e) => handleNameChange(e)}
            />
            <EmailInput
              label="Email"
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
            <PasswordInput
              label="Password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
            />
            <div className="text-center">
              <button type="submit" className="register-button">Register</button>
            </div>
          </form>
            <Link to="/login">Go to Login</Link>
        </div>
        
        {registered && (
          <div className="register-success">
            Registration successful for {userData.name}!
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
