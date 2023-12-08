import styles from './AnimationRegister.module.scss';

import { AnimatePresence, motion } from 'framer-motion';

import { ReactComponent as IconTel } from '../../images/animation/register/tel.svg';
import { ReactComponent as IconWoman } from '../../images/animation/register/woman.svg';
import { ReactComponent as IconCash } from '../../images/animation/register/cash.svg';

export const AnimationRegister = () => {
  const variants = {
    hidden: {
      x: '100',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        // ease: 'easeOut',
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.3,
      },
    },
  };

  return (
    <div className={styles['icon-box']}>
      <div className={styles['icon-tel']}>
        <IconTel />
      </div>

      <div className={styles['icon-woman']}>
        <AnimatePresence>
          <motion.div
            className="icon-man"
            layout
            initial="hidden"
            animate="visible"
            variants={variants}
            style={{ zIndex: 100 }}
          >
            <IconWoman />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles['icon-cash']}>
        <motion.div
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <IconCash />
        </motion.div>
      </div>
    </div>
  );
};
