import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { RestaurantRevenueDTO } from "./RestaurantRevenue.dto";

export const getRestaurantRevenue = async (
  token: string,
  restaurantId: string,
  startDate: Date,
  endDate: Date
): Promise<RestaurantRevenueDTO> => {
  const res = await fetch(
    `${API_BASE_URL}/owner/restaurants/${restaurantId}/overview/revenue?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`,
    {
      method: "GET",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    }
  );

  if (!res.ok) throw new Error(await res.text());
  return await res.json();
};
