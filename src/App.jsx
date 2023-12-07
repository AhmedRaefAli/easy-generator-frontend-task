import './App.css';
import Register from './pages/register';
import React from 'react';
import Login from './pages/login';
import LandingScreen from './pages/landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<LandingScreen />} />
      </Routes>
    </Router>

  );
}

export default App;
