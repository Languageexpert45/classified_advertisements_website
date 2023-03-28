import { React, useState, useEffect } from "react";
import * as S from "./styles";
import Button from "../Button/Button";
import ClosePopupButton from "../ClosePopupButton/ClosePopupButton";
import useFormWithValidation from "../../utils/useFormWithValidation";
import ImageUploadButton from "../ImageUploadButton/ImageUploadButton";
import { useAddAdMutation, useAddAdImageMutation } from "../../services/ads";

function AddNewAdvertPopup({ active, isActive }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState("");
  const [addAdvert] = useAddAdMutation();
  const [addAdvertImage] = useAddAdImageMutation();
  const [fileList, setFileList] = useState([]);
  const [imageURLs, setImageURLs] = useState(null);
  const filesToUpload = fileList ? [...fileList] : [];
  const canSave = [
    values.titleAdv,
    values.descriptionAdv,
    values.priceAdv,
  ].every(Boolean);

  useEffect(() => {
    if (canSave) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }, [canSave]);

  const handleFileUpload = (e) => {
    e.preventDefault();
    setFileList(e.target.files);

    const files = [...e.target.files] || [];
    const result = [];
    files.forEach((file) => {
      result.push(URL.createObjectURL(file));
    });
    setImageURLs(result);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitSuccessMSG("");
    const newAd = await addAdvert(values);
    filesToUpload.forEach((file) => {
      const dataFiles = new FormData();
      dataFiles.append("file", file);
      addAdvertImage({ files: dataFiles, adId: newAd.data.id });
    });
    setImageURLs(null);
    resetForm();
    isActive();
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
            <S.imageUploadPreviewLabel active={imageURLs ? null : "true"}>
              <ImageUploadButton />
              <S.imageUploadInput
                type="file"
                name="file"
                onChange={handleFileUpload}
                multiple
              />
            </S.imageUploadPreviewLabel>
            {imageURLs?.map((element) => (
              <S.imageUploadPreview
                url={element}
                key={imageURLs.indexOf(element)}
              />
            ))}
          </S.newAdvertImageUploadWrapper>
          <S.inputLabel>Цена</S.inputLabel>
          <S.newAdvertPriceInput
            type="number"
            name="priceAdv"
            value={values.priceAdv || ""}
            onChange={(event) => handleChange(event)}
          />
          <Button
            isDisabled={buttonDisabled}
            isSearchButton
            isVisible
            buttonName="Опубликовать"
          />
        </S.addNewAdvertForm>
      </S.addNewAdvertWrapper>
    </S.popupBox>
  );
}

export default AddNewAdvertPopup;
