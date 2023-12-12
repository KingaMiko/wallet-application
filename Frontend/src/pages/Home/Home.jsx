import css from './Home.module.scss';
import { CurrencyTable } from 'components/CurrencyTable/CurrencyTable';
import { Balance } from 'components/Balance/Balance';
import Navigation from 'components/Navigation/Navigation';
import { TransactionsManager } from 'components/TransactionsManager/TransactionManager';
//import React, { useState } from 'react';
import React from 'react';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { Helmet } from 'react-helmet';
import NavigationMobile from 'components/Navigation/NavigationMobile';
import { useMediaQuery } from 'react-responsive';
import { getAllUserCategories } from 'redux/finance/operations';
import { useDispatch } from 'react-redux';

const Home = () => {
  //const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobileView = useMediaQuery({ maxWidth: 767 });
  const dispatch = useDispatch();

  dispatch(getAllUserCategories());

  return (
    <div className={css.background}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <div className={css.wrapper}>
          {isMobileView ? (
            <div className={css.mainMobile}>
              <NavigationMobile />
              <Balance />
              <TransactionsManager />
            </div>
          ) : (
            <div className={css.mainTabletAndDesktop}>
              <div className={css.sidebar}>
                <div>
                  {' '}
                  <Navigation />
                  <Balance />
                </div>
                <div>
                  <CurrencyTable />
                </div>
              </div>
              <div className={css.main}>
                <TransactionsManager />
              </div>
            </div>
          )}{' '}
        </div>
        <ButtonAddTransactions />
      </section>
    </div>
  );
};

export default Home;
