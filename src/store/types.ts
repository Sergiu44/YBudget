import { store } from ".";
import {
  useDispatch as useUntypedDispatch,
  useSelector as useUntypedSelector,
} from "react-redux";

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useDispatch = useUntypedDispatch.withTypes<AppDispatch>();
export const useSelector = useUntypedSelector.withTypes<RootState>();
