import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { walletInstance } from 'utils/api';
import { useEffect, useState } from 'react';
import css from '../Stats.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Expenses = ({ selectedYear, selectedMonth }) => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await walletInstance.get('/statistics', {
          params: {
            year: selectedYear,
            type: 'Expense',
            month: selectedMonth,
          },
        });

        const { categoriesStats } = response.data.data;

        const filteredCategories = categoriesStats.filter(
          item => item.total !== 0
        );

        const groupedCategories = filteredCategories.reduce((acc, item) => {
          const existingCategory = acc.find(
            category => category.category === item.category
          );
          if (existingCategory) {
            existingCategory.total += item.total;
          } else {
            acc.push({ category: item.category, total: item.total });
          }

          return acc;
        }, []);

        setCategoryData(groupedCategories);
      } catch (error) {
        console.error('There was a problem fetching the expense data:', error);
      }
    };

    fetchData();
  }, [selectedYear, selectedMonth]);

  const chartData = {
    labels: categoryData.map(item => item.category),
    datasets: [
      {
        label: 'Amount',
        data: categoryData.map(item => item.total),
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
        display: false,
      },
      title: {
        display: true,
        text: 'Expenses in categories',
      },
    },
  };

  return (
    <div>
      {categoryData.length > 0 &&
      categoryData.every(item => item.total === 0) ? (
        <p>No statistics for this month</p>
      ) : (
        <div className={css.chartStyle}>
          <div>
            <Doughnut options={options} data={chartData} />
          </div>
          <div className={css.tableBg}>
            <table className={css.categoryTable}>
              <thead className={css.categoryTableHead}>
                <tr>
                  <th>Category</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {categoryData.map(({ category, total }, index) => (
                  <tr key={category}>
                    <td>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          paddingLeft: '50px',
                        }}
                      >
                        <div
                          className={css.legendColor}
                          style={{
                            backgroundColor:
                              chartData.datasets[0].backgroundColor[index],
                          }}
                        ></div>
                        {category}
                      </div>
                    </td>
                    <td>{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
