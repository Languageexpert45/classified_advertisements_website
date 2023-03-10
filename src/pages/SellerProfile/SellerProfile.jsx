import React from "react";
import * as S from "./styles";
import ReturnToMainPage from "../../components/ReturnToMainPage/ReturnToMainPage";
import SellerProfileComponent from "../../components/SellerProfileComponent/SellerProfileComponent";


function SellerProfile() {
  return (
    <S.SellerProfileWrapper>
      <ReturnToMainPage />
      <SellerProfileComponent
        sellerName="Кирилл Матвеев"
        city="Санкт-Петербург"
        firstSaleDate="Продает товары с августа 2021"
      />
    </S.SellerProfileWrapper>
  );
}

export default SellerProfile;