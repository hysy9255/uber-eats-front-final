import {
  useFormContext,
  type Path,
  get,
  type FieldValues,
} from "react-hook-form";
import type { ReactNode } from "react";

interface OnBoardInputProps<TForm extends FieldValues> {
  title: string;
  field: Path<TForm>;
  placeholder?: string;
  pattern?: { value: RegExp; message: string };
  children?: ReactNode;
  customMessageFunction?: () => ReactNode;
  type?: string;
  validateValue?: string;
  validationMessage?: string;
  required?: boolean;
  formatValue?: (value: string) => string;
}

const OnBoardInput = <TForm extends FieldValues>({
  title,
  field,
  placeholder,
  pattern,
  validateValue,
  validationMessage,
  children,
  customMessageFunction,
  type = "text",
  required = true,
  formatValue,
}: OnBoardInputProps<TForm>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TForm>();

  const error = get(errors, field);

  const { onChange, ...registration } = register(field, {
    ...(required && {
      required: `${title} is required`,
    }),

    setValueAs: (value) => (typeof value === "string" ? value.trim() : value),

    ...(pattern && { pattern }),

    ...(validateValue !== undefined && {
      validate: (value) => value === validateValue || validationMessage,
    }),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formatValue) {
      e.target.value = formatValue(e.target.value);
    }

    void onChange(e);
  };

  return (
    <div className={`flex min-w-0 flex-col gap-2`}>
      {/* Label */}
      <label htmlFor={field} className="text-sm font-semibold text-gray-800">
        {title}
      </label>

      {/* Input and Optional Button */}
      <div className="@container min-w-0">
        <div
          className={`
            flex min-w-0 gap-2
            ${children ? "flex-col @[400px]:flex-row" : ""}
          `}
        >
          <input
            {...registration}
            id={field}
            onChange={handleInputChange}
            placeholder={placeholder}
            type={type}
            aria-invalid={!!error}
            className={`
              block h-11 w-full min-w-0
              flex-1 rounded-lg border
              bg-white px-3
              text-sm font-normal text-gray-900
              outline-none transition-colors
              placeholder:text-gray-400
              focus:border-green-500
              focus:ring-2 focus:ring-green-500/10
              ${
                error
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                  : "border-gray-200"
              }
            `}
          />

          {children}
        </div>
      </div>

      {/* Validation Error */}
      {error?.message && (
        <p role="alert" className="text-xs font-medium text-red-500">
          {String(error.message)}
        </p>
      )}

      {/* Custom Validation Message */}
      {customMessageFunction?.()}
    </div>
  );
};

export default OnBoardInput;
