import React from 'react'
import * as S from './styles'

function Button({
  buttonName,
  isTransparent,
  isHeaderButton,
  isSearchButton,
  isShowPhoneButton,
  isLoginButton,
  isRegisterButton,
  callback,
  isVisible,
  isSmall,
  isDisabled,
}) {
  if (isSearchButton) {
    return (
      <S.searchButton
        disabled={isDisabled}
        showPhoneButton={isShowPhoneButton}
        onClick={callback}
      >
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

  if (isLoginButton) {
    return (
      <S.loginButton disabled={isDisabled} onClick={callback}>
        {buttonName}
      </S.loginButton>
    );
  }

  if (isRegisterButton) {
    return <S.registerButton onClick={callback}>{buttonName}</S.registerButton>;
  }
}
export default Button
