import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { OwnerDishSummaryDTO } from "./ownerDishSummary.dto";

export const getOwnerDishSummaries = async (
  restaurantId: string,
  token: string
): Promise<OwnerDishSummaryDTO[]> => {
  const res = await fetch(
    `${API_BASE_URL}/owner/restaurants/${restaurantId}/menus`,
    {
      method: "GET",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    }
  );
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};
