import React from 'react';
import { useEffect, useState } from 'react';

import { walletInstance } from 'utils/api';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import css from '../Stats.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ selectedYear, onNoData }) => {
  const [statisticsData, setStatisticsData] = useState({
    expenses: 0,
    incomes: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await walletInstance.get('/statistics', {
          params: {
            year: selectedYear,
          },
        });

        const { expenses, income } = response.data.data;
        setStatisticsData({ expenses: expenses, incomes: income });
        if (expenses === 0 && income === 0) {
          onNoData(true);
        } else {
          onNoData(false);
        }
      } catch (error) {
        console.error('There was a problem fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, [selectedYear, onNoData]);

  const data = {
    labels: ['Expenses', 'Incomes'],
    datasets: [
      {
        label: 'Amount',
        data: [statisticsData.expenses, statisticsData.incomes],
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
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <div className={css.insideChartDoughnut}>
      <Doughnut options={options} data={data} />
    </div>
  );
};
