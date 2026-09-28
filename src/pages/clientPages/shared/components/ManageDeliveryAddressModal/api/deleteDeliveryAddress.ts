import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";

export const deleteDeliveryAddress = async (
  token: string,
  addressId: string
) => {
  const res = await fetch(`${API_BASE_URL}/delivery-addresses/${addressId}`, {
    method: "DELETE",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }
};
