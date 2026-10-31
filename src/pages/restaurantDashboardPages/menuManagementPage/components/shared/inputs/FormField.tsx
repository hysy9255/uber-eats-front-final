interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  isRequired?: boolean;
}

export const FormField = ({ label, children, isRequired }: FormFieldProps) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-800">{label}</label>

      {isRequired !== undefined && (
        <span className="ml-2 text-xs text-gray-800">
          {isRequired ? "(Required)" : "(optional)"}
        </span>
      )}

      <div className="mt-2">{children}</div>
    </div>
  );
};
