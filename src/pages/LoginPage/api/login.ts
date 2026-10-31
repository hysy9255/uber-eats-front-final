import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { LoginRequestDTO, LoginResponseDTO } from "./login.dto";

export const login = async (
  payload: LoginRequestDTO
): Promise<LoginResponseDTO> => {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: COMMON_HEADERS,
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const errorMsg = await res.json();
    throw new Error(errorMsg.message);
  }
  return await res.json();
};
