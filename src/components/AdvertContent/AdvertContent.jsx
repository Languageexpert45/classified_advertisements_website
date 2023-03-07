import React from "react";
import AdvertItem from "../AdvertItem/AdvertItem";
import * as S from "./styles";

function AdvertContent() {
  const advertMockData = [
    {
      id: 1,
      description: "Ракетка для большого тенниса Triumph Pro ST...",
      price: "2200 ₽",
      city: "Санкт-Петербург",
      time: "Сегодня в 10:45",
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
  return (
    <S.AdvertContainer>
      <S.AdvertContentTitle>Объявления</S.AdvertContentTitle>
      <S.AdvertContentWrapper>
        {advertMockData?.map((element) => (
          <AdvertItem
            description={element.description}
            price={element.price}
            city={element.city}
            time={element.time}
            key={element.id}
          />
        ))}
      </S.AdvertContentWrapper>
    </S.AdvertContainer>
  );
}

export default AdvertContent;
