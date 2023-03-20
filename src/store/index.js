import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/auth";
import { adsApi } from "../services/ads";
import { userApi } from "../services/user";
import authReducer from "./slices/auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [adsApi.reducerPath]: adsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(adsApi.middleware)
      .concat(userApi.middleware),
});
