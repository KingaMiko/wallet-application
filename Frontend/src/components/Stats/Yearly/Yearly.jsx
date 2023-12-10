import css from '../Stats.module.scss';
import React from 'react';
import { DoughnutChart } from './Doughnut';
import { BarChart } from './Bar';

export const Yearly = () => {
  return (
    <div className={css.chartsYearly}>
      <DoughnutChart />
      <BarChart />
    </div>
  );
};
