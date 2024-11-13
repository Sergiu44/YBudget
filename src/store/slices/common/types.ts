import { Action } from "@reduxjs/toolkit";

export interface CommonState {
  loading: boolean;
}

export interface PendingAction extends Action {
  loading: boolean;
}
