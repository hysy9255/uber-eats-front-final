import { useState } from "react";

export const useCategoryDropdown = () => {
  const [openDropdownCategoryId, setOpenDropdownCategoryId] = useState<
    string | null
  >(null);

  const toggleDropdown = (categoryId: string) => {
    setOpenDropdownCategoryId((prev) =>
      prev === categoryId ? null : categoryId
    );
  };

  const closeMoreDropdown = () => {
    setOpenDropdownCategoryId(null);
  };

  return {
    openDropdownCategoryId,
    closeMoreDropdown,
    toggleDropdown,
  };
};
