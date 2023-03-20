import styled from "styled-components";

export const AdvertImageSliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AdvertMainImage = styled.div`
  width: 480px;
  height: 480px;
  background: #f0f0f0;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AdvertPreviewBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; 
`;

export const AdvertPreviewImage = styled.div`
  width: 88px;
  height: 88px;
  background: #f0f0f0;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    border: 2px solid #009ee4;
  }
`;
