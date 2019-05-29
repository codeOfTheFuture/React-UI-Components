import React from 'react';
import './Button.css';

const ActionButton = props => {
  return <div className={props.btnType}>{props.char}</div>;
};

export default ActionButton;
