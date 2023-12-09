import React, {useState} from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import css from './Header.module.css';
import { selectIsAuth, selectUser } from 'redux/session/selectors';
import { logOut } from 'redux/session/operations';
import { Logo } from 'components/Logo/Logo';
import { OpenSettingsModal } from './Categories';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => dispatch(logOut());

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            <>
              <button className={css.headerLogout} onClick={handleLogout}>
                <p className={css.headerSideText}>Exit</p>
              </button>
              <button className={css.headerSettings} onClick={handleOpenModal}>
                <p className={css.headerSideText}>Settings</p>
              </button>
              <OpenSettingsModal
                isOpen={isModalOpen}
                handleClose={handleCloseModal}
                openSettings={data => console.log(data)}
              />
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

// export const ButtonSettingsModal = () => {
//   const dispatch = useDispatch();
//   const handleOpenSettingsModal = () => {
//     dispatch(setIsModalSettingsOpen(true));
//   };
//   return (
//     <button
//       onClick={handleOpenSettingsModal}
//       // className={css.add_transaction_btn}
//     >
//       settings
//     </button>
//   );
// };







