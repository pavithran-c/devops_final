import React, { useState } from "react";
import './App.css';
const App = () => {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [result, setResult] = useState("");
  const handleDigit = (value) => {
    setInput((prev) => prev + value);
  };
  const handleOperator = (value) => {
    setOperator(value);
    setPreviousValue(input);
    setInput("");
  };
  const handleEqual = () => {
    const currentValue = parseFloat(input);
    const prevValue = parseFloat(previousValue);

    if (operator === "+") setResult(prevValue + currentValue);
    if (operator === "-") setResult(prevValue - currentValue);
    if (operator === "*") setResult(prevValue * currentValue);
    if (operator === "/") setResult(prevValue / currentValue);

    setInput("");
    setOperator("");
    setPreviousValue("");
  };

  // Function to handle clear button
  const handleClear = () => {
    setInput("");
    setOperator("");
    setPreviousValue("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">
        {input || result || "0"}
      </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleOperator("/")}>/</button>
        <button onClick={() => handleOperator("*")}>*</button>
        
        <button onClick={() => handleOperator("-")}>-</button>
        <button onClick={() => handleDigit("7")}>7</button>
        <button onClick={() => handleDigit("8")}>8</button>
        
        <button onClick={() => handleDigit("9")}>9</button>
        <button onClick={() => handleOperator("+")}>+</button>
        
        <button onClick={() => handleDigit("4")}>4</button>
        
        <button onClick={() => handleDigit("5")}>5</button>
        <button onClick={() => handleDigit("6")}>6</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleDigit("1")}>1</button>
        <button onClick={() => handleDigit("2")}>2</button>
        <button onClick={() => handleDigit("3")}>3</button>
        <button onClick={() => handleDigit("0")}>0</button>
        
        
      </div>
    </div>
  );
};

export default App;
