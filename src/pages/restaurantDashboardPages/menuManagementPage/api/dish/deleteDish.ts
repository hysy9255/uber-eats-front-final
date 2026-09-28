import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";

export const deleteDish = async (
  token: string,
  restaurantId: string,
  dishId: string
) => {
  const res = await fetch(
    `${API_BASE_URL}/restaurants/${restaurantId}/menu/dishes/${dishId}`,
    {
      method: "DELETE",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    }
  );
  if (!res.ok) throw new Error(await res.text());
};
