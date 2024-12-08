import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = () => {
  // Data for the Bar Chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], 
    datasets: [
      {
        label: 'Monthly Sales', 
        data: [12, 19, 3, 5, 2, 3], 
        backgroundColor: 'rgba(75, 192, 192, 0.2)', 
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1, 
      },
    ],
  };

  // Options for the Bar Chart
  const options = {
    responsive: true, 
    plugins: {
      legend: {
        position: 'top', 
      },
      title: {
        display: true, 
        text: 'Monthly Sales Data', 
      },
    },
  };

  return (
    <div>
      <h2>Bar Chart</h2>
      {/* Render the reusable ChartComponent with type, data, and options */}
      <ChartComponent type="bar" data={data} options={options} />
    </div>
  );
};

export default BarChart;
