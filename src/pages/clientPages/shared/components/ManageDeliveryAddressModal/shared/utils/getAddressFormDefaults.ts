import { AddressAlias } from "@/shared/types/addressAlias.type";
import type { DeliveryAddressForm } from "../types/deliveryAddressForm.type";
import type { DeliveryAddressDTO } from "../../../../api/deliveryAddress.dto";

export const getAddressFormDefaults = (
  address?: DeliveryAddressDTO
): DeliveryAddressForm => {
  if (!address) {
    return {
      streetAddress: "",
      apt: "",
      city: "",
      state: "",
      zip: "",
      alias: AddressAlias.home,
      customAlias: null,
    };
  }

  const isDefaultAlias = address.alias === "home" || address.alias === "work";

  return {
    streetAddress: address.streetAddress,
    apt: address.apt,
    city: address.city,
    state: address.state,
    zip: address.zip,
    alias: isDefaultAlias
      ? (address.alias as AddressAlias)
      : AddressAlias.other,
    customAlias: isDefaultAlias ? null : address.alias,
  };
};
