import React, { useRef, useState, useEffect } from "react";
import * as S from "./styles";
import Button from "../Button/Button";
import useFormWithValidation from "../../utils/useFormWithValidation";
import {
  useChangeCurrentUserMutation,
  useChangeUserAvatarMutation,
} from "../../services/user";

function UserSettingsForm({ name, surname, city, phone, avatar }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState("");
  const [changeUserData] = useChangeCurrentUserMutation();
  const [changeAvatar] = useChangeUserAvatarMutation();
  const [file, setFile] = useState(null);

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
    <S.FormBox>
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
        </S.FormAvatarBox>
        <form onSubmit={handleSubmit}>
          <S.FormContainer>
            <S.FormNameBox>
              <S.FormName
                type="text"
                placeholder={name}
                name="name"
                onChange={(event) => handleChange(event)}
                value={values.name || ""}
              />
              <S.FormSurname
                type="text"
                placeholder={surname}
                name="surname"
                onChange={(event) => handleChange(event)}
                value={values.surname || ""}
              />
            </S.FormNameBox>
            <S.FormCity
              type="text"
              placeholder={city}
              name="city"
              onChange={(event) => handleChange(event)}
              value={values.city || ""}
            />
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
    </S.FormBox>
  );
}

export default UserSettingsForm;
