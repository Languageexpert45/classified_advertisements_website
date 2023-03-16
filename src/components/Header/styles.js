import styled, { css } from "styled-components";

export const Header = styled.header`
  height: 79px;
  background: #009ee4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 150px;
`;


export const ButtonsWrapper = styled.div`
  display: ${({ location }) =>
    location !== "/signin" && location !== "/signup" ? "flex" : "none"};
  gap: 8px;
`;
