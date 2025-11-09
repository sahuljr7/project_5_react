// Importing React and its special features (called Hooks)
import React, { useState, useEffect, useRef } from 'react';
// Importing the CSS file for styling
import './Counter.css';

// Defining a functional component named "FunctionCounter"
const FunctionCounter = () => {
  // useState hook creates pieces of state (data that can change)
  const [count, setCount] = useState(0);            // Stores the current count number
  const [previousCount, setPreviousCount] = useState(null); // Stores the previous count value
  const [step, setStep] = useState(1);              // How much the counter goes up or down each click
  const [history, setHistory] = useState([]);       // Keeps track of the last few actions

  // useRef holds a value between re-renders without causing the component to refresh
  // We’ll use it to remember the previous count internally
  const prevCountRef = useRef();

  // useEffect hook — runs after the component renders (like componentDidMount + componentDidUpdate)
  useEffect(() => {
    console.log('FunctionCounter: Component mounted/updated');
    
    // Update the browser tab title to show the current count
    document.title = `Count: ${count}`;
    
    // Save the current count in our ref so it’s remembered for the next render
    prevCountRef.current = count;

    // Cleanup function (like componentWillUnmount in class components)
    return () => {
      console.log('FunctionCounter: Cleanup running');
      // Reset the browser tab title when the component is removed
      document.title = 'React App';
    };
  }, [count]); 
  // This array means: only run this effect when 'count' changes

  // Another useEffect — runs whenever 'count' changes to log what changed
  useEffect(() => {
    // Check if previous count exists and is different from the new one
    if (prevCountRef.current !== undefined && prevCountRef.current !== count) {
      console.log(`Count changed from ${prevCountRef.current} to ${count}`);
    }
  }, [count]); // Only trigger when count changes

  // Increase count by 'step' amount
  const increment = () => {
    setPreviousCount(count); // Remember current count before changing it
    setCount(count + step);  // Increase count
    // Add a note to the history, keeping only the latest 5 items
    setHistory(prevHistory => 
      [...prevHistory, `Incremented by ${step} to ${count + step}`].slice(-5)
    );
  };

  // Decrease count by 'step' amount
  const decrement = () => {
    setPreviousCount(count);
    setCount(count - step);
    setHistory(prevHistory => 
      [...prevHistory, `Decremented by ${step} to ${count - step}`].slice(-5)
    );
  };

  // Reset the count back to 0
  const reset = () => {
    setPreviousCount(count);
    setCount(0);
    setHistory(prevHistory => 
      [...prevHistory, 'Reset to 0'].slice(-5)
    );
  };

  // Change the step value when user types in a new number
  const handleStepChange = (event) => {
    setStep(parseInt(event.target.value) || 1); // Convert input to number or default to 1
  };

  // The part that defines what appears on the webpage
  return (
    <div className="counter-container function-counter">
      <h2>Functional Component Counter</h2>

      {/* Display current and previous count */}
      <div className="counter-display">
        <span className="count-value">{count}</span>
        {previousCount !== null && (
          <span className="previous-count">
            (was {previousCount})
          </span>
        )}
      </div>

      {/* Input to change how much the counter increases/decreases each time */}
      <div className="step-control">
        <label htmlFor="func-step">Step Size: </label>
        <input
          id="func-step"
          type="number"
          value={step}
          onChange={handleStepChange} // Update step value
          min="1"                     // Minimum step value
          max="10"                    // Maximum step value
          className="step-input"
        />
      </div>

      {/* Buttons to control the counter */}
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

      {/* Show the recent history of actions */}
      <div className="counter-history">
        <h4>Operation History:</h4>
        <ul>
          {/* Loop through the history array and show each item */}
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
          {/* If history is empty, show a helpful message */}
          {history.length === 0 && <li>No operations yet</li>}
        </ul>
      </div>

      {/* Information section explaining key React Hook features */}
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

// Export this component so it can be used in other parts of the app
export default FunctionCounter;
