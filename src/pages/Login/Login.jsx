import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import useFormWithValidation from "../../utils/useFormWithValidation";
import { useTokenMutation } from "../../services/user";
import { isLoggedInSelector } from "../../store/selectors/auth";
import * as S from "./styles";
import { tokenReceived } from "../../store/slices/auth";

function Login() {
  const [userTokens, result] = useTokenMutation();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState("");
  const dispatch = useDispatch();
  const loggedIn = useSelector(isLoggedInSelector);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitSuccessMSG("");
    userTokens(values);
  };

  useEffect(() => {
    dispatch(tokenReceived(result.data));
  }, [result.data]);

  if (loggedIn) {
    return <Navigate to="/myprofile" />;
  }

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
