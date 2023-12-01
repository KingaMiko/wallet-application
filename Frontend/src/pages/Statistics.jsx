import { Stats } from 'components/Stats/Stats';
import css from './Statistics.module.scss';
import { CurrencyTable } from 'components/CurrencyTable/CurrencyTable';
import { Balance } from 'components/Balance/Balance';
import { Link } from 'react-router-dom';

const Statistics = () => {
  return (
    <div>
      <section className={css.dashboard_container}>
        <div className={css.container}>
          <div className={css.sidebar}>
            <ul className={css.navigation}>
              <li>
                <Link to="/home">Home</Link>
              </li>

              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
            </ul>
            <Balance />
            <CurrencyTable />
          </div>
          <div className={css.main}>
            <Stats />
          </div>
        </div>
      </section>
      Home page
    </div>
  );
};

export default Statistics;
