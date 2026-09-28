import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";

export const increaseItemQuantity = async (
  token: string,
  dishId: string
): Promise<void> => {
  const res = await fetch(`${API_BASE_URL}/cart/items/${dishId}/increase`, {
    method: "PATCH",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    const errorMsg = await res.json();
    throw new Error(errorMsg.message);
  }
};
