import React from 'react'
import * as S from './styles'

function Button({
  buttonName,
  isTransparent,
  isHeaderButton,
  isSearchButton,
  callback,
  isVisible,
}) {
  if (isSearchButton) {
    return <S.searchButton onClick={callback}>{buttonName}</S.searchButton>;
  }

  if (isHeaderButton) {
    return (
      <S.headerButton
        visible={isVisible}
        transparent={isTransparent}
        onClick={callback}
      >
        {buttonName}
      </S.headerButton>
    );
  }
}
export default Button
