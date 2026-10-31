import { useFormContext } from "react-hook-form";

interface PriceInputProps {
  placeholder: string;
  fieldName: string;
}

const PriceInput: React.FC<PriceInputProps> = ({ placeholder, fieldName }) => {
  const { register } = useFormContext();
  return (
    <div className="relative">
      <span
        className="
        absolute
        left-3
        top-1/2
        -translate-y-1/2
        text-sm
        text-gray-500
      "
      >
        $
      </span>

      <input
        {...register(fieldName, { required: true })}
        type="number"
        placeholder={placeholder}
        className="
        w-full
        h-10
        rounded-lg
        border
        border-gray-200
        pl-11
        pr-3
        text-sm
        outline-none
        focus:border-green-500
      "
      />
    </div>
  );
};

export default PriceInput;
