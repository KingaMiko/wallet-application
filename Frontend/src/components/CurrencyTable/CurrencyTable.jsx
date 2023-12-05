import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './CurrencyTable.module.scss';

export const CurrencyTable = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Używając twojego tokena JWT
        const authToken =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmVlMjg5ZGIyY2U4ZDdiMmI0ZWYwYSIsIm5hbWUiOiJLaW5nYSIsImlhdCI6MTcwMTc3OTUyMywiZXhwIjoxNzAxNzkxNTIzfQ.jZGVb_UJUyVFCVrMJ2ozUFO_7lUx-m6AY8XUAca53pc';
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
