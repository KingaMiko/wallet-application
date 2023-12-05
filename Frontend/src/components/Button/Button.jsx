import PropTypes from 'prop-types';

import styles from './Button.module.scss';

export const Button = ({
  children,
  type = 'button',
  theme,
  className,
  onClick,
}) => {
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
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  theme: PropTypes.oneOf(['color', 'white']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};
