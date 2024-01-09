import React from 'react';
import css from './Transactions.module.scss';
import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import sprite from 'images/icons.svg';
import { setIsModalConfirmDeleteOpen } from 'redux/global/globalSlice';
import { ModalConfirmDelete } from '../ModalConfirmDelete/ModalConfirmDelete';

export const Transactions = ({ transactions, onDelete, onEdit }) => {
  const [sortOrder, setSortOrder] = useState({
    column: null,
    direction: 'asc',
  });

  const sortedTransactions = useMemo(() => {
    if (!sortOrder.column) return transactions;

    const sortedData = [...transactions].sort((a, b) => {
      let valueA = a[sortOrder.column];
      let valueB = b[sortOrder.column];

      if (sortOrder.column === 'date') {
        valueA = new Date(valueA);
        valueB = new Date(valueB);
      }

      if (valueA < valueB) {
        return sortOrder.direction === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortOrder.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return sortedData;
  }, [transactions, sortOrder]);

  const [selectedTransactionId, setSelectedTransactionId] = useState(null);
  const dispatch = useDispatch();

  const getAmountClass = type => {
    return type === 'Income'
      ? css.amountPlus
      : type === 'Expense'
      ? css.amountMinus
      : '';
  };

  const handleSort = columnKey => {
    const direction =
      sortOrder.column === columnKey && sortOrder.direction === 'asc'
        ? 'desc'
        : 'asc';
    setSortOrder({ column: columnKey, direction });
  };

  const handleDelete = transactionId => {
    setSelectedTransactionId(transactionId);
    dispatch(setIsModalConfirmDeleteOpen(true));
  };
  const confirmDelete = () => {
    onDelete(selectedTransactionId);
    dispatch(setIsModalConfirmDeleteOpen(false));
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const formatType = type => {
    if (type === 'Expense') {
      return <span className={css.tableMinus}>-</span>;
    } else if (type === 'Income') {
      return <span className={css.tablePlus}>+</span>;
    }
    return type;
  };

  return (
    <div className={css.tableBg}>
      <ModalConfirmDelete onConfirm={confirmDelete} />
      <table className={css.transactionsTable}>
        <thead className={css.transactionsTableHead}>
          <tr>
            <th onClick={() => handleSort('date')} title="Sort by Date">
              <div className={css.thName}>
                <span>Date</span>
                <svg className={css.iconSort} width="20px" height="20px">
                  <use href={`${sprite}#icon-sort`}></use>
                </svg>
              </div>
            </th>
            <th onClick={() => handleSort('type')} title="Sort by type">
              <div className={css.thName}>
                <span>Type</span>
                <svg className={css.iconSort} width="20px" height="20px">
                  <use href={`${sprite}#icon-sort`}></use>
                </svg>
              </div>
            </th>
            <th onClick={() => handleSort('category')} title="Sort by category">
              <div className={css.thName}>
                <span>Category</span>
                <svg className={css.iconSort} width="20px" height="20px">
                  <use href={`${sprite}#icon-sort`}></use>
                </svg>
              </div>
            </th>
            <th>
              <div className={css.thName}>
                <span>Comment</span>
              </div>
            </th>
            <th onClick={() => handleSort('sum')} title="Sort by sum">
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
        <tbody>
          {sortedTransactions.map(transaction => (
            <tr key={transaction._id} data-type={transaction.type}>
              <td data-label="Date">{formatDate(transaction.date)}</td>
              <td data-label="Type">{formatType(transaction.type)}</td>
              <td data-label="Category">{transaction.category}</td>
              <td data-label="Comment">{transaction.comment}</td>
              <td data-label="Sum" className={getAmountClass(transaction.type)}>
                {transaction.sum}
              </td>
              <td data-label="Options">
                <svg
                  className={css.iconTransactions}
                  width="20px"
                  height="20px"
                  onClick={() => {
                    onEdit(transaction);
                  }}
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
  );
};
