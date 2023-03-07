import styled, { css } from 'styled-components'

export const AuthForm = styled.form`
  width: 366px;
  height: 439px;
  background-color: #ffffff;
  border-radius: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 33px 47px 47px 41px;
  box-sizing: border-box;
`
export const FormButton = styled.button`
  width: 278px;
  min-height: 52px;
  cursor: pointer;
  background: #580ea2;
  border-radius: 46px;
  margin-left: 4px;
  border: none;
  box-sizing: border-box;
  color: #ffffff;
  &:hover {
    background: #3f007d;
  }
  $:active {
    background: #271a58;
  }
`
export const FormButtonRegister = styled(FormButton)`
  color: black;
  margin-top: 20px;
  background: transparent;
  border: 1px solid #d0cece;
  &:hover {
    background: #f4f5f6;
  }
  $:active {
    background: #d9d9d9;
  }
`
export const PopupArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const FormInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  margin-right: 3px;
  margin-top: 0px;
`
export const FormInputFirst = styled(FormInput)`
  margin-top: 38px;
`
export const FormSpan = styled.span`
  color: red;
  width: 100%;
  min-height: 20px;
  margin-bottom: 20px;
  font-size: 10px;
  border-top: 1px solid red;
  ${(props) =>
    !props.$IsValid &&
    css`
      border-top: 1px solid grey;
    `}
`
export const FormSpanSubmit = styled(FormSpan)`
  margin-bottom: 0;
  text-align: center;
  border-top: 1px solid transparent;
`
