import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import useFormWithValidation from "../../utils/useFormWithValidation";
import { useTokenMutation } from "../../services/auth";
import { isLoggedInSelector } from "../../store/selectors/auth";
import * as S from "./styles";
import { tokenReceived } from "../../store/slices/auth";

function Login() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [userTokens, result] = useTokenMutation();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState("");
  const [submitErrorMSG, setSubmitErrorMSG] = useState("");
  const dispatch = useDispatch();
  const loggedIn = useSelector(isLoggedInSelector);

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
    if (values.email && values.password) {
      try {
        setButtonDisabled(true);
        await userTokens(values).unwrap();
      } catch (err) {
        if (err.data.detail) {
          setButtonDisabled(false);
          setSubmitErrorMSG(err.data.detail);
        }
        if (err.data.detail[0].msg) {
          setButtonDisabled(false);
          setSubmitErrorMSG(err.data.detail[0].msg);
        }
      }
    }

    setSubmitSuccessMSG("");
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
        submitErrorMSG={submitErrorMSG}
        buttonDisabled={buttonDisabled}
      />
    </S.loginWrapper>
  );
}

export default Login;
