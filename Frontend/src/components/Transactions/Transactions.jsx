import React, { useState, useEffect } from 'react';
import css from './Transactions.module.scss';
import sprite from 'images/icons.svg';

const initialTransactions = [
  ['2023-12-04', '-', 'Other', 'Christmas gift', '300.00'],
  ['2023-12-05', '+', 'Income', 'Salary', '5000.00'],
  ['2023-12-07', '+', 'Income', 'Painting walls', '1000.00'],
  ['2023-12-10', '-', 'Products', 'Grocery', '400.00'],
  ['2023-12-15', '-', 'Bills', 'Rent', '2500.00'],
  ['2023-12-15', '-', 'Bills', 'Phone', '180.00'],
];

export const Transactions = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [sortOrder, setSortOrder] = useState({
    column: null,
    direction: 'asc',
  });
  const [sumPlus, setSumPlus] = useState(0);
  const [sumMinus, setSumMinus] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleSort = column => {
    const direction =
      column === sortOrder.column && sortOrder.direction === 'asc'
        ? 'desc'
        : 'asc';

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

    setTransactions(sortedTransactions);
    setSortOrder({ column, direction });
  };

  const handleDelete = index => {
    const updatedTransactions = [...transactions];

    updatedTransactions.splice(index, 1);

    setTransactions(updatedTransactions);
  };

  const updateSums = () => {
    let totalPlus = 0;
    let totalMinus = 0;

    transactions.forEach(transaction => {
      const amount = parseFloat(transaction[4]);
      if (transaction[1] === '+') {
        totalPlus += amount;
      } else if (transaction[1] === '-') {
        totalMinus += amount;
      }
    });

    setSumPlus(totalPlus);
    setSumMinus(totalMinus);

    setBalance(totalPlus - totalMinus);
  };

  useEffect(() => {
    updateSums();
  }, [transactions]);

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
                {' '}
                <div className={css.thName}>
                  <span>Category</span>
                  <svg className={css.iconSort} width="20px" height="20px">
                    <use href={`${sprite}#icon-sort`}></use>
                  </svg>
                </div>
              </th>
              <th onClick={() => handleSort(3)} title="Sort">
                {' '}
                <div className={css.thName}>
                  <span>Comment</span>
                  <svg className={css.iconSort} width="20px" height="20px">
                    <use href={`${sprite}#icon-sort`}></use>
                  </svg>
                </div>
              </th>
              <th onClick={() => handleSort(4)} title="Sort">
                {' '}
                <div className={css.thName}>
                  <span>Sum</span>
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
                {transaction.map((data, dataIndex) => (
                  <td key={dataIndex}>{data}</td>
                ))}
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
                    onClick={() => handleDelete(index)}
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
        <p>
          <b>Balance: {balance.toFixed(2)}</b>
        </p>
      </div>
    </div>
  );
};
