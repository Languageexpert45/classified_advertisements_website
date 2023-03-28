import styled, { css } from "styled-components";

export const popupBox = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top:0px;
  left: 0px;
`;

export const authFormWrapper = styled.div`
  display: flex
  flex-direction: column;
  gap: 42px;
  height: 300px;
  padding: 43px 47px 47px 41px;
  background: #ffffff;
  border-radius: 12px;
  margin-top: 100px;
  transition: 0.3s;
  transform: ${({ active }) => (active ? "scale(1)" : "scale(0)")};
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

export const closeButtonBox = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
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
`;

export const messageSuccessBox = styled.p`
  color: green;
  text-align: center;
`;

export const messageErrorBox = styled.p`
  color: red;
  text-align: center;
`;


