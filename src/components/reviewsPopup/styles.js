import styled from "styled-components";

export const popupBox = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
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
  width: fit-content;
  padding: 20px 98px 56px 50px;
  border-radius: 8px;
  position: relative;
  top: 0px;
  left: 300px;
  transition: 0.3s;
  transform: ${({ active }) => (active ? "scale(1)" : "scale(0)")};
`;

export const closeButtonBox = styled.div`
  position: absolute;
  top: 48px;
  right: 51px;
  cursor: pointer;
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
