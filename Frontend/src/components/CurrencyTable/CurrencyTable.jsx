import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './CurrencyTable.module.scss';

export const CurrencyTable = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          console.error('No auth token found');
          return;
        }

        const response = await axios.get(
          'http://localhost:3000/api/currencies',
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        setCurrencies(response.data.data.currencies);
      } catch (error) {
        console.error('Error fetching currencies', error);
      }
    };

    fetchData();
  }, []);
  // }, [authToken]); Obecnie fetchData jest wywoływana tylko raz. Jeśli token ulegnie zmianie, można ponownie załadować dane.

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
