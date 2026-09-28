import { useFormContext } from "react-hook-form";

interface DescriptionInputProps {
  placeholder: string;
  fieldName: string;
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({
  placeholder,
  fieldName,
}) => {
  const { register } = useFormContext();
  return (
    <textarea
      {...register(fieldName, { required: true })}
      placeholder={placeholder}
      rows={4}
      className="
      w-full
      resize-none
      rounded-lg
      border
      border-gray-200
      px-3
      py-2.5
      text-sm
      outline-none
      focus:border-green-500
    "
    />
  );
};

export default DescriptionInput;
