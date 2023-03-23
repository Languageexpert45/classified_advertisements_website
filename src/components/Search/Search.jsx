import { React, useState, useEffect, useRef } from "react";
import * as S from "./styles";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

function Search({getSearchValue}) {

  const handleChange = (e) => {
    e.preventDefault();
    getSearchValue(e.target.value);
  };

  return (
    <S.SearchWrapper>
      <Logo />
      <S.SearchInput
        type="search"
        placeholder="Поиск по объявлениям"
        name="search"
        onChange={handleChange}
      />
      <Button isSearchButton buttonName="Найти" />
    </S.SearchWrapper>
  );
}

export default Search;
