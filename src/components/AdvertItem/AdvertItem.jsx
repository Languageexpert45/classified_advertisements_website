import React from "react";
import * as S from "./styles";

function AdvertItem({picture, description, price, city, time}) {

  return (
    <S.AdvertItemWrapper>
      <S.AdvertItemPicture >{picture}</S.AdvertItemPicture>
      <S.AdvertItemDescription>{description}</S.AdvertItemDescription>
      <S.AdvertItemPrice>{price}</S.AdvertItemPrice>
      <S.AdvertItemCity>{city}</S.AdvertItemCity>
      <S.AdvertItemTime>{time}</S.AdvertItemTime>
    </S.AdvertItemWrapper>
  );
}

export default AdvertItem;