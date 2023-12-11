import css from './Stats.module.scss';
import React, { useEffect } from 'react';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Yearly } from './Yearly/Yearly';
import { Monthly } from './Monthly/Monthly';

import {
  selectMonth,
  selectYear,
  // selectType,
} from '../../redux/finance/selectors';
import {
  // setExpenseStats,
  // setIncomeStats,
  // setExpanses,
  // setIncome,
  // setEachMonthStats,
  setYear,
  setMonth,
} from '../../redux/finance/financeSlice';

export const Stats = () => {
  const dispatch = useDispatch();
  const selectedYear = useSelector(selectYear);
  const selectedMonth = useSelector(selectMonth);
  // const type = useSelector(selectType);

  const handleYearChange = selectedOption => {
    dispatch(setYear(selectedOption));
  };

  const handleMonthChange = selectedOption => {
    dispatch(setMonth(selectedOption));
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    dispatch(setYear(year));
  }, [dispatch]);

  /////////////////////////////////////////////
  /////////////////////////////////////////////
  /////////////////////////////////////////////

  const yearOptions = [
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 },
    { value: 2023, label: 2023 },
  ];

  const monthOptions = [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
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
        <Monthly selectedYear={selectedYear} selectedMonth={selectedMonth} />
      ) : (
        <Yearly selectedYear={selectedYear} />
      )}
    </div>
  );
};

export default Stats;
