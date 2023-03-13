import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";
import Button from "../Button/Button";
import AddNewAdvertPopup from "../AddNewAdvertPopup/AddNewAdvertPopup";

function Header({ location }) {
  const [popupActive, setPopupActive] = useState(false);
  const navigate = useNavigate();

  const handlePopupActive = () => {
    setPopupActive(!popupActive);
  };
  return (
    <>
      <AddNewAdvertPopup active={popupActive} isActive={handlePopupActive} />
      <S.Header>
        {location === "/" ? (
          <Button
            isHeaderButton
            isVisible
            isTransparent
            buttonName="Вход в личный кабинет"
          />
        ) : (
          <S.ButtonsWrapper>
            <Button
              isHeaderButton
              isVisible
              isTransparent
              buttonName="Разместить объявление"
              callback={handlePopupActive}
            />
            <Button
              isSmall
              isHeaderButton
              isVisible
              isTransparent
              buttonName="Личный кабинет"
              callback={() => navigate("/myprofile")}
            />
          </S.ButtonsWrapper>
        )}
      </S.Header>
    </>
  );
}

export default Header;
