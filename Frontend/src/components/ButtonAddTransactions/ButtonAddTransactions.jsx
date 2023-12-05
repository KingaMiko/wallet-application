import { useDispatch } from 'react-redux';
import css from './ButtonAddTransactions.module.scss';
import { setIsModalAddTransactionOpen } from 'redux/global/globalSlice';

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
