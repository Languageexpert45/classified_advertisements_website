import { React, useState } from "react";
import * as S from "./styles";
import ReturnToMainPage from "../../components/ReturnToMainPage/ReturnToMainPage";
import AdvertItemDetails from "../../components/AdvertItemDetails/AdvertItemDetails";
import AdvertImageSlider from "../../components/AdvertImageSlider/AdvertImageSlider";
import AdvertItemDescription from "../../components/AdvertItemDescription/AdvertItemDescription";
import ReviewsPopup from "../../components/reviewsPopup/ReviewsPopup";

function Advert() {
  const advertMockData = [
    {
      id: 1,
      description: "Ракетка для большого тенниса Triumph Pro ST...",
      price: "2200 ₽",
      city: "Санкт-Петербург",
      time: "Сегодня в 10:45",
      detailedDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      description: "Ракетка для большого тенниса Triumph Pro ST...",
      price: "2200 ₽",
      city: "Санкт-Петербург",
      time: "Сегодня в 10:45",
    },
    {
      id: 3,
      description: "Ракетка для большого тенниса Triumph Pro ST...",
      price: "2200 ₽",
      city: "Санкт-Петербург",
      time: "Сегодня в 10:45",
    },
    {
      id: 4,
      description: "Ракетка для большого тенниса Triumph Pro ST...",
      price: "2200 ₽",
      city: "Санкт-Петербург",
      time: "Сегодня в 10:45",
    },
    {
      id: 5,
      description: "Ракетка для большого тенниса Triumph Pro ST...",
      price: "2200 ₽",
      city: "Санкт-Петербург",
      time: "Сегодня в 10:45",
    },
    {
      id: 6,
      description: "Ракетка для большого тенниса Triumph Pro ST...",
      price: "2200 ₽",
      city: "Санкт-Петербург",
      time: "Сегодня в 10:45",
    },
    {
      id: 7,
      description: "Ракетка для большого тенниса Triumph Pro ST...",
      price: "2200 ₽",
      city: "Санкт-Петербург",
      time: "Сегодня в 10:45",
    },
    {
      id: 8,
      description: "Ракетка для большого тенниса Triumph Pro ST...",
      price: "2200 ₽",
      city: "Санкт-Петербург",
      time: "Сегодня в 10:45",
    },
    {
      id: 9,
      description: "Ракетка для большого тенниса Triumph Pro ST...",
      price: "2200 ₽",
      city: "Санкт-Петербург",
      time: "Сегодня в 10:45",
    },
    {
      id: 10,
      description: "Ракетка для большого тенниса Triumph Pro ST...",
      price: "2200 ₽",
      city: "Санкт-Петербург",
      time: "Сегодня в 10:45",
    },
    {
      id: 11,
      description: "Ракетка для большого тенниса Triumph Pro ST...",
      price: "2200 ₽",
      city: "Санкт-Петербург",
      time: "Сегодня в 10:45",
    },
    {
      id: 12,
      description: "Ракетка для большого тенниса Triumph Pro ST...",
      price: "2200 ₽",
      city: "Санкт-Петербург",
      time: "Сегодня в 10:45",
    },
  ];

  const [popupActive, setPopupActive] = useState(false);

  const handlePopupActive = () => {
    setPopupActive(!popupActive);
  };

  return (
    <>
      <ReviewsPopup active={popupActive} isActive={handlePopupActive} />
      <S.AdvertWrapper>
        <ReturnToMainPage />
        <S.AdvertContentBox>
          <AdvertImageSlider />
          <AdvertItemDetails
            description={advertMockData[0].description}
            price={advertMockData[0].price}
            city={advertMockData[0].city}
            time={advertMockData[0].time}
            reviewsNumber="24"
            isActive={handlePopupActive}
          />
        </S.AdvertContentBox>
        <AdvertItemDescription
          itemDescription={advertMockData[0].detailedDescription}
        />
      </S.AdvertWrapper>
    </>
  );
}

export default Advert;
