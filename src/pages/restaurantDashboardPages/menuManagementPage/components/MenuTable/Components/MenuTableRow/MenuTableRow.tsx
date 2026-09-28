import { MenuStatusBadge } from "./Components/MenuStatusBadge";
import { useState } from "react";
import MenuItemMoreMenu from "./Components/MenuItemMoreMenu/MenuItemMoreMenu";
import MoreVerticalButton from "./Components/MoreVerticalButton";
import type { OwnerDishSummaryDTO } from "../../../../api/dish/getOwnerDishSummaries/ownerDishSummary.dto";
import { makeDishUnavailable } from "../../../../api/dish/markDishUnavailable";
import { makeDishAvailable } from "../../../../api/dish/markDishAvailable";
import { deleteDish } from "../../../../api/dish/deleteDish";
import { useRestaurantDashboard } from "../../../../../shared/context/useRestaurantDashboard";
import { getToken } from "../../../../../../../shared/utils/getToken";
import NoImgAvailable from "../../../../../../../shared/components/NoImgAvailable/NoImgAvailable";

interface MenuTableRowProps {
  item: OwnerDishSummaryDTO;
  loadMenu: () => void;
  onClickEditMenuItem: () => void;
}

export const MenuTableRow = ({
  item,
  loadMenu,
  onClickEditMenuItem,
}: MenuTableRowProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { restaurantId } = useRestaurantDashboard();
  const token = getToken();

  const onToggleAvailability = async () => {
    try {
      if (!token) throw new Error("No Token");
      if (!restaurantId) throw new Error("No Restaurant ID");
      if (item.isAvailable) {
        await makeDishUnavailable(token, restaurantId, item.dishId);
      } else {
        await makeDishAvailable(token, restaurantId, item.dishId);
      }
      loadMenu();
      setMenuOpen(false);
    } catch (e) {
      console.error(e);
      throw new Error("Error editing dish availability");
    }
  };

  const onClickDelete = async () => {
    try {
      if (!token) throw new Error("No Token");
      if (!restaurantId) throw new Error("No Restaurant ID");
      await deleteDish(token, restaurantId, item.dishId);
      loadMenu();
      setMenuOpen(false);
    } catch (e) {
      console.error(e);
      throw new Error("Error deleting dish");
    }
  };

  return (
    <tr className="border-t border-gray-100 hover:bg-gray-50/70 transition">
      {/* Item */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          {item.dishImg === null ? (
            <NoImgAvailable className="w-11 h-11 border border-gray-200 rounded-lg shrink-0" />
          ) : (
            <img
              src={item.dishImg ? item.dishImg : undefined}
              alt={item.name}
              className="w-11 h-11 rounded-lg object-cover shrink-0 border border-gray-200"
            />
          )}

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
          HK$ {item.price.toFixed(2)}
        </span>
      </td>

      {/* Status */}
      <td className="px-4 py-3">
        <MenuStatusBadge
          status={item.isAvailable === true ? "Active" : "Inactive"}
        />
      </td>

      {/* Sold */}
      <td className="px-4 py-3">
        <span className="text-sm text-gray-700">{item.numOfSold}</span>
      </td>

      {/* More */}
      <td className="relative px-3 py-3">
        <MoreVerticalButton onClick={() => setMenuOpen((prev) => !prev)} />
        {menuOpen && (
          <MenuItemMoreMenu
            isActive={item.isAvailable}
            onEdit={() => {
              onClickEditMenuItem();
              setMenuOpen(false);
            }}
            onToggleAvailability={onToggleAvailability}
            onDelete={onClickDelete}
          />
        )}
      </td>
    </tr>
  );
};
