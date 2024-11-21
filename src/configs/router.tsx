import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthenticationLayout from "../ui/layouts/AuthenticationLayout";
import JoinPage from "../ui/pages/auth/join";
import AccessPage from "../ui/pages/auth/access";
import DashboardLayout from "../ui/layouts/DashboardLayout";

const createRouter = (opts: { isAuth: boolean }) =>
  createBrowserRouter([
    {
      path: "/",
      element: opts.isAuth ? (
        <Navigate to="/dashboard" />
      ) : (
        <Navigate to="/auth/join" />
      ),
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
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "transactions",
          element: <TransactionsPage />,
        },
        {
          path: "accounts",
          element: <AccountsPage />,
        },
        {
          path: "pending",
          element: <PendingTransactionsPage />,
        },
      ],
    },
    {
      path: "settings",
      element: <SettingsPage />,
    },
  ]);

export default createRouter;
