import { createSlice } from "@reduxjs/toolkit";
import { CommonState } from "./types";
import { authApi } from "../auth/apiSlice";
import loadingMatchers from "../../utils";
const initialState: CommonState = {
  loading: false,
};
const commonSlice = createSlice({
  initialState,
  name: "common",
  reducers: {},
  extraReducers: (builder) => {
    loadingMatchers(builder, authApi);
  },
});

export default commonSlice.reducer;
