import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { DeliveryAddressDTO } from "./deliveryAddress.dto";

export const viewMyDeliveryAddresses = async (
  token: string
): Promise<DeliveryAddressDTO[]> => {
  const res = await fetch(`${API_BASE_URL}/delivery-addresses`, {
    method: "GET",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error("unauthorized");
  return await res.json();
};
