import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { PlaceOrderDTO } from "./placeOrder.dto";

export const placeOrder = async (token: string, payload: PlaceOrderDTO) => {
  const res = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await res.text());
};
