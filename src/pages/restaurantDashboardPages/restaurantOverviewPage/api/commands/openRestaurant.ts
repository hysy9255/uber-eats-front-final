import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";

export const openRestaurant = async (token: string, restaurantId: string) => {
  const res = await fetch(`${API_BASE_URL}/restaurants/${restaurantId}/open`, {
    method: "POST",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error(await res.text());
};
