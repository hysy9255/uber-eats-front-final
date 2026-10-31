import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { UpdateDishDTO } from "./updateDish.dto";

export const updateDish = async (
  token: string,
  restaurantId: string,
  dishId: string,
  payload: UpdateDishDTO
) => {
  const res = await fetch(
    `${API_BASE_URL}/restaurants/${restaurantId}/menu/dishes/${dishId}`,
    {
      method: "PATCH",
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
