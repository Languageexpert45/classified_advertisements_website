import { React, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import Button from "../Button/Button";
import ClosePopupButton from "../ClosePopupButton/ClosePopupButton";
import ReviewBox from "../ReviewBox/ReviewBox";
import { getCalendarTime } from "../../utils/getCalendarTime";
import { useAddCommentMutation } from "../../services/ads";
import useFormWithValidation from "../../utils/useFormWithValidation";

function reviewsPopup({ reviews, active, isActive }) {
  const { advertId } = useParams();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState("");

  const [addComment] = useAddCommentMutation();
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitSuccessMSG("");
    addComment({comment: values, adId: advertId });
    resetForm();
  };

  return (
    <S.popupBox active={active}>
      <S.reviewsWrapper active={active}>
        <S.closeButtonBox onClick={isActive}>
          <ClosePopupButton />
        </S.closeButtonBox>
        <S.reviewsTitle>Отзывы о товаре</S.reviewsTitle>
        <S.inputLabel>Добавить отзыв</S.inputLabel>
        <S.addReviewForm onSubmit={handleSubmit}>
          <S.addReviewInput
            type="text"
            name="text"
            value={values.text || ""}
            onChange={(event) => handleChange(event)}
            placeholder="Введите отзыв"
            required
          />
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
