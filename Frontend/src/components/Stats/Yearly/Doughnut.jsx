import React from 'react';
import css from '../Stats.module.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { walletInstance } from 'utils/api';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectYear } from '../../../redux/finance/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = () => {
  const selectedYear = useSelector(selectYear);

  const [statisticsData, setStatisticsData] = useState({
    expenses: 0,
    incomes: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      console.log('fetchstatistics');
      debugger;
      try {
        const response = await walletInstance.get('/statistics', {
          params: {
            year: selectedYear,
          },
        });

        const { expanses, income } = response.data.data;
        console.log('expanses', expanses);
        console.log('income', income);
        setStatisticsData({ expenses: expanses, incomes: income });
      } catch (error) {
        console.error('There was a problem fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, [selectedYear]);

  const data = {
    labels: ['Expenses', 'Incomes'],
    datasets: [
      {
        label: 'Amount',
        data: [statisticsData.expenses, statisticsData.incomes], // Użycie danych z API
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
