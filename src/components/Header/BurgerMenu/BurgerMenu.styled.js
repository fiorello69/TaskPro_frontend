import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  @media screen and (min-width: 1350px) {
    display: none;
  }
`;
export const StyledSvg = styled.svg`
  stroke: ${props => props.theme.header.menuIcon};
`;
