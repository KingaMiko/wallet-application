import React from 'react';

import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

import css from './ActiveNavLink.module.scss';

const ActiveNavLink = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const linkClass = isActive ? css.active : css.link;
  return (
    <NavLink to={to} className={linkClass}>
      {children}
    </NavLink>
  );
};

export default ActiveNavLink;
