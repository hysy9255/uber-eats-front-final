import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { ClientOrderView } from "../../types/clientOrderView.enum";
import type {
  // ClientOrderSummaryDTO,
  NewClientOrderSummaryDTO,
} from "./clientOrderSummary.dto";

export const getClientOrderSummaries = async (
  token: string,
  type: ClientOrderView
): Promise<NewClientOrderSummaryDTO[]> => {
  const res = await fetch(`${API_BASE_URL}/client/orders?type=${type}`, {
    method: "GET",
    headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(await res.text());
  return await res.json();
};
