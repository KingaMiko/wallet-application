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
        ease: 'easeOut',
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
        <IconCash />
      </div>
    </div>
  );
};
