import React from 'react';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import './Button.css';

const Buttons = () => {
  return (
    <div className="buttons">
      <ActionButton btnType="clear" char="clear" />
      <ActionButton btnType="operator" char="&divide;" />
      <NumberButton btnType="number" char="7" />
      <NumberButton btnType="number" char="8" />
      <NumberButton btnType="number" char="9" />
      <ActionButton btnType="operator" char="&times;" />
      <NumberButton btnType="number" char="4" />
      <NumberButton btnType="number" char="5" />
      <NumberButton btnType="number" char="6" />
      <ActionButton btnType="operator" char="&minus;" />
      <NumberButton btnType="number" char="1" />
      <NumberButton btnType="number" char="2" />
      <NumberButton btnType="number" char="3" />
      <ActionButton btnType="operator" char="&#43;" />
      <NumberButton btnType="zero" char="0" />
      <ActionButton btnType="operator" char="&#61;" />
    </div>
  );
};

export default Buttons;
