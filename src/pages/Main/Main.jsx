import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import Search from "../../components/Search/Search";
import AdvertContent from "../../components/AdvertContent/AdvertContent";

function Main() {
  return (
    <S.MainWrapper>
      <Search />
      <AdvertContent />
    </S.MainWrapper>
  );
}

export default Main;
