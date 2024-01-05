import React, { useState, useEffect } from 'react';

import { walletInstance } from 'utils/api';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import css from '../Stats.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ selectedYear, onNoData }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    console.log('Selected year changed to:', selectedYear);
    const fetchData = async () => {
      try {
        const response = await walletInstance.get('/statistics', {
          params: {
            year: selectedYear,
          },
        });

        const data = response.data.data;

        const months = Array.from({ length: 12 }, (_, i) => i + 1);

        const expensesData = months.map(
          month => data.eachMonthStats['Expense'][month] || 0
        );
        const incomesData = months.map(
          month => data.eachMonthStats['Income'][month] || 0
        );

        const formattedData = {
          labels: months.map(month =>
            new Date(selectedYear, month - 1).toLocaleString('en-US', {
              month: 'long',
            })
          ),
          datasets: [
            {
              label: 'Expenses',
              data: expensesData,
              backgroundColor: '#24CCA7',
            },
            {
              label: 'Incomes',
              data: incomesData,
              backgroundColor: '#6E78E8',
            },
          ],
        };

        setChartData(formattedData);
        if (
          !expensesData.some(value => value > 0) &&
          !incomesData.some(value => value > 0)
        ) {
          onNoData(true);
        } else {
          onNoData(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedYear, onNoData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Statistics for the year',
      },
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <div className={css.insideChartBar}>
      {chartData ? <Bar options={options} data={chartData} /> : 'Loading...'}
    </div>
  );
};
