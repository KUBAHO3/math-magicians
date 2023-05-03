import React from 'react';
import MyCalculator from '../components/MyCalculator';
import '../styles/Calculator.css';

function Calculator() {
  return (
    <div className="container-calc">
      <h5 className="message">Let&apos;s do some math!</h5>
      <MyCalculator />
    </div>
  );
}

export default Calculator;
