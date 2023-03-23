import { React, useState, useEffect } from "react";
import * as S from "./styles";
import Button from "../Button/Button";
import ClosePopupButton from "../ClosePopupButton/ClosePopupButton";
import useFormWithValidation from "../../utils/useFormWithValidation";
import { useAddAdMutation, useAddAdImageMutation } from "../../services/ads";

function AddNewAdvertPopup({ active, isActive }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState("");
  const [addAdvert] = useAddAdMutation();
  const [addAdvertImage] = useAddAdImageMutation();
  const [fileList, setFileList] = useState(null);
  const filesToUpload = fileList ? [...fileList] : [];

  const handleFileUpload = (e) => {
    e.preventDefault();
    setFileList(e.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitSuccessMSG("");
    const dataFiles = new FormData();
    filesToUpload.forEach((file) => {
      dataFiles.append("file", file);
      addAdvertImage({ files: dataFiles, adId: 30 });
    });
    addAdvert(values, dataFiles);
  };
  return (
    <S.popupBox active={active}>
      <S.addNewAdvertWrapper active={active}>
        <S.closeButtonBox onClick={isActive}>
          <ClosePopupButton />
        </S.closeButtonBox>
        <S.newAdvertTitle>Новое объявление</S.newAdvertTitle>
        <S.addNewAdvertForm onSubmit={handleSubmit}>
          <S.inputLabel>Название</S.inputLabel>
          <S.newAdvertNameInput
            placeholder="Введите название"
            type="text"
            name="titleAdv"
            value={values.titleAdv || ""}
            onChange={(event) => handleChange(event)}
            required
          />
          <S.inputLabel>Описание</S.inputLabel>
          <S.newAdvertDescriptionInput
            placeholder="Введите описание"
            type="text"
            name="descriptionAdv"
            value={values.descriptionAdv || ""}
            onChange={(event) => handleChange(event)}
          />
          <S.imageLabelWrapper>
            <S.inputLabel>Фотографии товара</S.inputLabel>
            <S.inputLabelRestriction>
              не более 5 фотографий
            </S.inputLabelRestriction>
          </S.imageLabelWrapper>
          <S.newAdvertImageUploadWrapper>
            <S.imageUploadPreview>
              <S.imageUploadInput
                type="file"
                name="file"
                onChange={handleFileUpload}
                multiple
              />
            </S.imageUploadPreview>
            <S.imageUploadPreview>
              <S.imageUploadInput
                type="file"
                name="file"
                onChange={handleFileUpload}
                multiple
              />
            </S.imageUploadPreview>
            <S.imageUploadPreview>
              <S.imageUploadInput
                type="file"
                name="file"
                onChange={handleFileUpload}
                multiple
              />
            </S.imageUploadPreview>
            <S.imageUploadPreview>
              <S.imageUploadInput
                type="file"
                name="file"
                onChange={handleFileUpload}
                multiple
              />
            </S.imageUploadPreview>
            <S.imageUploadPreview>
              <S.imageUploadInput
                type="file"
                name="file"
                onChange={handleFileUpload}
                multiple
              />
            </S.imageUploadPreview>
          </S.newAdvertImageUploadWrapper>
          <S.inputLabel>Цена</S.inputLabel>
          <S.newAdvertPriceInput
            type="number"
            name="priceAdv"
            value={values.priceAdv || ""}
            onChange={(event) => handleChange(event)}
          />
          <Button isSearchButton isVisible buttonName="Опубликовать" />
        </S.addNewAdvertForm>
      </S.addNewAdvertWrapper>
    </S.popupBox>
  );
}

export default AddNewAdvertPopup;
