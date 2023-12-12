import PropTypes from 'prop-types';
import { Hourglass } from 'react-loader-spinner';

import css from './Loader.module.css';

export const Loader = ({ isVisible = true }) => {
  return (
    <Hourglass
      height="80"
      width="80"
      wrapperClass={css.loader}
      visible={isVisible}
      ariaLabel="hourglass-loading"
      colors={['#000000', '#ed9f72']}
    />
  );
};

Loader.propTypes = {
  isVisible: PropTypes.bool,
};
