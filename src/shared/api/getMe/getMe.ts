import { API_BASE_URL, COMMON_HEADERS } from "../../constants/baseUrl";
import type { UserRole } from "../../types/userRole.type";

export const getMe = async (
  accessToken: string
): Promise<{ role: UserRole }> => {
  const res = await fetch(`${API_BASE_URL}/users/me`, {
    method: "GET",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) throw new Error("unauthorized");
  return await res.json();
};
