import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { EditDishCategoryDTO } from "./editDishCategory.dto";

export const editDishCategory = async (
  restaurantId: string,
  categoryId: string,
  token: string,
  payload: EditDishCategoryDTO
): Promise<void> => {
  const res = await fetch(
    `${API_BASE_URL}/restaurants/${restaurantId}/menu/categories/${categoryId}`,
    {
      method: "PUT",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) throw new Error(await res.text());
};
