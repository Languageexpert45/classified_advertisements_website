import styled from "styled-components";


export const UserSettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormWrapper = styled.div`
  display: flex;
  height: 444px;
  width: 834px;
  gap: 50px;
`;

export const FormTitle = styled.h2`
  font-weight: 500;
  font-size: 32px;
  line-height: 220%;
  color: #000000;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const FormAvatarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FormAvatar = styled.div`
  width: 170px;
  height: 170px;
  background: #f0f0f0;
  border-radius: 50%;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FormAvatarInput = styled.input`
  display: none;
`;

export const FormAvatarInputLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #009ee4;
  cursor: pointer;
`;

export const FormNameBox = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  margin-bottom: 4px;
  font-style: normal;
  color: #c4c4c4;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;

export const FormName = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding-left: 19px;
  padding-right: 19px;
  &:focus {
    outline: none;
    border-color: #009ee4;
  }
`;

export const FormSurname = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding-left: 19px;
  padding-right: 19px;
  &:focus {
    outline: none;
    border-color: #009ee4;
  }
`;

export const FormCity = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding-left: 19px;
  padding-right: 19px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border-color: #009ee4;
  }
`;

export const FormPhone = styled.input`
  width: 614px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding-left: 19px;
  padding-right: 19px;
  &:focus {
    outline: none;
    border-color: #009ee4;
  }
`;
export const ChangePasswordBox = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;
