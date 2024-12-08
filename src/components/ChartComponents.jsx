import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Create chart instance
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type,
      data,
      options,
    });

    return () => {
      // Cleanup chart instance on unmount
      chartInstance.current.destroy();
    };
  }, [type, data, options]); 

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
