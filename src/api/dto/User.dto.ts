import type { UserRole } from "../../shared/types/userRole.type";

export type UserDTO = {
  userId: string;
  role: UserRole;
  email: string;
  name: string;
  phoneNumber: string;
  profileImgUrl?: string;
};
