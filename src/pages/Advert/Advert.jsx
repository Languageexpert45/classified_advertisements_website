import { React, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import ReturnToMainPage from "../../components/ReturnToMainPage/ReturnToMainPage";
import AdvertItemDetails from "../../components/AdvertItemDetails/AdvertItemDetails";
import AdvertImageSlider from "../../components/AdvertImageSlider/AdvertImageSlider";
import AdvertItemDescription from "../../components/AdvertItemDescription/AdvertItemDescription";
import ReviewsPopup from "../../components/reviewsPopup/ReviewsPopup";
import { useGetAddByIdQuery, useGetAddCommentsQuery } from "../../services/ads";
import { getCalendarTime } from "../../utils/getCalendarTime";

function Advert() {
  const { advertId } = useParams();

  const {
    data: adData,
    error: adDataError,
    isLoading: adDataIsLoading,
  } = useGetAddByIdQuery(advertId);

  const {
    data: adComments,
    error: adCommentsError,
    isLoading: adCommentsIsLoading,
  } = useGetAddCommentsQuery({ adId: advertId, userId: adData?.user.id });


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
          <AdvertImageSlider images={adData?.images} />
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
