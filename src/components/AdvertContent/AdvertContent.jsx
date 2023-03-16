import { React, useEffect, useState } from "react";
import AdvertItem from "../AdvertItem/AdvertItem";
import * as S from "./styles";
import { useGetAllAdsQuery } from "../../services/ads";

function AdvertContent({ title }) {

  const { data: allAds, error, isLoading } = useGetAllAdsQuery();
  console.log(allAds);
  const getCalendarTime = (value) => {
    const date = new Date(value);
    return date.toLocaleDateString();
  };

  return (
    <S.AdvertContainer>
      <S.AdvertContentTitle>{title}</S.AdvertContentTitle>
      <S.AdvertContentWrapper>
        {allAds?.map((element) => (
          <AdvertItem
            picture={element.images[0]?.url }
            title={element.title}
            price={element.price}
            city={element.user.city}
            time={getCalendarTime(element.created_on)}
            key={element.id}
          />
        ))}
      </S.AdvertContentWrapper>
    </S.AdvertContainer>
  );
}

export default AdvertContent;
