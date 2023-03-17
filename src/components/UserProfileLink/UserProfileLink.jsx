import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";



function UserProfileLink({useName, firstSaleDate, avatar}) {

  const navigate = useNavigate()
    return (
      <S.UserProfileLinkWrapper onClick= {() => navigate("/sellerprofile")}>
        <S.UserAvatar avatarURL={avatar} />
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
