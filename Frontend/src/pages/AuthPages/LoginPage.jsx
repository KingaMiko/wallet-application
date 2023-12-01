import { LoginForm } from 'components';
import styles from './AuthPages.module.scss';

const LoginPage = () => {
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
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
