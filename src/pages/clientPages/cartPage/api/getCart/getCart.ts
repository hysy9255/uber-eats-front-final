import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { CartDTO } from "./cart.dto";

export const getCart = async (token: string): Promise<CartDTO> => {
  const res = await fetch(`${API_BASE_URL}/cart`, {
    method: "GET",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    const errorMsg = await res.json();
    throw new Error(errorMsg.message);
  }
  return await res.json();
};
