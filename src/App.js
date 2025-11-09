// Import React and the two counter components we built earlier
import React from 'react';
import ClassCounter from './ClassCounter';        // Class-based counter component
import FunctionCounter from './FunctionCounter';  // Functional counter component
import './Counter.css';                           // Importing CSS file for styling

// Main App Component - this is the root of our small project
const App = () => {
  return (
    <div className="App">
      {/* Page Header Section */}
      <header style={{ 
        textAlign: 'center', 
        padding: '40px 20px', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Nice gradient background
        color: 'white',
        marginBottom: '40px'
      }}>
        {/* Main title */}
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>
          React Components Comparison
        </h1>

        {/* Subtitle / Description */}
        <p style={{ fontSize: '1.2rem', opacity: 0.9, margin: '10px 0 0 0' }}>
          Class Components vs Functional Components with Hooks
        </p>
      </header>

      {/* Section that displays both counter types side by side */}
      <div className="comparison-container">
        <ClassCounter />     {/* Left side - old style React class component */}
        <FunctionCounter />  {/* Right side - modern React functional component */}
      </div>

      {/* Section below counters showing written comparison analysis */}
      <div style={{ 
        maxWidth: '800px', 
        margin: '40px auto', 
        padding: '30px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
      }}>
        <ComparisonWriteUp /> {/* This component contains the comparison table and notes */}
      </div>
    </div>
  );
};

// This component explains and compares both component types
const ComparisonWriteUp = () => (
  <div>
    <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>
      Component Comparison Analysis
    </h2>
    
    {/* Using grid layout for neat sections */}
    <div style={{ display: 'grid', gap: '30px' }}>
      {/* Comparison for Class Components */}
      <ComparisonSection 
        title="Class Components"
        pros={[
          "Established pattern with extensive documentation",
          "Clear lifecycle method structure",
          "Better for complex state logic (historically)",
          "Easier for developers coming from OOP backgrounds"
        ]}
        cons={[
          "More boilerplate code",
          "Manual method binding required",
          "this keyword can be confusing",
          "Harder to split into smaller components"
        ]}
      />
      
      {/* Comparison for Functional Components */}
      <ComparisonSection 
        title="Functional Components with Hooks"
        pros={[
          "Less code and cleaner syntax",
          "No binding issues",
          "Easier to test and reuse logic",
          "Better performance with optimized hooks"
        ]}
        cons={[
          "Learning curve for hooks",
          "More abstraction for lifecycle operations",
          "Potential for misuse of useEffect",
          "Requires understanding of closures"
        ]}
      />
      
      {/* Detailed table comparing lifecycle methods and hook equivalents */}
      <LifecycleComparison />
    </div>
  </div>
);

// Reusable section that displays pros and cons side by side
const ComparisonSection = ({ title, pros, cons }) => (
  <div>
    <h3 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
      {title}
    </h3>

    {/* Two-column grid: Advantages on left, Disadvantages on right */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      {/* Advantages */}
      <div>
        <h4 style={{ color: '#27ae60' }}>✅ Advantages</h4>
        <ul>
          {pros.map((pro, index) => (
            <li key={index}>{pro}</li>
          ))}
        </ul>
      </div>

      {/* Disadvantages */}
      <div>
        <h4 style={{ color: '#e74c3c' }}>❌ Disadvantages</h4>
        <ul>
          {cons.map((con, index) => (
            <li key={index}>{con}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// Comparison table showing how lifecycle methods match with hooks
const LifecycleComparison = () => (
  <div>
    <h3 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
      Lifecycle Methods vs Hooks Comparison
    </h3>

    {/* Simple HTML table comparing equivalent features */}
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ background: '#f8f9fa' }}>
          <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Class Component</th>
          <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Functional Component</th>
          <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Purpose</th>
        </tr>
      </thead>
      <tbody>
        {/* Each row compares one lifecycle concept */}
        <tr>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>constructor</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>useState</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>Initialize state</td>
        </tr>
        <tr>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>componentDidMount</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>useEffect(() => {}, [])</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>Run after component mounts</td>
        </tr>
        <tr>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>componentDidUpdate</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>useEffect(() => {})</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>Run after updates</td>
        </tr>
        <tr>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>componentWillUnmount</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>useEffect return function</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>Cleanup before unmount</td>
        </tr>
        <tr>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>this.setState</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>setState function</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>Update state</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// Export the App component so it can be rendered on the web page
export default App;
