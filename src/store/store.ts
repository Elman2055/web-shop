import { configureStore } from "@reduxjs/toolkit";
import { webshopApi } from "./webshopApi";

export const store = configureStore({
  reducer: {
    [webshopApi.reducerPath]: webshopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(webshopApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
