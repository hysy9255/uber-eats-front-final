import { useRef } from "react";
import type { DishCategoryDTO } from "../../../../../api/category/getDishCategories/dishCategory.dto";
import { useMenuManagement } from "../../../../../context/useMenuManagement";
import { useCategoriesModalContext } from "../../context/useCategoriesModal";
import { useCategoryDropdown } from "../../hooks/useCategoryDropdown";
import { ManageCategoriesRow } from "./ManageCategoriesRow";

const CategoryList = () => {
  const {
    menuList: { categories, displayMenus: menus },
  } = useMenuManagement();

  const { openEditModal, openDeleteModal } = useCategoriesModalContext();

  const { openDropdownCategoryId, toggleDropdown, closeMoreDropdown } =
    useCategoryDropdown();

  const handleOpenEditModal = (category: DishCategoryDTO) => {
    openEditModal(category);
    closeMoreDropdown();
  };

  const handleOpenDeleteModal = (category: DishCategoryDTO) => {
    openDeleteModal(category);
    closeMoreDropdown();
  };

  const categoryListRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={categoryListRef}
      className="mt-6 max-h-[320px] min-h-[150px] space-y-2 overflow-y-auto pr-1"
    >
      {categories.map((category) => {
        const count = menus.reduce((acc, item) => {
          if (item.categoryId === category.categoryId) {
            acc += 1;
          }
          return acc;
        }, 0);
        return (
          <ManageCategoriesRow
            key={category.categoryId}
            categoryListRef={categoryListRef}
            category={category}
            openDropdownCategoryId={openDropdownCategoryId}
            onToggleDropdown={() => toggleDropdown(category.categoryId)}
            onOpenRenameModal={() => handleOpenEditModal(category)}
            onOpenDeleteModal={() => handleOpenDeleteModal(category)}
            menuCount={count}
          />
        );
      })}
    </div>
  );
};

export default CategoryList;
