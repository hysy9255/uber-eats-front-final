import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";

export const deleteDishCategory = async (
  restaurantId: string,
  categoryId: string,
  token: string
): Promise<void> => {
  const res = await fetch(
    `${API_BASE_URL}/restaurants/${restaurantId}/menu/categories/${categoryId}`,
    {
      method: "DELETE",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    }
  );

  if (!res.ok) throw new Error(await res.text());
};
