import { useField } from 'formik';

import sprite from 'images/icons.svg';
import styles from './Input.module.scss';

export const Input = ({ iconID, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles['box']}>
      <input className={styles['form-input']} {...field} {...props} />

      <svg width="20px" height="20px">
        <use href={`${sprite}#${iconID}`}></use>
      </svg>

      {meta.touched && meta.error ? (
        <div className={styles['error-message']}>{meta.error}</div>
      ) : null}
    </div>
  );
};
