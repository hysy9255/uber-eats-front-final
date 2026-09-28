import { Flame } from "lucide-react";
import CategoryButton from "./CategoryButton";
import { capitalizeWords } from "../../../../../../../shared/utils/capitalizeWords";

export interface CategoryItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
}

interface CategoriesProps {
  categories: string[];
  selectedCategory: string;
  handleSelectCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  selectedCategory,
  handleSelectCategory,
}) => {
  const categoryItems: CategoryItem[] = categories.map((category) => ({
    key: category.toLowerCase(),
    label: capitalizeWords(category) ?? category,
    icon:
      category.toLowerCase() === "popular" ? (
        <Flame className="h-[17px] w-[17px]" />
      ) : undefined,
  }));

  return (
    <div
      className={`
      flex items-center justify-between gap-4
    `}
    >
      <div className="flex min-w-0 items-center gap-2 overflow-x-auto">
        {categoryItems.map((category) => (
          <CategoryButton
            key={category.key}
            categoryName={category.label}
            isSelected={selectedCategory === category.key}
            onClick={() => handleSelectCategory(category.key)}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
