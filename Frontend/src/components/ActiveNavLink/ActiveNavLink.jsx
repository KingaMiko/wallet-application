import React from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

const ActiveNavLink = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const activeStyle = {
    fontWeight: isActive ? 'bold' : 'normal',
  };

  return (
    <NavLink to={to} style={activeStyle}>
      {children}
    </NavLink>
  );
};

export default ActiveNavLink;
