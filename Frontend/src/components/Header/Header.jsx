import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//import Svg from 'images/icons.svg';
import css from './Header.module.css';
import { selectIsLoggedIn, selectUser } from 'redux/session/selectors';
import { logOut } from 'redux/session/operations';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <header className={css.headerContainer}>
      <div className={css.headerWrapper}>
        <div className={css.headerSide}>
          <Link to="/home" className={css.headerLogo}>
            {/* <Svg icon="wallet" size="40" /> */}
            <h2 className={css.appName}>Wallet</h2>
          </Link>
        </div>
        <div className={css.headerSide}>
          {isLoggedIn && (
            <p className={css.headerSideText}>{user.username ?? 'Hello'}</p>
          )}
          {isLoggedIn ? (
            <button className={css.headerLogout} onClick={handleLogout}>
              {/* <Svg icon="logout" size="18" /> */}
              <p className={css.headerSideText}>Exit</p>
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
