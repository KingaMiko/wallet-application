import React from 'react';
import css from './EmptyWallet.module.scss';

export const EmptyWallet = () => {
  return (
    <div className={css.container}>
      <div className={css.emptywallet}>
        <p>No transactions to display</p>
      </div>
    </div>
  );
};
