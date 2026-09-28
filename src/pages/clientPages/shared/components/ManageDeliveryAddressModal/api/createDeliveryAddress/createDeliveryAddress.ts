import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { CreateDeliveryAddressDTO } from "./createDeliveryAddress.dto";

export const addDeliveryAddress = async (
  token: string,
  payload: CreateDeliveryAddressDTO
) => {
  const res = await fetch(`${API_BASE_URL}/delivery-addresses`, {
    method: "POST",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => null);

  if (!res.ok) {
    console.log("message:", data.message);
    throw new Error(data.message);
  }
};
