import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { DishCategoryDTO } from "./dishCategory.dto";

export const getDishCategories = async (
  restaurantId: string,
  token: string
): Promise<DishCategoryDTO[]> => {
  const res = await fetch(
    `${API_BASE_URL}/owner/restaurants/${restaurantId}/menus/categories`,
    {
      method: "GET",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    }
  );
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};
