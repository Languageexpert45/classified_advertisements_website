import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import Search from "../../components/Search/Search";
import AdvertContent from "../../components/AdvertContent/AdvertContent";
import { useGetAllAdsQuery } from "../../services/ads";

function Main() {
  const { data: allAds, error, isLoading } = useGetAllAdsQuery();

  const [searchValue, setSearchValue] = useState("");
  const [targetAds, setTargetAds] = useState(allAds);

  const getSearchValue = (value) => {
    setSearchValue(value)
  };

  useEffect(() => {
    setTargetAds(allAds);
  }, [allAds]);

  useEffect(() => {
    if (allAds) {
      setTargetAds(
        allAds.filter((ad) =>
          ad.title.toLowerCase().match(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue]);


  return (
    <S.MainWrapper>
      <Search getSearchValue={getSearchValue} />
      <AdvertContent headTitle="Объявления" contentData={targetAds} />
    </S.MainWrapper>
  );
}

export default Main;
