import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = currentCategory
    ? capitalizeWords(currentCategory)
    : "All categories";

  const handleSelectCategory = (category: string) => {
    setCurrentCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="relative min-w-[170px]">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          flex
          h-full
          w-full
          items-center
          justify-between
          gap-3
          rounded-lg
          border
          border-gray-200
          bg-white
          px-3
          text-sm
          text-gray-700
          hover:bg-gray-50
          hover:cursor-pointer
        "
      >
        <span>{selectedLabel}</span>

        <ChevronDown
          className={`
            h-4
            w-4
            text-gray-500
            transition-transform
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      {isOpen && (
        <div
          className="
            absolute
            left-0
            top-full
            z-30
            mt-2
            w-full
            overflow-hidden
            rounded-xl
            border
            border-gray-200
            bg-white
            p-1
            shadow-lg
          "
        >
          <button
            type="button"
            onClick={() => handleSelectCategory("")}
            className={`
              flex
              w-full
              items-center
              rounded-lg
              px-3
              py-2
              text-left
              text-sm
              hover:bg-gray-50
              hover:cursor-pointer
              ${
                currentCategory === ""
                  ? "font-medium text-green-600"
                  : "text-gray-700"
              }
            `}
          >
            All categories
          </button>

          {categories.map((category) => {
            const isSelected = currentCategory === category.name;

            return (
              <button
                key={category.categoryId}
                type="button"
                onClick={() => handleSelectCategory(category.name)}
                className={`
                  flex
                  w-full
                  items-center
                  rounded-lg
                  px-3
                  py-2
                  text-left
                  text-sm
                  hover:bg-gray-50
                  hover:cursor-pointer
                  ${isSelected ? "font-medium text-green-600" : "text-gray-700"}
                `}
              >
                {capitalizeWords(category.name)}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
