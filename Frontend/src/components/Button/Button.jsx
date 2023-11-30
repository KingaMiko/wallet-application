import { ButtonColor, ButtonWhite } from './Button.styled';

export const Button = ({ children, type = 'button', theme }) => {
  if (theme === 'color') {
    return (
      <ButtonColor type={type} theme={theme}>
        {children}
      </ButtonColor>
    );
  } else if (theme === 'white') {
    return (
      <ButtonWhite type={type} theme={theme}>
        {children}
      </ButtonWhite>
    );
  }
};
