import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="calc">
        <CalculatorDisplay />
        <NumberButton />
      </div>
    </div>
  );
};

export default App;
