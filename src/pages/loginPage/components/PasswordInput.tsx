import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { LoginForm } from "../types/loginForm.type";
import { Eye, Lock } from "lucide-react";

interface PasswordInputProps {
  register: UseFormRegister<LoginForm>;
  errors: FieldErrors<LoginForm>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ register, errors }) => {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium">Password</span>
        <a className="text-sm text-slate-600 hover:underline" href="#">
          Forgot?
        </a>
      </div>
      <div className="flex items-center gap-2 h-12 rounded-xl bg-white ring-1 ring-black/10 px-3 focus-within:ring-black/20">
        <Lock />
        <input
          {...register("password", {
            required: "Password is required",
          })}
          name="password"
          type="password"
          placeholder="••••••••"
          className="flex-1 bg-transparent outline-none placeholder-slate-400"
        />
        <Eye />
      </div>
      {errors.password?.message && (
        <span className="text-xs text-red-500">{errors.password?.message}</span>
      )}
    </label>
  );
};

export default PasswordInput;
