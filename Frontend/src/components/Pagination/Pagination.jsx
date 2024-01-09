import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = event => {
    onPageChange(event.selected + 1);
  };

  return (
    <div className={styles.paginateContainer}>
      <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        breakLabel={'...'}
        pageCount={totalPages}
        forcePage={currentPage - 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
        previousClassName={styles.previous}
        nextClassName={styles.next}
        breakClassName={styles.break}
      />
    </div>
  );
};
