import type { AddressAlias } from "../../../../../../../shared/types/addressAlias.type";

export class UpdateDeliveryAddressDTO {
  streetAddress: string;
  apt: string | null;
  city: string;
  state: string;
  zip: string;
  alias: AddressAlias;
  customAlias: string | null;

  constructor(data: {
    streetAddress: string;
    apt: string | null;
    city: string;
    state: string;
    zip: string;
    alias: AddressAlias;
    customAlias: string | null;
  }) {
    this.streetAddress = data.streetAddress;
    this.apt = data.apt;
    this.city = data.city;
    this.state = data.state;
    this.zip = data.zip;
    this.alias = data.alias;
    this.customAlias = data.customAlias;
  }
}
