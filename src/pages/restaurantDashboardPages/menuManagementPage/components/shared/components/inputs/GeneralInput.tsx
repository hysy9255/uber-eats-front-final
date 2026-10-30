import { useFormContext } from "react-hook-form";

interface GeneralInputProps {
  placeholder: string;
  fieldName: string;
}

const GeneralInput: React.FC<GeneralInputProps> = ({
  placeholder,
  fieldName,
}) => {
  const { register } = useFormContext();
  return (
    <input
      {...register(fieldName, { required: true })}
      placeholder={placeholder}
      className="
        w-full
        h-10
        rounded-lg
        border
        border-gray-200
        px-3
        text-sm
        outline-none
        focus:border-green-500
        "
    />
  );
};

export default GeneralInput;
