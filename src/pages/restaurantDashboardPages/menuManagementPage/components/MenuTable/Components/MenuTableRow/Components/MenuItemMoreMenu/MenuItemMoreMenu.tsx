import EditItemButton from "./Components/EditItemButton";
import EditItemAvailabilityButton from "./Components/EditItemAvailabilityButton";
import DeleteItemButton from "./Components/DeleteItemButton";

interface MenuItemMoreMenuProps {
  onEdit: () => void;
  onToggleAvailability: () => void;
  onDelete: () => void;
  isActive: boolean;
}

const MenuItemMoreMenu = ({
  onEdit,
  onToggleAvailability,
  onDelete,
  isActive,
}: MenuItemMoreMenuProps) => {
  return (
    <div
      className="
        absolute
        right-2
        top-13
        z-30
        w-[180px]
        rounded-xl
        border
        border-gray-200
        bg-white
        p-1.5
        shadow-lg
      "
    >
      <EditItemButton onClick={onEdit} />
      <EditItemAvailabilityButton
        onClick={onToggleAvailability}
        isActive={isActive}
      />

      <div className="my-1 border-t border-gray-100" />
      <DeleteItemButton onClick={onDelete} />
    </div>
  );
};

export default MenuItemMoreMenu;
