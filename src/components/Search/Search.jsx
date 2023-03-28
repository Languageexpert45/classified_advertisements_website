import { React, useState, useEffect, useRef } from "react";
import * as S from "./styles";
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
    </S.SearchWrapper>
  );
}

export default Search;
