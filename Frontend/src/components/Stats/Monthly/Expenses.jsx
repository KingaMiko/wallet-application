import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Expenses = () => {
  const data = {
    labels: [
      'Main expenses',
      'Products',
      'Car',
      'Self care',
      'Child care',
      'Household products',
      'Education',
      'Leisure',
    ],
    datasets: [
      {
        label: 'Amount',
        data: [2500, 1500, 500, 600, 200, 350, 150, 120],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FFD700',
          '#2E8B57',
          '#FF6347',
          '#8A2BE2',
        ],
        hoverBackgroundColor: [
          '#FF425B',
          '#2680E4',
          '#FFAC2D',
          '#35A8A8',
          '#7F48FF',
          '#FF7845',
          '#FFC52E',
          '#227547',
          '#FF4F33',
          '#7837B5',
        ],
        borderColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FFD700',
          '#2E8B57',
          '#FF6347',
          '#8A2BE2',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Expenses in categories',
      },
    },
  };

  return (
    <div style={{ width: '420px', height: '420px' }}>
      <Doughnut options={options} data={data} />
    </div>
  );
};
