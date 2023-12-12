import React from 'react';
import { ButtonAddTransactions } from '../../ButtonAddTransactions/ButtonAddTransactions';
import walletImage from '../../../images/wallet.png';
import css from './EmptyWallet.module.scss';

export const EmptyWallet = () => {
  return (
    <div className={css.container}>
      <div className={css.emptywallet}>
        <p>Your Wallet is empty. Enter your first transaction.</p>
        {/* <ButtonAddTransactions /> */}
        <img src={walletImage} alt="Empty Wallet" />
      </div>
    </div>
  );
};
