import type { UserRole } from "../../shared/types/userRole.type";

export type CreateUserDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profileImgUrl?: string;
  role: UserRole;
};
