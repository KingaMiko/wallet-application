import { LoginForm } from 'components';
import styles from './AuthPages.module.scss';
// import { ReactComponent as LoginIcon } from 'images/icons/icon-login-page.svg';
import { Background, Box, Logo, AnimationLogin } from 'components';
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
          <div>
            <AnimationLogin />
            <h1 className={styles['heading']}>Finance App</h1>
          </div>
        </div>

        <div className={styles['wrapper-form']}>
          <Box>
            <Logo />
            <LoginForm />
          </Box>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
