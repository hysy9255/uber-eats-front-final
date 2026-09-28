import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { RegisterClientDTO } from "./registerClient.dto";

export const registerClient = async (payload: RegisterClientDTO) => {
  const res = await fetch(`${API_BASE_URL}/registration/client`, {
    method: "POST",
    headers: COMMON_HEADERS,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await res.text());
};
