import styled from "styled-components";

export const popupBox = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  
`;

export const closeButtonBox = styled.div`
  position: absolute;
  top: 48px;
  right: 51px;
  cursor: pointer;
`;

export const addNewAdvertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 800px;
  padding: 42px 50px;
  border-radius: 8px;
  position: relative;
  top: 80px;
  transition: 0.3s;
  transform: ${({ active }) => (active ? "scale(1)" : "scale(0)")};
`;

export const addNewAdvertForm = styled.form`
display:flex;
flex-direction: column;
gap: 10px;
`;


export const newAdvertTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 220%;
  color: #000000;
`;

export const inputLabel = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
`;

export const newAdvertNameInput = styled.input`
  padding: 13px 19px;
  width: 500px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
  }
`;

export const newAdvertDescriptionInput = styled.input`
  padding: 13px 19px;
  width: 500px;
  height: 200px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
  }
`;

export const imageLabelWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const inputLabelRestriction = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.3);
`;

export const newAdvertImageUploadWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const imageUploadButton = styled.div`
  display: flex;
  align-items: center;
  background: #f0f0f0;
  width: 90px;
  height: 90px;
`;

export const newAdvertPriceInput = styled.input`
  width: 200px;
  height: 50px;
  padding: 13px 19px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
  }
`;
