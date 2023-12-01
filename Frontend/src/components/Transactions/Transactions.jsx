import css from './Transactions.module.scss';

export const Transactions = () => {
  return (
    <div>
      <table className={css.transactionsTable}>
        <thead className={css.transactionsTableHead}>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
          </tr>
          <tbody className={css.transactionsTableBody}>
            <tr>
              <td>04.12.23</td>
              <td>-</td>
              <td>Other</td>
              <td>Christman gift</td>
              <td>300.00</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <td>05.12.23</td>
              <td>+</td>
              <td>Income</td>
              <td>Salary</td>
              <td>5000.00</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </thead>
      </table>
    </div>
  );
};
