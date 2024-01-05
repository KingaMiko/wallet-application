import React, { useState } from 'react';
import Select from 'react-select';
import { Yearly } from './Yearly/Yearly';
import { Monthly } from './Monthly/Monthly';

import css from './Stats.module.scss';

const customStyles = {
  control: provided => ({
    ...provided,
    borderRadius: '30px',
    borderColor: '#ccc',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '30px',
  }),
  menuList: provided => ({
    ...provided,
    'border-radius': '30px',
    padding: '0px',
  }),
  option: (provided, { isFocused, isSelected }) => {
    let styles = {
      ...provided,
    };

    if (isFocused) {
      styles = {
        ...styles,
        borderRadius: '30px',
      };
    }
    return styles;
  },
};

export const Stats = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  const [selectedYear, setSelectedYear] = useState({
    value: currentYear,
    label: currentYear,
  });
  const [selectedMonth, setSelectedMonth] = useState(null);

  const [refreshKey, setRefreshKey] = useState(0);

  const handleYearChange = selectedOption => {
    setSelectedYear(selectedOption);
    if (selectedMonth) {
      setSelectedMonth(null);
    }
    setRefreshKey(prev => prev + 1);
  };

  const handleMonthChange = selectedOption => {
    setSelectedMonth(selectedOption);
  };

  const handleResetMonth = () => {
    setSelectedMonth(null);
  };

  const yearOptions = [
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 },
    { value: 2023, label: 2023 },
    { value: 2024, label: 2024 },
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
              styles={customStyles}
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
              styles={customStyles}
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
        <Yearly key={refreshKey} selectedYear={selectedYear.value} />
      )}
    </div>
  );
};

export default Stats;
