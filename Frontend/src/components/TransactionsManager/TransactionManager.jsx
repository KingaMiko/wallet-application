import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Transactions } from './Transactions/Transactions';
import {
  addTransaction as addTransactionThunk,
  getTransactions,
  deleteTransaction,
} from 'redux/finance/operations';
import { getUserDetails } from 'redux/session/operations';
import { setIsModalEditTransactionOpen } from 'redux/global/globalSlice';
import { selectTransactions } from 'redux/finance/selectors';
import { AddTransactionModal } from './ModalAddTransaction/ModalAddTransaction';
import { EditTransactionModal } from './ModalEditTransaction/ModalEditTransaction';
import { EmptyWallet } from './EmptyWallet/EmptyWallet';

export const TransactionsManager = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const [isTransactionAdded, setTransactionAdded] = useState(false);
  const [editedTransaction, setEditedTransaction] = useState(null);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch, isTransactionAdded]);

  const handleAddTransaction = newTransactionData => {
    dispatch(addTransactionThunk(newTransactionData))
      .then(() => {
        setTransactionAdded(prevState => !prevState);
        dispatch(getUserDetails());
      })
      .catch(error => {
        console.error('Error while adding the transaction:', error);
      });
  };

  const handleEdit = transaction => {
    console.log('Edytowanie transakcji:', transaction);
    setEditedTransaction(transaction);
    dispatch(setIsModalEditTransactionOpen(true));
  };

  const handleDelete = transactionId => {
    dispatch(deleteTransaction(transactionId))
      .then(() => {
        dispatch(getTransactions());
        dispatch(getUserDetails());
      })
      .catch(error => {
        console.error('Error while deleting the transaction:', error);
      });
  };

  return (
    <div>
      <AddTransactionModal addTransaction={handleAddTransaction} />
      <EditTransactionModal
        editedTransaction={editedTransaction}
        onTransactionUpdate={() => dispatch(getTransactions())}
      />
      {transactions.length === 0 ? (
        <EmptyWallet />
      ) : (
        <Transactions
          transactions={transactions}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
};
