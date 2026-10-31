import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";

export const makeDishAvailable = async (
  token: string,
  restaurantId: string,
  dishId: string
) => {
  const res = await fetch(
    `${API_BASE_URL}/restaurants/${restaurantId}/menu/dishes/${dishId}/available`,
    {
      method: "PATCH",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    }
  );
  if (!res.ok) throw new Error(await res.text());
};
