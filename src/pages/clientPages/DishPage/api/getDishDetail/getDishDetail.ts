import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { DishDetailDTO } from "./dishDetail.dto";

export const getDishDetail = async (
  restaurantId: string,
  dishId: string
): Promise<DishDetailDTO> => {
  const res = await fetch(
    `${API_BASE_URL}/restaurants/${restaurantId}/menus/${dishId}`,
    {
      method: "GET",
      headers: COMMON_HEADERS,
    }
  );

  if (!res.ok) {
    const errorMsg = await res.json();
    throw new Error(errorMsg.message);
  }

  return res.json();
};
