import type { UserRole } from "../new/shared/constants/userRole.enum";

export type UserDTO = {
  userId: string;
  role: UserRole;
  email: string;
  name: string;
  phoneNumber: string;
  profileImgUrl?: string;
};
