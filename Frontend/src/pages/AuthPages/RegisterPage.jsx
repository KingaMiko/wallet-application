import { RegistrationForm } from 'components';
import styles from './AuthPages.module.scss';
import sprite from 'images/icons.svg';
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
            <svg className={styles['clients-icon']} width="435" height="420">
              <use href={sprite + '#icon-Frame-4-woman-with-phone'}></use>
            </svg>
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
