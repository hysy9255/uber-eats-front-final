import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { RestaurantOrderDetailDTO } from "./restaurantOrderDetail.dto";

export const getRestaurantOrderDetail = async (
  token: string,
  orderId: string
): Promise<RestaurantOrderDetailDTO> => {
  const res = await fetch(
    `${API_BASE_URL}/restaurant/orders/detail?orderId=${orderId}`,
    {
      method: "GET",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    }
  );
  if (!res.ok) throw new Error(await res.text());
  return await res.json();
};
