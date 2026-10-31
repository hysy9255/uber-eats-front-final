import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { LoginForm } from "./types/loginForm.type";
import { useAuth } from "../../shared/context/auth/useAuth";
import { login } from "./api/login";
import { getMe } from "../../shared/api/getMe/getMe";
import { UserRole } from "../../shared/types/userRole.type";
import { ACCESS_TOKEN_KEY } from "../../shared/constants/auth.constants";

export const useLoginPage = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string>();
  const { setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onSubmit",
  });

  const handleSignIn = handleSubmit(
    async (data: LoginForm) => {
      try {
        const { access_token } = await login({
          email: data.email,
          password: data.password,
        });
        localStorage.setItem(ACCESS_TOKEN_KEY, access_token);

        const me = await getMe(access_token);
        setUser(me);

        switch (me.role) {
          case UserRole.Client:
            navigate("/restaurants", { replace: true });
            break;

          case UserRole.Owner:
            navigate("/dashboard/overview", { replace: true });
            break;
        }
      } catch (error) {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        setUser(null);
        const msg =
          error instanceof Error
            ? error.message
            : "Login failed. Please try again.";

        setLoginError(msg);
      }
    },
    (e) => console.error(e)
  );

  return { register, errors, handleSignIn, loginError, setLoginError };
};
