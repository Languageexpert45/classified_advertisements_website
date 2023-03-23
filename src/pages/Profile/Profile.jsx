import { React, useState, useEffect } from "react";
import * as S from "./styles";
import UserSettingsForm from "../../components/UserSettingsForm/UserSettingsForm";
import ReturnToMainPage from "../../components/ReturnToMainPage/ReturnToMainPage";
import UserGreetings from "../../components/UserGreetings/UserGreetings";
import AdvertContent from "../../components/AdvertContent/AdvertContent";
import { useGetCurrentUserQuery } from "../../services/user";
import { useGetUserAdsQuery } from "../../services/ads";

function Profile() {
  const {
    data: userData,
    error: userDataError,
    isLoading: userDataIsLoading,
  } = useGetCurrentUserQuery();

  const {
    data: userAdData,
    error: userAdDataError,
    isLoading: userAdDataIsLoading,
  } = useGetUserAdsQuery();

  console.log(userAdData);

  return (
    <S.ProfileWrapper>
      <ReturnToMainPage />
      <UserGreetings userName={userData?.name} />
      <UserSettingsForm
        name={userData?.name}
        surname={userData?.surname}
        city={userData?.city}
        phone={userData?.phone}
        avatar={userData?.avatar}
      />
      <AdvertContent headTitle="Мои товары" contentData={userAdData} />
    </S.ProfileWrapper>
  );
}

export default Profile;
