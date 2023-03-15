import styled from "styled-components";

export const reviewBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const userBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const reviewBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 52px;
`;

export const userAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: #f0f0f0;
  border-radius: 50%;
`;

export const userName = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 200%;
  color: #000000;
`;

export const reviewDate = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  color: #5f5f5f;
`;

export const reviewTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 200%;
  color: #000000;
`;

export const reviewContent = styled.p`
  width: 600px;
  height: 48px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
`;
