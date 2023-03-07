import React from "react";
import * as S from "./styles";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";


function ReturnToMainPage() {
  return (
    <S.Wrapper>
      <Logo />
      <Button isHeaderButton isVisible buttonName="Вернуться на главную" />
    </S.Wrapper>
  );
}

export default ReturnToMainPage;