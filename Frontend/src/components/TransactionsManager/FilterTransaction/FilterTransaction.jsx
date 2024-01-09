import React, { useState } from 'react';
import Select from 'react-select';
import css from './FilterTransaction.module.scss';

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
    borderRadius: '30px',
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

export const FilterTransaction = ({ onFilter }) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonthName = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(today);

  const [year, setYear] = useState({
    value: currentYear,
    label: currentYear.toString(),
  });
  const [month, setMonth] = useState({
    value: currentMonthName,
    label: currentMonthName,
  });

  const [limit, setLimit] = useState(10);

  const yearOptions = [
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' },
    { value: 2022, label: '2022' },
    { value: 2023, label: '2023' },
    { value: 2024, label: '2024' },
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

  const handleFilter = () => {
    onFilter({
      year: year.value,
      month: month.value,
      limit: parseInt(limit, 10),
      page: 1,
    });
  };

  const handleLimitChange = e => {
    const newLimit = parseInt(e.target.value, 10);
    setLimit(newLimit >= 0 ? newLimit : 0);
  };

  return (
    <div className={css.filterTransaction}>
      <div className={css.selectors}>
        Year
        <Select
          options={yearOptions}
          value={year}
          onChange={setYear}
          styles={customStyles}
        />
      </div>
      <div className={css.selectors}>
        Month
        <Select
          options={monthOptions}
          value={month}
          onChange={setMonth}
          styles={customStyles}
        />
      </div>
      <div className={css.selectors}>
        Limit
        <input
          className={css.filterSelect}
          type="number"
          value={limit}
          onChange={handleLimitChange}
        />
      </div>
      <button className={css.filterButton} onClick={handleFilter}>
        Filter
      </button>
    </div>
  );
};
