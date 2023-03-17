import {React, useState, useEffect} from "react";
import * as S from "./styles";


function AdvertImageSlider({images}) {

  const [mainImage, setMainImage] = useState(null);



  return (
    <S.AdvertImageSliderWrapper>
      <S.AdvertMainImage url={`http://localhost:8090/${mainImage}`} />
      <S.AdvertPreviewBox>
        {images?.map((element) => (
          <S.AdvertPreviewImage
            url={`http://localhost:8090/${element?.url}`}
            key={element?.id}
            onClick={() => setMainImage(element?.url)}
          />
        ))}
      </S.AdvertPreviewBox>
    </S.AdvertImageSliderWrapper>
  );
}

export default AdvertImageSlider;
