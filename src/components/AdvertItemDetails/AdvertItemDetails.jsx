import React from "react";
import * as S from "./styles";
import Button from "../Button/Button";
import UserProfileLink from "../UserProfileLink/UserProfileLink";

function AdvertItemDetails({ description, price, city, time, reviewsNumber }) {
  return (
    <S.AdvertDetailsWrapper>
      <S.AdvertDetailsDescription>{description}</S.AdvertDetailsDescription>
      <S.AdvertDetailsTime>{time}</S.AdvertDetailsTime>
      <S.AdvertDetailsCity>{city}</S.AdvertDetailsCity>
      <S.AdvertDetailsReviews>{reviewsNumber} отзыва</S.AdvertDetailsReviews>
      <S.AdvertDetailsPrice>{price}</S.AdvertDetailsPrice>
      <Button isSearchButton isShowPhoneButton buttonName="Показать телефон" />
      <UserProfileLink useName="Кирилл" firstSaleDate="01-02-2018" />
    </S.AdvertDetailsWrapper>
  );
}

export default AdvertItemDetails;
