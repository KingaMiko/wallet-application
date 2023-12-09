import React, { useState, useEffect } from 'react';
import { Transactions } from './Transactions/Transactions';
import { AddTransactionModal } from './ModalAddTransaction/ModalAddTransaction';
import { walletInstance } from 'utils/api';

export const TransactionsManager = () => {
  const [transactions, setTransactions] = useState([]);

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
  };
  fetchTransactions();

  const deleteTransaction = transactionId => {
    setTransactions(prevTransactions =>
      prevTransactions.filter(transaction => transaction.id !== transactionId)
    );
  };

  return (
    <div>
      <AddTransactionModal addTransaction={addTransaction} />
      <Transactions
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};
