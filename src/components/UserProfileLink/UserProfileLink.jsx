import React from "react";
import * as S from "./styles";


function UserProfileLink({useName, firstSaleDate}) {
    return (
      <S.UserProfileLinkWrapper>
        <S.UserAvatar />
        <S.UserInfoContainer>
          <S.UserName>{useName}</S.UserName>
          <S.UserSellingTime>
            Продает товары с {firstSaleDate}
          </S.UserSellingTime>
        </S.UserInfoContainer>
      </S.UserProfileLinkWrapper>
    );

}

export default UserProfileLink;
