import {React, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";
import Button from "../Button/Button";
import LogoSkypro from "../LogoSkypro/LogoSkypro";

function AuthForm({
  values,
  onSubmit,
  onChange,
  errors,
  isValid,
  submitSuccessMSG,
  submitErrorMSG,
  buttonDisabled,
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleButtonDisabled = () => {};
  return (
    <S.authFormWrapper>
      <LogoSkypro />
      <S.authForm onSubmit={onSubmit} noValidate>
        <S.InputBox>
          <S.FormInput
            type="email"
            name="email"
            value={values.email || ""}
            placeholder="email"
            onChange={(event) => onChange(event)}
            required
          />
          <S.FormInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={values.password || ""}
            onChange={(event) => onChange(event)}
            required
          />
          {pathname === "/signup" && (
            <>
              <S.FormInput
                type="password"
                name="repeat_password"
                placeholder="Повторите пароль"
                onChange={(event) => onChange(event)}
                required
              />
              <S.FormInput
                type="text"
                name="name"
                placeholder="Имя (необязательно)"
                onChange={(event) => onChange(event)}
              />
              <S.FormInput
                type="text"
                name="surname"
                placeholder="Фамилия (необязательно)"
                onChange={(event) => onChange(event)}
              />
              <S.FormInput
                type="text"
                name="city"
                placeholder="Город (необязательно)"
                onChange={(event) => onChange(event)}
              />
            </>
          )}
        </S.InputBox>
        <S.messageSuccessBox>{submitSuccessMSG}</S.messageSuccessBox>
        <S.messageErrorBox>{submitErrorMSG}</S.messageErrorBox>
        <S.ButtonsBox>
          <Button
            isLoginButton
            isVisible
            buttonName={pathname === "/signin" ? "Войти" : "Зарегистрироваться"}
            isDisabled={buttonDisabled}
          />

          {pathname !== "/signup" && (
            <Button
              callback={() => navigate("/signup")}
              isRegisterButton
              isVisible
              buttonName="Зарегистрироваться"
            />
          )}
        </S.ButtonsBox>
      </S.authForm>
    </S.authFormWrapper>
  );
}

export default AuthForm;
