import type { AddressAlias } from "../../../../shared/types/addressAlias.type";

type RegisterAccountDTO = {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  profileImage: string | null;
};

type RegisterDeliveryAddressDTO = {
  streetAddress: string;
  city: string;
  state: string;
  apt: string | null;
  zip: string;
  alias: AddressAlias;
  customAlias: string | null;
};

export type RegisterClientDTO = {
  account: RegisterAccountDTO;
  deliveryAddress: RegisterDeliveryAddressDTO;
};
