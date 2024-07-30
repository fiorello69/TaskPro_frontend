import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68px;
  background-color: ${props => props.theme.header.background};
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 30px;
`;

export const RightContainer = styled.div`
  margin-right: auto;
  padding-left: 20px;
`;
