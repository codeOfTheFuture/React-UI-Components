import React from 'react';
import './Button.css';

const NumberButton = props => {
  return <div className={props.btnType}>{props.char}</div>;
};

export default NumberButton;
