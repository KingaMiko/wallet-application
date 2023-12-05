import css from './Stats.module.scss';
import React, { useState } from 'react';
import { DoughnutChart } from './Doughnut';
import { BarChart } from './Bar';
import Select from 'react-select';

export const Stats = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryOptions = [
    { value: 'expenses', label: 'Expenses' },
    { value: 'incomes', label: 'Incomes' },
  ];

  const handleCategoryChange = selectedOption => {
    setSelectedCategory(selectedOption);
  };

  return (
    <div className={css.statsContainer}>
      Statistics
      <div className={css.charts}>
        <DoughnutChart />
        <BarChart />
      </div>
      <div className={css.selections}>
        Select values
        <div className={css.selectors}>
          <Select
            options={categoryOptions}
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
