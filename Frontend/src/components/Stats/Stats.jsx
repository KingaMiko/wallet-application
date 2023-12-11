import css from './Stats.module.scss';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import { Yearly } from './Yearly/Yearly';
import { Monthly } from './Monthly/Monthly';

export const Stats = () => {
  const [selectedYear, setSelectedYear] = useState({
    value: 2023,
    label: 2023,
  });
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleYearChange = selectedOption => {
    setSelectedYear(selectedOption);
  };

  const handleMonthChange = selectedOption => {
    setSelectedMonth(selectedOption);
  };

  const handleResetMonth = () => {
    setSelectedMonth(null);
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    setSelectedYear({ value: year, label: year });
  }, [setSelectedYear]);

  const yearOptions = [
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 },
    { value: 2023, label: 2023 },
  ];

  const monthOptions = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  return (
    <div className={css.statsContainer}>
      <div className={css.selections}>
        <div className={css.selectors}>
          Year
          <div>
            <Select
              options={yearOptions}
              value={selectedYear}
              onChange={handleYearChange}
            />
          </div>
        </div>
        <div className={css.selectors}>
          Month
          <div>
            <Select
              options={monthOptions}
              value={selectedMonth}
              onChange={handleMonthChange}
            />
          </div>
        </div>
      </div>
      {selectedMonth ? (
        <Monthly
          selectedYear={selectedYear.value}
          selectedMonth={selectedMonth.value}
          handleResetMonth={handleResetMonth}
        />
      ) : (
        <Yearly selectedYear={selectedYear.value} />
      )}
    </div>
  );
};

export default Stats;
