import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";
import Button from "../Button/Button";

function Header() {
  return (
    <S.Header>
      <Button isHeaderButton isVisible isTransparent buttonName='Вход в личный кабинет' />
    </S.Header>
  );
}

export default Header;
