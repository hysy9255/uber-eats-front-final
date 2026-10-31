import { useState } from "react";
import PrevNextButtons from "./PrevNextButtons";
import ViewAllMenuButton from "./ViewAllMenuButton";
import Categories from "./Categories/Categories";
import { MenuSection } from "./MenuSection";
import type { DishSummaryDTO } from "../../../DishPage/api/getDishSummaries/dishSummary.dto";

interface MenuProps {
  categories: string[];
  menu: DishSummaryDTO[];
}

const ITEMS_PER_PAGE = 5;
export const DEFAULT_CATEGORY = "popular";

const Menu: React.FC<MenuProps> = ({ categories, menu }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAllMenu, setViewAllMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);

  const categoryMenu = menu.filter(
    (dish) => dish.category === selectedCategory
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = currentPage * ITEMS_PER_PAGE;

  const pageMenu = categoryMenu.slice(startIndex, endIndex);

  const hasPrevPage = currentPage > 1;
  const hasNextPage = endIndex < categoryMenu.length;

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setViewAllMenu(false);
  };

  const handleClickViewAllMenu = () => {
    setViewAllMenu((prev) => !prev);
    setCurrentPage(1);
    setSelectedCategory(DEFAULT_CATEGORY);
  };

  return (
    <>
      <div className="mt-4 flex items-center justify-between">
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          handleSelectCategory={handleChangeCategory}
        />

        <ViewAllMenuButton
          onClick={handleClickViewAllMenu}
          expanded={!viewAllMenu}
        />
      </div>

      <div className="relative mt-3 flex flex-col gap-3">
        {!viewAllMenu && (
          <>
            <PrevNextButtons
              className="absolute right-0 top-0"
              onClickPrev={() =>
                hasPrevPage && setCurrentPage((prev) => prev - 1)
              }
              onClickNext={() =>
                hasNextPage && setCurrentPage((prev) => prev + 1)
              }
              prevActive={hasPrevPage}
              nextActive={hasNextPage}
            />

            <MenuSection
              category={selectedCategory}
              dishes={pageMenu}
              // restaurantId={restaurantId}
            />
          </>
        )}

        {viewAllMenu &&
          categories.map((category) => (
            <MenuSection
              key={category}
              category={category}
              dishes={menu.filter((dish) => dish.category === category)}
              // restaurantId={restaurantId}
            />
          ))}
      </div>
    </>
  );
};

export default Menu;
