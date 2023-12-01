import React, { useContext } from 'react';
import { PacmanLoader } from 'react-spinners';
import { ThemeContext } from 'styled-components';
import { Wrapper, WrapperBig } from './Loader.styled';

function Loader() {
  const themeContext = useContext(ThemeContext);
  return (
    <Wrapper>
      <PacmanLoader color={themeContext.colors.sctiveColor} />
    </Wrapper>
  );
}

function LoaderWrapper({ color }) {
  const themeContext = useContext(ThemeContext);
  const loaderColor = color
    ? color
    : themeContext.colors.activeColor || '#24cca7';
  return (
    <WrapperBig>
      <Wrapper>
        <PacmanLoader color={loaderColor} />
      </Wrapper>
    </WrapperBig>
  );
}

export default Loader;
export { LoaderWrapper };
