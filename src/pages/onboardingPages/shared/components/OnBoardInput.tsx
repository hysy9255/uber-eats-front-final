import {
  useFormContext,
  type Path,
  get,
  type FieldValues,
} from "react-hook-form";

interface OnBoardInputProps<TForm extends FieldValues> {
  css: string;
  title: string;
  field: Path<TForm>;
  placeholder?: string;
  pattern?: { value: RegExp; message: string };
  children?: React.ReactNode;
  customMessageFunction?: () => React.ReactNode;
  type?: string;
  validateValue?: string;
  validationMessage?: string;
  required?: boolean;
}

const OnBoardInput = <TForm extends FieldValues>({
  css,
  title,
  field,
  placeholder,
  pattern,
  validateValue,
  validationMessage,
  children,
  customMessageFunction,
  type,
  required = true,
}: OnBoardInputProps<TForm>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TForm>();
  const error = get(errors, field);

  return (
    <label className={`${css} flex flex-col gap-y-1`}>
      <div className="text-sm font-medium">{title}</div>
      <div className="flex gap-x-2">
        <input
          className="
          h-8
          w-full
          rounded-md
          border
          border-gray-200
          px-4
          text-[14px]
          text-gray-900
          outline-none
          transition
          placeholder:text-gray-400
          focus:border-green-500
          focus:ring-4
          focus:ring-green-100"
          {...register(field, {
            ...(required && {
              required: `${title} is required`,
            }),

            setValueAs: (v) => (typeof v === "string" ? v.trim() : v),

            ...(pattern && { pattern }),

            ...(validateValue !== undefined && {
              validate: (val) => val === validateValue || validationMessage,
            }),
          })}
          placeholder={placeholder}
          type={type}
        />
        {children}
      </div>
      {error?.message && (
        <div className="font-medium text-red-500 text-xs">{error.message}</div>
      )}
      {customMessageFunction?.()}
    </label>
  );
};

export default OnBoardInput;
