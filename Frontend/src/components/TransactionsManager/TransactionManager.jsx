import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Transactions } from './Transactions/Transactions';
import { AddTransactionModal } from './ModalAddTransaction/ModalAddTransaction';
import { EditTransactionModal } from './ModalEditTransaction/ModalEditTransaction';
import { walletInstance } from 'utils/api';
import { selectIsModalEditTransactionOpen } from 'redux/global/selectors';
import { setIsModalEditTransactionOpen } from 'redux/global/globalSlice';

export const TransactionsManager = () => {
  const [transactions, setTransactions] = useState([]);
  const isEditModalOpen = useSelector(selectIsModalEditTransactionOpen);
  const dispatch = useDispatch();
  const [editedTransaction, setEditedTransaction] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await walletInstance.get('/transactions');
      const fetchedTransactions = response.data.data.map(tr => ({
        id: tr._id,
        date: tr.date ? new Date(tr.date).toLocaleDateString() : '',
        type: tr.type || '',
        category: tr.category ? tr.category.toString() : '',
        comment: tr.comment || '',
        sum: tr.sum ? tr.sum.toString() : '',
      }));
      setTransactions(fetchedTransactions);
    } catch (error) {
      console.error('Error fetching transactions', error);
    }
  };

  const addTransaction = newTransaction => {
    setTransactions(prevTransactions => [
      ...prevTransactions,
      {
        ...newTransaction,
        id: newTransaction._id,
      },
    ]);
    fetchTransactions();
  };

  const editTransaction = transaction => {
    setEditedTransaction(transaction);
    dispatch(setIsModalEditTransactionOpen(true));
  };

  const updateTransactionList = updatedTransaction => {
    // Logika aktualizacji listy transakcji
  };
  const deleteTransaction = transactionId => {
    setTransactions(prevTransactions =>
      prevTransactions.filter(transaction => transaction.id !== transactionId)
    );
  };

  return (
    <div>
      <AddTransactionModal addTransaction={addTransaction} />
      {isEditModalOpen && (
        <EditTransactionModal
          editedTransaction={editedTransaction}
          updateTransactionList={updateTransactionList}
        />
      )}
      <Transactions
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        editTransaction={editTransaction}
      />
    </div>
  );
};
