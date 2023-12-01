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
          <div className={styles['box']}>
            <p>Logo</p>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
