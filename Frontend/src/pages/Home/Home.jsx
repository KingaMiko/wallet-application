import { Transactions } from 'components/Transactions/Transactions';
import css from './Home.module.scss';
import { CurrencyTable } from 'components/CurrencyTable/CurrencyTable';
import { Balance } from 'components/Balance/Balance';
import Navigation from 'components/Navigation/Navigation';
import { AddTransactionModal } from 'components/ModalAddTransaction/ModalAddTransaction';
//import React, { useState } from 'react';
import React from 'react';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { Helmet } from 'react-helmet';

const Home = () => {
  //const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={css.background}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className={css.dashboard_container}>
        <div className={css.container}>
          <div className={css.sidebar}>
            <Navigation />
            <Balance />
            <CurrencyTable />
          </div>
          <div className={css.main}>
            {/* <p>Add your first transaction</p> */}
            <Transactions />
            <AddTransactionModal />
          </div>
        </div>
        <ButtonAddTransactions />
      </section>
    </div>
  );
};

export default Home;
