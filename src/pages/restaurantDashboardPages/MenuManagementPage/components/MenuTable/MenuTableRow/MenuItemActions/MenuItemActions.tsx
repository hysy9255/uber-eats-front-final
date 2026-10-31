import { Fragment } from "react/jsx-runtime";
import { MenuMoreDropdown } from "./MenuMoreDropdown/MenuMoreDropdown";
import type { OwnerDishSummaryDTO } from "../../../../api/dish/getOwnerDishSummaries/ownerDishSummary.dto";
import { useMenuItemDropdown } from "./hooks/useMeuItemDropdown";
import { MoreVerticalButton } from "../../../shared/MoreVerticalButton";

interface MenuActionsProps {
  item: OwnerDishSummaryDTO;
  openDropdownItemId: string | null;
  onToggleDropdown: () => void;
  onOpenRenameModal: () => void;
  onOpenDeleteModal: () => void;
  onToggleAvailability: () => void;
}

export const MenuActions: React.FC<MenuActionsProps> = ({
  item,
  openDropdownItemId,
  onToggleDropdown,
  onOpenRenameModal,
  onOpenDeleteModal,
  onToggleAvailability,
}) => {
  const { moreButtonRef, isDropdownUpward, updateDropdownDirection } =
    useMenuItemDropdown();

  const handleToggleDropdown = () => {
    onToggleDropdown();
    updateDropdownDirection();
  };

  const isDropdownOpen = openDropdownItemId === item.dishId;

  return (
    <Fragment>
      <MoreVerticalButton ref={moreButtonRef} onClick={handleToggleDropdown} />
      {isDropdownOpen && (
        <MenuMoreDropdown
          isAvailableItem={item.isAvailable}
          isOpenUpward={isDropdownUpward}
          onClickEditButton={onOpenRenameModal}
          onClickEditItemAvailabilityButton={onToggleAvailability}
          onClickDeleteButton={onOpenDeleteModal}
        />
      )}
    </Fragment>
  );
};
