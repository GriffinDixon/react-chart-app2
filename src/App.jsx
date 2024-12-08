import React from 'react';
import ChartComponent from './components/ChartComponent'; // Import your reusable chart component

function App() {
  return (
    <div>
      <h1>Financial Data Chart</h1>
      {/* Here you will use the ChartComponent and pass data and options as props */}
      <ChartComponent type="bar" data={/* Your data here */} options={/* Your chart options here */} />
    </div>
  );
}

export default App;
