import { Stats } from 'components/Stats/Stats';
import css from './Statistics.module.scss';
import { CurrencyTable } from 'components/CurrencyTable/CurrencyTable';
import { Balance } from 'components/Balance/Balance';
import Navigation from 'components/Navigation/Navigation';
import { Helmet } from 'react-helmet';

const Statistics = () => {
  return (
    <div className={css.background}>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <section className={css.dashboard_container}>
        <div className={css.container}>
          <div className={css.sidebar}>
            <Navigation />
            <Balance />
            <CurrencyTable />
          </div>
          <div className={css.main}>
            <Stats />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
