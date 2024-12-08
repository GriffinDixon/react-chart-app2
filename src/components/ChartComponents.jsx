import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

function ChartComponent({ type, data, options }) {
  const chartRef = useRef(null); // Reference to the canvas element
  const chartInstance = useRef(null); // Reference to the chart instance

  useEffect(() => {
    // Initialize the chart when the component mounts
    if (chartRef.current && data) {
      chartInstance.current = new Chart(chartRef.current, {
        type: type, // Chart type (bar, line)
        data: data, // Chart data
        options: options, // Chart configuration options
      });
    }

    // Cleanup: destroy the chart when the component unmounts or data/props change
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]); // Re-run effect if type, data, or options change

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default ChartComponent;
