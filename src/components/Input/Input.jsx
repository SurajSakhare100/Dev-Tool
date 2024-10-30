// src/Input.js
import React from 'react';

const Input = ({ placeholder, value, onChange, className }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${className}`}
        />
    );
};

export default Input;
