import { Stats } from 'components/Stats/Stats';
import css from './Statistics.module.scss';
import { CurrencyTable } from 'components/CurrencyTable/CurrencyTable';
import { Balance } from 'components/Balance/Balance';
import Navigation from 'components/Navigation/Navigation';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';
import NavigationMobile from 'components/Navigation/NavigationMobile';
import { BackgroundBlurred } from 'components/Background/BackgroundBlurred';

const Statistics = () => {
  const isMobileView = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={css.background}>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <section>
        <BackgroundBlurred />
        <div className={css.wrapper}>
          {isMobileView ? (
            <div className={css.mainMobile}>
              <NavigationMobile />
              <Stats />
            </div>
          ) : (
            <div className={css.mainTabletAndDesktop}>
              <div className={css.sidebar}>
                <div>
                  <Navigation />
                  <Balance />
                </div>
                <div>
                  <CurrencyTable />
                </div>
              </div>
              <div className={css.main}>
                <Stats />
              </div>
            </div>
          )}{' '}
        </div>
      </section>
    </div>
  );
};

export default Statistics;
