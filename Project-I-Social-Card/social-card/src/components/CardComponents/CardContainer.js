import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = () => {
  return (
    <div>
      <a href="https://www.reactjs.org" className="card">
        <CardBanner />
        <CardContent />
      </a>
    </div>
  );
};

export default CardContainer;
