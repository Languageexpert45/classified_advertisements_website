import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../services/auth";

const initialState = {
  access_token: "",
  isLoggedIn: false,
};

const storeTokens = (state, { payload }) => {
  
  if (!payload.access_token) {
    return;
  }
  state.access_token = payload.access_token;
  state.isLoggedIn = true;
  if (payload.refresh_token) {
    localStorage.setItem("tokenRefresh", payload.refresh_token);
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    tokenReceived: (state, { payload }) => {
      if (payload) {
        if (payload.access_token) {
          state.access_token = payload.access_token;
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("tokenAccess", payload.access_token);
        }
        if (payload.refresh_token) {
          localStorage.setItem("tokenRefresh", payload.refresh_token);
        }
        state.isLoggedIn = true;
      }
    },
    logOut: (state) => {
      state.access_token = initialState.access;
      state.isLoggedIn = initialState.isLoggedIn;
      localStorage.removeItem("tokenRefresh");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("tokenAccess");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.refresh.matchFulfilled, storeTokens);
  },
});

export const { tokenReceived, logOut } = authSlice.actions;
export default authSlice.reducer;
