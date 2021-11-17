import React, { useState } from "react";

function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
  };

  const subFromCounter = () => {
    setCounterValue(counterValue - inputValue);
  };

  const changeInput = (e) => {
    setInputValue(parseInt(e.target.value));
  };

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2
        className={`${counterValue >= 100 ? "green" : ""}${
          counterValue <= -100 ? "red" : ""
        }`}
        data-testid="counter"
      >
        {counterValue}
      </h2>
      <button data-testid="sub-btn" onClick={subFromCounter}>
        -
      </button>
      <input
        color=""
        className="text-center"
        data-testid="input"
        type="number"
        value={inputValue}
        onChange={changeInput}
      />
      <button data-testid="add-btn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
}

export default Counter;
