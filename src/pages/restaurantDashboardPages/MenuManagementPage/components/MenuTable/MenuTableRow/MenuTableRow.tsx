import { MenuStatusBadge } from "./MenuStatusBadge";
import type { OwnerDishSummaryDTO } from "../../../api/dish/getOwnerDishSummaries/ownerDishSummary.dto";
import { MenuActions } from "./MenuItemActions/MenuItemActions";
import { NoImagePlaceholder } from "../../../../../../shared/components/NoImagePlaceHolder/NoImagePlaceHolder";

interface MenuTableRowProps {
  item: OwnerDishSummaryDTO;
  openDropdownItemId: string | null;
  onToggleDropdown: () => void;
  onOpenRenameModal: () => void;
  onOpenDeleteModal: () => void;
  onToggleAvailability: () => void;
}

export const MenuTableRow = ({
  item,
  openDropdownItemId,
  onToggleDropdown,
  onOpenRenameModal,
  onOpenDeleteModal,
  onToggleAvailability,
}: MenuTableRowProps) => {
  return (
    <tr className="border-t border-gray-100 transition hover:bg-gray-50/70">
      {/* Item */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
            {item.dishImg ? (
              <img
                src={item.dishImg}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <NoImagePlaceholder iconOnly />
            )}
          </div>

          <span className="text-sm font-semibold text-gray-900">
            {item.name}
          </span>
        </div>
      </td>

      {/* Category */}
      <td className="px-4 py-3">
        <span className="text-sm text-gray-600">{item.category}</span>
      </td>

      {/* Price */}
      <td className="px-4 py-3">
        <span className="text-sm font-medium text-gray-800">
          $ {item.price.toFixed(2)}
        </span>
      </td>

      {/* Status */}
      <td className="px-4 py-3">
        <MenuStatusBadge
          status={item.isAvailable === true ? "Available" : "Unavailable"}
        />
      </td>

      {/* Sold */}
      <td className="px-4 py-3">
        <span className="text-sm text-gray-700">{item.numOfSold}</span>
      </td>

      {/* More */}
      <td className="relative px-3 py-3">
        <MenuActions
          item={item}
          openDropdownItemId={openDropdownItemId}
          onToggleDropdown={onToggleDropdown}
          onOpenRenameModal={onOpenRenameModal}
          onOpenDeleteModal={onOpenDeleteModal}
          onToggleAvailability={onToggleAvailability}
        />
      </td>
    </tr>
  );
};
