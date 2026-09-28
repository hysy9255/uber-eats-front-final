import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { UpdateRestaurantHoursDTO } from "./updateRestaurantHours.dto";

export const updateRestaurantHours = async (
  token: string,
  restaurantId: string,
  payload: UpdateRestaurantHoursDTO[]
) => {
  const res = await fetch(`${API_BASE_URL}/restaurants/${restaurantId}/hours`, {
    method: "PATCH",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await res.text());
};
