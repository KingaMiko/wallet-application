import styles from './Button.module.scss';

export const Button = ({ children, type = 'button', theme, className }) => {
  const buttonClass =
    theme === 'color'
      ? styles['button-color']
      : theme === 'white'
      ? styles['button-white']
      : '';

  return (
    <button
      className={`${styles.Button} ${buttonClass} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};
