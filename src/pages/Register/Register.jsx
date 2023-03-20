import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import * as S from "./styles";
import useFormWithValidation from "../../utils/useFormWithValidation";
import { useRegisterMutation } from "../../services/auth";

function Register() {
  const navigate = useNavigate();

  const [userSignUp] = useRegisterMutation();

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitSuccessMSG("");
    if (
      values.password === values.repeat_password &&
      values.password &&
      values.repeat_password
    ) {
      setTimeout(() => navigate("/signin"), 1000);
    } else if (values.password !== values.repeat_password) {
      setSubmitSuccessMSG("Пароли не совпадают");
    }
    userSignUp(values);
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
      />
    </S.registerWrapper>
  );
}

export default Register;
