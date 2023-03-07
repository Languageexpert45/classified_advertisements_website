import React, { useRef, useState } from "react";
import * as S from "./styles";
import Button from "../Button/Button";

function UserSettingsForm() {
  //   const [userName, setUserName] = useState("");
  //   const [userSurname, setUserSurname] = useState("");
  //   const [userCity, setUserCity] = useState("");
  //   const [userPhone, setUserPhone] = useState("");

  const userName = useRef(null);
  const userSurname = useRef(null);
  const userCity = useRef(null);
  const userPhone = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <S.FormBox>
      <S.FormTitle>Настройки профиля</S.FormTitle>
      <S.FormWrapper>
        <S.FormAvatarBox>
          <S.FormAvatar />
          <S.FormAvatarButton>Заменить</S.FormAvatarButton>
        </S.FormAvatarBox>
        <form onSubmit={handleSubmit}>
          <S.FormContainer>
            <S.FormNameBox>
              <S.FormName
                type="text"
                placeholder="Имя"
                name="userName"
                ref={userName}
              />
              <S.FormSurname
                type="text"
                placeholder="Фамилия"
                name="userSurname"
                ref={userSurname}
              />
            </S.FormNameBox>
            <S.FormCity
              type="text"
              placeholder="Город"
              name="userCity"
              ref={userCity}
            />
            <S.FormPhone
              type="number"
              placeholder="Телефон"
              name="userPhone"
              ref={userPhone}
            />
          </S.FormContainer>
          <Button isSearchButton buttonName="Сохранить" />
        </form>
      </S.FormWrapper>
    </S.FormBox>
  );
}

export default UserSettingsForm;
