import { getToken } from "@/shared/utils/getToken";
import { useMenuManagement } from "../../../../../context/useMenuManagement";
import { deleteDish } from "../../../../../api/dish/deleteDish";
import { useRestaurantDashboard } from "../../../../../../shared/context/useRestaurantDashboard";
import { makeDishUnavailable } from "../../../../../api/dish/markDishUnavailable";
import { makeDishAvailable } from "../../../../../api/dish/markDishAvailable";
import type { OwnerDishSummaryDTO } from "../../../../../api/dish/getOwnerDishSummaries/ownerDishSummary.dto";
import type { EditMenuForm } from "../../../../Modals/EditMenuModal/edit-menu-form.types";
import { resolveDishImgUrl } from "../../../../shared/utils/resolveDishImgUrl";
import { updateDish } from "../../../../../api/dish/updateDish/updateDish";
import { createDish } from "../../../../../api/dish/createDish/createDish";
import type { AddMenuItemForm } from "../../../../Modals/AddMenuIModal/add-menu-item-form.types";

export const useMenuMutation = () => {
  const { restaurantId } = useRestaurantDashboard();
  const token = getToken();
  const {
    menuList: { loadMenu },
    successMessage: { setSuccessMessage },
  } = useMenuManagement();

  const addMenuItem = async (data: AddMenuItemForm) => {
    try {
      if (!token) throw new Error("No Token");
      if (!restaurantId) throw new Error("No Restaurant ID");

      const dishImgUrl = await resolveDishImgUrl(data.dishImage);

      await createDish(token, restaurantId, data.category, {
        dishName: data.dishName,
        price: Number(data.price),
        description: data.description,
        dishImgUrl: dishImgUrl ?? null,
      });
      loadMenu();
      setSuccessMessage({
        show: true,
        message: "Menu item added successfully!",
      });
    } catch (e) {
      console.error(e);

      if (e instanceof Error) {
        alert(e.message);
        return;
      }

      alert("Failed to edit category.");
    }
  };

  const deleteMenuItem = async (item: OwnerDishSummaryDTO) => {
    try {
      if (!token) throw new Error("No Token");
      if (!restaurantId) throw new Error("No Restaurant ID");
      await deleteDish(token, restaurantId, item.dishId);
      loadMenu();
      setSuccessMessage({
        show: true,
        message: "Menu item deleted successfully!",
      });
    } catch (e) {
      console.error(e);

      if (e instanceof Error) {
        alert(e.message);
        return;
      }

      alert("Failed to delete menu.");
    }
  };

  const toggleMenuItemAvailability = async (item: OwnerDishSummaryDTO) => {
    try {
      if (!token) throw new Error("No Token");
      if (!restaurantId) throw new Error("No Restaurant ID");
      if (item.isAvailable) {
        await makeDishUnavailable(token, restaurantId, item.dishId);
      } else {
        await makeDishAvailable(token, restaurantId, item.dishId);
      }
      setSuccessMessage({
        show: true,
        message: "Menu item availability changed successfully!",
      });
      loadMenu();
    } catch (e) {
      console.error(e);

      if (e instanceof Error) {
        alert(e.message);
        return;
      }

      alert("Failed to change menu availability.");
    }
  };

  const editMenu = async (data: EditMenuForm) => {
    try {
      if (!token) throw new Error("No Token");
      if (!restaurantId) throw new Error("No Restaurant ID");

      const dishImgUrl = await resolveDishImgUrl(data.dishImage);

      await updateDish(token, restaurantId, data.dishId, {
        dishName: data.dishName,
        price: Number(data.price),
        description: data.description,
        dishImgUrl: dishImgUrl,
      });
      loadMenu();
      setSuccessMessage({
        show: true,
        message: "Menu item edited successfully!",
      });
    } catch (e) {
      console.error(e);

      if (e instanceof Error) {
        alert(e.message);
        return;
      }

      alert("Failed to edit menu.");
    }
  };

  return {
    addMenuItem,
    deleteMenuItem,
    toggleMenuItemAvailability,
    editMenu,
  };
};
