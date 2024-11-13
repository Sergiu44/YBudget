import { RouterProvider } from "react-router-dom";
import createRouter from "./configs/router";
import { useSelector } from "react-redux";
import { RootState } from "./store/types";

function Providers() {
  const isAuth = useSelector((state: RootState) => !!state.auth.token);

  return <RouterProvider router={createRouter({ isAuth })}></RouterProvider>;
}

export default Providers;
