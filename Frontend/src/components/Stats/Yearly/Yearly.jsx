import React from 'react';

import { DoughnutChart } from './Doughnut';
import { BarChart } from './Bar';
import { useMediaQuery } from 'react-responsive';

import css from '../Stats.module.scss';

export const Yearly = ({ selectedYear }) => {
  const isMobileView = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={css.chartsYearly}>
      <DoughnutChart selectedYear={selectedYear} />
      {!isMobileView && <BarChart selectedYear={selectedYear} />}
    </div>
  );
};
