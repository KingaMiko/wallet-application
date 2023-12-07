import React, { useState, useEffect } from 'react';
import css from './Transactions.module.scss';
import sprite from 'images/icons.svg';
import axios from 'axios';

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [sortOrder, setSortOrder] = useState({
    column: null,
    direction: 'asc',
  });

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          console.error('No auth token found');
          return;
        }

        const response = await axios.get(
          'http://localhost:3000/api/transactions',
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );

        // Przetwarzanie danych transakcji
        const fetchedTransactions = response.data.data.map(tr => ({
          date: tr.date ? new Date(tr.date).toLocaleDateString() : '',
          type: tr.type || '',
          category: tr.category ? tr.category.toString() : '',
          comment: tr.comment || '',
          sum: tr.sum ? tr.sum.toString() : '',
        }));

        setTransactions(fetchedTransactions);
        // updateSums(fetchedTransactions);
      } catch (error) {
        console.error('Error fetching transactions', error);
      }
    };

    fetchTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // }, [transactions]);

  const getAmountClass = type => {
    return type === 'Income'
      ? css.amountPlus
      : type === 'Expense'
      ? css.amountMinus
      : '';
  };

  const handleSort = column => {
    const direction =
      column === sortOrder.column && sortOrder.direction === 'asc'
        ? 'desc'
        : 'asc';

    console.log(transactions);

    const sortedTransactions = [...transactions].sort((a, b) => {
      let valueA = column === 4 ? parseFloat(a[column]) : a[column];
      let valueB = column === 4 ? parseFloat(b[column]) : b[column];

      if (column === 0) {
        valueA = new Date(valueA);
        valueB = new Date(valueB);
      }

      return direction === 'asc'
        ? valueA > valueB
          ? 1
          : -1
        : valueA < valueB
        ? 1
        : -1;
    });

    console.log(sortedTransactions);

    setTransactions(sortedTransactions);
    setSortOrder({ column, direction });
  };

  const handleDelete = async transactionId => {
    try {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        console.error('No auth token found');
        return;
      }

      const response = await axios.delete(
        `http://localhost:3000/api/transactions`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
          data: { id: transactionId },
        }
      );

      if (response.status === 200) {
        const updatedTransactions = transactions.filter(
          transaction => transaction._id !== transactionId
        );
        setTransactions(updatedTransactions);
      } else {
        console.error('Error deleting transaction');
      }
    } catch (error) {
      console.error('Error deleting transaction', error);
    }
  };

  return (
    <div>
      <div className={css.tableBg}>
        <table className={css.transactionsTable}>
          <thead className={css.transactionsTableHead}>
            <tr>
              <th onClick={() => handleSort(0)} title="Sort">
                <div className={css.thName}>
                  <span>Date</span>
                  <svg className={css.iconSort} width="20px" height="20px">
                    <use href={`${sprite}#icon-sort`}></use>
                  </svg>
                </div>
              </th>
              <th onClick={() => handleSort(1)} title="Sort">
                <div className={css.thName}>
                  <span>Type</span>
                  <svg className={css.iconSort} width="20px" height="20px">
                    <use href={`${sprite}#icon-sort`}></use>
                  </svg>
                </div>
              </th>
              <th onClick={() => handleSort(2)} title="Sort">
                <div className={css.thName}>
                  <span>Category</span>
                  <svg className={css.iconSort} width="20px" height="20px">
                    <use href={`${sprite}#icon-sort`}></use>
                  </svg>
                </div>
              </th>
              <th onClick={() => handleSort(3)} title="Sort">
                <div className={css.thName}>
                  <span>Comment</span>
                  <svg className={css.iconSort} width="20px" height="20px">
                    <use href={`${sprite}#icon-sort`}></use>
                  </svg>
                </div>
              </th>
              <th onClick={() => handleSort(4)} title="Sort">
                <div className={css.thName}>
                  <span>Amount</span>
                  <svg className={css.iconSort} width="20px" height="20px">
                    <use href={`${sprite}#icon-sort`}></use>
                  </svg>
                </div>
              </th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className={css.transactionsTableBody}>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.type}</td>
                <td>{transaction.category}</td>
                <td>{transaction.comment}</td>
                <td className={getAmountClass(transaction.type)}>
                  {transaction.sum}
                </td>
                <td>
                  <svg
                    className={css.iconTransactions}
                    width="20px"
                    height="20px"
                  >
                    <use href={`${sprite}#icon-pencil2`}></use>
                  </svg>
                  <svg
                    className={css.iconTransactions}
                    width="20px"
                    height="20px"
                    onClick={() => handleDelete(transaction._id)}
                  >
                    <use href={`${sprite}#icon-bin`}></use>
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={css.sumSection}>
        {/* <p>Incomes: {sumPlus.toFixed(2)}</p>
        <p>Expenses: {sumMinus.toFixed(2)}</p>
        <p className={getBalanceClass()}>Balance: {balance.toFixed(2)}</p> */}
      </div>
    </div>
  );
};
