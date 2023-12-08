import { RegistrationForm } from 'components';
import styles from './AuthPages.module.scss';
import { ReactComponent as RegisterIcon } from 'images/icons/icon-register-page.svg';
import { Background, Box, Logo } from 'components';
import { Helmet } from 'react-helmet';

import { AnimationRegister } from '../../components/AnimationRegister/AnimationRegister';

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
            <AnimationRegister />
            <h1 className={styles['heading']}>Finance App</h1>
          </div>
        </div>

        <div className={styles['wrapper-form']}>
          <Box>
            <Logo />
            <RegistrationForm />
          </Box>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
