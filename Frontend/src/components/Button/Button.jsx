
import styles from './Button.module.scss';

export const Button = ({ children, type = 'button', theme }) => {
  const buttonClass =
    theme === 'color'
      ? styles['button-color']
      : theme === 'white'
      ? styles['button-white']
      : '';

  return (
    <button className={`${styles.Button} ${buttonClass}`} type={type}>
      {children}
    </button>
  );