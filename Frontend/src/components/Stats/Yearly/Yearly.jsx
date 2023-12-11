import css from '../Stats.module.scss';
import React from 'react';
import { DoughnutChart } from './Doughnut';
import { BarChart } from './Bar';

export const Yearly = ({ selectedYear }) => {
  return (
    <div className={css.chartsYearly}>
      <DoughnutChart selectedYear={selectedYear} />
      <BarChart selectedYear={selectedYear} />
    </div>
  );
};
