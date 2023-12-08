import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import styles from './Box.module.scss';

export const Box = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={`${styles['box']} ${className}`}>{children}</div>
    </motion.div>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
