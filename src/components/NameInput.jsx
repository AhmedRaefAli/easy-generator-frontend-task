// NameInput.jsx

import React from 'react';

const NameInput = ({ label, value, onChange }) => {
  return (
    <div className="input-group">
      <label>{label}:</label>
      <input
        type="text"
        name="name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default NameInput;
