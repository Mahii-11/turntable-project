/*import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store; */

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage"; // uses localStorage

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // only persist cart
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
