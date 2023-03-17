import { React, useEffect, useState } from "react";
import AdvertItem from "../AdvertItem/AdvertItem";
import * as S from "./styles";
import { useGetAllAdsQuery} from "../../services/ads";
import { getCalendarTime } from "../../utils/getCalendarTime";

function AdvertContent({ title }) {


  const { data: allAds, error, isLoading } = useGetAllAdsQuery();

  return (
    <S.AdvertContainer>
      <S.AdvertContentTitle>{title}</S.AdvertContentTitle>
      <S.AdvertContentWrapper>
        {allAds?.map((element) => (
          <AdvertItem
            id={element.id}
            picture={element.images[0]?.url}
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
