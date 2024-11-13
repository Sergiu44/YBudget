import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/slice";
import commonReducer from "./slices/common/slice";
import { authApi } from "./slices/auth/apiSlice";
import { loadExpiration, loadUserData } from "./utils/localStorage";

const expiration = loadExpiration();
const userData = loadUserData();

export const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    common: commonReducer,
    [authApi.reducerPath]: authApi.reducer,
  }),
  preloadedState: {
    auth: {
      ...(expiration && { expiration: new Date(expiration) }),
      ...userData,
    },
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
});
