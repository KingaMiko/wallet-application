import React from 'react';
import css from './Transactions.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from 'images/icons.svg';
import { setIsModalConfirmDeleteOpen } from 'redux/global/globalSlice';
import { ModalConfirmDelete } from '../ModalConfirmDelete/ModalConfirmDelete';

export const Transactions = ({ transactions, onDelete, onEdit }) => {
  const [sortOrder, setSortOrder] = useState({
    column: null,
    direction: 'asc',
  });

  const [selectedTransactionId, setSelectedTransactionId] = useState(null);
  const dispatch = useDispatch();

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
        <tbody>
          {transactions.map(transaction => (
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
                    console.log(transaction);
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
