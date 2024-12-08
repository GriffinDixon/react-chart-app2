import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';

const LineChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch the data from the public data.json file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        // Map the JSON data to a format for the chart
        setChartData({
          labels: data.months, 
          datasets: [
            {
              label: 'Monthly Profits',
              data: data.profits, 
              borderColor: 'rgba(54, 162, 235, 1)', 
              backgroundColor: 'rgba(54, 162, 235, 0.2)', 
              tension: 0.4, 
            },
          ],
        });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // If data isn't loaded, display loading message
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
        text: 'Monthly Profits Line Chart',
      },
    },
  };

  return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;
