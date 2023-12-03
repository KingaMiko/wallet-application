import React, { useState } from 'react';
import { Button } from 'components';
import css from './Transactions.module.scss';

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

  return (
    <div className={css.tableBg}>
      <table className={css.transactionsTable}>
        <thead className={css.transactionsTableHead}>
          <tr>
            <th onClick={() => handleSort(0)} title="Sort">
              Date
            </th>
            <th onClick={() => handleSort(1)} title="Sort">
              Type
            </th>
            <th onClick={() => handleSort(2)} title="Sort">
              Category
            </th>
            <th onClick={() => handleSort(3)} title="Sort">
              Comment
            </th>
            <th onClick={() => handleSort(4)} title="Sort">
              Sum
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
                <Button type="button" theme="white" width="80px" height="40px">
                  Edit
                </Button>
                <Button type="button" theme="color" width="80px" height="40px">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
