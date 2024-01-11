import React from 'react';
import ActiveNavLink from '../ActiveNavLink/ActiveNavLink';

import css from './NavigationMobile.module.scss';
import sprite from 'images/icons.svg';

const NavigationMobile = () => {
  return (
    <nav>
      <ul className={css.navigation}>
        <li>
          <ActiveNavLink to="/home" aria-label="Home">
            <svg className={css.icon} width="38px" height="38px">
              <use href={`${sprite}#icon-home3`}></use>
            </svg>
          </ActiveNavLink>
        </li>
        <li>
          <ActiveNavLink to="/statistics" aria-label="Statistics">
            <svg className={css.icon} width="38px" height="38px">
              <use href={`${sprite}#icon-baseline-timeline`}></use>
            </svg>
          </ActiveNavLink>
        </li>
        <li>
          <ActiveNavLink to="/currency" aria-label="Currency">
            <svg className={css.icon} width="38px" height="38px">
              <use href={`${sprite}#icon-baseline-dollar`}></use>
            </svg>
          </ActiveNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMobile;
