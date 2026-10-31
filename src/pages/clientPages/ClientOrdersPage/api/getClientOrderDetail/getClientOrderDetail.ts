import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { ClientOrderDetailDTO } from "./clientOrderDetail.dto";

export const getClientOrderDetail = async (
  token: string,
  orderId: string
): Promise<ClientOrderDetailDTO> => {
  const res = await fetch(
    `${API_BASE_URL}/client/orders/detail?orderId=${orderId}`,
    {
      method: "GET",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    }
  );
  if (!res.ok) throw new Error(await res.text());
  return await res.json();
};
