import { capitalizeWords } from "../../../../../../shared/utils/capitalizeWords";
import type { Category } from "../../types/cateogry.type";

interface CategoriesDropdownProps {
  categories: Category[];
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}

const CategoriesDropdown: React.FC<CategoriesDropdownProps> = ({
  categories,
  currentCategory,
  setCurrentCategory,
}) => {
  return (
    <select
      value={currentCategory}
      onChange={(e) => setCurrentCategory(e.target.value)}
      className="
        h-10
        min-w-[170px]
        rounded-lg
        border
        border-gray-200
        bg-white
        px-3
        text-sm
        text-gray-700
        outline-none
        hover:cursor-pointer
      "
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option value={category.name}>{capitalizeWords(category.name)}</option>
      ))}
    </select>
  );
};

export default CategoriesDropdown;
