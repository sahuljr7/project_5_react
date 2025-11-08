import React, { useState, useEffect, useRef } from 'react';
import './Counter.css';

const FunctionCounter = () => {
  // State using useState hook
  const [count, setCount] = useState(0);
  const [previousCount, setPreviousCount] = useState(null);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);
  
  // useRef to track previous count without causing re-renders
  const prevCountRef = useRef();
  
  // useEffect for componentDidMount + componentDidUpdate functionality
  useEffect(() => {
    console.log('FunctionCounter: Component mounted/updated');
    document.title = `Count: ${count}`;
    
    // Store current count as previous for next render
    prevCountRef.current = count;
    
    // Cleanup function (similar to componentWillUnmount)
    return () => {
      console.log('FunctionCounter: Cleanup running');
      document.title = 'React App';
    };
  }, [count]); // Only re-run when count changes

  // Separate effect for logging count changes
  useEffect(() => {
    if (prevCountRef.current !== undefined && prevCountRef.current !== count) {
      console.log(`Count changed from ${prevCountRef.current} to ${count}`);
    }
  }, [count]);

  const increment = () => {
    setPreviousCount(count);
    setCount(count + step);
    setHistory(prevHistory => 
      [...prevHistory, `Incremented by ${step} to ${count + step}`].slice(-5)
    );
  };

  const decrement = () => {
    setPreviousCount(count);
    setCount(count - step);
    setHistory(prevHistory => 
      [...prevHistory, `Decremented by ${step} to ${count - step}`].slice(-5)
    );
  };

  const reset = () => {
    setPreviousCount(count);
    setCount(0);
    setHistory(prevHistory => 
      [...prevHistory, 'Reset to 0'].slice(-5)
    );
  };

  const handleStepChange = (event) => {
    setStep(parseInt(event.target.value) || 1);
  };

  return (
    <div className="counter-container function-counter">
      <h2>Functional Component Counter</h2>
      
      <div className="counter-display">
        <span className="count-value">{count}</span>
        {previousCount !== null && (
          <span className="previous-count">
            (was {previousCount})
          </span>
        )}
      </div>

      <div className="step-control">
        <label htmlFor="func-step">Step Size: </label>
        <input
          id="func-step"
          type="number"
          value={step}
          onChange={handleStepChange}
          min="1"
          max="10"
          className="step-input"
        />
      </div>

      <div className="counter-buttons">
        <button onClick={decrement} className="btn btn-danger">
          -{step}
        </button>
        <button onClick={reset} className="btn btn-secondary">
          Reset
        </button>
        <button onClick={increment} className="btn btn-primary">
          +{step}
        </button>
      </div>

      <div className="counter-history">
        <h4>Operation History:</h4>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
          {history.length === 0 && <li>No operations yet</li>}
        </ul>
      </div>

      <div className="lifecycle-info">
        <h4>Functional Component Features:</h4>
        <ul>
          <li>✅ useState for state management</li>
          <li>✅ No manual binding needed</li>
          <li>✅ useEffect for lifecycle operations</li>
          <li>✅ Direct state setters</li>
          <li>✅ useRef for mutable values</li>
          <li>✅ Cleaner syntax, less boilerplate</li>
        </ul>
      </div>
    </div>
  );
};

export default FunctionCounter;