import { TableHeader } from "./TableHeader";
import { MenuTableRow } from "./MenuTableRow/MenuTableRow";
import { useMenuManagement } from "../../context/useMenuManagement";
import { useMenuDropdown } from "./MenuTableRow/MenuItemActions/useMenuDropdown";
import type { OwnerDishSummaryDTO } from "../../api/dish/getOwnerDishSummaries/ownerDishSummary.dto";
import { useMenuMutation } from "./MenuTableRow/MenuItemActions/hooks/useMenuMutation";
import { useMenuModalContext } from "./context/useMenuModalContext";

interface MenuTableProps {
  className?: string;
}

const MenuTable: React.FC<MenuTableProps> = ({ className }) => {
  const {
    menuList: { displayMenus },
  } = useMenuManagement();

  const menuItems = displayMenus;

  const { openDeleteMenuModal, openEditMenuModal } = useMenuModalContext();

  const { openDropdownMenuId, closeDropdown, toggleDropdown } =
    useMenuDropdown();

  const { toggleMenuItemAvailability } = useMenuMutation();

  const handleToggleAvailability = async (menu: OwnerDishSummaryDTO) => {
    await toggleMenuItemAvailability(menu);
    closeDropdown();
  };

  const handleOpenDeleteModal = (menu: OwnerDishSummaryDTO) => {
    openDeleteMenuModal(menu);
    closeDropdown();
  };

  const handleOpenEditMenuModal = (menu: OwnerDishSummaryDTO) => {
    openEditMenuModal(menu);
    closeDropdown();
  };

  const handleToggleDropdown = (menu: OwnerDishSummaryDTO) => {
    toggleDropdown(menu.dishId);
  };

  return (
    <section
      className={`
      ${className}
      rounded-xl border border-gray-200 bg-white
    `}
    >
      <table className="w-full border-collapse">
        <thead className="sticky top-0 z-10 bg-gray-50">
          <tr>
            <TableHeader>Item</TableHeader>
            <TableHeader>Category</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Sold</TableHeader>
            <th className="w-12" />
          </tr>
        </thead>

        <tbody>
          {menuItems.map((item) => (
            <MenuTableRow
              key={item.dishId}
              item={item}
              openDropdownItemId={openDropdownMenuId}
              onOpenRenameModal={() => handleOpenEditMenuModal(item)}
              onOpenDeleteModal={() => handleOpenDeleteModal(item)}
              onToggleAvailability={() => handleToggleAvailability(item)}
              onToggleDropdown={() => handleToggleDropdown(item)}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MenuTable;
