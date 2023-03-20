import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import ReturnToMainPage from "../../components/ReturnToMainPage/ReturnToMainPage";
import SellerProfileComponent from "../../components/SellerProfileComponent/SellerProfileComponent";
import AdvertContent from "../../components/AdvertContent/AdvertContent";
import { useGetAllUsersQuery } from "../../services/user";
import { useGetAllAdsQuery } from "../../services/ads";

function SellerProfile() {
  const { sellerId } = useParams();

  const {
    data: usersData,
    error: usersDataError,
    isLoading: usersDataIsLoading,
  } = useGetAllUsersQuery();

  const { data: allAds, error, isLoading } = useGetAllAdsQuery();


  const findAdsById = (source, id) => {
    const target = source?.filter((ad) => ad.user_id === Number(id))
    return target
  }

  return (
    <S.SellerProfileWrapper>
      <ReturnToMainPage />
      {usersData ? (
        <SellerProfileComponent
          sellerName={usersData[sellerId].name}
          city={usersData[sellerId].city}
          firstSaleDate={usersData[sellerId].sells_from}
          avatar={usersData[sellerId]?.avatar}
        />
      ) : null}

      <AdvertContent
        headTitle="Товары продавца"
        contentData={findAdsById(allAds, sellerId)}
      />
    </S.SellerProfileWrapper>
  );
}

export default SellerProfile;
