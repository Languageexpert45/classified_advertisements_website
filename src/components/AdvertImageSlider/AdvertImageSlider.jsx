import React from "react";
import * as S from "./styles";


function AdvertImageSlider({images}) {

  return (
    <S.AdvertImageSliderWrapper>
      <S.AdvertMainImage />
      <S.AdvertPreviewBox>
        <S.AdvertPreviewImage />
        <S.AdvertPreviewImage />
        <S.AdvertPreviewImage />
        <S.AdvertPreviewImage />
        <S.AdvertPreviewImage />
      </S.AdvertPreviewBox>
    </S.AdvertImageSliderWrapper>
  );
}

export default AdvertImageSlider;
