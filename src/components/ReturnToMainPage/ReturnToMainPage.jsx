import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

function ReturnToMainPage() {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <Logo />
      <Button
        callback={() => navigate("/")}
        isHeaderButton
        isVisible
        buttonName="Вернуться на главную"
      />
    </S.Wrapper>
  );
}

export default ReturnToMainPage;