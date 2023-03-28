import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./styles";

function AdvertItem({ id, picture, title, price, city, time }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <S.AdvertItemWrapper
      onClick={() =>
        pathname === "/myprofile"
          ? navigate(`/myAdv/${id}`)
          : navigate(`/adv/${id}`)
      }
    >
      <S.AdvertItemPicture url={`http://localhost:8090/${picture}`} />
      <S.AdvertItemTitle>{title}</S.AdvertItemTitle>
      <S.AdvertItemPrice>{price} ₽</S.AdvertItemPrice>
      <S.AdvertItemCity>{city}</S.AdvertItemCity>
      <S.AdvertItemTime>{time}</S.AdvertItemTime>
    </S.AdvertItemWrapper>
  );
}

export default AdvertItem;