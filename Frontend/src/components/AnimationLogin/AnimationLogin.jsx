import styles from './AnimationLogin.module.scss';

import { ReactComponent as IconTel } from '../../images/animation/login/tel.svg';
import { ReactComponent as IconMan } from '../../images/animation/login/man.svg';
import { ReactComponent as IconCash } from '../../images/animation/login/cash.svg';
import { ReactComponent as IconBasket } from '../../images/animation/login/basket.svg';
import { ReactComponent as IconCard } from '../../images/animation/login/card.svg';

export const AnimationLogin = () => {
  return (
    <div className={styles['icon-box']}>
      <div className={styles['icon-tel']}>
        <IconTel />
      </div>

      <div className={styles['icon-man']}>
        <IconMan />
      </div>

      <div className={styles['icon-cash']}>
        <IconCash />
      </div>
      <div className={styles['icon-basket']}>
        <IconBasket />
      </div>
      <div className={styles['icon-card']}>
        <IconCard />
      </div>
    </div>
  );
};
