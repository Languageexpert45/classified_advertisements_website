import styled from "styled-components";

export const AdvertItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 270px;
  height: fit-content;
`;

export const AdvertItemPicture = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
  background-image: url(${({ url }) => url});
`;

export const AdvertItemDescription = styled.p`
  width: 259px;
  color: #009ee4;
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
  margin-bottom: 10px;
`;

export const AdvertItemPrice = styled.p`
  height: 33px;
  color: #000000;
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  margin-bottom: 10px;
`;

export const AdvertItemCity = styled.p`
  height: 21px;
  color: #5f5f5f;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  margin-bottom: 4px;
`;

export const AdvertItemTime = styled.p`
  width: 119px;
  height: 21px;
  color: #5f5f5f;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
`;
