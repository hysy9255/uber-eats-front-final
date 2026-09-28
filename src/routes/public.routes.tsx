import LoginPage from "../pages/loginPage/LoginPage";
import CreateAccountPage from "../pages/createAccountPage/CreateAccountPage";
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
