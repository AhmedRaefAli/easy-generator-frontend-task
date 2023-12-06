import React, { useState } from 'react';
import PasswordInput from '../components/password';
import EmailInput from '../components/email-input';
import './Login.css'; // Import custom CSS
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [err, setErr] = useState();

  // Use useHistory from react-router-dom
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  ;

    const handleLogin = (e) => {
      e.preventDefault();
      if ( email && password) {
        axios
          .post("http://localhost:3000/auth/login", {  email, password })
          .then((response) => {
            console.log(response);
            setLoggedIn(true);
            localStorage.setItem('token', response.data.data.token);
            navigate("/landing");
          })
          .catch((error) => {
            console.log(error.response.data.message)
            setErr(error.response.data.message);
          });
      } else {
        alert('Please enter both email and password.');
      }
    };
    
 

  return (
    <div className="container">
      <div className="login-container">
      {err && (
          <div className="err-message">
             {err}
          </div>
        )}
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
          <Link to="/register">Go to register</Link>

        </div>
        
        {loggedIn && (
          <div className="login-success">
            Welcome, {email}!
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
