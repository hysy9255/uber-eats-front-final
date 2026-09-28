import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { UpdateDeliveryAddressDTO } from "./updateDeliveryAddress.dto";

export const updateDeliveryAddress = async (
  token: string,
  payload: UpdateDeliveryAddressDTO,
  addressId: string
) => {
  const res = await fetch(`${API_BASE_URL}/delivery-addresses/${addressId}`, {
    method: "PUT",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => null);

  if (!res.ok) {
    console.log("message:", data.message);
    throw new Error(data.message);
  }
};
