import css from './Currency.module.scss';
import { CurrencyTable } from 'components/CurrencyTable/CurrencyTable';
import NavigationMobile from 'components/Navigation/NavigationMobile';
import { Helmet } from 'react-helmet';

const Currency = () => {
  return (
    <div className={css.background}>
      <Helmet>
        <title>Currency Table</title>
      </Helmet>
      <section>
        <div className={css.wrapper}>
          <NavigationMobile />
          <div className={css.main}>
            <CurrencyTable />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Currency;
