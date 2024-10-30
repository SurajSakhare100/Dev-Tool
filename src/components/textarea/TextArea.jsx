// src/TextArea.js
import React from 'react';

const TextArea = ({ placeholder, value, onChange, className }) => {
    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows="4"
            className={`border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${className}`}
        />
    );
};

export default TextArea;
