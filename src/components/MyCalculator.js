import React from 'react';

function MyCalculator() {
  return (
    <div className="calc-wrapper">
      <div className="calc-display">0</div>
      <div className="calc-row">
        <button type="button" className="cal-btn-normal">AC</button>
        <button type="button" className="cal-btn-normal">+/-</button>
        <button type="button" className="cal-btn-normal">%</button>
        <button type="button" className="cal-btn-special">÷</button>
      </div>
    </div>
  );
}

export default MyCalculator;
