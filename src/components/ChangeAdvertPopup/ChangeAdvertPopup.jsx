import { React, useState, useEffect } from "react";
import * as S from "./styles";
import Button from "../Button/Button";
import ClosePopupButton from "../ClosePopupButton/ClosePopupButton";
import useFormWithValidation from "../../utils/useFormWithValidation";
import {
  useAddAdImageMutation,
  useGetAdByIdQuery,
  useChangeAdTextMutation,
} from "../../services/ads";

function AdvertPopup({ active, isActive, advertId }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState("");
  const {
    data: adData,
    error: adDataError,
    isLoading: adDataIsLoading,
  } = useGetAdByIdQuery(advertId);
  const [changeAdText] = useChangeAdTextMutation();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [addAdvertImage] = useAddAdImageMutation();
  const [fileList, setFileList] = useState([]);
  const filesToUpload = fileList ? [...fileList] : [];

  const handleFileUpload = (e) => {
    e.preventDefault();
    setFileList(e.target.files);
  };

  const canSave = [
    values.title,
    values.description,
    values.price,
  ].every(Boolean);

  useEffect(() => {
    if (canSave) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }, [canSave]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitSuccessMSG("");
    changeAdText({ text: values, adId: advertId });
    // filesToUpload.forEach((file) => {
    //   const dataFiles = new FormData();
    //   dataFiles.append("file", file);
    //   addAdvertImage({ files: dataFiles, adId: advertId });
    // });
    resetForm();
    isActive();
  };
  return (
    <S.popupBox active={active}>
      <S.addNewAdvertWrapper active={active}>
        <S.closeButtonBox onClick={isActive}>
          <ClosePopupButton />
        </S.closeButtonBox>
        <S.newAdvertTitle>Редактировать объявление</S.newAdvertTitle>
        <S.addNewAdvertForm onSubmit={handleSubmit}>
          <S.inputLabel>Название</S.inputLabel>
          <S.newAdvertNameInput
            placeholder={adData?.title}
            type="text"
            name="title"
            value={values.title || ""}
            onChange={(event) => handleChange(event)}
            required
          />
          <S.inputLabel>Описание</S.inputLabel>
          <S.newAdvertDescriptionInput
            placeholder={adData?.description}
            type="text"
            name="description"
            value={values.description || ""}
            onChange={(event) => handleChange(event)}
          />
          <S.imageLabelWrapper>
            <S.inputLabel>Фотографии товара</S.inputLabel>
            <S.inputLabelRestriction>
              не более 5 фотографий
            </S.inputLabelRestriction>
          </S.imageLabelWrapper>
          <S.newAdvertImageUploadWrapper>
            {adData?.images.map((element) => (
              <S.imageUploadPreview
                url={`http://localhost:8090/${element.url}`}
                key={element.id}
              >
                <S.imageUploadInput
                  type="file"
                  name="file"
                  onChange={handleFileUpload}
                  multiple
                />
              </S.imageUploadPreview>
            ))}
          </S.newAdvertImageUploadWrapper>
          <S.inputLabel>Цена</S.inputLabel>
          <S.newAdvertPriceInput
            placeholder={adData?.price}
            type="number"
            name="price"
            value={values.price || ""}
            onChange={(event) => handleChange(event)}
          />
          <Button
            isDisabled={buttonDisabled}
            isSearchButton
            isVisible
            buttonName="Сохранить"
          />
        </S.addNewAdvertForm>
      </S.addNewAdvertWrapper>
    </S.popupBox>
  );
}

export default AdvertPopup;
