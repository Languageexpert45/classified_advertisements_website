import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import { GlobalStyle } from "./global-styles";
import Main from "../../pages/Main/Main";
import { AppRoutes } from "../../routes";
import Header from "../Header/Header";

function App() {

  const { pathname } = useLocation();
  return (
    <S.AppWrapper>
      <GlobalStyle />
      <Header location={pathname}/>

      <AppRoutes />
    </S.AppWrapper>
  );
}

export default App;
