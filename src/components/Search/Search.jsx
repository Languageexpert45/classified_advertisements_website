import React from "react";
import * as S from "./styles";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

function Search() {
  return (
    <S.SearchWrapper>
      <Logo />
      <S.SearchInput
        type="search"
        placeholder="Поиск по объявлениям"
        name="search"
      />
      <Button isSearchButton buttonName="Найти" />
    </S.SearchWrapper>
  );
}

export default Search;
