import React from 'react'
import * as S from './styles'

function Button({
  buttonName,
  isTransparent,
  isHeaderButton,
  isSearchButton,
  isShowPhoneButton,
  callback,
  isVisible,
  isSmall,
}) {
  if (isSearchButton) {
    return (
      <S.searchButton showPhoneButton={isShowPhoneButton} onClick={callback}>
        {buttonName}
      </S.searchButton>
    );
  }

  if (isHeaderButton) {
    return (
      <S.headerButton
        visible={isVisible}
        transparent={isTransparent}
        onClick={callback}
        small={isSmall}
      >
        {buttonName}
      </S.headerButton>
    );
  }
}
export default Button
