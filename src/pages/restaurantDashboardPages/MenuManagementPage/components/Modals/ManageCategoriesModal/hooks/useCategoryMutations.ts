import { getToken } from "../../../../../../../shared/utils/getToken";
import { useRestaurantDashboard } from "../../../../../shared/context/useRestaurantDashboard";
import { createDishCategory } from "../../../../api/category/createDishCategory/createDishCategory";
import { deleteDishCategory } from "../../../../api/category/deleteDishCategory";
import { editDishCategory } from "../../../../api/category/editDishCategory/editDishCategory";
import type { DishCategoryDTO } from "../../../../api/category/getDishCategories/dishCategory.dto";
import { useMenuManagement } from "../../../../context/useMenuManagement";
import type { AddCategoryForm } from "../types/add-category-form.types";
import type { EditCategoryForm } from "../types/edit-category-form.types";

export const useCategoryMutations = () => {
  const token = getToken();
  const { restaurantId } = useRestaurantDashboard();
  const {
    menuList: { loadCategories },
    successMessage: { setSuccessMessage },
  } = useMenuManagement();

  const addCategory = async (data: AddCategoryForm) => {
    try {
      if (!token) throw new Error("No Token!");
      if (!restaurantId) throw new Error("No Restaurant ID");
      await createDishCategory(restaurantId, token, {
        categoryName: data.categoryName,
      });
      loadCategories();
      setSuccessMessage({
        show: true,
        message: "Menu category added successfully!",
      });
    } catch (e) {
      console.error(e);

      if (e instanceof Error) {
        alert(e.message);
        return;
      }

      alert("Failed to add category.");
    }
  };

  const editCategory = async (data: EditCategoryForm) => {
    try {
      if (!token) throw new Error("No Token!");
      if (!restaurantId) throw new Error("No Restaurant ID");
      await editDishCategory(restaurantId, data.categoryId, token, {
        newCategoryName: data.newCategoryName,
      });

      loadCategories();
      setSuccessMessage({
        show: true,
        message: "Menu category edited successfully!",
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

  const deleteCategory = async (categoryToDelete: DishCategoryDTO) => {
    try {
      if (!token) throw new Error("No Token!");
      if (!restaurantId) throw new Error("No Restaurant ID");
      await deleteDishCategory(
        restaurantId,
        categoryToDelete.categoryId,
        token
      );
      loadCategories();
      setSuccessMessage({
        show: true,
        message: "Menu category deleted successfully!",
      });
    } catch (e) {
      console.error(e);

      if (e instanceof Error) {
        alert(e.message);
        return;
      }

      alert("Failed to delete category.");
    }
  };

  return { addCategory, editCategory, deleteCategory };
};
