import type { AddressAliasType } from "../../../../../pages/Client/Shared/ManageDeliveryAddressModal/Components/AddAddress/constants/addressAlias.type";

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
    alias: AddressAliasType;
    customAlias: string | null;
  };
}
