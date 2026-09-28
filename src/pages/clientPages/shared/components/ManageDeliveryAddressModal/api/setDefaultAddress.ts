import {
  API_BASE_URL,
  COMMON_HEADERS,
} from "../../../../../../shared/constants/baseUrl";

export const setDefaultAddress = async (
  token: string,
  deliveryAddressId: string
) => {
  const res = await fetch(
    `${API_BASE_URL}/delivery-addresses/${deliveryAddressId}/default`,
    {
      method: "PATCH",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    }
  );
  const data = await res.json().catch(() => null);

  if (!res.ok) {
    console.log("message:", data.message);
    throw new Error(data.error);
  }
};
