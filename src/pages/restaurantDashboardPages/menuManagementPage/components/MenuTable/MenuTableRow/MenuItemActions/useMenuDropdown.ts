import { useState } from "react";

export const useMenuDropdown = () => {
  const [openDropdownMenuId, setOpenDropdownMenuId] = useState<string | null>(
    null
  );

  const toggleDropdown = (menuId: string) => {
    setOpenDropdownMenuId((prev) => (prev === menuId ? null : menuId));
  };

  const closeDropdown = () => {
    setOpenDropdownMenuId(null);
  };

  return { openDropdownMenuId, toggleDropdown, closeDropdown };
};
