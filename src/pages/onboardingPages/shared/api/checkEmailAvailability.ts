import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type {
  checkEmailAvailabilityQueryDTO,
  checkEmailAvailabilityResponseDTO,
} from "./checkEmailAvailability.dto";

export const checkEmailAvailability = async ({
  email,
}: checkEmailAvailabilityQueryDTO): Promise<checkEmailAvailabilityResponseDTO> => {
  const res = await fetch(
    `${API_BASE_URL}/users/email-availability?email=${email}`,
    {
      method: "GET",
      headers: COMMON_HEADERS,
    }
  );
  if (!res.ok) throw new Error(await res.text());
  return await res.json();
};
