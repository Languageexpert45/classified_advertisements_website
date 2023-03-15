import styled, { css } from "styled-components";

export const authFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  padding: 43px 47px 47px 41px;
  background: #ffffff;
  border-radius: 12px;
`;

export const authForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormInput = styled.input`
  height: 35px;
  border: none;
  border-bottom: solid 1px #d9d9d9;
  &::placeholder {
    color: #d9d9d9;
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 60px;
`;

