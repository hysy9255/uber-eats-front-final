import { Navigate, Outlet, useLocation } from "react-router-dom";
import type { UserRole } from "../types/userRole.type";
import { useAuth } from "../context/auth/useAuth";

interface RequireRoleProps {
  allowedRole: UserRole;
}

const RequireRole: React.FC<RequireRoleProps> = ({ allowedRole }) => {
  const { user, isAuthLoading } = useAuth();
  const location = useLocation();

  if (isAuthLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (user.role !== allowedRole) {
    return <Navigate to="/forbidden" replace />;
  }

  return <Outlet />;
};

export default RequireRole;
