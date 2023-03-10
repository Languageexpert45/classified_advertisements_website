import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";
import Button from "../Button/Button";

function Header({ location }) {
  return (
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
          />
          <Button
            isSmall
            isHeaderButton
            isVisible
            isTransparent
            buttonName="Личный кабинет"
          />
        </S.ButtonsWrapper>
      )}
    </S.Header>
  );
}

export default Header;
