import React from "react";
import * as S from "./styles";
import UserSettingsForm from "../../components/UserSettingsForm/UserSettingsForm";
import ReturnToMainPage from "../../components/ReturnToMainPage/ReturnToMainPage"
import UserGreetings from "../../components/UserGreetings/UserGreetings";
import AdvertContent from "../../components/AdvertContent/AdvertContent";


function Profile() {
  return (
    <S.ProfileWrapper>
      <ReturnToMainPage/>
      <UserGreetings userName="Антон"/>
      <UserSettingsForm/>
      <AdvertContent title='Мои товары'/>
    </S.ProfileWrapper>
  );
}

export default Profile;