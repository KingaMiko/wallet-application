import React, { useState } from 'react';
import css from './FilterTransaction.module.scss';

export const FilterTransaction = ({ onFilter }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [limit, setLimit] = useState(10);

  const handleFilter = () => {
    onFilter({ year, month, limit });
  };

  return (
    <div className={css.filterTransaction}>
      <div className={css.selectors}>
        Year
        <select
          className={css.filterSelect}
          value={year}
          onChange={e => setYear(e.target.value)}
        >
          {[2020, 2021, 2022, 2023, 2024].map(y => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
      <div className={css.selectors}>
        Month
        <select
          className={css.filterSelect}
          value={month}
          onChange={e => setMonth(e.target.value)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(m => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div className={css.selectors}>
        Limit
        <input
          className={css.filterSelect}
          type="number"
          value={limit}
          onChange={e => setLimit(e.target.value)}
        />
      </div>
      <button className={css.filterButton} onClick={handleFilter}>
        Filter
      </button>
    </div>
  );
};
