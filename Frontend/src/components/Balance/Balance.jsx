import css from './Balance.module.scss';

export const Balance = () => {
  return (
    <div className={css.balance}>
      <p>YOUR BALANCE</p>
      <p>PLN 0.00</p>
    </div>
  );
};
