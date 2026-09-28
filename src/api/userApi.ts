import { API_BASE_URL, COMMON_HEADERS } from "../shared/constants/baseUrl";
import type { UpdatePasswordDTO } from "./dto/UpdatePassword.dto";
import type { UpdateUserDTO } from "./dto/UpdateUser.dto";

export const updateMe = async (token: string, payload: UpdateUserDTO) => {
  try {
    const res = await fetch(`${API_BASE_URL}/me`, {
      method: "PATCH",
      headers: {
        ...COMMON_HEADERS,
        "jwt-token": token,
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      console.log("message:", data.message);
      throw new Error(data.error);
    }

    alert("정보가 수정되었습니다");
  } catch (e) {
    alert(e);
  }
};

export const updatePassword = async (
  token: string,
  payload: UpdatePasswordDTO
) => {
  try {
    const res = await fetch(`${API_BASE_URL}/password`, {
      method: "PATCH",
      headers: { ...COMMON_HEADERS, "jwt-token": token },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      console.log("message:", data.message);
      throw new Error(data.message);
    }
    alert("비밀번호가 변경되었습니다");
  } catch (e) {
    alert(e);
  }
};
