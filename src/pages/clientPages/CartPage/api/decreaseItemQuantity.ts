import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";

export const decreaseItemQuantity = async (
  token: string,
  dishId: string
): Promise<void> => {
  const res = await fetch(`${API_BASE_URL}/cart/items/${dishId}/decrease`, {
    method: "PATCH",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    const errorMsg = await res.json();
    throw new Error(errorMsg.message);
  }
};
