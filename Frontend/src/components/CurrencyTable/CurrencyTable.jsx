import React, { useState, useEffect } from 'react';
import css from './CurrencyTable.module.scss';

import { walletInstance } from 'utils/api';

export const CurrencyTable = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await walletInstance.get('/currencies');

        setCurrencies(response.data.data.currencies);
      } catch (error) {
        console.error('Error fetching currencies', error);
      }
    };

    fetchData();
  }, []);

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
          {currencies.map(currency => (
            <tr key={currency._id}>
              <td>{currency.code}</td>
              <td>{currency.bid}</td>
              <td>{currency.ask}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
