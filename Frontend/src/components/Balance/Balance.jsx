import css from './Balance.module.scss';

export const Balance = () => {
  return (
    <div className={css.balance}>
      <p className={css.title}>YOUR BALANCE</p>
      <p className={css.amount}>PLN 0.00</p>
    </div>
  );
};
