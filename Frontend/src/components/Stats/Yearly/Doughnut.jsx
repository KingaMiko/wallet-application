import React from 'react';
import css from '../Stats.module.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = () => {
  const data = {
    labels: ['Expenses', 'Incomes'],
    datasets: [
      {
        label: 'Amount',
        data: [3500, 5000],
        backgroundColor: ['#24CCA7', '#6E78E8'],
        hoverBackgroundColor: ['#1aab8c', '#4A56E2'],
        borderColor: ['#24CCA7', '#6E78E8'],
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
        text: 'Statistics in total',
      },
    },
  };

  return (
    <div className={css.insideChartDoughnut}>
      <Doughnut options={options} data={data} />
    </div>
  );
};
