import React from "react";
import * as S from "./styles";
import Button from "../Button/Button";
import ClosePopupButton from "../ClosePopupButton/ClosePopupButton";

function AddNewAdvertPopup({active, isActive}) {
  return (
    <S.popupBox active={active}>
      <S.addNewAdvertWrapper active={active}>
        <ClosePopupButton callback={isActive} />
        <S.newAdvertTitle>Новое объявление</S.newAdvertTitle>
        <S.addNewAdvertForm>
          <S.inputLabel>Название</S.inputLabel>
          <S.newAdvertNameInput placeholder="Введите название" />
          <S.inputLabel>Описание</S.inputLabel>
          <S.newAdvertDescriptionInput placeholder="Введите описание" />
          <S.imageLabelWrapper>
            <S.inputLabel>Фотографии товара</S.inputLabel>
            <S.inputLabelRestriction>
              не более 5 фотографий
            </S.inputLabelRestriction>
          </S.imageLabelWrapper>
          <S.newAdvertImageUploadWrapper>
            <S.imageUploadButton />
            <S.imageUploadButton />
            <S.imageUploadButton />
            <S.imageUploadButton />
            <S.imageUploadButton />
          </S.newAdvertImageUploadWrapper>
          <S.inputLabel>Цена</S.inputLabel>
          <S.newAdvertPriceInput />
          <Button isSearchButton isVisible buttonName="Опубликовать" />
        </S.addNewAdvertForm>
      </S.addNewAdvertWrapper>
    </S.popupBox>
  );
}

export default AddNewAdvertPopup;
