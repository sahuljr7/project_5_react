// Importing Component from React so we can create a class-based component
import { Component } from 'react';

// Importing the CSS file that gives visual style to the counter
import './Counter.css';

// Creating a class-based React component named "ClassCounter"
class ClassCounter extends Component {

  // The constructor is called when this component is first created
  constructor(props) {
    // Calling the parent class constructor (necessary for using 'this')
    super(props);
    
    // Setting up the initial data (state) for this component
    this.state = {
      count: 0,           // The current count number
      previousCount: null,// The previous count before the last change
      step: 1,            // The amount the count will increase/decrease each time
      history: []         // Keeps a short list of the last few actions performed
    };
    
    // Binding methods — necessary in class components so 'this' works correctly
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  // Lifecycle Method #1 - Runs only once after the component first appears on screen
  componentDidMount() {
    console.log('ClassCounter: Component mounted');
    // Updates the browser tab title to show the current count
    document.title = `Count: ${this.state.count}`;
  }

  // Lifecycle Method #2 - Runs every time the component updates (like after count changes)
  componentDidUpdate(prevProps, prevState) {
    console.log('ClassCounter: Component updated');
    
    // If the count value has changed, update the browser tab title
    if (prevState.count !== this.state.count) {
      document.title = `Count: ${this.state.count}`;
      console.log(`Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  // Lifecycle Method #3 - Runs just before the component is removed from the page
  componentWillUnmount() {
    console.log('ClassCounter: Component will unmount');
    // Reset the browser tab title to default
    document.title = 'React App';
  }

  // Function to increase the count
  increment() {
    // Updating the component’s state
    this.setState(prevState => ({
      count: prevState.count + prevState.step,        // Add step to count
      previousCount: prevState.count,                 // Remember the old count
      history: [
        ...prevState.history,                         // Keep previous history
        `Incremented by ${prevState.step} to ${prevState.count + prevState.step}` // Add new entry
      ].slice(-5) // Keep only the last 5 entries
    }));
  }

  // Function to decrease the count
  decrement() {
    this.setState(prevState => ({
      count: prevState.count - prevState.step,        // Subtract step from count
      previousCount: prevState.count,                 // Save old count
      history: [
        ...prevState.history, 
        `Decremented by ${prevState.step} to ${prevState.count - prevState.step}`
      ].slice(-5)
    }));
  }

  // Function to reset the count back to zero
  reset() {
    this.setState({
      count: 0,                                       // Reset count
      previousCount: this.state.count,                // Save what it was before reset
      history: [...this.state.history, 'Reset to 0'].slice(-5) // Add reset message to history
    });
  }

  // Function to change the "step" value (how much count changes each time)
  handleStepChange(event) {
    this.setState({
      step: parseInt(event.target.value) || 1 // Convert the input to a number, default to 1
    });
  }

  // What appears on the screen
  render() {
    // Pulling values from state for easy use below
    const { count, previousCount, step, history } = this.state;

    // What will be displayed
    return (
      <div className="counter-container class-counter">
        <h2>Class Component Counter</h2>
        
        {/* Current and previous count display */}
        <div className="counter-display">
          <span className="count-value">{count}</span>
          {/* Show previous count if available */}
          {previousCount !== null && (
            <span className="previous-count">
              (was {previousCount})
            </span>
          )}
        </div>

        {/* Input control for changing the step size */}
        <div className="step-control">
          <label htmlFor="class-step">Step Size: </label>
          <input
            id="class-step"
            type="number"
            value={step}                   // Controlled by state
            onChange={this.handleStepChange} // Updates step in state when changed
            min="1"                         // Minimum value allowed
            max="10"                        // Maximum value allowed
            className="step-input"
          />
        </div>

        {/* Buttons for controlling the counter */}
        <div className="counter-buttons">
          {/* Decrease button */}
          <button onClick={this.decrement} className="btn btn-danger">
            -{step}
          </button>
          {/* Reset button */}
          <button onClick={this.reset} className="btn btn-secondary">
            Reset
          </button>
          {/* Increase button */}
          <button onClick={this.increment} className="btn btn-primary">
            +{step}
          </button>
        </div>

        {/* History of recent operations */}
        <div className="counter-history">
          <h4>Operation History:</h4>
          <ul>
            {/* Show the list of previous actions */}
            {history.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
            {/* Show this message if there’s no history yet */}
            {history.length === 0 && <li>No operations yet</li>}
          </ul>
        </div>

        {/* Informational section explaining what features this component demonstrates */}
        <div className="lifecycle-info">
          <h4>Class Component Features:</h4>
          <ul>
            <li>✅ Uses constructor for state initialization</li>
            <li>✅ Manual method binding required</li>
            <li>✅ Lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount)</li>
            <li>✅ this.setState for state updates</li>
            <li>✅ Access state via this.state</li>
          </ul>
        </div>
      </div>
    );
  }
}

// Exporting the ClassCounter so it can be imported and used elsewhere
export default ClassCounter;
