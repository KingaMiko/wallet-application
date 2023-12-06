import PropTypes from 'prop-types';

import sprite from 'images/icons.svg';

export const Icon = ({
  iconID,
  width = '24px',
  height = '24px',
  className,
}) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${sprite}#${iconID}`} />
    </svg>
  );
};

Icon.propTypes = {
  iconID: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};
