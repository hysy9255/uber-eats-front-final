import type { UserRole } from "../../types/userRole.type";

export type UserProfileDTO = {
  email: string;
  role: UserRole;
  name: string;
  phoneNumber: string;
  profileImgUrl: string | null;
};
