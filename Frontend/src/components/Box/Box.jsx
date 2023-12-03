import styles from './Box.module.scss';

export const Box = ({ children, className }) => {
  return <div className={`${styles['box']} ${className}`}>{children}</div>;
};
