import React from "react";
import * as S from "./styles";

function ReviewBox({userName, reviewDate, reviewContent}) {
    return (
      <S.reviewBoxWrapper>
        <S.userBox>
          <S.userAvatar />
          <S.userName>{userName}</S.userName>
          <S.reviewDate>{reviewDate}</S.reviewDate>
        </S.userBox>
        <S.reviewBox>
          <S.reviewTitle>Комментарий</S.reviewTitle>
          <S.reviewContent>{reviewContent}</S.reviewContent>
        </S.reviewBox>
      </S.reviewBoxWrapper>
    );
}

export default ReviewBox