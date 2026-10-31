import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { OrderStatus } from "../../types/orderStatus.enum";
import type { RestaurantOrderSummaryDTO } from "./restaurantOrderSummary.dto";

export const getRestaurantOrderSummaries = async (
  token: string,
  status?: OrderStatus
): Promise<RestaurantOrderSummaryDTO[]> => {
  const params = new URLSearchParams();
  if (status) params.set("status", status);
  const res = await fetch(
    `${API_BASE_URL}/restaurant/orders${
      params.toString() ? `?${params.toString()}` : ""
    }`,
    {
      method: "GET",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    }
  );

  if (!res.ok) {
    const errorData = await res.json();
    console.error("API Error:", errorData.message);
    throw new Error(errorData.message);
  }
  return await res.json();
};
