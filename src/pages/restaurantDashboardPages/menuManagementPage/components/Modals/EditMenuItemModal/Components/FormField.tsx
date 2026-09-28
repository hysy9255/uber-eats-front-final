interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

export const FormField = ({ label, children }: FormFieldProps) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-800">{label}</label>

      <div className="mt-2">{children}</div>
    </div>
  );
};
