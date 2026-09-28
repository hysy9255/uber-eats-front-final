import { useFormContext } from "react-hook-form";
import type { Category } from "../../../../types/cateogry.type";

interface CategoryDropdownInputProps {
  categories: Category[];
}

const CategoryDropdownInput: React.FC<CategoryDropdownInputProps> = ({
  categories,
}) => {
  const { register } = useFormContext();
  return (
    <select
      {...register("category", { required: true })}
      className="
                  w-full
                  h-10
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  px-3
                  text-sm
                  text-gray-700
                  outline-none
                  focus:border-green-500
                "
    >
      <option value="">Select category</option>
      {categories.map((category) => (
        <option key={category.categoryId} value={category.categoryId}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdownInput;
