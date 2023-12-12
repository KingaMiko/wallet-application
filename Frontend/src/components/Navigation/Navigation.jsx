import React from 'react';
import ActiveNavLink from '../ActiveNavLink/ActiveNavLink';

import css from './Navigation.module.scss';
import sprite from 'images/icons.svg';

const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigation}>
        <li>
          <ActiveNavLink to="/home">
            <svg className={css.icon} width="38px" height="38px">
              <use href={`${sprite}#icon-home3`}></use>
            </svg>
            Home
          </ActiveNavLink>
        </li>
        <li>
          <ActiveNavLink to="/statistics">
            <svg className={css.icon} width="38px" height="38px">
              <use href={`${sprite}#icon-baseline-timeline`}></use>
            </svg>
            Statistics
          </ActiveNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
