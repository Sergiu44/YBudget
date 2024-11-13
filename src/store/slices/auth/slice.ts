import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentUser } from "./types";
import { authApi } from "./apiSlice";

const initialState: Partial<CurrentUser> = {};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setCurrentUser(_state, action: PayloadAction<CurrentUser>) {
      _state = { ...action.payload };
      const { expiration, ...userData } = action.payload;
      localStorage.setItem("expiration", expiration.getTime().toString());
      localStorage.setItem("user", JSON.stringify(userData));
    },
    removeCurrentUser: (_state, _: PayloadAction<void>) => {
      localStorage.removeItem("expiration");
      localStorage.removeItem("user");
      return {};
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (_state, action) => {
        const { expiration, ...userData } = action.payload;
        localStorage.setItem(
          "expiration",
          new Date(action.payload.expiration).getTime().toString()
        );
        localStorage.setItem("user", JSON.stringify(userData));
        return { ...action.payload };
      }
    );
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (_state, action) => {
        const { expiration, ...userData } = action.payload;
        localStorage.setItem(
          "expiration",
          new Date(action.payload.expiration).getTime().toString()
        );
        localStorage.setItem("user", JSON.stringify(userData));
        return { ...action.payload };
      }
    );
  },
});

export default authSlice.reducer;
export const { setCurrentUser, removeCurrentUser } = authSlice.actions;
