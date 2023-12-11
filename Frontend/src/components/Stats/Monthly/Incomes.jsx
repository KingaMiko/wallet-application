import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { walletInstance } from 'utils/api';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Incomes = ({ selectedYear, selectedMonth }) => {
  const [categoryLabels, setCategoryLabels] = useState([]);
  const [dataValues, setDataValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await walletInstance.get('/statistics', {
          params: {
            year: selectedYear,
            type: 'Income',
            month: selectedMonth,
          },
        });

        const { categoriesStats } = response.data.data;

        setCategoryLabels(categoriesStats.map(item => item.category));
        setDataValues(categoriesStats.map(item => item.total));
      } catch (error) {
        console.error('There was a problem fetching the income data:', error);
      }
    };

    fetchData();
  }, [selectedYear, selectedMonth]);

  const data = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'Amount',
        data: dataValues,
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
        text: 'Incomes in categories',
      },
    },
  };

  return (
    <div>
      {categoryLabels.length > 0 &&
      dataValues.length > 0 &&
      dataValues.every(value => value === 0) ? (
        <p>No statistics for this month</p>
      ) : (
        <Doughnut options={options} data={data} />
      )}
    </div>
  );
};
