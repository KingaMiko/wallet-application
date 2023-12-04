import React from 'react';
import { Link } from 'react-router-dom';
import Svg from 'components/images/icons.svg';
import css from './Header.module.css';
/*import useAuth from
import { toggleLogaoutModal } from*/
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const openModal = () => {
    dispatch(toggleLogaoutModal());
  };
  return (
    <header className={css.headerContainer}>
      <div className={css.headerWrapper}>
        <div className={css.headerSide}>
          <Link to="/dashboard" className={css.headerLogo}>
            <Svg icon="wallet" size="40" />
            <h2 className={css.appName}>Wallet</h2>
          </Link>
        </div>
        <div className={css.headerSide}>
          <p className={css.headerSideText}>{user.username ?? 'Hello'}</p>
          <button className={css.headerLogout} onClick={openModal}>
            <Svg icon="logout" size="18" />
            <p className={css.headerSideText}>Exit</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
