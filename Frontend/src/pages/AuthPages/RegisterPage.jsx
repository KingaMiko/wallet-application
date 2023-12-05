import { RegistrationForm } from 'components';
import styles from './AuthPages.module.scss';
import { ReactComponent as RegisterIcon } from 'images/icons/icon-register-page.svg';
import { Background, Box } from 'components';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up - Wallet</title>
      </Helmet>

      <Background />
      <div className={styles['wrapper-page']}>
        <div className={styles['wrapper-img']}>
          <div>
            <RegisterIcon />
            <h1 className={styles['heading']}>Finance App</h1>
          </div>
        </div>

        <div className={styles['wrapper-form']}>
          <Box>
            <p>Logo</p>
            <RegistrationForm />
          </Box>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
