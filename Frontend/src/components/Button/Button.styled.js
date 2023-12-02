import styled from 'styled-components';

export const BaseButton = styled.button`
  width: 300px;
  height: 50px;

  border-radius: 20px;
  border: 0;

  font-size: 18px;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonColor = styled(BaseButton)`
  background: #24cca7;
  color: #ffffff;

  &:hover {
    background: #00ad84;
  }
`;

export const ButtonWhite = styled(BaseButton)`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #4a56e2;
  color: #4a56e2;

  &:hover {
    background: #4a56e2;
    color: #ffffff;
  }
`;
