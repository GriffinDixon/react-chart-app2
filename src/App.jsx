import React from 'react';
import BarChart from './components/BarChart'; // Import the BarChart component

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Page Title */}
      <h1>Chart Dashboard</h1>
      
      {/* Render the BarChart component */}
      <BarChart />
    </div>
  );
};

export default App;
