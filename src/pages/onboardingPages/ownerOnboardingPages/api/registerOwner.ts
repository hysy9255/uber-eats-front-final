import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { RegisterOwnerDTO } from "./registerOwner.dto";

export const registerOwner = async (payload: RegisterOwnerDTO) => {
  const res = await fetch(`${API_BASE_URL}/registration/owner`, {
    method: "POST",
    headers: COMMON_HEADERS,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await res.text());
};
