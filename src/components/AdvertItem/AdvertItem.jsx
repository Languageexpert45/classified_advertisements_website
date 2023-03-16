import React from "react";
import * as S from "./styles";

function AdvertItem({ picture, title, price, city, time }) {
  return (
    <S.AdvertItemWrapper>
      <S.AdvertItemPicture url={picture}/>
      <S.AdvertItemDescription>{title}</S.AdvertItemDescription>
      <S.AdvertItemPrice>{price} ₽</S.AdvertItemPrice>
      <S.AdvertItemCity>{city}</S.AdvertItemCity>
      <S.AdvertItemTime>{time}</S.AdvertItemTime>
    </S.AdvertItemWrapper>
  );
}

export default AdvertItem;