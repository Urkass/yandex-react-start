import React from 'react';
import './Input.css';

const Input = ({ placeholder, handleClick }) => {
    return <input className="Input" type="text" placeholder={placeholder} onClick={handleClick} />;
};

export default Input;
