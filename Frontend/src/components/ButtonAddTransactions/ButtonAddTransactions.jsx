import { useDispatch } from 'react-redux';
import { setIsModalAddTransactionOpen } from 'redux/global/globalSlice';

import css from './ButtonAddTransactions.module.scss';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  const handleOpenAddTransactionModal = () => {
    dispatch(setIsModalAddTransactionOpen(true));
  };
  return (
    <button
      onClick={handleOpenAddTransactionModal}
      className={css.add_transaction_btn}
    >
      +
    </button>
  );
};
