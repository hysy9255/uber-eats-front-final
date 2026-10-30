import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { AddToCartDTO } from "./addToCart.dto";

export const addToCart = async (
  token: string,
  payload: AddToCartDTO
): Promise<void> => {
  const res = await fetch(`${API_BASE_URL}/cart/items`, {
    method: "POST",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const errorMsg = await res.json();
    throw new Error(errorMsg.message);
  }
};
