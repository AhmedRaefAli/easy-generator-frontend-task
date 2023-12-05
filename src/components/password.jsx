// PasswordInput.jsx

import React, { useState } from 'react';
import './PasswordInput.css'; // Import the CSS file

const PasswordInput = ({ label, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label>
        {label}:
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
        />
      </label>
      <input type="checkbox" onChange={toggleShowPassword} /> 
    </div>
  );
};

export default PasswordInput;
