import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { RestaurantSummaryDTO } from "./restaurantSummary.dto";

export const getRestaurants = async (): Promise<RestaurantSummaryDTO[]> => {
  const res = await fetch(`${API_BASE_URL}/restaurants`, {
    method: "GET",
    headers: COMMON_HEADERS,
  });

  if (!res.ok) throw new Error(await res.text());
  return await res.json();
};
