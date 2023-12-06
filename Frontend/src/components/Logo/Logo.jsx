import React from 'react';
import { Link } from 'react-router-dom';
import css from './Logo.module.scss';
import sprite from 'images/icons.svg';

export const Logo = () => {
  return (
    <div className={css.wrapper}>
      <Link to="/home" className={css.logo}>
        <svg className={css.icon} width="38px" height="38px">
          <use href={`${sprite}#icon-Group-13-wallet`}></use>
        </svg>
        <h2 className={css.appName}>Wallet</h2>
      </Link>
    </div>
  );
};
