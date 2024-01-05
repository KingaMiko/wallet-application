import React, { useState } from 'react';

import { DoughnutChart } from './Doughnut';
import { BarChart } from './Bar';
import { useMediaQuery } from 'react-responsive';

import css from '../Stats.module.scss';

export const Yearly = ({ selectedYear }) => {
  const isMobileView = useMediaQuery({ maxWidth: 767 });
  const [noData, setNoData] = useState(false);

  const handleNoData = hasNoData => {
    setNoData(hasNoData);
  };

  if (noData) {
    return (
      <div className={css.noDataMessage}>
        <p>No statistics for this year</p>
      </div>
    );
  }

  return (
    <div className={css.chartsYearly}>
      <DoughnutChart selectedYear={selectedYear} onNoData={handleNoData} />
      {!isMobileView && (
        <BarChart selectedYear={selectedYear} onNoData={handleNoData} />
      )}
    </div>
  );
};
