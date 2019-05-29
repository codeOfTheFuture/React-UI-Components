import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Buttons from './components/ButtonComponents/Buttons';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="calc">
        <CalculatorDisplay />
        <Buttons />
      </div>
    </div>
  );
};

export default App;
