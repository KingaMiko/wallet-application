import css from './CurrencyTable.module.scss';

export const CurrencyTable = () => {
  return (
    <div className={css.tableBg}>
      <table className={css.currencyTable}>
        <thead className={css.currencyTableHead}>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody className={css.currencyTableBody}>
          <tr>
            <td>USD</td>
            <td>3,9077</td>
            <td>3,9867</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>4,2895</td>
            <td>4,3761</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
