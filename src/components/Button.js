import React from 'react';
import './Button.css';

const Button = ({ title, handleClick }) => {
    return (
        <button className="Button" onClick={handleClick}>
            {title}
        </button>
    );
};

export default Button;
