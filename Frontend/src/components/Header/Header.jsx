import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import css from './Header.module.css';
import { selectIsAuth, selectUser } from 'redux/session/selectors';
import { logOut } from 'redux/session/operations';
import { Logo } from 'components/Logo/Logo';

import { walletInstance } from 'utils/api';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut())
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        console.error('Błąd wylogowania:', error);
      });
  };

  return (
    <header className={css.headerContainer}>
      <div className={css.headerWrapper}>
        <Logo />
        <div className={css.headerSide}>
          {isAuth && (
            <p className={css.headerSideText}>{user.name ?? 'Hello'}</p>
          )}
          {isAuth ? (
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
