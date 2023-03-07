import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 1440px;
  height: 136px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 43px 141px 43px;
`;

export const SearchInput = styled.input`
  width: 876px;
  height: 50px;
  background: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding-left: 19px;
  padding-right: 19px;
  margin-left: 60px;
  margin-right: 10px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
  }
`;
