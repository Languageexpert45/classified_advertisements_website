import { React } from "react";
import * as S from "./styles";
import Button from "../Button/Button";

function SellerProfileComponent({ sellerName, city, firstSaleDate }) {
  return (
    <>
      <S.ComponentTitle>Профиль продавца</S.ComponentTitle>
      <S.ComponentWrapper>
        <S.SellerBox>
          <S.SellerName>{sellerName}</S.SellerName>
          <S.SellerCity>{city}</S.SellerCity>
          <S.FirstSaleDate>{firstSaleDate}</S.FirstSaleDate>
          <Button isShowPhoneButton isSearchButton buttonName="Показать телефон" />
        </S.SellerBox>
      </S.ComponentWrapper>
    </>
  );
}

export default SellerProfileComponent;
