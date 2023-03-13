import styled from "styled-components";

export const popupBox = styled.div`
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
`;

export const reviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 900px;
  border-radius: 8px;
  position: relative;
  top: 80px;
  transition: 0.3s;
`;

export const reviewsTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 220%;
  color: #000000;
`;

export const inputLabel = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 200%;
  color: #000000;
`;

export const addReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const addReviewInput = styled.input`
  padding: 13px 19px;
  width: 652px;
  height: 100px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
  }
`;

export const itemReviewsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
