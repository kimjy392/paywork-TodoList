import React from 'react';
import styled from 'styled-components';

interface IButton {
  onClick?: () => void;
}

const Button: React.FC<IButton> = (props) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.orange};
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
