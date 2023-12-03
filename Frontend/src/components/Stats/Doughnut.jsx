import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = () => {
  const data = {
    labels: ['Expenses', 'Incomes'],
    datasets: [
      {
        label: 'Amount',
        data: [5000, 4300],
        backgroundColor: ['rgba(255, 99, 132)', 'rgba(75, 192, 192)'],
        hoverBackgroundColor: ['rgba(255, 99, 162)', 'rgba(75, 192, 202)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Statistics in total',
      },
    },
  };

  return (
    <div style={{ width: '350px', height: '350px' }}>
      <Doughnut options={options} data={data} />
    </div>
  );
};
