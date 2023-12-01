import { Transactions } from 'components/Transactions/Transactions';
import css from './Home.module.scss';
import { CurrencyTable } from 'components/CurrencyTable/CurrencyTable';
import { Balance } from 'components/Balance/Balance';
// import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <section className={css.dashboard_container}>
        <div className={css.container}>
          <div className={css.sidebar}>
            <ul className={css.navigation}>
              <li>Home</li>
              {/* <Link to="/">Home</Link> */}
              <li>Statistics</li>
              {/* <Link to="/statistics">Statistics</Link> */}
            </ul>
            <Balance />
            <CurrencyTable />
          </div>
          <div className={css.main}>
            <p>Add transaction</p>
            <Transactions />
          </div>
        </div>
      </section>
      Home page
    </div>
  );
};
