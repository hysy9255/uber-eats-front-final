import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useFormContext } from "react-hook-form";

import type { Category } from "../../../../types/cateogry.type";
import type { AddMenuItemForm } from "../../add-menu-item-form.types";

interface CategoryDropdownInputProps {
  categories: Category[];
}

const CategoryDropdownInput: React.FC<CategoryDropdownInputProps> = ({
  categories,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { watch, setValue, register } = useFormContext<AddMenuItemForm>();

  const selectedCategoryId = watch("category");

  const selectedCategory = categories.find(
    (category) => category.categoryId === selectedCategoryId
  );

  const handleSelectCategory = (categoryId: string) => {
    setValue("category", categoryId, {
      shouldDirty: true,
      shouldValidate: true,
    });

    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <input
        type="hidden"
        {...register("category", {
          required: true,
        })}
      />
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          flex
          h-10
          w-full
          items-center
          justify-between
          rounded-lg
          border
          border-gray-200
          bg-white
          px-3
          text-sm
          outline-none
          transition
          hover:border-gray-300
          focus:border-green-500
        "
      >
        <span className={selectedCategory ? "text-gray-700" : "text-gray-400"}>
          {selectedCategory?.name ?? "Select category"}
        </span>

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
            rounded-lg
            border
            border-gray-200
            bg-white
            py-1
            shadow-lg
          "
        >
          {categories.map((category) => {
            const isSelected = category.categoryId === selectedCategoryId;

            return (
              <button
                key={category.categoryId}
                type="button"
                onClick={() => handleSelectCategory(category.categoryId)}
                className={`
                  flex
                  w-full
                  items-center
                  px-3
                  py-2.5
                  text-left
                  text-sm
                  transition
                  ${
                    isSelected
                      ? "bg-green-50 font-medium text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }
                `}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdownInput;
