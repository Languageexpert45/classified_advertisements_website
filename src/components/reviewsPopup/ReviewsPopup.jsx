import React from "react";
import * as S from "./styles";
import Button from "../Button/Button";
import ClosePopupButton from "../ClosePopupButton/ClosePopupButton"
import ReviewBox from "../ReviewBox/ReviewBox";
import { getCalendarTime } from "../../utils/getCalendarTime";

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
          {reviews?.map((element) => (
            <ReviewBox
              userName={element.author.name}
              reviewDate={getCalendarTime(element.created_on)}
              reviewContent={element.text}
              key={element.id}
            />
          ))}
        </S.itemReviewsBox>
      </S.reviewsWrapper>
    </S.popupBox>
  );
}

export default reviewsPopup;
