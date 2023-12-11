import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsAuth, selectUser } from 'redux/session/selectors';
import { selectIsModalSettingsOpen } from 'redux/global/selectors';
import { logOut } from 'redux/session/operations';
import { setIsModalSettingsOpen } from 'redux/global/globalSlice';

import { Logo } from 'components/Logo/Logo';
import { OpenSettingsModal } from './Categories';
import sprite from 'images/icons.svg';
import css from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const isSettingsModalOpen = useSelector(selectIsModalSettingsOpen);

  const handleLogout = () => dispatch(logOut());
  const toggleModal = () =>
    dispatch(setIsModalSettingsOpen(!isSettingsModalOpen));

  return (
    <header className={css.headerContainer}>
      <div className={css.headerWrapper}>
        <Logo />

        <div className={css.headerSide}>
          {isAuth && (
            <p className={css.headerSideText}>{user.name ?? 'Hello'}</p>
          )}
          {isAuth ? (
            <>
              <button className={css.headerLogout} onClick={handleLogout}>
                <p className={css.headerSideText}>Exit</p>
                <svg icon="logout" width="18px" height="18px">
                  <use href={`${sprite}#icon-exit`}></use>
                </svg>
              </button>
              <button className={css.headerLogout} onClick={toggleModal}>
                <p className={css.headerSideText}>Settings</p>
              </button>
              <OpenSettingsModal openSettings={data => console.log(data)} />
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
