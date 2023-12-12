import React from 'react';

import { DoughnutChart } from './Doughnut';
import { BarChart } from './Bar';

import css from '../Stats.module.scss';

export const Yearly = ({ selectedYear }) => {
  return (
    <div className={css.chartsYearly}>
      <DoughnutChart selectedYear={selectedYear} />
      <BarChart selectedYear={selectedYear} />
    </div>
  );
};
