import { useFormContext } from "react-hook-form";
import type { EditCategoryFormValues } from "../../types/edit-category-form.types";

const RenameCategoryInput = () => {
  const { register } = useFormContext<EditCategoryFormValues>();
  return (
    <input
      {...register("newCategoryName", { required: true })}
      autoFocus
      className="
        mt-2
        h-10
        w-full
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

export default RenameCategoryInput;
