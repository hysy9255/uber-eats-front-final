import { API_BASE_URL, COMMON_HEADERS } from "../../constants/baseUrl";
import type { UserProfileDTO } from "./userProfile.dto";

export const getMyProfile = async (token: string): Promise<UserProfileDTO> => {
  const res = await fetch(`${API_BASE_URL}/users/profile`, {
    method: "GET",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("unauthorized");
  return await res.json();
};
