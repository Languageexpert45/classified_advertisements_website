import React from "react";
import * as S from "./styles";
import Button from "../Button/Button";
import ClosePopupButton from "../ClosePopupButton/ClosePopupButton"
import ReviewBox from "../ReviewBox/ReviewBox";

function reviewsPopup({ reviews, active, isActive }) {
  return (
    <S.popupBox active={active}>
      <S.reviewsWrapper active={active}>
        <S.closeButtonBox onClick={isActive}>
          <ClosePopupButton />
        </S.closeButtonBox>
        <S.reviewsTitle>Отзывы о товаре</S.reviewsTitle>
        <S.inputLabel>Добавить отзыв</S.inputLabel>
        <S.addReviewForm>
          <S.addReviewInput placeholder="Введите отзыв" />
          <Button isVisible isSearchButton buttonName="Отправить" />
        </S.addReviewForm>
        <S.itemReviewsBox>
          <ReviewBox
            userName="Олег"
            reviewDate="14 августа"
            reviewContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ReviewBox
            userName="Олег"
            reviewDate="14 августа"
            reviewContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ReviewBox
            userName="Олег"
            reviewDate="14 августа"
            reviewContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ReviewBox
            userName="Олег"
            reviewDate="14 августа"
            reviewContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </S.itemReviewsBox>
      </S.reviewsWrapper>
    </S.popupBox>
  );
}

export default reviewsPopup;
