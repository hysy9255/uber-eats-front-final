import { BrowserRouter, useRoutes } from "react-router-dom";
import { publicRoutes } from "@/routes/public.routes";
import { onboardingRoutes } from "@/routes/on-boarding.routes";
import { ownerRoutes } from "@/routes/owner.routes";
import { clientRoutes } from "@/routes/client.routes";
import { AuthProvider } from "@/shared/context/auth/AuthProvider";
import PageNotFound from "../shared/components/PageNotFound";

function AppRoutes() {
  return useRoutes([
    ...publicRoutes,
    ...onboardingRoutes,
    ...ownerRoutes,
    ...clientRoutes,
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
}

export default function App() {
  // SocketBootstrap();
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
