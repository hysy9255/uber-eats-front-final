import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { CreateDishCategoryDTO } from "./createDishCategory.dto";

export const createDishCategory = async (
  restaurantId: string,
  token: string,
  payload: CreateDishCategoryDTO
): Promise<void> => {
  const res = await fetch(
    `${API_BASE_URL}/restaurants/${restaurantId}/menu/categories`,
    {
      method: "POST",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    const errorData = await res.json();

    if (res.status === 409) {
      throw new Error(errorData.message);
    }

    throw new Error("Unexpected server error");
  }
};
