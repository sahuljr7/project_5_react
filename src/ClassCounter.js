import { Component } from 'react';
import './Counter.css';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    
    // Initialize state in constructor
    this.state = {
      count: 0,
      previousCount: null,
      step: 1,
      history: []
    };
    
    // Bind methods (necessary in class components)
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  // Lifecycle method - called after component is mounted to DOM
  componentDidMount() {
    console.log('ClassCounter: Component mounted');
    document.title = `Count: ${this.state.count}`;
  }

  // Lifecycle method - called after component updates
  componentDidUpdate(prevProps, prevState) {
    console.log('ClassCounter: Component updated');
    
    // Update document title when count changes
    if (prevState.count !== this.state.count) {
      document.title = `Count: ${this.state.count}`;
      console.log(`Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  // Lifecycle method - called before component is removed from DOM
  componentWillUnmount() {
    console.log('ClassCounter: Component will unmount');
    document.title = 'React App'; // Reset title
  }

  increment() {
    this.setState(prevState => ({
      count: prevState.count + prevState.step,
      previousCount: prevState.count,
      history: [...prevState.history, 
        `Incremented by ${prevState.step} to ${prevState.count + prevState.step}`
      ].slice(-5) // Keep only last 5 entries
    }));
  }

  decrement() {
    this.setState(prevState => ({
      count: prevState.count - prevState.step,
      previousCount: prevState.count,
      history: [...prevState.history, 
        `Decremented by ${prevState.step} to ${prevState.count - prevState.step}`
      ].slice(-5)
    }));
  }

  reset() {
    this.setState({
      count: 0,
      previousCount: this.state.count,
      history: [...this.state.history, 'Reset to 0'].slice(-5)
    });
  }

  handleStepChange(event) {
    this.setState({
      step: parseInt(event.target.value) || 1
    });
  }

  render() {
    const { count, previousCount, step, history } = this.state;

    return (
      <div className="counter-container class-counter">
        <h2>Class Component Counter</h2>
        
        <div className="counter-display">
          <span className="count-value">{count}</span>
          {previousCount !== null && (
            <span className="previous-count">
              (was {previousCount})
            </span>
          )}
        </div>

        <div className="step-control">
          <label htmlFor="class-step">Step Size: </label>
          <input
            id="class-step"
            type="number"
            value={step}
            onChange={this.handleStepChange}
            min="1"
            max="10"
            className="step-input"
          />
        </div>

        <div className="counter-buttons">
          <button onClick={this.decrement} className="btn btn-danger">
            -{step}
          </button>
          <button onClick={this.reset} className="btn btn-secondary">
            Reset
          </button>
          <button onClick={this.increment} className="btn btn-primary">
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

export default ClassCounter;