import { Mail } from "lucide-react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { LoginForm } from "../types/loginForm.type";

interface EmailInputProps {
  errors: FieldErrors<LoginForm>;
  register: UseFormRegister<LoginForm>;
}

const EmailInput: React.FC<EmailInputProps> = ({ register, errors }) => {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">Email</span>
      <div
        className="
  flex items-center gap-2 h-12 rounded-xl 
  bg-white ring-1 ring-black/10 px-3 
  focus-within:ring-black/20"
      >
        <Mail />
        <input
          {...register("email", {
            required: "Email is required",
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          name="email"
          type="text"
          placeholder="your@example.com"
          className="flex-1 bg-transparent outline-none placeholder-slate-400"
        />
      </div>
      {errors.email?.message && (
        <span className=" text-red-500 text-xs">{errors.email?.message}</span>
      )}
      {errors.email?.type === "pattern" && (
        <span className="text-red-500 text-xs">
          {"Please enter a valid email"}
        </span>
      )}
    </label>
  );
};

export default EmailInput;
