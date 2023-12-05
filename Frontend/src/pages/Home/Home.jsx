import { Transactions } from 'components/Transactions/Transactions';
import css from './Home.module.scss';
import { CurrencyTable } from 'components/CurrencyTable/CurrencyTable';
import { Balance } from 'components/Balance/Balance';
import Navigation from 'components/Navigation/Navigation';

const Home = () => {
  return (
    <div>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
