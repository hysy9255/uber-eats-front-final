import { useRef, useState } from "react";
import type { DishCategoryDTO } from "../../../../api/category/getDishCategories/dishCategory.dto";
import { Dropdown } from "./Dropdown/Dropdown";
import { MoreVerticalButton } from "../../../shared/MoreVerticalButton";

interface ManageCategoriesRowProps {
  categoryListRef: React.RefObject<HTMLDivElement | null>;
  category: DishCategoryDTO;
  openDropdownCategoryId: string | null;
  onToggleDropdown: () => void;
  onOpenRenameModal: () => void;
  onOpenDeleteModal: () => void;
  menuCount: number;
}

export const ManageCategoriesRow: React.FC<ManageCategoriesRowProps> = ({
  categoryListRef,
  category,
  openDropdownCategoryId,
  onToggleDropdown,
  onOpenRenameModal,
  onOpenDeleteModal,
  menuCount,
}) => {
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const [isDropdownUpward, setIsDropdownUpward] = useState(false);

  // const updateDropdownDirection = () => {
  //   const button = moreButtonRef.current;
  //   const container = categoryListRef.current;

  //   if (!button || !container) return;

  //   const buttonRect = button.getBoundingClientRect();
  //   const containerRect = container.getBoundingClientRect();

  //   const dropdownHeight = 120;
  //   const gap = 8;

  //   const spaceBelow = containerRect.bottom - buttonRect.bottom;

  //   setIsDropdownUpward(spaceBelow < dropdownHeight + gap);
  // };

  const updateDropdownDirection = () => {
    const button = moreButtonRef.current;
    const container = categoryListRef.current;

    if (!button || !container) return;

    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const dropdownHeight = 120;
    const gap = 8;

    const spaceBelow = containerRect.bottom - buttonRect.bottom;

    const spaceAbove = buttonRect.top - containerRect.top;

    const canOpenDown = spaceBelow >= dropdownHeight + gap;

    const canOpenUp = spaceAbove >= dropdownHeight + gap;

    if (canOpenDown) {
      setIsDropdownUpward(false);
      return;
    }

    if (canOpenUp) {
      setIsDropdownUpward(true);
      return;
    }

    // 둘 다 부족하면 더 공간 많은 쪽
    setIsDropdownUpward(spaceAbove > spaceBelow);
  };

  const handleToggleDropdown = () => {
    if (!isDropdownOpen) {
      updateDropdownDirection();
    }
    onToggleDropdown();
  };

  const isDropdownOpen = openDropdownCategoryId === category.categoryId;
  return (
    <div
      className={`
        relative
        flex
        h-12
        items-center
        justify-between
        rounded-xl
        border
        border-gray-200
        px-4
        `}
    >
      <div className="flex items-center gap-3">
        <span className="text-gray-300">⋮⋮</span>

        <span className="text-sm font-medium text-gray-900">
          {category.name}
        </span>
        <span className="text-xs font-medium text-gray-400">
          {menuCount} items
        </span>
      </div>
      <div className="relative">
        <MoreVerticalButton
          ref={moreButtonRef}
          onClick={handleToggleDropdown}
        />

        {isDropdownOpen && (
          <Dropdown
            isOpenUpward={isDropdownUpward}
            onClickRename={onOpenRenameModal}
            onClickDelete={onOpenDeleteModal}
          />
        )}
      </div>
    </div>
  );
};
