import type { AddressAliasType } from "../../../../../pages/Client/Shared/ManageDeliveryAddressModal/Components/AddAddress/constants/addressAlias.type";

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
  alias: AddressAliasType;
  customAlias: string | null;
};

export type RegisterClientDTO = {
  account: RegisterAccountDTO;
  deliveryAddress: RegisterDeliveryAddressDTO;
};
