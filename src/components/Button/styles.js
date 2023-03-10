import styled from "styled-components";

export const searchButton = styled.button`
  cursor: pointer;
  width: ${({ showPhoneButton }) => (showPhoneButton ? "214px" : "158px")};
  height: ${({ showPhoneButton }) => (showPhoneButton ? "62px" : "50px")};
  background: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  border: none;
  transition: 0.3s;
  &:hover {
    background: #0080c1;
  }
`;

export const headerButton = styled.button`
  display: ${({ visible }) => (!visible ? "none" : "block")};
  padding: 8px 24px 8px;
  width: ${({ small }) => (small ? "190px" : "232px")};
  height: ${({ transparent }) => (transparent ? "40px" : "50px")};
  background: ${({ transparent }) => (transparent ? "transparent" : "#009EE4")};
  border-radius: 6px;
  border: ${({ transparent }) => (transparent ? "1px solid #ffffff" : "none")};
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: ${({ transparent }) =>
      transparent ? "rgba(255, 255, 255, 0.15)" : "#0080c1"};
  }
`;
