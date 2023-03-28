import { React, useState } from "react";
import * as S from "./styles";
import Button from "../Button/Button";

function SellerProfileComponent({
  sellerName,
  city,
  firstSaleDate,
  avatar,
  phone,
}) {
  const [phoneNumber, setPhoneNumber] = useState("Показать телефон");

  const handleShowPhone = () => {
    setPhoneNumber(phone);
  };
  return (
    <>
      <S.ComponentTitle>Профиль продавца</S.ComponentTitle>
      <S.ComponentWrapper>
        <S.SellerAvatar avatarURL={`http://localhost:8090/${avatar}`} />
        <S.SellerBox>
          <S.SellerName>{sellerName}</S.SellerName>
          <S.SellerCity>{city}</S.SellerCity>
          <S.FirstSaleDate>Продает товары с {firstSaleDate}</S.FirstSaleDate>
          <Button
            isShowPhoneButton
            isSearchButton
            buttonName={phoneNumber}
            callback={handleShowPhone}
          />
        </S.SellerBox>
      </S.ComponentWrapper>
    </>
  );
}

export default SellerProfileComponent;
