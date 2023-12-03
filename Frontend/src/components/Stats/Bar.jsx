import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Statistics in months',
      },
    },
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Expenses',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Incomes',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
        backgroundColor: 'rgba(75, 192, 192)',
      },
    ],
  };

  return (
    <div style={{ width: '450px', height: '450px' }}>
      <Bar options={options} data={data} />
    </div>
  );
};
