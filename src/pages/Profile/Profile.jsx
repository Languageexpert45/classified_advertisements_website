import React from "react";
import * as S from "./styles";
import UserSettingsForm from "../../components/UserSettingsForm/UserSettingsForm";
import ReturnToMainPage from "../../components/ReturnToMainPage/ReturnToMainPage"


function Profile() {
  return (
    <S.ProfileWrapper>
      <ReturnToMainPage/>
      <UserSettingsForm/>
    </S.ProfileWrapper>
  );
}

export default Profile;