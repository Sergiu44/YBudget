import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { Api } from "@reduxjs/toolkit/query";
import { CommonState } from "../slices/common/types";

export default function loadingMatchers(
  builder: ActionReducerMapBuilder<CommonState>,
  api: Api<any, any, any, any, any>
): any {
  Object.keys(api.endpoints).forEach((k) => {
    builder.addMatcher(api.endpoints[k].matchPending, (state, _) => {
      state.loading = true;
    });
  });
  Object.keys(api.endpoints).forEach((k) => {
    builder.addMatcher(api.endpoints[k].matchFulfilled, (state, _) => {
      state.loading = false;
    });
  });
  Object.keys(api.endpoints).forEach((k) => {
    builder.addMatcher(api.endpoints[k].matchRejected, (state, _) => {
      state.loading = false;
    });
  });
}
