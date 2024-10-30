// src/Button.js
import React from 'react';

const Button = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
