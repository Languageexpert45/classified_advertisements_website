import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import ReturnToMainPage from "../../components/ReturnToMainPage/ReturnToMainPage";
import AdvertItemDetails from "../../components/AdvertItemDetails/AdvertItemDetails";
import AdvertImageSlider from "../../components/AdvertImageSlider/AdvertImageSlider";
import AdvertItemDescription from "../../components/AdvertItemDescription/AdvertItemDescription";
import ReviewsPopup from "../../components/reviewsPopup/ReviewsPopup";
import { useGetAdByIdQuery, useGetAdCommentsQuery } from "../../services/ads";
import { getCalendarTime } from "../../utils/getCalendarTime";

function Advert() {
  const { advertId } = useParams();

  const {
    data: adData,
    error: adDataError,
    isLoading: adDataIsLoading,
  } = useGetAdByIdQuery(advertId);

  const {
    data: adComments,
    error: adCommentsError,
    isLoading: adCommentsIsLoading,
  } = useGetAdCommentsQuery({ adId: advertId });




  const [popupActive, setPopupActive] = useState(false);

  const handlePopupActive = () => {
    setPopupActive(!popupActive);
  };

  return (
    <>
      <ReviewsPopup
        active={popupActive}
        isActive={handlePopupActive}
        reviews={adComments}
      />
      <S.AdvertWrapper>
        <ReturnToMainPage />
        <S.AdvertContentBox>
          <AdvertImageSlider images={adData?.images} firstImage={adData?.images[0]?.url} />
          <AdvertItemDetails
            user={adData?.user}
            title={adData?.title}
            price={adData?.price}
            city={adData?.user.city}
            time={getCalendarTime(adData?.created_on)}
            reviewsNumber={adComments?.length}
            isActive={handlePopupActive} 
          />
        </S.AdvertContentBox>
        <AdvertItemDescription itemDescription={adData?.description} />
      </S.AdvertWrapper>
    </>
  );
}

export default Advert;
