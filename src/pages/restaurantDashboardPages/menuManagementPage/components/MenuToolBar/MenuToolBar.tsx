import { Search } from "lucide-react";
import CategoriesDropdown from "./Components/CategoriesDropdown";
import ManageCategoriesButton from "./Components/ManageCategoriesButton";
import type { Category } from "../types/cateogry.type";
import { MenuSortDropdown } from "./Components/MenuSortDropdown/MenuSortDropdown";
import type { MenuSortType } from "./Components/MenuSortDropdown/menuSortType";

interface MenuToolBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
  categories: Category[];
  onClickManageCategoriesButton: () => void;
  selectedSortOption: MenuSortType | null;
  setSelectedSortOption: React.Dispatch<
    React.SetStateAction<MenuSortType | null>
  >;
}

const MenuToolBar: React.FC<MenuToolBarProps> = ({
  searchTerm,
  setSearchTerm,
  currentCategory,
  setCurrentCategory,
  categories,
  onClickManageCategoriesButton,
  selectedSortOption,
  setSelectedSortOption,
}) => {
  return (
    <section className="mt-5 flex items-center gap-3">
      <div
        className="
      w-[360px]
      h-10
      rounded-lg
      border
      border-gray-200
      bg-white
      px-3
      flex
      items-center
      gap-2
    "
      >
        <Search className="w-4 h-4 text-gray-400 shrink-0" />

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search menu items..."
          className="
        w-full
        bg-transparent
        outline-none
        text-sm
        text-gray-800
        placeholder:text-gray-400
      "
        />
      </div>

      <CategoriesDropdown
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        categories={categories}
      />
      <MenuSortDropdown
        selectedSortOption={selectedSortOption}
        setSelectedSortOption={setSelectedSortOption}
      />
      <ManageCategoriesButton onClick={onClickManageCategoriesButton} />
    </section>
  );
};

export default MenuToolBar;
