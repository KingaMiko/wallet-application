import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Box.module.scss';

const variants = {
  hidden: {
    x: '100',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'tween',
      stiffness: 200,
    },
  },
};

export const Box = ({ children, className }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="box"
          layout
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className={`${styles['box']} ${className}`}>{children}</div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
