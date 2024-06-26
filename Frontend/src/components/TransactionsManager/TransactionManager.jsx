import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Transactions } from './Transactions/Transactions';
import { FilterTransaction } from './FilterTransaction/FilterTransaction';
import { Pagination } from '../Pagination/Pagination';
import {
  addTransaction as addTransactionThunk,
  getFilteredTransactions,
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
  const [paginationData, setPaginationData] = useState({
    page: 1,
    totalPages: 0,
  });
  const [isTransactionAdded, setIsTransactionAdded] = useState(false);
  const [editedTransaction, setEditedTransaction] = useState(null);

  const [filters, setFilters] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    limit: 10,
    page: 1,
  });

  useEffect(() => {
    dispatch(getFilteredTransactions(filters)).then(response => {
      if (response.payload && response.payload.pagination) {
        setPaginationData(response.payload.pagination);
      }
    });
  }, [dispatch, filters, isTransactionAdded]);

  const handleAddTransaction = newTransactionData => {
    dispatch(addTransactionThunk(newTransactionData))
      .then(() => {
        setIsTransactionAdded(prev => !prev);
        dispatch(getUserDetails());
      })
      .catch(error => {
        console.error('Error while adding the transaction:', error);
      });
  };

  const handleEdit = transaction => {
    setEditedTransaction(transaction);
    dispatch(setIsModalEditTransactionOpen(true));
  };

  const handleDelete = transactionId => {
    dispatch(deleteTransaction(transactionId))
      .then(() => {
        setIsTransactionAdded(prev => !prev);
        dispatch(getUserDetails());
      })
      .catch(error => {
        console.error('Error while deleting the transaction:', error);
      });
  };

  const handleFilterChange = newFilters => {
    setFilters({ ...filters, ...newFilters, page: 1 });
  };

  const handlePageChange = selectedPage => {
    setFilters({ ...filters, page: selectedPage });
  };

  return (
    <div>
      <FilterTransaction onFilter={handleFilterChange} />
      <AddTransactionModal addTransaction={handleAddTransaction} />
      <EditTransactionModal
        editedTransaction={editedTransaction}
        onTransactionUpdate={() => setIsTransactionAdded(prev => !prev)}
      />
      {transactions.length === 0 ? (
        <EmptyWallet />
      ) : (
        <>
          {transactions.length > 0 && (
            <div style={{ marginBottom: '15px' }}>
              <p
                style={{
                  fontSize: '15px',
                  marginLeft: '10px',
                  marginBottom: '-10px',
                }}
              >
                Number of transactions found: {paginationData.total}
              </p>
            </div>
          )}
          <Transactions
            transactions={transactions}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />

          {transactions.length > 0 && paginationData.totalPages > 1 && (
            <Pagination
              currentPage={paginationData.page}
              totalPages={paginationData.totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};
