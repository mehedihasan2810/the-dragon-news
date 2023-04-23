import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../createApis/createApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

// refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);
