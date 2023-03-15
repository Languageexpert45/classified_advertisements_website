import {React, useState} from "react";
import * as S from "./styles";
import AuthForm from "../../components/AuthForm/AuthForm";
import useFormWithValidation from "../../utils/useFormWithValidation";
import { useLoginMutation } from "../../services/user";

function Login() {
  const [userSignIn] = useLoginMutation();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitSuccessMSG("");
    userSignIn(values);
  };

  return (
    <S.loginWrapper>
      <AuthForm
        values={values}
        onSubmit={handleSubmit}
        onChange={handleChange}
        errors={errors}
        isValid={isValid}
        submitSuccessMSG={submitSuccessMSG}
      />
    </S.loginWrapper>
  );
}

export default Login;
