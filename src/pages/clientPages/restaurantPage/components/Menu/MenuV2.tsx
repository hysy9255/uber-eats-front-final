import { useRef, useState } from "react";
import Categories from "./Components/Categories/Categories";
import { MenuSection } from "./Components/MenuSection";
import type { DishSummaryDTO } from "../../../dishPage/api/getDishSummaries/dishSummary.dto";

interface MenuProps {
  categories: string[];
  menu: DishSummaryDTO[];
}

export const MenuV2: React.FC<MenuProps> = ({ categories, menu }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);

    categoryRefs.current[category]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="mt-4 flex items-center justify-between">
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          handleSelectCategory={handleChangeCategory}
        />
      </div>

      <div className="relative mt-3 flex flex-col gap-3">
        {categories.map((category) => (
          <MenuSection
            key={category}
            ref={(element) => {
              categoryRefs.current[category] = element;
            }}
            category={category}
            dishes={menu.filter((dish) => dish.category === category)}
          />
        ))}
      </div>
    </>
  );
};
