import React from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {
  return (
    <div>
      <h1>Dynamic Chart Dashboard</h1>

      <div>
        <h2>Bar Chart: Monthly Sales</h2>
        <BarChart />
      </div>

      <div>
        <h2>Line Chart: Monthly Profits</h2>
        <LineChart />
      </div>

      <div>
        <h2>Scatter Chart: Expenses vs Profits</h2>
        <ScatterChart />
      </div>

      <div>
        <h2>Bubble Chart: Sales, Profits, and Expenses</h2>
        <BubbleChart />
      </div>
    </div>
  );
};

export default App;
