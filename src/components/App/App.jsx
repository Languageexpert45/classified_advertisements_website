import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import { GlobalStyle } from "./global-styles";
import Main from "../../pages/Main/Main";
import { AppRoutes } from "../../routes";
import Header from "../Header/Header";
import { useRefreshMutation } from "../../services/auth";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [tokenRefresh, result] = useRefreshMutation();
  const { pathname } = useLocation();

  useEffect(() => {
    setLoggedIn(localStorage.getItem("isLoggedIn"));
  }, [localStorage.getItem("isLoggedIn")]);

  useEffect(() => {
    if (loggedIn) {
      const timer = setTimeout(() => {
        tokenRefresh({
          access_token: localStorage.getItem("tokenAccess"),
          refresh_token: localStorage.getItem("tokenRefresh"),
        });
      }, 200000);
      return () => clearTimeout(timer);
    } 
  });

useEffect(() => {
  if (result.isSuccess) {
    localStorage.setItem("tokenAccess", result.data.access_token);
    localStorage.setItem("tokenRefresh", result.data.refresh_token);
  }
}, [result.isSuccess]);

  return (
    <S.AppWrapper>
      <GlobalStyle />
      <Header location={pathname} />

      <AppRoutes />
    </S.AppWrapper>
  );
}

export default App;
