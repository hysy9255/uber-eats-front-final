import type { CreateDishDTO } from "./createDish.dto";
import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";

export const createDish = async (
  token: string,
  restaurantId: string,
  categoryId: string,
  payload: CreateDishDTO
) => {
  const res = await fetch(
    `${API_BASE_URL}/restaurants/${restaurantId}/menu/categories/${categoryId}/dishes`,
    {
      method: "POST",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload),
    }
  );
  if (!res.ok) throw new Error(await res.text());
};
