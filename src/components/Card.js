import React from 'react';
import './Card.css';

const Card = ({ src, alt, title, subtitle }) => {
    return (
        <div className="Card">
            <img className="Card-image" src={src} alt={alt} />
            <p className="Card-title">{title}</p>
            <p className="Card-subtitle">{subtitle}</p>
        </div>
    );
};

export default Card;
