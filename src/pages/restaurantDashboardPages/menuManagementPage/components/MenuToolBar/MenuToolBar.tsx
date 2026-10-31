import { Search } from "lucide-react";
import CategoriesDropdown from "./CategoriesDropdown";
import ManageCategoriesButton from "./ManageCategoriesButton";
import { MenuSortDropdown } from "./MenuSortDropdown/MenuSortDropdown";
import { useMenuManagement } from "../../context/useMenuManagement";
import { useMenuModalContext } from "../MenuTable/context/useMenuModalContext";

interface MenuToolBarProps {
  className?: string;
}

const MenuToolBar: React.FC<MenuToolBarProps> = ({ className }) => {
  const {
    menuList: {
      categories,
      currentCategory,
      setCurrentCategory,
      selectedSortOption,
      setSelectedSortOption,
    },
  } = useMenuManagement();

  const { openCategoriesModal } = useMenuModalContext();

  const searchTerm = "";
  const setSearchTerm = (e: string) => {
    console.log(e);
  };

  return (
    <section className={`${className} flex gap-3 h-10`}>
      <div
        className="
        w-[360px]
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
      <ManageCategoriesButton onClick={openCategoriesModal} />
    </section>
  );
};

export default MenuToolBar;
