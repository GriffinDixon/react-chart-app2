import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch the data from the public data.json file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        // Map the data for the scatter chart
        const scatterData = data.months.map((month, index) => ({
          x: data.expenses[index], 
          y: data.profits[index], 
        }));
        setChartData({
          datasets: [
            {
              label: 'Expenses vs Profits',
              data: scatterData, 
              backgroundColor: 'rgba(255, 99, 132, 1)', 
            },
          ],
        });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expenses vs Profits Scatter Chart',
      },
    },
  };

  return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;
