import css from '../Stats.module.scss';
import React, { useState } from 'react';
import { Expenses } from './Expenses';
import { Incomes } from './Incomes';
import Select from 'react-select';
import { Button } from 'components';

export const Monthly = () => {
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
        />
      </div>
      <div className={css.chartsMonthly}>
        {selectedType.value === 'Expenses' && <Expenses />}
        {selectedType.value === 'Incomes' && <Incomes />}
      </div>
      <Button type="button" theme="color">
        Go back to Total
      </Button>
    </div>
  );
};
