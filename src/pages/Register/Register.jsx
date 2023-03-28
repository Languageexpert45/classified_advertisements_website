import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import * as S from "./styles";
import useFormWithValidation from "../../utils/useFormWithValidation";
import { useRegisterMutation } from "../../services/auth";

function Register() {
  const navigate = useNavigate();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [userSignUp] = useRegisterMutation();

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState("");
  const [submitErrorMSG, setSubmitErrorMSG] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!values.password && !values.email) {
      setSubmitErrorMSG("Заполните поля пароль и email");
    } 
    if (!values.password) {
      setSubmitErrorMSG("Заполните полe пароль");
    }
    if (!values.email) {
      setSubmitErrorMSG("Заполните полe email");
    }
    if (
      values.password === values.repeat_password &&
      values.password &&
      values.repeat_password
    ) {
      try {
        await userSignUp(values).unwrap();
        setButtonDisabled(true)
        setSubmitErrorMSG("");
        setSubmitSuccessMSG("Вы успешно зарегистрированы");
        setTimeout(() => navigate("/signin"), 2000);
      } catch (err) {
        if (err.data.detail[0].msg) {
          setSubmitErrorMSG(err.data.detail[0].msg);
        }
      }
    } else if (values.password !== values.repeat_password) {
      setSubmitErrorMSG("Пароли не совпадают");
      setButtonDisabled(false);
    } 
  };

  return (
    <S.registerWrapper>
      <AuthForm
        values={values}
        onSubmit={handleSubmit}
        onChange={handleChange}
        errors={errors}
        isValid={isValid}
        submitSuccessMSG={submitSuccessMSG}
        submitErrorMSG={submitErrorMSG}
        buttonDisabled={buttonDisabled}
      />
    </S.registerWrapper>
  );
}

export default Register;
