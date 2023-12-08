import React, { useState, useEffect, useCallback } from 'react';
import css from './Transactions.module.scss';
import sprite from 'images/icons.svg';

import { walletInstance } from 'utils/api';

export const Transactions = ({ transactions, deleteTransaction }) => {
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

  const handleSort = sortColumn => {
    const direction =
      sortColumn === sortOrder.column && sortOrder.direction === 'asc'
        ? 'desc'
        : 'asc';
    setSortOrder({ column: sortColumn, direction });
  };

  // Sortowanie transakcji
  const sortedTransactions = [...transactions].sort((a, b) => {
    let valueA, valueB;
    if (sortOrder.column === 4) {
      valueA = parseFloat(a.sum);
      valueB = parseFloat(b.sum);
    } else if (sortOrder.column === 0) {
      valueA = new Date(a.date);
      valueB = new Date(b.date);
    } else {
      // Użyj odpowiednich kluczy obiektu transakcji
      valueA = a[sortOrder.column];
      valueB = b[sortOrder.column];
    }

    return sortOrder.direction === 'asc'
      ? valueA > valueB
        ? 1
        : -1
      : valueA < valueB
      ? 1
      : -1;
  });

  const { sumPlus, sumMinus, balance } = calculateSums();

  const handleDelete = async transactionId => {
    try {
      const response = await walletInstance.delete(
        `/transactions/${transactionId}`
      );
      if (response.status === 200) {
        deleteTransaction(transactionId);
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
            {sortedTransactions.map((transaction, index) => (
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
