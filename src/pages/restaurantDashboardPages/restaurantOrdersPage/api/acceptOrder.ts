import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";

export const acceptOrder = async (token: string, orderId: string) => {
  const res = await fetch(`${API_BASE_URL}/orders/${orderId}/accept`, {
    method: "PATCH",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(await res.text());
};
