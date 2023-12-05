import logo from './logo.svg';
import './App.css';
import Register, {LoginScreen} from './pages/register';
import PasswordInput from './components/password'; // Adjust the path based on your project structure
import EmailInput from './components/email-input';
import React, { useState } from 'react';
import Login from './pages/login';
import LandingScreen from './pages/landing';

function App() {
  const [password, setPassword] = useState('شسيشسي');
  const [email, setEmail] = useState('شسيشسي');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div >
          <Login/>
          <Register/>
          <LandingScreen/>
    </div>
  );
}

export default App;
