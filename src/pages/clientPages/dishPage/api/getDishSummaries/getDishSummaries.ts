import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { DishSummaryDTO } from "./dishSummary.dto";

export const getDishSummaries = async (
  restaurantId: string
): Promise<DishSummaryDTO[]> => {
  const res = await fetch(`${API_BASE_URL}/restaurants/${restaurantId}/menus`, {
    method: "GET",
    headers: {
      ...COMMON_HEADERS,
    },
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};
