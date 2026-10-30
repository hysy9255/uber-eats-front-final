import DeleteItemButton from "./components/DeleteItemButton";
import EditItemAvailabilityButton from "./components/EditItemAvailabilityButton";
import EditItemButton from "./components/EditItemButton";

interface MenuMoreDropdownProps {
  isAvailableItem: boolean;
  isOpenUpward: boolean;
  onClickEditButton: () => void;
  onClickEditItemAvailabilityButton: () => void;
  onClickDeleteButton: () => void;
}

export const MenuMoreDropdown = ({
  isAvailableItem,
  isOpenUpward,
  onClickEditButton,
  onClickEditItemAvailabilityButton,
  onClickDeleteButton,
}: MenuMoreDropdownProps) => {
  return (
    <div
      className={`  
        absolute
        right-2
        z-30
        w-[180px]
        rounded-xl
        border
        border-gray-200
        bg-white
        p-1.5
        shadow-lg
        ${isOpenUpward ? "bottom-13" : "top-13"}   
        `}
    >
      <EditItemButton onClick={onClickEditButton} />
      <EditItemAvailabilityButton
        onClick={onClickEditItemAvailabilityButton}
        isAvailable={isAvailableItem}
      />
      <div className="my-1 border-t border-gray-100" />
      <DeleteItemButton onClick={onClickDeleteButton} />
    </div>
  );
};
