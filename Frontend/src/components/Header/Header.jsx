import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsAuth, selectUser } from 'redux/session/selectors';
import {
  selectIsModalSettingsOpen,
  selectIsModalLogoutOpen,
} from 'redux/global/selectors';
import { logOut } from 'redux/session/operations';
import {
  setIsModalSettingsOpen,
  setIsModalLogoutOpen,
} from 'redux/global/globalSlice';

import { Logo } from 'components/Logo/Logo';
import { OpenSettingsModal } from './Categories';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import sprite from 'images/icons.svg';
import css from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const isModalLogoutOpen = useSelector(selectIsModalLogoutOpen);

  const handleLogoutClick = () => {
    dispatch(setIsModalLogoutOpen(true));
  };

  const handleCloseModalLogout = () => {
    dispatch(setIsModalLogoutOpen(false));
  };

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
          {isAuth && <p className={css.headerSideText}>Hello, {user.name}</p>}
          {isAuth ? (
            <>
              <div>
                <div className={css.headerSideButtons}>
                  <button className={css.headerSettings} onClick={toggleModal}>
                    <p className={css.headerSideText}></p>
                    <svg icon="settings" width="18px" height="18px">
                      <use href={`${sprite}#icon-pencil2`}></use>
                    </svg>
                  </button>
                  <button
                    className={css.headerLogout}
                    onClick={handleLogoutClick}
                  >
                    <p className={css.headerSideText}>Exit</p>
                    <svg icon="logout" width="18px" height="18px">
                      <use href={`${sprite}#icon-exit`}></use>
                    </svg>
                  </button>
                </div>
                <OpenSettingsModal openSettings={data => console.log(data)} />
              </div>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
      {isModalLogoutOpen && <ModalLogout onClose={handleCloseModalLogout} />}
    </header>
  );
};

export default Header;
