import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { manageEndpointslxd } from "../service/api";

export const store = configureStore({
  reducer: {
    [manageEndpointslxd.reducerPath]: manageEndpointslxd.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: false,
    }).concat(manageEndpointslxd.middleware),
});
setupListeners(store.dispatch);
