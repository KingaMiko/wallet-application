// import { Button } from 'components';
import css from './Transactions.module.scss';

export const Transactions = () => {
  return (
    <div className={css.tableBg}>
      <table className={css.transactionsTable}>
        <thead className={css.transactionsTableHead}>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th colspan="2">Options</th>
          </tr>
        </thead>
        <tbody className={css.transactionsTableBody}>
          <tr>
            <td>04.12.23</td>
            <td>-</td>
            <td>Other</td>
            <td>Christman gift</td>
            <td>300.00</td>
            <td>Edit</td>
            <td>
              {/* <Button type="button" theme="color"> */}
              Delete
              {/* </Button> */}
            </td>
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
      </table>
    </div>
  );
};
