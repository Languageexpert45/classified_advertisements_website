import React, { useRef, useState, useEffect } from "react";
import * as S from "./styles";
import Button from "../Button/Button";
import useFormWithValidation from "../../utils/useFormWithValidation";
import {
  useChangeCurrentUserMutation,
  useChangeUserAvatarMutation,
} from "../../services/user";
import ChangePasswordForm from "../ChangePasswordPopup/ChangePasswordForm";

function UserSettingsForm({ name, surname, city, phone, avatar }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState("");
  const [changeUserData] = useChangeCurrentUserMutation();
  const [changeAvatar] = useChangeUserAvatarMutation();
  const [file, setFile] = useState(null);
  const [popupActive, setPopupActive] = useState(false);
   const handlePopupActive = () => {
     setPopupActive(!popupActive);
   };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeUserData(values);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    setFile(e.target.files);
  };

  useEffect(() => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file[0]);
      changeAvatar(formData);
    }
  }, [file]);

  return (
    <S.UserSettingsBox>
      <ChangePasswordForm active={popupActive} isActive={handlePopupActive} />
      <S.FormTitle>Настройки профиля</S.FormTitle>
      <S.FormWrapper>
        <S.FormAvatarBox>
          <S.FormAvatar url={`http://localhost:8090/${avatar}`} />
          <S.FormAvatarInputLabel>
            Заменить
            <S.FormAvatarInput
              type="file"
              name="file"
              onChange={handleFileUpload}
            />
          </S.FormAvatarInputLabel>
          <Button
            isSearchButton
            callback={handlePopupActive}
            buttonName="Изменить пароль"
          />
        </S.FormAvatarBox>
        <form onSubmit={handleSubmit}>
          <S.FormContainer>
            <S.FormNameBox>
              <S.FormLabel htmlFor="name">
                Имя
                <S.FormName
                  type="text"
                  placeholder={name}
                  name="name"
                  onChange={(event) => handleChange(event)}
                  value={values.name || ""}
                />
              </S.FormLabel>
              <S.FormLabel htmlFor="surname">
                Фамилия
                <S.FormSurname
                  type="text"
                  placeholder={surname}
                  name="surname"
                  onChange={(event) => handleChange(event)}
                  value={values.surname || ""}
                />
              </S.FormLabel>
            </S.FormNameBox>
            <S.FormLabel htmlFor="city">Город</S.FormLabel>
            <S.FormCity
              type="text"
              placeholder={city}
              name="city"
              onChange={(event) => handleChange(event)}
              value={values.city || ""}
            />
            <S.FormLabel htmlFor="phone">Телефон</S.FormLabel>
            <S.FormPhone
              type="number"
              placeholder={phone}
              name="phone"
              onChange={(event) => handleChange(event)}
              value={values.phone || ""}
            />
          </S.FormContainer>
          <Button isSearchButton buttonName="Сохранить" />
        </form>
      </S.FormWrapper>
    </S.UserSettingsBox>
  );
}

export default UserSettingsForm;
