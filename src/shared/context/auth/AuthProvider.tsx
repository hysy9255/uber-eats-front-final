import { useEffect, useState, type ReactNode } from "react";
import { UserRole } from "../../types/userRole.type";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../api/getMe/getMe";
import { ACCESS_TOKEN_KEY } from "../../constants/auth.constants";

export interface AuthUser {
  role: UserRole;
}

export interface AuthContextValue {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  loggedIn: boolean;
  isAuthLoading: boolean;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const restoreAuth = async () => {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

      // 토큰이 없으면 비로그인 상태로 공개 페이지를 보여줌
      if (!accessToken) {
        setUser(null);
        setIsAuthLoading(false);
        return;
      }

      try {
        const authUser = await getMe(accessToken);
        setUser(authUser);
      } catch {
        // 만료되거나 유효하지 않은 토큰
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        setUser(null);
      } finally {
        setIsAuthLoading(false);
      }
    };

    void restoreAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    setUser(null);
    navigate("/login");
  };

  const loggedIn = user !== null;

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        isAuthLoading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
