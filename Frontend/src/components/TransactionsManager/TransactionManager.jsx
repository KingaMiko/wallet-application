import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Transactions } from './Transactions/Transactions';
import {
  addTransaction as addTransactionThunk,
  getTransactions,
  deleteTransaction,
  updateTransaction,
} from 'redux/finance/operations';
import { selectTransactions } from 'redux/finance/selectors';
import { AddTransactionModal } from './ModalAddTransaction/ModalAddTransaction';

export const TransactionsManager = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const [isTransactionAdded, setTransactionAdded] = useState(false);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch, isTransactionAdded]);

  const handleAddTransaction = newTransactionData => {
    dispatch(addTransactionThunk(newTransactionData))
      .then(() => {
        setTransactionAdded(true);
      })
      .catch(error => {
        console.error('Błąd podczas dodawania transakcji:', error);
      });
  };

  const handleDelete = transactionId => {
    dispatch(deleteTransaction(transactionId));
  };

  const handleUpdate = updatedTransaction => {
    dispatch(updateTransaction(updatedTransaction));
  };

  return (
    <div>
      <AddTransactionModal addTransaction={handleAddTransaction} />

      <Transactions
        transactions={transactions}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Transactions } from './Transactions/Transactions';
// import { AddTransactionModal } from './ModalAddTransaction/ModalAddTransaction';
// import { EditTransactionModal } from './ModalEditTransaction/ModalEditTransaction';
// import { walletInstance } from 'utils/api';
// import { selectIsModalEditTransactionOpen } from 'redux/global/selectors';
// import { setIsModalEditTransactionOpen } from 'redux/global/globalSlice';

// export const TransactionsManager = () => {
//   const [transactions, setTransactions] = useState([]);
//   const isEditModalOpen = useSelector(selectIsModalEditTransactionOpen);
//   const dispatch = useDispatch();
//   const [editedTransaction, setEditedTransaction] = useState(null);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const response = await walletInstance.get('/transactions');
//       const fetchedTransactions = response.data.data.map(tr => ({
//         _id: tr._id,
//         date: tr.date ? new Date(tr.date).toLocaleDateString() : '',
//         type: tr.type || '',
//         category: tr.category ? tr.category.toString() : '',
//         comment: tr.comment || '',
//         sum: tr.sum ? tr.sum.toString() : '',
//       }));
//       setTransactions(fetchedTransactions);
//     } catch (error) {
//       console.error('Error fetching transactions', error);
//     }
//   };

//   const addTransaction = newTransaction => {
//     setTransactions(prevTransactions => [
//       ...prevTransactions,
//       {
//         ...newTransaction,
//         id: newTransaction._id,
//       },
//     ]);
//     fetchTransactions();
//   };

//   const editTransaction = transaction => {
//     setEditedTransaction({ ...transaction, _id: transaction._id }); // Dodaj '_id', jeśli nie istnieje
//     dispatch(setIsModalEditTransactionOpen(true));
//   };

//   const updateTransactionList = updatedTransaction => {
//     setTransactions(prevTransactions => {
//       const newTransactions = prevTransactions.map(transaction =>
//         transaction._id === updatedTransaction._id
//           ? updatedTransaction
//           : transaction
//       );
//       console.log('Zaktualizowane transakcje:', newTransactions);
//       return newTransactions;
//     });
//   };

//   const deleteTransaction = transaction => {
//     setEditedTransaction({ ...transaction, _id: transaction.id });
//   };

//   return (
//     <div>
//       <AddTransactionModal addTransaction={addTransaction} />
//       {isEditModalOpen && (
//         <EditTransactionModal
//           editedTransaction={editedTransaction}
//           updateTransactionList={updateTransactionList}
//         />
//       )}
//       <Transactions
//         transactions={transactions}
//         deleteTransaction={deleteTransaction}
//         editTransaction={editTransaction}
//       />
//     </div>
//   );
// };
