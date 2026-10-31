import type { ReactNode } from "react";

interface CategoryButtonProps {
  categoryName: string;
  isSelected: boolean;
  onClick: () => void;
  icon?: ReactNode;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  categoryName,
  isSelected,
  onClick,
  icon,
}) => {
  return (
    <button
      key={categoryName}
      type="button"
      onClick={onClick}
      className={`
        hover:cursor-pointer
        inline-flex
        h-10
        shrink-0
        items-center
        gap-2
        rounded-full
        px-4
        text-[13px]
        font-medium
        transition
        ${
          isSelected
            ? "bg-gray-950 text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }
        `}
    >
      {icon && (
        <span className={isSelected ? "text-white" : "text-gray-600"}>
          {icon}
        </span>
      )}

      {categoryName}
    </button>
  );
};

export default CategoryButton;
