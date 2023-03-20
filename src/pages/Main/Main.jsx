import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import Search from "../../components/Search/Search";
import AdvertContent from "../../components/AdvertContent/AdvertContent";
import { useGetAllAdsQuery } from "../../services/ads";

function Main() {
  const { data: allAds, error, isLoading } = useGetAllAdsQuery();

  return (
    <S.MainWrapper>
      <Search />
      <AdvertContent headTitle="Объявления" contentData={allAds} />
    </S.MainWrapper>
  );
}

export default Main;
