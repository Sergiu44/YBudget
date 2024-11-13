import { CurrentUser } from "../slices/auth/types";

export const loadExpiration = (): string | undefined => {
  try {
    const serializedState = localStorage.getItem("expiration");
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const loadUserData = (): Omit<CurrentUser, "expiration"> | undefined => {
  try {
    const serializedState = localStorage.getItem("user");
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};
