import React, {useEffect, useRef } from 'react';
import { useState } from 'react';
import './calci.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const handleClick = (value) => {
    if (input.includes('=') || result === 'Error') {
      setInput(result + value);
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      const evalResult = eval(input).toString();
      setInput(input + '=' + evalResult);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  // Adjust the font size based on input length
  useEffect(() => {
    const inputElement = inputRef.current;
    const inputLength = input.length;
    if (inputLength > 20) {
      inputElement.style.fontSize = '0.8em';
    } else if (inputLength > 15) {
      inputElement.style.fontSize = '1em';
    } else {
      inputElement.style.fontSize = '1.5em';
    }
  }, [input]);

  // Adjust the font size based on result length
  useEffect(() => {
    const resultElement = resultRef.current;
    const resultLength = result.length;
    if (resultLength > 20) {
      resultElement.style.fontSize = '0.8em';
    } else if (resultLength > 15) {
      resultElement.style.fontSize = '1em';
    } else {
      resultElement.style.fontSize = '1.5em';
    }
  }, [result]);

  return (
    <div className="calci-calculator">
      <div className="calci-display">
        <div className="calci-input" ref={inputRef}>{input}</div>
        <div className="calci-result" ref={resultRef}>{result}</div>
      </div>
      <div className="calci-buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={handleDelete}>del</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('0')} className="calci-zero">0</button>
        <button className="calci-equals" onClick={handleEqual}>=</button>
      </div>
    </div>
  );
}

export default Calculator;