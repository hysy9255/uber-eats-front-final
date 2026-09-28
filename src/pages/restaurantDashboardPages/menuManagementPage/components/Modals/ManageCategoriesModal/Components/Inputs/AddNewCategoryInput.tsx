import { useFormContext } from "react-hook-form";
import type { AddCategoryFormValues } from "../../types/add-category-form.types";

const AddNewCategoryInput = () => {
  const { register } = useFormContext<AddCategoryFormValues>();

  return (
    <input
      {...register("categoryName", { required: true })}
      autoFocus
      placeholder="e.g. Appetizers"
      className="
        mt-2
        h-10
        w-full
        rounded-lg
        border
        border-gray-200
        bg-white
        px-3
        text-sm
        outline-none
        focus:border-green-500
  "
    />
  );
};

export default AddNewCategoryInput;
