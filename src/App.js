import React from 'react';
import ClassCounter from './ClassCounter';
import FunctionCounter from './FunctionCounter';
import './Counter.css';

const App = () => {
  return (
    <div className="App">
      <header style={{ 
        textAlign: 'center', 
        padding: '40px 20px', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        marginBottom: '40px'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>React Components Comparison</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, margin: '10px 0 0 0' }}>
          Class Components vs Functional Components with Hooks
        </p>
      </header>

      <div className="comparison-container">
        <ClassCounter />
        <FunctionCounter />
      </div>

      <div style={{ 
        maxWidth: '800px', 
        margin: '40px auto', 
        padding: '30px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
      }}>
        <ComparisonWriteUp />
      </div>
    </div>
  );
};

const ComparisonWriteUp = () => (
  <div>
    <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>
      Component Comparison Analysis
    </h2>
    
    <div style={{ display: 'grid', gap: '30px' }}>
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
      
      <LifecycleComparison />
    </div>
  </div>
);

const ComparisonSection = ({ title, pros, cons }) => (
  <div>
    <h3 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
      {title}
    </h3>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <div>
        <h4 style={{ color: '#27ae60' }}>✅ Advantages</h4>
        <ul>
          {pros.map((pro, index) => (
            <li key={index}>{pro}</li>
          ))}
        </ul>
      </div>
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

const LifecycleComparison = () => (
  <div>
    <h3 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
      Lifecycle Methods vs Hooks Comparison
    </h3>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ background: '#f8f9fa' }}>
          <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Class Component</th>
          <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Functional Component</th>
          <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>constructor</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>useState</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>Initialize state</td>
        </tr>
        <tr>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>componentDidMount</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>useEffect(() => {}, [])</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>Run after mount</td>
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

export default App;