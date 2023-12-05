import React from 'react';
import ActiveNavLink from '../ActiveNavLink/ActiveNavLink';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <ActiveNavLink to="/home">Home</ActiveNavLink>
        </li>
        <li>
          <ActiveNavLink to="/statistics">Statistics</ActiveNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
