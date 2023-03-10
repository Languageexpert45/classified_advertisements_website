import React from "react";
import * as S from "./styles";

function AdvertItemDescription({ itemDescription }) {
  return (
    <S.DescriptionWrapper>
      <S.DescriptionTitle>Описание товара</S.DescriptionTitle>
      <S.DescriptionContent>{itemDescription}</S.DescriptionContent>
    </S.DescriptionWrapper>
  );
}

export default AdvertItemDescription;
