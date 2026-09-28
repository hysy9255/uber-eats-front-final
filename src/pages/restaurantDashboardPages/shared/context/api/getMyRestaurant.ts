import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";

export const getMyRestaurant = async (
  token: string
): Promise<{ restaurantId: string }> => {
  const res = await fetch(`${API_BASE_URL}/me/restaurant`, {
    method: "GET",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(await res.text());
  return await res.json();
};
