import React from 'react';
import css from '../Stats.module.scss';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  const dataset = [
    { Month: 'January', Incomes: 1000, Expenses: 5000 },
    { Month: 'February', Incomes: 2000, Expenses: 5000 },
    { Month: 'March', Incomes: 1500, Expenses: 2500 },
    { Month: 'April', Incomes: 2500, Expenses: 1000 },
    { Month: 'May', Incomes: 2200, Expenses: 3700 },
    { Month: 'June', Incomes: 3000, Expenses: 4000 },
    { Month: 'July', Incomes: 2800, Expenses: 2000 },
    { Month: 'August', Incomes: 2400, Expenses: 1300 },
    { Month: 'September', Incomes: 4800, Expenses: 2500 },
    { Month: 'October', Incomes: 2500, Expenses: 5600 },
    { Month: 'November', Incomes: 2850, Expenses: 4200 },
    { Month: 'December', Incomes: 1800, Expenses: 1200 },
  ];

  const labels = dataset.map(entry => entry.Month);

  const data = {
    labels,
    datasets: [
      {
        label: 'Expenses',
        data: dataset.map(entry => entry.Expenses),
        backgroundColor: '#FF6384',
      },
      {
        label: 'Incomes',
        data: dataset.map(entry => entry.Incomes),
        backgroundColor: '#2E8B57',
      },
    ],
  };

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

  return (
    <div className={css.insideChartBar}>
      <Bar options={options} data={data} />
    </div>
  );
};
