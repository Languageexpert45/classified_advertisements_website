import { React, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";
import Button from "../Button/Button";
import useFormWithValidation from "../../utils/useFormWithValidation";
import { useChangeUserPasswordMutation } from "../../services/user";
import ClosePopupButton from "../ClosePopupButton/ClosePopupButton";

function ChangePasswordForm({ active, isActive }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const navigate = useNavigate();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState("");
  const [submitErrorMSG, setSubmitErrorMSG] = useState("");
  const [changePassword] = useChangeUserPasswordMutation();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await changePassword(values).unwrap();
      setButtonDisabled(true);
      setSubmitErrorMSG("");
      setSubmitSuccessMSG("Пароль изменен");
      setTimeout(() => isActive(), 1000);
    } catch (err) {
      if (err.data.detail) {
        setSubmitErrorMSG(err.data.detail);
        setSubmitSuccessMSG("");
      }
    }
    resetForm();
  }
  const canSave = [values.password_1, values.password_2].every(
    Boolean
  );
  

  useEffect(() => {
    if (canSave) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }, [canSave]);

  return (
    <S.popupBox active={active}>
      <S.authFormWrapper active={active}>
        <S.closeButtonBox onClick={isActive}>
          <ClosePopupButton />
        </S.closeButtonBox>
        <S.authForm onSubmit={onSubmit} noValidate>
          <S.InputBox>
            <S.FormInput
              type="password"
              name="password_1"
              value={values.password_1 || ""}
              placeholder="Введите старый пароль"
              onChange={(event) => handleChange(event)}
              required
            />
            <S.FormInput
              type="password"
              name="password_2"
              placeholder="Введите новый пароль"
              value={values.password_2 || ""}
              onChange={(event) => handleChange(event)}
              required
            />
          </S.InputBox>
          <S.messageSuccessBox>{submitSuccessMSG}</S.messageSuccessBox>
          <S.messageErrorBox>{submitErrorMSG}</S.messageErrorBox>
          <S.ButtonsBox>
            <Button
              isLoginButton
              isVisible
              buttonName="Изменить пароль"
              isDisabled={buttonDisabled}
            />
          </S.ButtonsBox>
        </S.authForm>
      </S.authFormWrapper>
    </S.popupBox>
  );
}

export default ChangePasswordForm;
