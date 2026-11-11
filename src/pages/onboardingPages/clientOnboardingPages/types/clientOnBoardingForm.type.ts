import type { AddressAlias } from "../../../../shared/types/addressAlias.type";

type ProfileImageState = {
  status: "unchanged" | "changed" | "removed";
  preview: string | null;
  file: File | null;
};

export interface ClientOnBoardingForm {
  step1: {
    email: string;
    verifiedEmail: string | null;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    profileImgUrl: ProfileImageState;
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
