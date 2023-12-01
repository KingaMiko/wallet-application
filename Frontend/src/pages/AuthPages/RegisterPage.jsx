import { RegistrationForm } from 'components';
import styles from './AuthPages.module.scss';

const RegisterPage = () => {
  return (
    <>
      <div className={styles['wrapper-page']}>
        <div className={styles['wrapper-img']}>
          <div>obrazek</div>
          <h1>Finance App</h1>
        </div>

        <div className={styles['wrapper-form']}>
          <RegistrationForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
