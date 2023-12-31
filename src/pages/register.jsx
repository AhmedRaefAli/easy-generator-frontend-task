import React, { useState } from 'react';
import PasswordInput from '../components/password';
import Input from '../components/input';
import './Register.css'; 
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [registered, setRegistered] = useState(false);
    const [err, setErr] = useState();
    const navigate = useNavigate();

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
    if (name && email && password) {
      axios
        .post("http://localhost:4000/auth/register", { name, email, password })
        .then((response) => {
          setRegistered(true);
          navigate("/login");

        })
        .catch((error) => {
          if(error.response.data.errors && Array.isArray(error.response.data.errors)){
            setErr(error.response.data.errors[0]);
          }else{
            setErr(error.response.data.message);
          }
        });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="container">
      <div className="register-container">
      {err && (
          <div className="err-message">
             {err}
          </div>
        )}
        <div className="register-form">
          <h2 className="register-title">Register</h2>
          <form onSubmit={handleRegister}>
            <Input
              label="Name" 
              type='text'
              value={name}
              onChange={(e) => handleNameChange(e)}
            />
            <Input
              label="Email" 
              type='email'
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
            <div className="err-message">
              <Link to="/login">Go to Login</Link>
            </div>
        </div>
        
        {registered && (
          <div className="register-success">
            Registration successful for {name}!
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
