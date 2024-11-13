import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CurrentUser, LoginUserModel, RegisterUserModel } from "./types";
import viteConfig from "../../../configs/viteConfig";

export const authApi = createApi({
  reducerPath: "auth-api",
  baseQuery: fetchBaseQuery({ baseUrl: `${viteConfig.SERVER_URL}/auth` }),
  endpoints: (builder) => ({
    login: builder.mutation<CurrentUser, LoginUserModel>({
      query: (loginModel) => ({
        url: `login`,
        method: "POST",
        body: loginModel,
      }),
    }),
    register: builder.mutation<CurrentUser, RegisterUserModel>({
      query: (registerModel) => ({
        url: `register`,
        method: "POST",
        body: registerModel,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
