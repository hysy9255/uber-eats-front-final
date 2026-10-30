import type { AddressAlias } from "../../../../shared/types/addressAlias.type";

export interface ClientOnBoardingForm {
  step1: {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    profileImgUrl: string | null;
  };
  step2: {
    streetAddress: string;
    apt: string;
    city: string;
    state: string;
    zip: string;
    alias: AddressAlias;
    customAlias: string | null;
  };
}
