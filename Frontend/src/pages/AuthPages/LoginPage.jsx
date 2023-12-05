import { LoginForm } from 'components';
import styles from './AuthPages.module.scss';
import sprite from 'images/icons.svg';
import { Background, Box } from 'components';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign In - Wallet</title>
      </Helmet>

      <Background />
      <div className={styles['wrapper-page']}>
        <div className={styles['wrapper-img']}>
          <div className={styles['box']}>
            <svg width="435" height="420">
              <use href={`${sprite}#icon-Frame-2-man-with-telephone`}></use>
            </svg>
            <h1 className={styles['heading']}>Finance App</h1>
          </div>
        </div>

        <div className={styles['wrapper-form']}>
          <Box>
            <p>Logo</p>
            <LoginForm />
          </Box>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
