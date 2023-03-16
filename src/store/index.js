import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/user";
import { adsApi } from "../services/ads";
import authReducer from "./slices/auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [adsApi.reducerPath]: adsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authApi.middleware)
    .concat(adsApi.middleware),
});
