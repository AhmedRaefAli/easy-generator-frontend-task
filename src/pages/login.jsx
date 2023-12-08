import React, { useState } from 'react';
import PasswordInput from '../components/password';
import EmailInput from '../components/email-input';
import './Login.css'; 
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [err, setErr] = useState();

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
            setLoggedIn(true);
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('refreshToken', response.data.data.refreshToken);
            navigate("/landing");
          })
          .catch((error) => {
            if(error.response.data.errors && Array.isArray(error.response.data.errors)){
              setErr(error.response.data.errors[0]);
            }else{
              setErr(error.response.data.message);
            }
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
          <div className="err-message">
            <Link to="/register">Go to register</Link>
          </div>
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
