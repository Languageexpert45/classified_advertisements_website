import {React, useState} from "react";
import * as S from "./styles";
import Button from "../Button/Button";
import UserProfileLink from "../UserProfileLink/UserProfileLink";

function AdvertItemDetails({ title, price, city, time, reviewsNumber, isActive, user }) {

  return (
    <S.AdvertDetailsWrapper>
      <S.AdvertDetailsTitle>{title}</S.AdvertDetailsTitle>
      <S.AdvertDetailsTime>{time}</S.AdvertDetailsTime>
      <S.AdvertDetailsCity>{city}</S.AdvertDetailsCity>
      <S.AdvertDetailsReviews onClick={isActive}>
        {reviewsNumber} отзыва
      </S.AdvertDetailsReviews>
      <S.AdvertDetailsPrice>{price} ₽</S.AdvertDetailsPrice>
      <Button isSearchButton isShowPhoneButton buttonName="Показать телефон" />
      <UserProfileLink userId={user?.id} useName={user?.name} firstSaleDate={user?.sells_from} avatar={`http://localhost:8090/${user?.avatar}`} />
    </S.AdvertDetailsWrapper>
  );
}

export default AdvertItemDetails;
