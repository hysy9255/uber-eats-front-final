import type { AddressAlias } from "@/shared/types/addressAlias.type";

export interface EditDeliveryAddressForm {
  streetAddress: string;
  apt: string | null;
  city: string;
  state: string;
  zip: string;
  alias: AddressAlias;
  customAlias: string | null;
}
