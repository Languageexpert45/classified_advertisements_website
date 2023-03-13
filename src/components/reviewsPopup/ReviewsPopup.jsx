import React from "react";
import * as S from "./styles";
import Button from "../Button/Button";

function reviewsPopup({reviews}) {
  return (
    <S.popupBox>
      <S.reviewsWrapper>
        <S.reviewsTitle>Отзывы о товаре</S.reviewsTitle>
        <S.inputLabel>Добавить отзыв</S.inputLabel>
        <S.addReviewForm>
          <S.addReviewInput placeholder="Введите отзыв" />
          <Button isVisible isSearchButton buttonName="Отправить" />
        </S.addReviewForm>
        <S.itemReviewsBox>
            {reviews}
        </S.itemReviewsBox>
      </S.reviewsWrapper>
    </S.popupBox>
  );
}

export default reviewsPopup;
