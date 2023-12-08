import styles from './AnimationLogin.module.scss';

import { AnimatePresence, motion } from 'framer-motion';

import { ReactComponent as IconTel } from '../../images/animation/login/tel.svg';
import { ReactComponent as IconMan } from '../../images/animation/login/man.svg';
import { ReactComponent as IconCash } from '../../images/animation/login/cash.svg';
import { ReactComponent as IconBasket } from '../../images/animation/login/basket.svg';
import { ReactComponent as IconCard } from '../../images/animation/login/card.svg';

export const AnimationLogin = () => {
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

      <div className={styles['icon-man']}>
        <AnimatePresence>
          <motion.div
            className="icon-man"
            layout
            initial="hidden"
            animate="visible"
            variants={variants}
            style={{ zIndex: 100 }}
          >
            <IconMan />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles['icon-cash']}>
        <motion.div
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconCash />
        </motion.div>
      </div>

      <div className={styles['icon-basket']}>
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconBasket />
        </motion.div>
      </div>

      <div className={styles['icon-card']}>
        <IconCard />
      </div>
    </div>
  );
};
