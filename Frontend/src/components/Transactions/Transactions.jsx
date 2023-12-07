import React, { useState, useEffect, useCallback } from 'react';
import css from './Transactions.module.scss';
import sprite from 'images/icons.svg';
import axios from 'axios';

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [, setSums] = useState({ sumPlus: 0, sumMinus: 0, balance: 0 });
  const [sortOrder, setSortOrder] = useState({
    column: null,
    direction: 'asc',
  });

  const calculateSums = useCallback(() => {
    let sumPlus = 0;
    let sumMinus = 0;

    transactions.forEach(transaction => {
      const amount = parseFloat(transaction[4]);
      if (transaction[1] === 'Income') {
        sumPlus += amount;
      } else if (transaction[1] === 'Expense') {
        sumMinus += amount;
      }
    });

    return { sumPlus, sumMinus, balance: sumPlus - sumMinus };
  }, [transactions]);

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

        const fetchedTransactions = response.data.data.map(tr => {
          return {
            id: tr._id,
            date: tr.date ? new Date(tr.date).toLocaleDateString() : '',
            type: tr.type || '',
            category: tr.category ? tr.category.toString() : '',
            comment: tr.comment || '',
            sum: tr.sum ? tr.sum.toString() : '',
          };
        });

        setTransactions(fetchedTransactions);
      } catch (error) {
        console.error('Error fetching transactions', error);
      }
    };
    fetchTransactions();
  }, []);

  useEffect(() => {
    const { sumPlus, sumMinus, balance } = calculateSums();
    setSums({ sumPlus, sumMinus, balance });
  }, [transactions, calculateSums]);

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

  const { sumPlus, sumMinus, balance } = calculateSums();

  const handleDelete = async transactionId => {
    try {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        console.error('No auth token found');
        return;
      }

      const response = await axios.delete(
        `http://localhost:3000/api/transactions/${transactionId}`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      if (response.status === 200) {
        const updatedTransactions = transactions.filter(
          transaction => transaction.id !== transactionId
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
            {transactions.map(transaction => (
              <tr key={transaction.id}>
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
                    onClick={() => handleDelete(transaction.id)}
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
        <p>Incomes: {sumPlus.toFixed(2)}</p>
        <p>Expenses: {sumMinus.toFixed(2)}</p>
        <p>Balance: {balance.toFixed(2)}</p>
      </div>
    </div>
  );
};
