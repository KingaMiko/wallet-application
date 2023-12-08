import styles from './AnimationLogin.module.scss';

export const AnimationLogin = () => {
  return (
    <div className={styles['icon-box']}>
      <div className={styles['icon-tel']}></div>

      <div className={styles['icon-man']}></div>

      <div className={styles['icon-cash']}></div>
      <div className={styles['icon-basket']}></div>
      <div className={styles['icon-card']}></div>
    </div>
  );
};
