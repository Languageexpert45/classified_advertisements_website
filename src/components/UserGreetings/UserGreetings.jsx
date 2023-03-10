import React from "react";
import * as S from "./styles";


function UserGreetings({userName}) {
  return (
  <S.UserGreetings>Здравствуйте, {userName}!</S.UserGreetings>
  )
}

export default UserGreetings;