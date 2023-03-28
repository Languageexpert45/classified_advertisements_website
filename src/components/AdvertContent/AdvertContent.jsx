import { React, useEffect, useState } from "react";
import AdvertItem from "../AdvertItem/AdvertItem";
import * as S from "./styles";
import { getCalendarTime } from "../../utils/getCalendarTime";

function AdvertContent({ headTitle, contentData, pathname }) {

  return (
    <S.AdvertContainer>
      <S.AdvertContentTitle>{headTitle}</S.AdvertContentTitle>
      <S.AdvertContentWrapper>
        {contentData?.map((element) => (
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
