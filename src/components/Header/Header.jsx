import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/slices/auth";
import * as S from "./styles";
import Button from "../Button/Button";
import AddNewAdvertPopup from "../AddNewAdvertPopup/AddNewAdvertPopup";

function Header({ location }) {
  const [popupActive, setPopupActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePopupActive = () => {
    setPopupActive(!popupActive);
  };

  const signOut = () => {
    if (location === "/myprofile") {
      dispatch(logOut());
      navigate("/");
    } else {
      navigate("/myprofile");
    }
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
            callback={() => navigate("/myprofile")}
          />
        ) : (
          <S.ButtonsWrapper location={location}>
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
              buttonName={
                location === "/myprofile" ? "Выход" : "Личный Кабинет"
              }
              callback={signOut}
            />
          </S.ButtonsWrapper>
        )}
      </S.Header>
    </>
  );
}

export default Header;
