import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthenticationLayout from "../ui/layouts/AuthenticationLayout";
import JoinPage from "../ui/pages/auth/join";
import AccessPage from "../ui/pages/auth/access";
import DashboardLayout from "../ui/layouts/DashboardLayout";

const createRouter = (opts: { isAuth: boolean }) =>
  createBrowserRouter([
    {
      path: "/",
      element: opts.isAuth ? <DashboardLayout /> : <Navigate to="/auth/join" />,
    },
    {
      path: "auth",
      element: <AuthenticationLayout />,
      children: [
        {
          path: "join",
          element: <JoinPage />,
        },
        {
          path: "access",
          element: <AccessPage />,
        },
      ],
    },
  ]);

export default createRouter;
