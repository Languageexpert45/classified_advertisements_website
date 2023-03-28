import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import Button from "../Button/Button";
import UserProfileLink from "../UserProfileLink/UserProfileLink";
import ChangeAdvertPopup from "../ChangeAdvertPopup/ChangeAdvertPopup";
import { useDeleteAdMutation } from "../../services/ads";

function AdvertItemDetails({
  title,
  price,
  city,
  time,
  reviewsNumber,
  isActive,
  user,
  location,
  advertId,
  myAdvertId,
}) {
  const [popupActive, setPopupActive] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('Показать телефон');
  const handlePopupActive = () => {
    setPopupActive(!popupActive);
  };
  const [deleteAdd] = useDeleteAdMutation();
  const navigate = useNavigate();

  const handleDeleteAdd = () => {
    deleteAdd({ adId: myAdvertId });
    navigate("/myprofile");
  };

  const handleShowPhone = () => {
    setPhoneNumber(user?.phone)
  }

  return (
    <>
      <ChangeAdvertPopup
        active={popupActive}
        isActive={handlePopupActive}
        advertId={myAdvertId}
      />
      <S.AdvertDetailsWrapper>
        <S.AdvertDetailsTitle>{title}</S.AdvertDetailsTitle>
        <S.AdvertDetailsTime>{time}</S.AdvertDetailsTime>
        <S.AdvertDetailsCity>{city}</S.AdvertDetailsCity>
        <S.AdvertDetailsReviews onClick={isActive}>
          {reviewsNumber} отзыва
        </S.AdvertDetailsReviews>
        <S.AdvertDetailsPrice>{price} ₽</S.AdvertDetailsPrice>
        {location === `/myAdv/${myAdvertId}` ? (
          <S.AdvertButtonBlock>
            <Button
              isSearchButton
              isShowPhoneButton
              buttonName="снять с публикации"
              callback={handleDeleteAdd}
            />
            <Button
              isSearchButton
              isShowPhoneButton
              buttonName="изменить объявление"
              callback={handlePopupActive}
            />
          </S.AdvertButtonBlock>
        ) : (
          <Button
            isSearchButton
            isShowPhoneButton
            buttonName={phoneNumber}
            callback={handleShowPhone}
          />
        )}
        <UserProfileLink
          userId={user?.id}
          useName={user?.name}
          firstSaleDate={user?.sells_from}
          avatar={`http://localhost:8090/${user?.avatar}`}
        />
      </S.AdvertDetailsWrapper>
    </>
  );
}

export default AdvertItemDetails;
