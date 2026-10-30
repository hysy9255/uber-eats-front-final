import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { UpdateRestaurantSettingDTO } from "./updateRestaurantSetting.dto";

export const updateRestaurantSetting = async (
  token: string,
  restaurantId: string,
  payload: UpdateRestaurantSettingDTO
): Promise<void> => {
  const res = await fetch(
    `${API_BASE_URL}/restaurants/${restaurantId}/settings`,
    {
      method: "PATCH",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    console.log("message:", data.message);
    throw new Error(data.message);
  }
};
