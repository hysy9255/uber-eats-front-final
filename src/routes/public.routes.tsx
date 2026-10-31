import LoginPage from "../pages/LoginPage/LoginPage";
import CreateAccountPage from "../pages/CreateAccountPage/CreateAccountPage";
import RequireGuest from "../shared/components/RequireGuest";

export const publicRoutes = [
  {
    element: <RequireGuest />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/create-account-choice", element: <CreateAccountPage /> },
    ],
  },
];
