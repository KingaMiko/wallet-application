import { RegistrationForm } from 'components';
import styles from './AuthPages.module.scss';
import sprite from 'images/icons.svg';
import { Background } from 'components';

const RegisterPage = () => {
  return (
    <>
      <Background />
      <div className={styles['wrapper-page']}>
        <div className={styles['wrapper-img']}>
          <div>
            {' '}
            <svg className={styles['clients-icon']} width="435" height="420">
              <use href={sprite + '#icon-Frame-1-woman-with-telephone'}></use>
            </svg>
          </div>
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
