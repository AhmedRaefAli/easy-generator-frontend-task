import React, { useState } from 'react';
import PasswordInput from '../components/password';
import EmailInput from '../components/email-input';
import './Login.css'; // Import custom CSS

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate authentication (replace with actual authentication logic)
    if (credentials.email && credentials.password) {
      setLoggedIn(true);
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleLogin}>
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
              <button type="submit" className="login-button">Login</button>
            </div>
          </form>
        </div>
        {loggedIn && (
          <div className="login-success">
            Welcome, {credentials.email}!
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
