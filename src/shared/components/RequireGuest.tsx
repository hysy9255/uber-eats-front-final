import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth/useAuth";

const RequireGuest = () => {
  const { user } = useAuth();

  if (user) {
    if (user.role === "owner") {
      return <Navigate to="/dashboard/overview" replace />;
    }

    return <Navigate to="/restaurants" replace />;
  }

  return <Outlet />;
};

export default RequireGuest;
