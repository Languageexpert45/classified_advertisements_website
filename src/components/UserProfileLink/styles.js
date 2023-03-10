import styled from "styled-components";

export const UserProfileLinkWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 34px;
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f0f0f0;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  color: #009ee4;
`;

export const UserSellingTime = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  color: #5f5f5f;
`;
