import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch the data from the public data.json file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        // Map the data for the bubble chart
        const bubbleData = data.months.map((month, index) => ({
          x: data.sales[index], 
          y: data.profits[index], 
          r: data.expenses[index] / 100, 
        }));
        setChartData({
          datasets: [
            {
              label: 'Sales, Profits, and Expenses Bubble Chart',
              data: bubbleData, 
              backgroundColor: 'rgba(153, 102, 255, 0.5)', 
              borderColor: 'rgba(153, 102, 255, 1)', 
              borderWidth: 1,
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
        text: 'Sales, Profits, and Expenses Bubble Chart',
      },
    },
  };

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;
