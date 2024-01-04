import React, { useState } from 'react';
import Select from 'react-select';

import { Expenses } from './Expenses';
import { Incomes } from './Incomes';
import { Button } from 'components';

import css from '../Stats.module.scss';

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

export const Monthly = ({ selectedYear, selectedMonth, handleResetMonth }) => {
  const [selectedType, setSelectedType] = useState({
    value: 'Expenses',
    label: 'Expenses',
  });

  const typeOptions = [
    { value: 'Expenses', label: 'Expenses' },
    { value: 'Incomes', label: 'Incomes' },
  ];

  const handleTypeChange = selectedOption => {
    setSelectedType(selectedOption);
  };

  return (
    <div className={css.layoutMonthly}>
      <div>
        Transactions Type
        <Select
          options={typeOptions}
          value={selectedType}
          onChange={handleTypeChange}
          styles={customStyles}
        />
      </div>
      <div className={css.chartsMonthly}>
        {selectedType.value === 'Expenses' && (
          <Expenses selectedYear={selectedYear} selectedMonth={selectedMonth} />
        )}
        {selectedType.value === 'Incomes' && (
          <Incomes selectedYear={selectedYear} selectedMonth={selectedMonth} />
        )}
      </div>
      <Button type="button" theme="color" onClick={handleResetMonth}>
        Go back to Total
      </Button>
    </div>
  );
};
